import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/utkarsh-12zero9',
            icon: <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/utkarsh-12zero9',
            icon: <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />,
        },
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/utkarsh120903/',
            icon: <SiLeetcode className="w-6 h-6 sm:w-8 sm:h-8" />,
        },
        {
            name: 'Email',
            url: 'mailto:utkarshkumarsingh120903@gmail.com',
            icon: <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />,
        },
    ];

    return (
        <footer className="w-full bg-[#1A1A1A] relative z-40 py-6 sm:py-8">
            {/* Animated Background Effect */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                animate={{
                    background: [
                        'radial-gradient(circle, rgba(0, 212, 180, 0.1) 0%, rgba(123, 63, 228, 0.1) 100%)',
                        'radial-gradient(circle, rgba(123, 63, 228, 0.1) 0%, rgba(0, 212, 180, 0.1) 100%)',
                    ],
                }}
                transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
            />

            <div className="container mx-auto px-4 sm:px-6 md:px-20 text-center">
                <motion.div
                    className="z-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h3 className="text-xl sm:text-2xl font-['Montserrat'] font-bold text-white mb-4">
                        Utkarsh Kumar Singh
                    </h3>
                    <div className="flex justify-center space-x-6 sm:space-x-8 mb-4">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00D4B4] hover:text-[#7B3FE4] transition-colors duration-300"
                                whileHover={{ scale: 1.1 }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5, type: 'spring', stiffness: 120 }}
                            >
                                {link.icon}
                                <span className="sr-only">{link.name}</span>
                            </motion.a>
                        ))}
                    </div>
                    <p className="text-sm sm:text-base font-['Inter'] text-[#E6E6E6]">
                        © {new Date().getFullYear()} Utkarsh Kumar Singh. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;