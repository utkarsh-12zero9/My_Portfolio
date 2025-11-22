import { motion, useScroll, useTransform } from 'framer-motion';
import Profile from "../assets/Images/Profile.jpg";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section
            id="home"
            className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#7B3FE4] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-[#00D4B4] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-[#7B3FE4] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ y: y1 }}
                >
                    <motion.div
                        className="inline-block px-4 py-1.5 mb-6 border border-[#00D4B4]/30 rounded-full bg-[#00D4B4]/5 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-[#00D4B4] font-mono text-sm tracking-wider">Available for work</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-['Montserrat'] leading-tight tracking-tighter mb-6">
                        Building <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#fff] to-[#999]">
                            Digital
                        </span>{' '}
                        <span className="italic font-serif font-light text-[#00D4B4]">
                            Experiences
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed mb-10 font-['Inter']">
                        I'm Utkarsh, a Full Stack Developer crafting accessible, pixel-perfect interfaces with modern technologies.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#projects"
                            className="px-8 py-4 bg-[#E6E6E6] text-black font-bold rounded-full hover:bg-white transition-colors flex items-center gap-2 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Work
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    className="relative hidden md:block"
                    style={{ y: y2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        {/* Abstract Shapes */}
                        <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow" />
                        <div className="absolute inset-4 border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

                        {/* Image Container */}
                        <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4B4]/20 to-[#7B3FE4]/20 mix-blend-overlay z-10" />
                            <img
                                src={Profile}
                                alt="Utkarsh Kumar Singh"
                                className="w-full h-full object-cover transition-all duration-700 scale-110 hover:scale-100"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -right-4 top-1/4 glass-panel p-4 rounded-2xl"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#00D4B4]/20 flex items-center justify-center text-[#00D4B4]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400">Stack</div>
                                    <div className="font-bold text-sm">MERN</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;