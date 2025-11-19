import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/utkarsh-12zero9',
            icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/utkarsh-12zero9',
            icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        },
        {
            name: 'Email',
            url: 'mailto:utkarsh.kumar.singh@gmail.com',
            icon: 'https://cdn-icons-png.flaticon.com/512/561/561127.png',
        },
    ];

    const textVariants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: { delay: i * 0.2, duration: 0.5 },
        }),
    };

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: '-100px' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_cixpmgr', // Your Service ID
            'template_67mjl1p', // Your Template ID
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'utkarshkumarsingh120903@gmail.com',
            },
            '9SF0_vkuQWvLHMAuK' // Your User ID
        ).then(
            (result) => {
                toast.success('Message Sent Successfully! 👍', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: { backgroundColor: '#1A1A1A', color: '#E6E6E6', border: '1px solid #00D4B4' },
                });
                setFormData({ name: '', email: '', message: '' });
            },
            (error) => {
                toast.error('Failed to Send Message. Try Again! 😞', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: { backgroundColor: '#1A1A1A', color: '#E6E6E6', border: '1px solid #7B3FE4' },
                });
            }
        );
    };

    return (
  <section
    id="contact"
    ref={sectionRef}
    className="min-h-[90vh] bg-gradient-to-br from-[#0f1119] to-[#1a1d2e] relative overflow-hidden py-16 sm:py-24"
  >
    {/* Orbiting Glow 1 */}
    <motion.div
      className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-[#00D4B4]/35 to-[#7B3FE4]/30 blur-3xl"
      initial={{ x: '10vw', y: '10vh', rotate: 0, scale: 1 }}
      animate={{
        x: ['10vw', '30vw', '50vw', '70vw', '90vw', '60vw', '20vw'].map(v => `min(90vw, max(10vw, ${v}))`),
        y: ['10vh', '40vh', '70vh', '50vh', '30vh', '60vh', '90vh'].map(v => `min(90vh, max(10vh, ${v}))`),
        rotate: 360,
        scale: [1, 1.15, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
    />
    
    {/* Orbiting Glow 2 */}
    <motion.div
      className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-[#7B3FE4]/35 to-[#00D4B4]/30 blur-3xl"
      initial={{ x: '90vw', y: '90vh', rotate: 0, scale: 1 }}
      animate={{
        x: ['90vw', '70vw', '40vw', '20vw', '50vw', '80vw', '10vw'].map(v => `min(90vw, max(10vw, ${v}))`),
        y: ['90vh', '60vh', '30vh', '50vh', '70vh', '40vh', '20vh'].map(v => `min(90vh, max(10vh, ${v}))`),
        rotate: 360,
        scale: [1, 1.25, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
    />

    {/* Pulsating Background */}
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      animate={{
        background: [
          'radial-gradient(ellipse at 48% 52%, rgba(0, 212, 180, 0.14) 0%, rgba(123, 63, 228, 0.12) 100%)',
          'radial-gradient(ellipse at 54% 48%, rgba(123, 63, 228, 0.16) 0%, rgba(0, 212, 180, 0.14) 100%)',
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
    />

    <div className="container mx-auto px-4 sm:px-8 md:px-24 relative z-10">
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-['Montserrat'] font-extrabold text-white mb-12 sm:mb-16 transform -skew-x-3 drop-shadow-xl text-center md:text-left"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {Array.from('Get In Touch').map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={textVariants}
            className="inline-block"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.h2>
      
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-stretch gap-8 lg:gap-10"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        {/* Contact Info & Social Links */}
        <motion.div
          className="bg-[#1e2233]/80 backdrop-blur-xl border border-[#5538c5]/20 p-8 sm:p-10 rounded-3xl w-full lg:w-1/2 shadow-2xl hover:shadow-[#00D4B4]/20 transition-all"
          initial={{ scale: 0.95 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg sm:text-xl font-['Inter'] text-[#e8ecf5] mb-10 leading-relaxed text-center lg:text-left">
            I'd love to hear from you! Whether it's a project idea, collaboration, or just a chat about code, feel free to reach out. Connect with me below or fill out the form.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 flex-wrap">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00D4B4] hover:text-[#7B3FE4] transition-all duration-300 p-3 bg-[#fff]/60 rounded-xl hover:bg-[#f0f0f0] border border-[#00D4B4]/20 hover:border-[#7B3FE4]/40"
                whileHover={{ scale: 1.15, rotate: 8 }}
                whileTap={{ scale: 0.95, rotate: -8 }}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: inView ? index * 0.1 + 0.8 : 0, duration: 0.5, type: 'spring', stiffness: 120 }}
              >
                <img src={link.icon} alt={`${link.name} Icon`} className="w-9 h-9 sm:w-11 sm:h-11" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-[#1e2233]/85 backdrop-blur-xl border border-[#5538c5]/20 p-8 sm:p-10 rounded-3xl w-full lg:w-1/2 shadow-2xl hover:shadow-[#7B3FE4]/20 transition-all"
          initial={{ scale: 0.95 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-center text-3xl sm:text-4xl font-extrabold mb-7 bg-gradient-to-r from-[#00D4B4] to-[#7B3FE4] bg-clip-text text-transparent font-['Montserrat']">
            Let's Collaborate
          </h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-[#0d1018]/70 backdrop-blur-sm border border-[#00D4B4]/20 text-[#f0f4fb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#00D4B4] focus:border-transparent transition-all"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-[#0d1018]/70 backdrop-blur-sm border border-[#00D4B4]/20 text-[#f0f4fb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#00D4B4] focus:border-transparent transition-all"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-[#0d1018]/70 backdrop-blur-sm border border-[#00D4B4]/20 text-[#f0f4fb] placeholder-[#9ca3af] h-36 resize-none focus:outline-none focus:ring-2 focus:ring-[#00D4B4] focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="w-full text-xl font-bold py-3.5 px-6 bg-gradient-to-r from-[#00D4B4] to-[#03ab92] text-white rounded-xl hover:from-[#7B3FE4] hover:to-[#6432c7] shadow-lg hover:shadow-[#00D4B4]/40 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
    <ToastContainer />
  </section>
);

};

export default Contact;