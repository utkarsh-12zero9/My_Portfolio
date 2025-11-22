import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPython, FaJava, FaJs, FaReact, FaGithub, FaCode, FaTrophy, FaStar } from 'react-icons/fa';

const Stats = () => {
    // --- CONFIGURATION ---
    const githubUsername = "utkarsh-12zero9";
    const leetcodeUsername = "utkarsh120903";

    // --- State ---
    const [leetcodeData, setLeetcodeData] = useState(null);
    const [loadingLeetcode, setLoadingLeetcode] = useState(true);
    const [leetcodeError, setLeetcodeError] = useState(null);

    useEffect(() => {
        const fetchLeetCode = async () => {
            try {
                const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
                if (response.data.status === "error") throw new Error("User not found");
                setLeetcodeData(response.data);
            } catch (error) {
                console.error(error);
                setLeetcodeError("Failed to load data");
            } finally {
                setLoadingLeetcode(false);
            }
        };
        fetchLeetCode();
    }, [leetcodeUsername]);

    // --- GitHub URL Construction ---
    const themeParams = "&bg_color=0a0a0a&title_color=2dd4bf&text_color=e2e8f0&icon_color=2dd4bf&hide_border=true&show_icons=true&include_all_commits=true&count_private=true";
    const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${githubUsername}${themeParams}`;
    const githubTopLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&langs_count=6&hide_progress=false${themeParams}`;

    // --- Circular Progress Bar ---
    const CircleProgress = ({ percentage, color }) => {
        const radius = 30;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - (dashArray * percentage) / 100;

        return (
            <div className="relative w-32 h-32 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 80 80" className="rotate-[-90deg]">
                    <circle cx="40" cy="40" r={radius} fill="transparent" stroke="#333" strokeWidth="6" />
                    <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        fill="transparent"
                        stroke={color}
                        strokeWidth="6"
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <div className="absolute text-white text-lg font-bold">
                    {Math.round(percentage)}%
                </div>
            </div>
        );
    };

    return (
        <section id="stats" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Code <span className="text-transparent bg-clip-text bg-[#2dd4bf] ">Analytics</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A deep dive into my development journey, problem-solving metrics, and open source contributions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* --- LEFT COLUMN: GITHUB --- */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <FaGithub className="text-3xl text-white" />
                            <h3 className="text-2xl font-semibold text-white">GitHub Activity</h3>
                        </div>

                        {/* GitHub Stats Card */}
                        <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-800 to-transparent hover:from-[#2dd4bf] hover:to-purple-500 transition-all duration-500">
                            <div className="bg-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl p-4 h-full w-full">
                                <img
                                    src={githubStatsUrl}
                                    alt="GitHub Stats"
                                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>

                        {/* Top Languages Card */}
                        <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-800 to-transparent hover:from-[#2dd4bf] hover:to-purple-500 transition-all duration-500">
                            <div className="bg-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl p-4 h-full w-full">
                                <img
                                    src={githubTopLangsUrl}
                                    alt="Top Languages"
                                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: LEETCODE --- */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <FaCode className="text-3xl text-[#2dd4bf]" />
                            <h3 className="text-2xl font-semibold text-white">LeetCode Metrics</h3>
                        </div>

                        {/* Custom LeetCode Card */}
                        <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-[#2dd4bf] hover:to-cyan-500 transition-all duration-500 shadow-2xl shadow-black/50">
                            <div className="bg-[#0e0e0e] rounded-3xl p-8 h-full w-full relative overflow-hidden">
                                {/* Subtle Background Pattern */}
                                <div className="absolute top-0 right-0 p-10 opacity-5">
                                    <FaCode size={150} />
                                </div>

                                {loadingLeetcode ? (
                                    <div className="h-[300px] flex flex-col items-center justify-center animate-pulse gap-4">
                                        <div className="w-24 h-24 rounded-full bg-gray-800"></div>
                                        <div className="w-3/4 h-4 bg-gray-800 rounded"></div>
                                        <div className="w-1/2 h-4 bg-gray-800 rounded"></div>
                                    </div>
                                ) : leetcodeError ? (
                                    <div className="h-[300px] flex flex-col items-center justify-center text-red-400 text-center">
                                        <p className="text-xl font-bold">User Not Found</p>
                                        <p className="text-sm text-gray-500">Please check the username in configuration.</p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Header Stats */}
                                        <div className="flex justify-between items-start mb-8 relative z-10">
                                            <div>
                                                <h4 className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Global Ranking</h4>
                                                <p className="text-2xl font-bold text-white flex items-center gap-2">
                                                    <FaTrophy className="text-yellow-500" />
                                                    {leetcodeData.ranking.toLocaleString()}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <h4 className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Acceptance</h4>
                                                <p className="text-2xl font-bold text-white">{leetcodeData.acceptanceRate}%</p>
                                            </div>
                                        </div>

                                        {/* Main Circular Visualization */}
                                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                                            {/* Donut Chart Area */}
                                            <div className="relative">
                                                <svg className="w-40 h-40 transform -rotate-90">
                                                    {/* Background Circle */}
                                                    <circle cx="80" cy="80" r="70" stroke="#1f2937" strokeWidth="12" fill="transparent" />
                                                    {/* Progress Circle */}
                                                    <circle
                                                        cx="80"
                                                        cy="80"
                                                        r="70"
                                                        stroke="#2dd4bf"
                                                        strokeWidth="12"
                                                        fill="transparent"
                                                        strokeDasharray={440}
                                                        strokeDashoffset={440 - (440 * (leetcodeData.totalSolved / leetcodeData.totalQuestions))}
                                                        strokeLinecap="round"
                                                        className="transition-all duration-1000 ease-out"
                                                    />
                                                </svg>
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                                    <span className="text-3xl font-bold text-white block">{leetcodeData.totalSolved}</span>
                                                    <span className="text-xs text-gray-500 uppercase">Solved</span>
                                                </div>
                                            </div>

                                            {/* Detailed Breakdown */}
                                            <div className="flex-1 w-full space-y-4">
                                                {/* Easy */}
                                                <div className="group">
                                                    <div className="flex justify-between text-sm mb-1">
                                                        <span className="text-teal-400 font-medium">Easy</span>
                                                        <span className="text-gray-400">{leetcodeData.easySolved} <span className="text-gray-600">/ {leetcodeData.totalEasy}</span></span>
                                                    </div>
                                                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                                        <div
                                                            className="bg-teal-400 h-2 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)] transition-all duration-1000"
                                                            style={{ width: `${(leetcodeData.easySolved / leetcodeData.totalEasy) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                </div>

                                                {/* Medium */}
                                                <div className="group">
                                                    <div className="flex justify-between text-sm mb-1">
                                                        <span className="text-yellow-400 font-medium">Medium</span>
                                                        <span className="text-gray-400">{leetcodeData.mediumSolved} <span className="text-gray-600">/ {leetcodeData.totalMedium}</span></span>
                                                    </div>
                                                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                                        <div
                                                            className="bg-yellow-400 h-2 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-1000"
                                                            style={{ width: `${(leetcodeData.mediumSolved / leetcodeData.totalMedium) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                </div>

                                                {/* Hard */}
                                                <div className="group">
                                                    <div className="flex justify-between text-sm mb-1">
                                                        <span className="text-red-400 font-medium">Hard</span>
                                                        <span className="text-gray-400">{leetcodeData.hardSolved} <span className="text-gray-600">/ {leetcodeData.totalHard}</span></span>
                                                    </div>
                                                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                                        <div
                                                            className="bg-red-400 h-2 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.5)] transition-all duration-1000"
                                                            style={{ width: `${(leetcodeData.hardSolved / leetcodeData.totalHard) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;