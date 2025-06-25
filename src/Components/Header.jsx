import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/30 backdrop-blur-md p-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Name */}
                <motion.div
                    className="text-3xl font-bold font-['Montserrat'] select-none rotate-[-4deg]"
                    initial={{ textShadow: '0 0 8px #00D4B4, 0 0 16px #00D4B4' }}
                    animate={{
                        color: ['#fff', '#00D4B4', '#fff', '#fff'],
                        textShadow: [
                            '0 0 8px #00D4B4, 0 0 16px #00D4B4',
                            '0 0 16px #7B3FE4, 0 0 32px #00D4B4',
                            '0 0 8px #00D4B4, 0 0 16px #00D4B4',
                            '0 0 24px #7B3FE4, 0 0 48px #00D4B4',
                            '0 0 8px #00D4B4, 0 0 16px #00D4B4',
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                >
                    Utkarsh
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-4 xl:space-x-8">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-[#E6E6E6] hover:text-[#00D4B4] font-['Inter'] text-lg"
                            whileHover={{ rotate: 5, color: '#00D4B4' }}
                            transition={{ duration: 0.2 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-[#0A0A0A]/90 backdrop-blur-md py-4"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.3 }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block py-2 px-4 text-[#E6E6E6] hover:text-[#00D4B4] font-['Inter'] text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Header;