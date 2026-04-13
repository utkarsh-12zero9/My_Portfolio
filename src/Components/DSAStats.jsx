import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaCalendarAlt, FaFire, FaChartLine, FaCheckCircle, FaAward } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiCodeforces } from 'react-icons/si';

const DSAStats = ({ codolioData }) => {
    const [activeGraphPlatform, setActiveGraphPlatform] = useState('leetcode');

    // --- DATA PROCESSING HOOKS ---
    const platformStats = useMemo(() => codolioData?.platformProfiles?.platformProfiles || [], [codolioData]);

    const aggregatedData = useMemo(() => {
        if (!platformStats.length) return null;

        // 1. Total Questions
        const totalQuestions = platformStats.reduce((sum, p) => sum + (p.totalQuestionStats?.totalQuestionCounts || 0), 0);

        // 2. Active Days (Merged Calendar)
        const fullCalendar = {};
        platformStats.forEach(p => {
            const cal = p.dailyActivityStatsResponse?.submissionCalendar || {};
            Object.keys(cal).forEach(ts => {
                fullCalendar[ts] = (fullCalendar[ts] || 0) + cal[ts];
            });
        });
        const totalActiveDays = Object.keys(fullCalendar).length;

        // 3. Contests Combined
        const allContests = [];
        platformStats.forEach(p => {
            const contests = p.contestActivityStats?.contestActivityList || [];
            contests.forEach(c => allContests.push({ ...c, platform: p.platform }));
        });
        const totalContests = allContests.length;

        // 4. Difficulty Breakdown (LeetCode)
        const leetcodeProfile = platformStats.find(p => p.platform === 'leetcode') || {};
        const lcStats = leetcodeProfile.totalQuestionStats || {};
        const diffStats = {
            easy: lcStats.easyQuestionCounts || 0,
            medium: lcStats.mediumQuestionCounts || 0,
            hard: lcStats.hardQuestionCounts || 0,
            total: lcStats.totalQuestionCounts || 0
        };

        // 5. Topic Analysis (Merged)
        const topics = {};
        platformStats.forEach(p => {
            const dist = p.topicAnalysisStats?.topicWiseDistribution || {};
            Object.entries(dist).forEach(([topic, count]) => {
                topics[topic] = (topics[topic] || 0) + count;
            });
        });
        const sortedTopics = Object.entries(topics)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);

        // 6. Rating Graph Data (Filtered by Active Platform)
        const activePlatformHistory = allContests
            .filter(c => c.platform === activeGraphPlatform)
            .sort((a, b) => a.contestDate - b.contestDate)
            .map(c => ({
                rating: c.rating,
                date: new Date(c.contestDate * 1000).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
                platform: c.platform,
                name: c.contestName
            }))
            .slice(-10); // Show last 10 contests

        // 7. Badges
        const allBadges = [];
        platformStats.forEach(p => {
            const badges = p.badgeStats?.badgeList || [];
            badges.forEach(b => allBadges.push(b));
        });

        return {
            totalQuestions,
            totalActiveDays,
            totalContests,
            diffStats,
            sortedTopics,
            ratingHistory: activePlatformHistory,
            allBadges,
            fullCalendar,
            platforms: platformStats
        };
    }, [platformStats, activeGraphPlatform]);

    if (!aggregatedData) return null;

    return (
        <div className="space-y-12 px-12">
            {/* Header / Intro */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                        <FaCode className="text-3xl text-[#00D4B4]" />
                    </div>
                    <div>
                        <h3 className="text-2xl text-white font-['Montserrat'] font-bold">DSA
                            <span className="text-[#00D4B4]"> Dashboard</span></h3>
                        <p className="text-gray-500 text-sm">Real-time competitive programming analytics</p>
                    </div>
                </div>
            </div>

            {/* TOP ROW: Summary Stats & Heatmap */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Score Cards */}
                <div className="lg:col-span-4 h-full flex flex-col gap-6">
                    <motion.div
                        className="flex-1 bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] p-8 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center text-center group hover:border-[#00D4B4]/20 transition-colors"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Total Questions</p>
                        <h4 className="text-7xl font-bold text-white font-['Montserrat'] group-hover:text-[#00D4B4] transition-colors">
                            {aggregatedData.totalQuestions}
                        </h4>
                    </motion.div>
                    <motion.div
                        className="flex-1 bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] p-8 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center text-center group hover:border-[#0092ff]/20 transition-colors"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Total Active Days</p>
                        <h4 className="text-7xl font-bold text-white font-['Montserrat'] group-hover:text-[#0092ff] transition-colors">
                            {aggregatedData.totalActiveDays}
                        </h4>
                    </motion.div>
                </div>

                {/* Heatmap Section */}
                <motion.div
                    className="lg:col-span-8 bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h4 className="text-xl font-bold text-white font-['Montserrat']">Consistency Heatmap</h4>
                            <p className="text-gray-500 text-xs mt-1 lowercase">daily submissions over the past months</p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>Less</span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className={`w-3 h-3 rounded-sm ${i === 1 ? 'bg-gray-800' : i === 2 ? 'bg-[#00D4B4]/20' : i === 3 ? 'bg-[#00D4B4]/40' : i === 4 ? 'bg-[#00D4B4]/70' : 'bg-[#00D4B4]'}`} />
                                ))}
                            </div>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="flex-1 flex overflow-x-auto pb-4 custom-scrollbar gap-8">
                        {(() => {
                            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                            const now = new Date();
                            const monthBlocks = [];

                            for (let i = 8; i >= 0; i--) { // Show last 9 months for better fits
                                const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - i, 1));
                                const monthName = months[d.getUTCMonth()];
                                const year = d.getUTCFullYear();

                                // Days in this month
                                const daysInMonth = new Date(year, d.getUTCMonth() + 1, 0).getDate();
                                const startDay = d.getUTCDay(); // 0 (Sun) to 6 (Sat)

                                const weeks = [];
                                let currentWeek = Array(7).fill(null);

                                // Fill first week padding
                                // Note: We align days 0-6 (Sun-Sat)
                                for (let day = 1; day <= daysInMonth; day++) {
                                    const date = new Date(Date.UTC(year, d.getUTCMonth(), day));
                                    const dayOfWeek = date.getUTCDay();
                                    const ts = Math.floor(date.getTime() / 1000).toString();
                                    const count = aggregatedData.fullCalendar[ts] || 0;

                                    let intensity = 0;
                                    if (count > 0) intensity = 1;
                                    if (count > 2) intensity = 2;
                                    if (count > 5) intensity = 3;
                                    if (count > 10) intensity = 4;

                                    currentWeek[dayOfWeek] = { count, intensity, date: date.toUTCString().split(' ').slice(0, 4).join(' ') };

                                    if (dayOfWeek === 6 || day === daysInMonth) {
                                        weeks.push(currentWeek);
                                        currentWeek = Array(7).fill(null);
                                    }
                                }

                                monthBlocks.push({ monthName, weeks });
                            }

                            return monthBlocks.map((block, i) => (
                                <div key={i} className="flex flex-col gap-3 shrink-0">
                                    <div className="flex gap-1">
                                        {block.weeks.map((week, j) => (
                                            <div key={j} className="flex flex-col gap-1">
                                                {week.map((day, k) => {
                                                    if (!day) return <div key={k} className="w-3.5 h-3.5 rounded-[3px] bg-transparent" />;
                                                    const colors = ['bg-gray-900/40', 'bg-[#00D4B4]/20', 'bg-[#00D4B4]/40', 'bg-[#00D4B4]/70', 'bg-[#00D4B4]'];
                                                    return (
                                                        <div
                                                            key={k}
                                                            className={`w-3.5 h-3.5 rounded-[3px] ${colors[day.intensity]} transition-all duration-300 hover:scale-125 cursor-help border border-white/5 hover:border-[#00D4B4]/50`}
                                                            title={`${day.count} submissons on ${day.date}`}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-mono text-center border-t border-white/5 pt-2">{block.monthName}</span>
                                </div>
                            ));
                        })()}
                    </div>
                </motion.div>
            </div>

            {/* MIDDLE ROW: Contests & Rating Graph */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Total Contests Overview */}
                <motion.div
                    className="bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h4 className="text-2xl font-bold text-white font-['Montserrat'] mb-8">Contest Overview</h4>
                    <div className="flex items-center gap-12">
                        <div className="text-center">
                            <span className="text-8xl font-black text-[#00D4B4] font-['Montserrat'] leading-none">
                                {aggregatedData.totalContests}
                            </span>
                            <p className="text-gray-500 uppercase tracking-tighter text-sm mt-2">Contests Done</p>
                        </div>
                        <div className="flex-1 space-y-4">
                            {aggregatedData.platforms.map((p, idx) => {
                                const count = p.contestActivityStats?.contestActivityList?.length || 0;
                                if (count === 0) return null;
                                const isActive = activeGraphPlatform === p.platform;
                                const hasContests = p.contestActivityStats?.contestActivityList?.length > 0;

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => hasContests && setActiveGraphPlatform(p.platform)}
                                        className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${isActive
                                            ? 'bg-[#00D4B4]/10 border-[#00D4B4] shadow-[0_0_20px_rgba(0,212,180,0.1)]'
                                            : hasContests
                                                ? 'bg-white/[0.03] border-white/5 hover:border-white/20 cursor-pointer'
                                                : 'bg-white/[0.01] border-transparent opacity-50 cursor-not-allowed'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {p.platform === 'leetcode' && <SiLeetcode className={isActive ? 'text-[#00D4B4]' : 'text-orange-400'} />}
                                            {p.platform === 'codechef' && <SiCodechef className={isActive ? 'text-[#00D4B4]' : 'text-amber-700'} />}
                                            {p.platform === 'codeforces' && <SiCodeforces className={isActive ? 'text-[#00D4B4]' : 'text-blue-500'} />}
                                            <span className={`font-bold capitalize text-sm transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}>{p.platform}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`font-mono font-bold text-lg ${isActive ? 'text-[#00D4B4]' : 'text-white'}`}>{count}</span>
                                            {isActive && <motion.div layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-[#00D4B4]" />}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Rating Graph (SVG) */}
                <motion.div
                    className="bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/5 flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex items-start justify-between mb-8">
                        <div>
                            <h4 className="text-2xl font-bold text-white font-['Montserrat']">Rating History</h4>
                            <p className="text-gray-500 text-sm mt-1">performance across last 10 contests</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center gap-1.5 text-xs transition-colors ${activeGraphPlatform === 'leetcode' ? 'text-[#00D4B4]' : 'text-gray-500'}`}>
                                <div className={`w-2 h-2 rounded-full ${activeGraphPlatform === 'leetcode' ? 'bg-[#00D4B4]' : 'bg-gray-800'}`} /> LeetCode
                            </div>
                            <div className={`flex items-center gap-1.5 text-xs transition-colors ${activeGraphPlatform === 'codechef' ? 'text-[#00D4B4]' : 'text-gray-500'}`}>
                                <div className={`w-2 h-2 rounded-full ${activeGraphPlatform === 'codechef' ? 'bg-[#00D4B4]' : 'bg-gray-800'}`} /> CodeChef
                            </div>
                            <div className={`flex items-center gap-1.5 text-xs transition-colors ${activeGraphPlatform === 'codeforces' ? 'text-[#00D4B4]' : 'text-gray-500'}`}>
                                <div className={`w-2 h-2 rounded-full ${activeGraphPlatform === 'codeforces' ? 'bg-[#00D4B4]' : 'bg-gray-800'}`} /> Codeforces
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex items-center justify-center">
                        {aggregatedData.ratingHistory.length > 1 ? (
                            <svg className="w-full h-48 overflow-visible" viewBox="0 0 1000 200">
                                {/* SVG PATH GENERATION LOGIC */}
                                {(() => {
                                    const ratings = aggregatedData.ratingHistory.map(h => h.rating);
                                    let min = Math.min(...ratings);
                                    let max = Math.max(...ratings);

                                    // Add some padding to the range
                                    const padding = (max - min) * 0.2 || 100;
                                    min = Math.max(0, min - padding);
                                    max = max + padding;

                                    const range = max - min;
                                    const points = aggregatedData.ratingHistory.map((h, i) => {
                                        const x = (i / (aggregatedData.ratingHistory.length - 1)) * 1000;
                                        const y = 200 - ((h.rating - min) / range) * 160;
                                        return { x, y, rating: h.rating, date: h.date };
                                    });

                                    const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
                                    const areaData = `${pathData} L 1000 200 L 0 200 Z`;

                                    return (
                                        <>
                                            {/* Area Fill */}
                                            <path d={areaData} fill="url(#gradient)" opacity="0.1" />
                                            <defs>
                                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#00D4B4" />
                                                    <stop offset="100%" stopColor="transparent" />
                                                </linearGradient>
                                            </defs>

                                            {/* Line */}
                                            <motion.path
                                                key={activeGraphPlatform}
                                                d={pathData}
                                                fill="transparent"
                                                stroke="#00D4B4"
                                                strokeWidth="4"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 1, ease: "easeInOut" }}
                                            />

                                            {/* Points */}
                                            {points.map((p, i) => (
                                                <g key={i}>
                                                    <circle cx={p.x} cy={p.y} r="5" fill="#00D4B4" />
                                                    <text x={p.x} y={p.y - 15} textAnchor="middle" fill="#9ca3af" fontSize="10" className="font-mono">{p.rating}</text>
                                                    <text x={p.x} y={200} textAnchor="middle" fill="#4b5563" fontSize="10" className="font-mono">{p.date}</text>
                                                </g>
                                            ))}
                                        </>
                                    );
                                })()}
                            </svg>
                        ) : (
                            <div className="h-48 flex flex-col items-center justify-center text-gray-600 border border-dashed border-white/5 rounded-3xl w-full">
                                <FaChartLine className="text-3xl mb-2 opacity-20" />
                                <p className="text-sm">Not enough contest history for {activeGraphPlatform}</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* LOWER ROW: Topic Analysis & Progress Donuts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Topic Analysis Bar Chart */}
                <motion.div
                    className="lg:col-span-8 bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h4 className="text-2xl font-bold text-white font-['Montserrat'] mb-8">DSA Topic Analysis</h4>
                    <div className="space-y-4">
                        {aggregatedData.sortedTopics.map(([topic, count], idx) => {
                            const maxCount = aggregatedData.sortedTopics[0][1];
                            const width = (count / maxCount) * 100;
                            return (
                                <div key={idx} className="space-y-1.5 group">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-gray-400 group-hover:text-white transition-colors uppercase font-bold tracking-tighter">{topic}</span>
                                        <span className="text-[#00D4B4] font-mono group-hover:scale-110 transition-transform">{count}</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-blue-600 to-[#00D4B4]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${width}%` }}
                                            transition={{ duration: 0.8, delay: idx * 0.05 }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Progress Donuts Column */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <motion.div
                        className="bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center flex-1"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold text-white font-['Montserrat'] mb-6">Leetcode Breakdown</h4>
                        <div className="relative mb-6">
                            <svg className="w-36 h-36 -rotate-90">
                                <circle cx="72" cy="72" r="66" stroke="#1f2937" strokeWidth="10" fill="transparent" />
                                <circle
                                    cx="72" cy="72" r="66"
                                    stroke="#00D4B4" strokeWidth="10" fill="transparent"
                                    strokeDasharray="414.7"
                                    strokeDashoffset={414.7 - (414.7 * (aggregatedData.diffStats.easy / aggregatedData.diffStats.total))}
                                    strokeLinecap="round"
                                />
                                <circle
                                    cx="72" cy="72" r="54"
                                    stroke="#eab308" strokeWidth="10" fill="transparent"
                                    strokeDasharray="339.3"
                                    strokeDashoffset={339.3 - (339.3 * (aggregatedData.diffStats.medium / aggregatedData.diffStats.total))}
                                    strokeLinecap="round"
                                />
                                <circle
                                    cx="72" cy="72" r="42"
                                    stroke="#ef4444" strokeWidth="10" fill="transparent"
                                    strokeDasharray="263.9"
                                    strokeDashoffset={263.9 - (263.9 * (aggregatedData.diffStats.hard / aggregatedData.diffStats.total))}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-bold text-white">{aggregatedData.diffStats.total}</span>
                                <span className="text-[10px] text-gray-500 uppercase">Solved</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 w-full text-center">
                            <div className="bg-white/[0.02] p-2 rounded-xl border border-white/5">
                                <div className="text-[#00D4B4] font-bold text-base">{aggregatedData.diffStats.easy}</div>
                                <div className="text-[9px] text-gray-500 uppercase font-bold">Easy</div>
                            </div>
                            <div className="bg-white/[0.02] p-2 rounded-xl border border-white/5">
                                <div className="text-yellow-500 font-bold text-base">{aggregatedData.diffStats.medium}</div>
                                <div className="text-[9px] text-gray-500 uppercase font-bold">Medium</div>
                            </div>
                            <div className="bg-white/[0.02] p-2 rounded-xl border border-white/5">
                                <div className="text-red-500 font-bold text-base">{aggregatedData.diffStats.hard}</div>
                                <div className="text-[9px] text-gray-500 uppercase font-bold">Hard</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-[#0a0a0a] p-6 rounded-[2.5rem] border border-white/5 flex flex-col items-center flex-1"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-base font-bold text-white font-['Montserrat'] mb-4 flex items-center gap-2">
                            <FaAward className="text-yellow-500" /> Recent Awards
                        </h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            {aggregatedData.allBadges.slice(0, 6).map((badge, idx) => (
                                <motion.div
                                    key={idx}
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group hover:scale-110 transition-transform"
                                    title={badge.name}
                                >
                                    <img src={badge.icon} alt={badge.name} className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* BOTTOM: PLATFORM RANKINGS GRID */}
            <div>
                <h4 className="text-2xl font-bold text-white font-['Montserrat'] mb-8 text-center uppercase tracking-widest">Platform Rankings</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aggregatedData.platforms.map((p, idx) => {
                        const user = p.userStats || {};
                        const colors = {
                            leetcode: 'border-orange-400/20 text-orange-400',
                            codechef: 'border-amber-700/20 text-amber-700',
                            codeforces: 'border-blue-500/20 text-blue-500'
                        }[p.platform] || 'border-white/20';

                        const icon = {
                            leetcode: <SiLeetcode />,
                            codechef: <SiCodechef />,
                            codeforces: <SiCodeforces />
                        }[p.platform];

                        return (
                            <motion.div
                                key={idx}
                                className={`bg-[#0a0a0a] p-8 rounded-[3rem] border-2 ${colors} relative overflow-hidden group shadow-2xl`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="absolute -top-10 -right-10 text-9xl text-white/[0.02] rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    {icon}
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-4 bg-white/5 rounded-2xl text-3xl group-hover:scale-110 transition-transform`}>
                                            {icon}
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-bold text-white capitalize">{p.platform}</h5>
                                            <span className="text-gray-500 text-xs font-mono">@{user.handle}</span>
                                        </div>
                                    </div>

                                    {user.currentRating && (
                                        <div className="space-y-4">
                                            <div className="flex items-end justify-between">
                                                <div className="space-y-1">
                                                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Current Rating</p>
                                                    <span className="text-4xl font-black text-white">{user.currentRating?.toFixed(0)}</span>
                                                </div>
                                                {user.maxRating && (
                                                    <div className="text-right text-gray-500 text-xs">
                                                        max: <span className="text-white font-bold">{user.maxRating?.toFixed(0)}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {user.rank && (
                                                <div className="pt-4 border-t border-white/5">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-gray-500 text-xs uppercase font-bold">Global Rank</span>
                                                        <span className="text-white font-mono font-bold gradient-text">{user.rank}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    height: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #1f2937;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #374151;
                }
                .gradient-text {
                    background: linear-gradient(to right, #00D4B4, #3b82f6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}} />
        </div>
    );
};

export default DSAStats;
