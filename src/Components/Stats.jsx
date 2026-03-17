import React, { useState } from 'react';
// import axios from 'axios'; // Commented out - using dummy data instead
import { FaGithub, FaCode, FaTrophy } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Stats = () => {
    // --- CONFIG ---
    const githubUsername = "utkarsh-12zero9";
    const leetcodeUsername = "utkarsh_12zero9";

    // --- STATE ---
    // Dummy data from LeetCode profile (commented out API call)
    const [leetcodeData] = useState({
        totalSolved: 485,
        totalQuestions: 3873,
        totalEasy: 932,
        totalMedium: 2026,
        totalHard: 915,
        easySolved: 238,
        mediumSolved: 223,
        hardSolved: 24,
        ranking: 442475,
        acceptanceRate: 52.5
    });
    const [loadingLeetcode] = useState(false);
    const [leetcodeError] = useState(null);

    // --- FETCH LEETCODE ---
    // API call commented out - using dummy data instead
    /*
    useEffect(() => {
        const fetchLeetCode = async () => {
            try {
                const response = await axios.get(
                    `https://alfa-leetcode-api.onrender.com/${leetcodeUsername}`
                );

                console.log("LeetCode Data:", response.data);

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
    */

    // --- GITHUB URLS ---
    const themeParams =
        "&bg_color=0a0a0a&title_color=2dd4bf&text_color=e2e8f0&icon_color=2dd4bf&hide_border=true&show_icons=true&include_all_commits=true&count_private=true";

    const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${githubUsername}${themeParams}`;
    const githubTopLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&langs_count=6&hide_progress=false${themeParams}`;

    // --- SAFE VALUES ---
    const totalSolved = leetcodeData?.totalSolved || 0;

    const totalQuestions =
        leetcodeData?.totalQuestions ||
        ((leetcodeData?.totalEasy || 0) +
            (leetcodeData?.totalMedium || 0) +
            (leetcodeData?.totalHard || 0));

    const progress = totalQuestions ? totalSolved / totalQuestions : 0;

    return (
        <section className="py-24 bg-[#050505]">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* ---------------- GITHUB ---------------- */}
                    <div className="space-y-6">

                        <div className="flex items-center gap-3">
                            <FaGithub className="text-3xl text-white" />
                            <h3 className="text-2xl text-white">GitHub Activity</h3>
                        </div>

                        <div className="bg-[#0a0a0a] p-4 rounded-xl">
                            <img
                                src={githubStatsUrl}
                                alt="GitHub Stats"
                                className="w-full"
                            />
                        </div>

                        <div className="bg-[#0a0a0a] p-4 rounded-xl">
                            <img
                                src={githubTopLangsUrl}
                                alt="Top Languages"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* ---------------- LEETCODE ---------------- */}
                    <div className="space-y-6">

                        <div className="flex items-center gap-3">
                            <SiLeetcode className="text-3xl text-orange-400" />
                            <h3 className="text-2xl text-white">LeetCode Metrics</h3>
                        </div>

                        <div className="bg-[#0e0e0e] p-8 rounded-2xl">

                            {loadingLeetcode ? (
                                <div className="h-[250px] flex items-center justify-center text-gray-400">
                                    Loading LeetCode Data...
                                </div>
                            ) : leetcodeError ? (
                                <div className="h-[250px] flex flex-col items-center justify-center text-red-400">
                                    <p className="text-xl font-bold">API Error</p>
                                    <p className="text-sm">Try again later</p>
                                </div>
                            ) : (
                                <>
                                    {/* Progress Circle */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative">
                                            <svg className="w-40 h-40 -rotate-90">
                                                <circle
                                                    cx="80"
                                                    cy="80"
                                                    r="70"
                                                    stroke="#1f2937"
                                                    strokeWidth="10"
                                                    fill="transparent"
                                                />
                                                <circle
                                                    cx="80"
                                                    cy="80"
                                                    r="70"
                                                    stroke="#2dd4bf"
                                                    strokeWidth="10"
                                                    fill="transparent"
                                                    strokeDasharray={440}
                                                    strokeDashoffset={440 - (440 * progress)}
                                                    strokeLinecap="round"
                                                />
                                            </svg>

                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-3xl text-white font-bold">
                                                    {totalSolved}+
                                                </span>
                                                <span className="text-gray-400 text-sm">
                                                    Solved
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ranking & Acceptance */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">

                                        <div className="text-center">
                                            <p className="text-gray-400 text-sm">Ranking</p>
                                            <p className="text-white font-bold flex justify-center items-center gap-2">
                                                <FaTrophy className="text-yellow-500" />
                                                {leetcodeData?.ranking
                                                    ? leetcodeData.ranking.toLocaleString()
                                                    : "N/A"}
                                            </p>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-gray-400 text-sm">Acceptance</p>
                                            <p className="text-white font-bold">
                                                {leetcodeData?.acceptanceRate || "N/A"}%
                                            </p>
                                        </div>
                                    </div>

                                    {/* Difficulty Bars */}
                                    <div className="space-y-4">

                                        {/* Easy */}
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-teal-400">Easy</span>
                                                <span>
                                                    {leetcodeData?.easySolved || 0} / {leetcodeData?.totalEasy || 0}
                                                </span>
                                            </div>
                                            <div className="bg-gray-800 h-2 rounded">
                                                <div
                                                    className="bg-teal-400 h-2 rounded"
                                                    style={{
                                                        width: `${((leetcodeData?.easySolved || 0) / (leetcodeData?.totalEasy || 1)) * 100}%`
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Medium */}
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-yellow-400">Medium</span>
                                                <span>
                                                    {leetcodeData?.mediumSolved || 0} / {leetcodeData?.totalMedium || 0}
                                                </span>
                                            </div>
                                            <div className="bg-gray-800 h-2 rounded">
                                                <div
                                                    className="bg-yellow-400 h-2 rounded"
                                                    style={{
                                                        width: `${((leetcodeData?.mediumSolved || 0) / (leetcodeData?.totalMedium || 1)) * 100}%`
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Hard */}
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-red-400">Hard</span>
                                                <span>
                                                    {leetcodeData?.hardSolved || 0} / {leetcodeData?.totalHard || 0}
                                                </span>
                                            </div>
                                            <div className="bg-gray-800 h-2 rounded">
                                                <div
                                                    className="bg-red-400 h-2 rounded"
                                                    style={{
                                                        width: `${((leetcodeData?.hardSolved || 0) / (leetcodeData?.totalHard || 1)) * 100}%`
                                                    }}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;