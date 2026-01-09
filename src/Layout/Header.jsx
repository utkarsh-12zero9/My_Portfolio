import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Coding Stats', href: '#stats' },
    { name: 'Projects', href: '#projects' },
    { name: 'Internships', href: '#internships' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    // If we are on the home page, we scroll. 
    // If we were on a different route, we would need to navigate first.
    // Since this is a single page portfolio, we just scroll.
    // We prevent default to handle smooth scroll manually if needed, 
    // but standard anchor behavior + css scroll-behavior: smooth in html usually works.
    // However, the user asked for React Router.

    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="glass-panel backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between md:gap-12 shadow-2xl shadow-black/20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-bold font-['Montserrat'] tracking-tight relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className="text-white">Utkarsh</span>
            <span className="text-[#00D4B4]">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors font-['Inter'] group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4B4] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <motion.a
              href="#resume"
              className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#00D4B4] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleNavClick(e, '#resume')}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                className="w-full h-0.5 bg-white block origin-center transition-transform"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-4 h-0.5 bg-[#00D4B4] block transition-opacity"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                className="w-full h-0.5 bg-white block origin-center transition-transform"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-3xl font-['Montserrat'] font-bold text-white hover:text-[#00D4B4] transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
              <motion.a
                href="#resume"
                className="mt-4 px-8 py-3 bg-[#00D4B4] text-black font-bold rounded-full text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;