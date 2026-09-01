import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaBookBookmark, FaCode, FaArrowTrendUp } from 'react-icons/fa6';

const GithubStats = ({ username = 'utkarsh-12zero9' }) => {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [totalStars, setTotalStars] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                // Fetch User Profile
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userRes.json();
                setProfile(userData);

                // Fetch Repositories (up to 100)
                const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
                const reposData = await reposRes.json();

                if (Array.isArray(reposData)) {
                    setRepos(reposData);

                    // Calculate Total Stars
                    const stars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
                    setTotalStars(stars);

                    // Calculate Language Breakdown
                    const langCount = {};
                    reposData.forEach((repo) => {
                        if (repo.language) {
                            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
                        }
                    });

                    const totalLangRepos = Object.values(langCount).reduce((a, b) => a + b, 0);
                    const sortedLangs = Object.entries(langCount)
                        .map(([lang, count]) => ({
                            name: lang,
                            count,
                            percentage: Math.round((count / (totalLangRepos || 1)) * 100),
                        }))
                        .sort((a, b) => b.count - a.count)
                        .slice(0, 5);

                    setLanguages(sortedLangs);
                }
            } catch (err) {
                console.error('Error fetching GitHub stats:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchGithubData();
    }, [username]);

    const languageColors = {
        JavaScript: '#F7DF1E',
        TypeScript: '#3178C6',
        Python: '#3776AB',
        'C++': '#F34B7D',
        C: '#555555',
        HTML: '#E34F26',
        CSS: '#1572B6',
        Jupyter: '#DA5B0B',
    };

    return (
        <div className="space-y-8 h-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,212,180,0.1)]">
                        <FaGithub className="text-3xl text-[#00D4B4]" />
                    </div>
                    <div>
                        <h3 className="text-2xl text-white font-['Montserrat'] font-bold">
                            GitHub <span className="text-[#00D4B4]">Activity</span>
                        </h3>
                        <p className="text-gray-400 text-sm font-['Inter']">
                            Open source contributions and repositories for @{username}
                        </p>
                    </div>
                </div>

                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4B4]/40 text-sm font-medium text-gray-300 hover:text-white transition-all backdrop-blur-sm self-start md:self-auto group"
                >
                    <span>View Profile</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Overview Card */}
                <motion.div
                    className="lg:col-span-5 bg-gradient-to-br from-gray-950/80 to-black/90 p-6 md:p-8 rounded-3xl border border-white/10 hover:border-[#00F5D4]/60 hover:shadow-[0_0_35px_rgba(0,245,212,0.18)] transition-all duration-500 backdrop-blur-xl shadow-xl flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-xs uppercase tracking-widest text-[#00F5D4] font-mono font-bold">
                                Profile Summary
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-[#00F5D4]/10 text-[#00F5D4] border border-[#00F5D4]/30 shadow-[0_0_10px_rgba(0,245,212,0.2)]">
                                Active Contributor
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 my-4">
                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-[#00F5D4]/50 hover:bg-[#00F5D4]/10 hover:shadow-[0_0_20px_rgba(0,245,212,0.15)] transition-all duration-300">
                                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                                    <FaBookBookmark className="text-[#00F5D4]" />
                                    <span>Public Repos</span>
                                </div>
                                <span className="text-3xl font-black text-white font-['Montserrat'] group-hover:text-[#00F5D4] transition-colors">
                                    {profile?.public_repos ?? (repos.length || 37)}
                                </span>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-[#00F5D4]/50 hover:bg-[#00F5D4]/10 hover:shadow-[0_0_20px_rgba(0,245,212,0.15)] transition-all duration-300">
                                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                                    <FaCode className="text-emerald-400" />
                                    <span>Original Builds</span>
                                </div>
                                <span className="text-3xl font-black text-white font-['Montserrat'] group-hover:text-emerald-400 transition-colors">
                                    {repos.filter((r) => !r.fork).length || 30}+
                                </span>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-[#00F5D4]/50 hover:bg-[#00F5D4]/10 hover:shadow-[0_0_20px_rgba(0,245,212,0.15)] transition-all duration-300">
                                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                                    <FaArrowTrendUp className="text-[#00F5D4]" />
                                    <span>Core Stacks</span>
                                </div>
                                <span className="text-3xl font-black text-white font-['Montserrat'] group-hover:text-[#00F5D4] transition-colors">
                                    {languages.length > 0 ? `${languages.length}+` : '6+'}
                                </span>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-[#00F5D4]/50 hover:bg-[#00F5D4]/10 hover:shadow-[0_0_20px_rgba(0,245,212,0.15)] transition-all duration-300">
                                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                                    <FaStar className="text-amber-400" />
                                    <span>Active Journey</span>
                                </div>
                                <span className="text-3xl font-black text-white font-['Montserrat'] group-hover:text-amber-400 transition-colors">
                                    3+ Yrs
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-['Inter']">
                        <span>User: <strong className="text-white">@{username}</strong></span>
                        <span>Since: <strong className="text-white">{profile?.created_at ? new Date(profile.created_at).getFullYear() : '2023'}</strong></span>
                    </div>
                </motion.div>

                {/* Top Languages Card */}
                <motion.div
                    className="lg:col-span-7 bg-gradient-to-br from-gray-950/80 to-black/90 p-6 md:p-8 rounded-3xl border border-white/10 hover:border-[#00F5D4]/60 hover:shadow-[0_0_35px_rgba(0,245,212,0.18)] transition-all duration-500 backdrop-blur-xl shadow-xl flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-xs uppercase tracking-widest text-[#00D4B4] font-mono font-semibold">
                                Most Used Languages
                            </span>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                <FaCode className="text-[#00D4B4]" />
                                <span>Codebase Metrics</span>
                            </div>
                        </div>

                        {/* Language Progress Bar Combined */}
                        {languages.length > 0 && (
                            <div className="h-3.5 w-full rounded-full bg-white/5 flex overflow-hidden p-0.5 border border-white/10 mb-6">
                                {languages.map((lang, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            width: `${lang.percentage}%`,
                                            backgroundColor: languageColors[lang.name] || '#00D4B4',
                                        }}
                                        className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-700"
                                        title={`${lang.name}: ${lang.percentage}%`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Language Breakdown Items */}
                        <div className="space-y-3.5">
                            {languages.map((lang, idx) => (
                                <div key={idx} className="space-y-1.5 group">
                                    <div className="flex justify-between items-center text-xs font-['Inter']">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{ backgroundColor: languageColors[lang.name] || '#00D4B4' }}
                                            />
                                            <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                                                {lang.name}
                                            </span>
                                        </div>
                                        <span className="font-mono text-[#00D4B4] font-bold">
                                            {lang.percentage}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: languageColors[lang.name] || '#00D4B4' }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${lang.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                        <span>Calculated across all public repositories</span>
                        <span className="text-[#00D4B4] font-mono">Live API Sync</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default GithubStats;
