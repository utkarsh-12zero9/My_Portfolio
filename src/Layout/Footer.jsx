import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/utkarsh-12zero9',
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/utkarsh-12zero9',
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/utkarsh120903/',
      icon: <SiLeetcode className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:utkarshkumarsingh120903@gmail.com',
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="py-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-400 text-sm font-['Inter']">
          © {new Date().getFullYear()} Utkarsh Kumar Singh.
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00D4B4] transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;