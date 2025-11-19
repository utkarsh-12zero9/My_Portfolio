import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Refokus from "../assets/Images/refokusLandingPage.png";
import Profile from "../assets/Images/Profile.jpg";

const Hero = () => {
    const Learning_Skills = ['MERN Stack Developer', 'Machine Learning'];

    const descriptors = ['Full-Stack Developer', 'MERN Practitioner', 'Problem Solver'];
    
    const [currentDescriptor, setCurrentDescriptor] = useState(0);

    // Descriptors Animation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDescriptor((prev) => (prev+1) % descriptors.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen bg-[#0A0A0A] flex flex-col-reverse md:flex-row items-center justify-center relative overflow-hidden px-4 sm:px-8 sm:mt-7"
        >
            {/* Text Section - for all screen sizes*/}
            <motion.div
                className="w-full md:w-[55%] md:pl-16 md:pt-5 z-10 flex flex-col items-center md:items-start text-center md:text-left"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >

                {/* Name */}
                <h1 className="text-3xl xs:text-4xl md:text-6xl font-['Montserrat'] text-white transform -skew-x-3 mt-3 mb-3 font-bold">
                    Utkarsh Kumar Singh
                </h1>

                {/* Descriptors */}
                <AnimatePresence mode="wait">
                    <motion.p
                        key={currentDescriptor}
                        className="text-base xs:text-lg md:text-xl font-['Inter'] text-[#E6E6E6] mb-6 mt-2 border-l-4 border-[#00D4B4] inline-block px-5 py-1 bg-[#434646] bg-opacity-10 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {descriptors[currentDescriptor]}
                    </motion.p>
                </AnimatePresence>

                {/* Intro */}
                <p className="text-sm xs:text-base md:text-lg font-['Inter'] text-[#E6E6E6] mb-6 max-w-md">
                    Specializing in building dynamic, high-performance web interfaces using JavaScript, React, and modern frontend ecosystems.
                    Passionate about delivering seamless user experiences through component-driven architecture and responsive design.
                </p>

                {/* Skill Tags */}
                <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 max-w-xs mx-auto md:mx-0">
                    {Learning_Skills.map((skill) => (
                        <motion.span
                            key={skill}
                            className="text-md xs:text-md font-['Fira_Code'] text-[#00D4B4] bg-[#252525] text-center py-3 rounded-3xl transform rotate-3"
                            whileHover={{ rotate: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>

                <motion.a
                    href="#projects"
                    className="inline-block mt-9 px-4 xs:px-6 py-2 xs:py-3 bg-[#00D4B4] text-[#E6E6E6] font-['Inter'] text-lg font-extrabold xs:text-lg transform skew-x-6 hover:bg-[#7B3FE4] hover:text-white transition-colors duration-400 rounded"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    See My Projects
                </motion.a>

            </motion.div>

            {/* Visual Section - Desktop */}
            <motion.div
                className="hidden md:flex flex-col items-end w-full md:w-[45%] absolute md:static right-0 top-1/5 z-0"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
            {/* Profile Iamge */}
                <div className="relative w-full max-w-md mx-auto">
                    <img
                        src={Profile}
                        alt="Refokus UI Clone"
                        className="max-w-[350px] transform translate-x-15 relative z-10 rounded-full "
                        loading="lazy"
                        aria-label="Refokus UI Clone Screenshot"
                    />
                    <div className="absolute inset-0 z-0 animate-glow">
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#00D4B4]/30 to-[#7B3FE4]/30 blur-xl border border-[#00D4B4]/50" />
                    </div>
                </div>

                <div className="absolute top-10 left-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    <svg
                        viewBox="0 0 24 24"
                        className="text-[#7B3FE4] w-full h-full  animate-spin-slow"
                    >
                        <path
                            fill="currentColor"
                            d="M12 2.7L2.7 12l9.3 9.3 9.3-9.3L12 2.7z"
                        />
                    </svg>
                </div>

            </motion.div>

            {/* Visual Section - Mobile */}
            <motion.div
                className="md:hidden w-full max-w-xs mx-auto mt-16 z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
            {/* Profile Iamge */}
                <div className="relative">
                    <img
                        src={Profile}
                        alt="Profile Photo"
                        className="w-[300px] relative z-10 rounded-full mx-auto"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 z-0 animate-glow">
                        <div className="w-full h-full rounded-lg bg-gradient-to-r from-[#00D4B4]/30 to-[#7B3FE4]/30 blur-xl border border-[#00D4B4]/50" />
                    </div>
                </div>
            </motion.div>

            {/* Background Shape */}
            <motion.div
                className="absolute inset-0 -z-10"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,20 L80,100 L0,100 Z" fill="url(#gradient)" />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#00D4B4', stopOpacity: 0.3 }} />
                            <stop offset="100%" style={{ stopColor: '#7B3FE4', stopOpacity: 0.3 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;