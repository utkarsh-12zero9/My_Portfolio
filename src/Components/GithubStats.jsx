import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const GithubStats = ({ username }) => {
    const themeParams = "&bg_color=050505&title_color=00D4B4&text_color=9ca3af&icon_color=00D4B4&hide_border=true&show_icons=true&include_all_commits=true&count_private=true";
    const githubStatsUrl = `https://github-readme-stats-sigma-five.vercel.app/api?username=${username}${themeParams}`;
    const githubTopLangsUrl = `https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=6&hide_progress=false${themeParams}`;

    return (
        <div className="space-y-8 px-12 h-full">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#00D4B4]/50 transition-colors">
                    <FaGithub className="text-3xl text-white" />
                </div>
                <div>
                    <h3 className="text-2xl text-white font-['Montserrat'] font-bold">GitHub <span className="text-[#00D4B4]">Activity</span></h3>
                    <p className="text-gray-500 text-sm">Open source contributions and coding habits</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                <motion.div
                    className="bg-[#0a0a0a] p-6 rounded-3xl border border-white/5 hover:border-[#00D4B4]/30 transition-all duration-500 group shadow-lg flex items-center justify-center min-h-[220px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={githubStatsUrl}
                        alt="GitHub Stats"
                        className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                </motion.div>

                <motion.div
                    className="bg-[#0a0a0a] p-6 rounded-3xl border border-white/5 hover:border-[#00D4B4]/30 transition-all duration-500 group shadow-lg flex items-center justify-center min-h-[220px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <img
                        src={githubTopLangsUrl}
                        alt="Top Languages"
                        className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default GithubStats;
