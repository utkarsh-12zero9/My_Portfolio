import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiCodeforces } from 'react-icons/si';

const Stats = () => {
    // --- CONFIG ---
    const githubUsername = "utkarsh-12zero9";
    const leetcodeUsername = "utkarsh_12zero9";

    const codingProfiles = [
        { name: 'LeetCode', icon: <SiLeetcode className="text-orange-400" />, url: `https://leetcode.com/${leetcodeUsername}`, color: 'hover:border-orange-400/50' },
        { name: 'GitHub', icon: <FaGithub className="text-white" />, url: `https://github.com/${githubUsername}`, color: 'hover:border-white/50' },
        { name: 'GeeksforGeeks', icon: <SiGeeksforgeeks className="text-green-500" />, url: `https://www.geeksforgeeks.org/user/${leetcodeUsername}/`, color: 'hover:border-green-500/50' },
        { name: 'CodeChef', icon: <SiCodechef className="text-amber-700" />, url: `https://www.codechef.com/users/${leetcodeUsername}`, color: 'hover:border-amber-700/50' },
        { name: 'Codeforces', icon: <SiCodeforces className="text-blue-500" />, url: `https://codeforces.com/profile/${leetcodeUsername}`, color: 'hover:border-blue-500/50' },
        { name: 'Codolio', icon: <FaCode className="text-teal-400" />, url: `https://codolio.com/profile/${githubUsername}`, color: 'hover:border-teal-400/50' }
    ];

    // --- STATE ---
    const [codolioData, setCodolioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.codolio.com/profile?userKey=${githubUsername}`);
                const data = await response.json();
                if (data.status.success) {
                    setCodolioData(data.data);
                } else {
                    setError("Profile data not available");
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Network error or CORS restriction");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [githubUsername]);

    // --- DATA PROCESSING ---
    const platformStats = codolioData?.platformProfiles?.platformProfiles || [];

    // Overall Stats
    const totalSolved = platformStats.reduce((sum, p) => sum + (p.totalQuestionStats?.totalQuestionCounts || 0), 0);
    const totalPossible = 4000; // Placeholder for progress denominator
    const progress = totalSolved / totalPossible;

    // LeetCode Specific Data
    const leetcode = platformStats.find(p => p.platform === 'leetcode') || {};
    const lcStats = leetcode.totalQuestionStats || {};
    const lcUser = leetcode.userStats || {};

    // --- GITHUB URLS ---
    const themeParams = "&bg_color=050505&title_color=00D4B4&text_color=9ca3af&icon_color=00D4B4&hide_border=true&show_icons=true&include_all_commits=true&count_private=true";
    const githubStatsUrl = `https://github-readme-stats-sigma-five.vercel.app/api?username=${githubUsername}${themeParams}`;
    const githubTopLangsUrl = `https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&langs_count=6&hide_progress=false${themeParams}`;

    return (
        <section id="stats" className="py-16 bg-[#050505]">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                    {/* ---------------- GITHUB ---------------- */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <FaGithub className="text-3xl text-white" />
                            <h3 className="text-2xl text-white font-['Montserrat'] font-bold">GitHub Activity</h3>
                        </div>

                        <div className="bg-[#0a0a0a] p-4 rounded-xl border border-white/5 hover:border-[#00D4B4]/30 transition-colors">
                            <img
                                src={githubStatsUrl}
                                alt="GitHub Stats"
                                className="w-full"
                            />
                        </div>

                        <div className="bg-[#0a0a0a] p-4 rounded-xl border border-white/5 hover:border-[#00D4B4]/30 transition-colors">
                            <img
                                src={githubTopLangsUrl}
                                alt="Top Languages"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* ---------------- CODOLIO ---------------- */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <FaCode className="text-3xl text-[#00D4B4]" />
                            <h3 className="text-2xl text-white font-['Montserrat'] font-bold">Codolio Metrics</h3>
                        </div>

                        <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-orange-400/30 transition-colors">
                            {loading ? (
                                <div className="h-[250px] flex items-center justify-center text-gray-400">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-8 h-8 border-2 border-[#00D4B4] border-t-transparent rounded-full animate-spin"></div>
                                        <span>Fetching Stats...</span>
                                    </div>
                                </div>
                            ) : error ? (
                                <div className="h-[250px] flex flex-col items-center justify-center text-red-400">
                                    <p className="text-xl font-bold">Fetch Error</p>
                                    <p className="text-sm opacity-60 text-center px-4">{error}</p>
                                </div>
                            ) : (
                                <>
                                    {/* Overall Progress Section */}
                                    <div className="flex flex-col md:flex-row items-center gap-10 mb-10 pb-10 border-b border-white/5">
                                        <div className="relative shrink-0">
                                            <svg className="w-40 h-40 -rotate-90">
                                                <circle
                                                    cx="80" cy="80" r="74"
                                                    stroke="#1f2937" strokeWidth="12" fill="transparent"
                                                />
                                                <circle
                                                    cx="80" cy="80" r="74"
                                                    stroke="#00D4B4" strokeWidth="12" fill="transparent"
                                                    strokeDasharray={465}
                                                    strokeDashoffset={465 - (465 * Math.min(progress, 1))}
                                                    strokeLinecap="round"
                                                    className="transition-all duration-1000 ease-out"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-4xl text-white font-bold">{totalSolved}</span>
                                                <span className="text-gray-400 text-xs mt-1 font-['Inter'] tracking-widest uppercase">Global Solved</span>
                                            </div>
                                        </div>

                                        <div className="flex-1 space-y-2">
                                            <h4 className="text-white text-lg font-bold font-['Montserrat']">DSA Performance</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Consolidated metrics across multiple competitive programming platforms. 
                                                Live data synced from Codolio.
                                            </p>
                                            <div className="flex gap-4 mt-6">
                                                <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                                    <span className="text-[#00D4B4] font-bold text-xl">{platformStats.length}</span>
                                                    <span className="text-gray-500 text-[10px] ml-2 uppercase tracking-tighter">Platforms Connected</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Platform Breakdown Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {platformStats.map((platform, idx) => {
                                            const config = {
                                                leetcode: { icon: <SiLeetcode className="text-orange-400" />, label: 'LeetCode', color: 'border-orange-400/20' },
                                                geeksforgeeks: { icon: <SiGeeksforgeeks className="text-green-500" />, label: 'GFG', color: 'border-green-500/20' },
                                                codechef: { icon: <SiCodechef className="text-amber-700" />, label: 'CodeChef', color: 'border-amber-700/20' },
                                                codeforces: { icon: <SiCodeforces className="text-blue-500" />, label: 'Codeforces', color: 'border-blue-500/20' }
                                            }[platform.platform] || { icon: <FaCode />, label: platform.platform, color: 'border-white/20' };

                                            const stats = platform.totalQuestionStats || {};
                                            const user = platform.userStats || {};

                                            return (
                                                <div key={idx} className={`p-5 bg-white/[0.02] border ${config.color} rounded-2xl hover:bg-white/[0.05] transition-all group`}>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-2xl group-hover:scale-110 transition-transform">
                                                                {config.icon}
                                                            </div>
                                                            <span className="text-white font-bold text-sm">{config.label}</span>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-[#00D4B4] font-mono text-lg font-bold">
                                                                {stats.totalQuestionCounts || 0}
                                                            </div>
                                                            <div className="text-gray-500 text-[10px] uppercase tracking-tighter">Solved</div>
                                                        </div>
                                                    </div>

                                                    {/* Rating Section only if available */}
                                                    {(user.currentRating || user.maxRating) && (
                                                        <div className="flex items-center justify-between pt-3 border-t border-white/5">
                                                            <div className="flex items-center gap-1.5">
                                                                <FaTrophy className="text-yellow-500 text-[10px]" />
                                                                <span className="text-gray-400 text-[10px] uppercase">Rating</span>
                                                            </div>
                                                            <div className="flex gap-2 items-center">
                                                                <span className="text-white text-sm font-bold">{user.currentRating?.toFixed(0) || "N/A"}</span>
                                                                {user.maxRating && (
                                                                    <span className="text-gray-500 text-[10px] font-medium border-l border-white/10 pl-2">Max: {user.maxRating?.toFixed(0)}</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* ---------------- CODING PLATFORMS ---------------- */}
                <div className="space-y-8 relative overflow-hidden group/marquee_section">
                    <div className="flex items-center gap-3">
                        <FaCode className="text-3xl text-[#00D4B4]" />
                        <h3 className="text-2xl text-white font-['Montserrat'] font-bold">Coding Profiles</h3>
                    </div>

                    {/* Gradient Fades */}
                    <div className="absolute left-0 top-14 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-14 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden py-10">
                        <motion.div
                            className="flex gap-6 shrink-0"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{ width: "fit-content" }}
                            // The interaction: Pause on hover
                            whileHover={{ transition: { duration: 0 } }} // This doesn't pause the running animation unfortunately.
                        >
                            {/* Double the array for seamless scrolling */}
                            {[...codingProfiles, ...codingProfiles].map((profile, index) => (
                                <a
                                    key={index}
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group/card min-w-[220px] p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl flex flex-col items-center gap-5 transition-all duration-300 hover:bg-white/5 ${profile.color} hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]`}
                                >
                                    <div className="text-5xl transform group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500">
                                        {profile.icon}
                                    </div>
                                    <div className="flex flex-col items-center text-center">
                                        <span className="text-white font-bold text-lg tracking-wide group-hover/card:text-[#00D4B4] transition-colors">{profile.name}</span>
                                        <span className="text-gray-500 text-xs mt-2 flex items-center gap-2 group-hover/card:text-white transition-opacity">
                                            Visit Link <FaExternalLinkAlt className="text-[10px]" />
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Add custom CSS to handle the pause-on-hover logic robustly */}
                    <style dangerouslySetInnerHTML={{ __html: `
                        .group\\/marquee_section:hover .flex > div {
                            animation-play-state: paused !important;
                        }
                    `}} />
                </div>
            </div>
        </section>
    );
};

export default Stats;
