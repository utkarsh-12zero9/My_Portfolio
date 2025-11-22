import { motion } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const skills = [
        'JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript',
        'Tailwind CSS', 'Next.js', 'MongoDB', 'PostgreSQL',
        'Git', 'GSAP', 'Framer Motion'
    ];

    const education = [
        {
            degree: 'B.Tech in CSE (AI&ML)',
            institution: 'KIET Group of Institutions',
            year: '2023-Present'
        },
        {
            degree: 'Higher Secondary School (PCM)',
            institution: 'Army Public School',
            year: '2021-22'
        },
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-['Montserrat'] mb-8">
                            About <span className="text-[#00D4B4]">Me</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-400 font-['Inter'] leading-relaxed">
                            <p>
                                I’m a passionate Full Stack Developer based in Ghaziabad, India. My journey in tech started with a curiosity for how things work on the web, which quickly evolved into a career building robust applications.
                            </p>
                            <p>
                                I specialize in the MERN stack and modern frontend ecosystems. I love solving complex problems and translating them into intuitive, pixel-perfect user interfaces. When I'm not coding, I'm exploring new technologies or contributing to open source.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-white mb-6 font-['Montserrat']">Education</h3>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-2 border-[#00D4B4]/30 pl-6 py-1">
                                        <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                                        <p className="text-[#00D4B4]">{edu.institution}</p>
                                        <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 font-['Montserrat']">Technical Arsenal</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-[#00D4B4]/10 hover:border-[#00D4B4]/30 hover:text-[#00D4B4] transition-colors cursor-default"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#00D4B4]/10 to-[#7B3FE4]/10 border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#00D4B4] rounded-full blur-3xl opacity-20" />
                            <h4 className="text-xl font-bold text-white mb-4 relative z-10">Beyond Code</h4>
                            <ul className="space-y-3 text-gray-400 relative z-10">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4B4]" />
                                    Member of DevUp Club, KIET
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7B3FE4]" />
                                    Team Player
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4B4]" />
                                    Quick Learner
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;