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
  <footer className="w-full bg-gradient-to-br from-[#0f1119] to-[#1a1d2e] relative z-40 border-t border-white/5">
    {/* Animated Background Effect */}
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      animate={{
        background: [
          'radial-gradient(ellipse at 50% 50%, rgba(0, 212, 180, 0.12) 0%, rgba(123, 63, 228, 0.08) 100%)',
          'radial-gradient(ellipse at 50% 50%, rgba(123, 63, 228, 0.12) 0%, rgba(0, 212, 180, 0.08) 100%)',
        ],
      }}
      transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
    />

    <div className="container mx-auto px-4 sm:px-6 md:px-20 py-8 sm:py-10 md:py-12 relative z-10">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Name/Brand */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-['Montserrat'] font-extrabold bg-gradient-to-r from-[#00D4B4] via-[#7B3FE4] to-[#00D4B4] bg-clip-text text-transparent mb-2 drop-shadow-lg">
            Utkarsh Kumar Singh
          </h3>
          <p className="text-sm sm:text-base font-['Inter'] text-[#9ca3af] max-w-md mx-auto">
            Full-Stack MERN Developer crafting modern web experiences
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-[#1e2233]/60 backdrop-blur-sm border border-[#00D4B4]/20 rounded-xl text-[#00D4B4] hover:text-white hover:bg-gradient-to-br hover:from-[#00D4B4]/20 hover:to-[#7B3FE4]/20 hover:border-[#7B3FE4]/40 transition-all duration-300 shadow-lg hover:shadow-[#00D4B4]/30"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5, 
                type: 'spring', 
                stiffness: 200 
              }}
              aria-label={link.name}
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00D4B4]/30 to-transparent mb-6 sm:mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-['Inter'] text-[#9ca3af]">
            © {new Date().getFullYear()} <span className="text-[#00D4B4] font-semibold">Utkarsh Kumar Singh</span>. All rights reserved.
          </p>
          <p className="text-xs text-[#6b7280] mt-2">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </motion.div>
    </div>
  </footer>
);

};

export default Footer;