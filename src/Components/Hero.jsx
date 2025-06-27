import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Refokus from "../assets/Images/refokusLandingPage.png";
import Tala from "../assets/Images/TalaLandingPage.png";

const Hero = () => {
    const skills = ['JavaScript', 'React', 'Responsive'];

    const descriptors = ['Front-End Developer', 'React Enthusiast', 'Problem Solver'];
    const [currentDescriptor, setCurrentDescriptor] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDescriptor((prev) => (prev + 1) % descriptors.length);
        }, 1800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen bg-[#0A0A0A] flex flex-col-reverse md:flex-row items-center justify-center relative overflow-hidden px-4 sm:px-8 sm:mt-7"
        >
            {/* Text Section */}
            <motion.div
                className="w-full md:w-[55%] md:pl-16 md:pt-5 z-10 flex flex-col items-center md:items-start text-center md:text-left"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl xs:text-4xl md:text-6xl font-['Montserrat'] text-white transform -skew-x-3 m-4">
                    Utkarsh Kumar Singh
                </h1>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={currentDescriptor}
                        className="text-base xs:text-lg md:text-xl font-['Inter'] text-[#E6E6E6] mb-6 border-l-4 border-[#00D4B4] inline-block px-4 bg-[#434646] bg-opacity-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {descriptors[currentDescriptor]}
                    </motion.p>
                </AnimatePresence>
                <p className="text-sm xs:text-base md:text-lg font-['Inter'] text-[#E6E6E6] mb-6 max-w-md">
                    Specializing in building dynamic, high-performance web interfaces using JavaScript, React, and modern frontend ecosystems.
                    Passionate about delivering seamless user experiences through component-driven architecture and responsive design.
                </p>
                {/* Skill Tags */}
                <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 max-w-xs mx-auto md:mx-0">
                    {skills.map((skill) => (
                        <motion.span
                            key={skill}
                            className="text-md xs:text-md font-['Fira_Code'] text-[#00D4B4] bg-[#1A1A1A] px-3  rounded transform rotate-2"
                            whileHover={{ rotate: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
                <motion.a
                    href="#projects"
                    className="inline-block mt-6 px-4 xs:px-6 py-2 xs:py-3 bg-[#00D4B4] text-[#E6E6E6] font-['Inter'] text-lg font-extrabold xs:text-lg transform skew-x-6 hover:bg-[#7B3FE4] hover:text-white transition-colors duration-400 rounded"
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
                <div className="relative w-full max-w-md mx-auto">
                    <img
                        src={Refokus}
                        alt="Refokus UI Clone"
                        className="max-w-full transform translate-x-10 relative z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}
                        loading="lazy"
                        aria-label="Refokus UI Clone Screenshot"
                    />
                    <div className="absolute inset-0 z-0 animate-glow">
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#00D4B4]/30 to-[#7B3FE4]/30 blur-xl border border-[#00D4B4]/50" />
                    </div>
                </div>
                <div className="relative mt-[-20%] w-full max-w-xs mx-auto">
                    <img
                        src={Tala}
                        alt="TALA UI Clone"
                        className="max-w-full transform -translate-x-10 relative z-10"
                        style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }}
                        loading="lazy"
                        aria-label="TALA UI Clone Screenshot"
                    />
                    <div className="absolute inset-0 z-0 animate-glow-delayed">
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#7B3FE4]/30 to-[#00D4B4]/30 blur-xl border border-[#7B3FE4]/50" />
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
                <div className="relative">
                    <img
                        src={Refokus}
                        alt="Refokus UI Clone"
                        className="w-full rounded-lg relative z-10"
                        loading="lazy"
                        aria-label="Refokus UI Clone Screenshot"
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