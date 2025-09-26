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
            className="min-h-[90vh] bg-transparent relative overflow-hidden py-12 sm:py-16"
        >
            {/* Orbiting Glow Divs */}
            <motion.div
                className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-[#00D4B4]/30 to-[#7B3FE4]/30 blur-md"
                initial={{ x: '10vw', y: '10vh', rotate: 0, scale: 1 }}
                animate={{
                    x: ['10vw', '30vw', '50vw', '70vw', '90vw', '60vw', '20vw'].map(v => `min(90vw, max(10vw, ${v}))`),
                    y: ['10vh', '40vh', '70vh', '50vh', '30vh', '60vh', '90vh'].map(v => `min(90vh, max(10vh, ${v}))`),
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            />
            <motion.div
                className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#7B3FE4]/30 to-[#00D4B4]/30 blur-md"
                initial={{ x: '90vw', y: '90vh', rotate: 0, scale: 1 }}
                animate={{
                    x: ['90vw', '70vw', '40vw', '20vw', '50vw', '80vw', '10vw'].map(v => `min(90vw, max(10vw, ${v}))`),
                    y: ['90vh', '60vh', '30vh', '50vh', '70vh', '40vh', '20vh'].map(v => `min(90vh, max(10vh, ${v}))`),
                    rotate: 360,
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            />

            {/* Pulsating Background */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                animate={{
                    background: [
                        'radial-gradient(circle, rgba(0, 212, 180, 0.15) 0%, rgba(123, 63, 228, 0.15) 100%)',
                        'radial-gradient(circle, rgba(123, 63, 228, 0.2) 0%, rgba(0, 212, 180, 0.2) 100%)',
                    ],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            />

            <div className="container mx-auto px-4 sm:px-6 md:px-20">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-['Montserrat'] font-bold text-white mb-8 sm:mb-12 transform -skew-x-6 drop-shadow-md"
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
                    className="flex flex-col md:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-12"
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                >
                    {/* Contact Info & Social Links */}
                    <motion.div
                        className="bg-[#1A1A1A] p-6 sm:p-8 rounded-xl w-full md:w-1/2 text-center md:text-left"
                        initial={{ scale: 0.9 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <p className="text-lg sm:text-xl font-['Inter'] font-medium text-[#E6E6E6] mb-6">
                            I’d love to hear from you! Whether it’s a project idea, collaboration, or just a chat about code, feel free to reach out. Connect with me below or fill out the form.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-6 sm:space-x-8">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00D4B4] hover:text-[#7B3FE4] transition-all duration-300"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9, rotate: -10 }}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={inView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ delay: inView ? index * 0.1 + 0.8 : 0, duration: 0.5, type: 'spring', stiffness: 120 }}
                                >
                                    <img src={link.icon} alt={`${link.name} Icon`} className="w-8 h-8 sm:w-10 sm:h-10" />
                                    <span className="sr-only">{link.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-[#1A1A1A] p-6 sm:p-8 rounded-xl w-full md:w-1/2"
                        initial={{ scale: 0.9 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h1 className="text-center text-3xl font-bold mb-5 font-serif">Let's collaborate</h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg bg-[#0A0A0A] text-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#00D4B4]"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full p-3 rounded-lg bg-[#0A0A0A] text-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#00D4B4]"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full p-3 rounded-lg bg-[#0A0A0A] text-[#E6E6E6] h-32 focus:outline-none focus:ring-2 focus:ring-[#00D4B4]"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full text-xl font-semibold py-2 px-4 bg-[#00D4B4] text-white rounded-lg hover:bg-[#7B3FE4] transition-colors duration-300 cursor-pointer"
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