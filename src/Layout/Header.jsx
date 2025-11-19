import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: '#resume' },
    ];

    return (
  <motion.nav
    className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/40 backdrop-blur-xl border-b border-white/5 shadow-lg max-h-16"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between">
      {/* Name/Logo */}
      <motion.div
        className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Montserrat'] select-none transform -rotate-3 cursor-pointer"
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
        whileHover={{ scale: 1.05, rotate: -6 }}
      >
        Utkarsh
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1 lg:gap-2">
        {navLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            className="relative px-4 lg:px-5 py-2 text-[#E6E6E6] hover:text-[#00D4B4] font-['Inter'] text-base lg:text-lg font-semibold rounded-lg transition-all duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00D4B4] to-[#7B3FE4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            
            {/* Hover background glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#00D4B4]/10 to-[#7B3FE4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            
            <span className="relative z-10">{link.name}</span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </motion.button>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <motion.div
        className="md:hidden bg-[#0d0f1a]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-[#E6E6E6] hover:text-[#00D4B4] hover:bg-[#00D4B4]/10 font-['Inter'] text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-[#00D4B4]"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    )}
  </motion.nav>
);

};

export default Header;