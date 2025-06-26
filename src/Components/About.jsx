import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const skills = ['React', 'JavaScript', 'C++', 'HTML', 'CSS', 'Tailwind', 'Git & GitHub', 'DSA', 'Problem Solving'];
    const education = [
        'B.Tech in CSE (AI&ML), KIET Group of Institutions (2023-Present)',
        '12th PCM - 83.8%, Army Public School (2021-22)',
        '10th PCMB - 89%, Army Public School (2019-20)',
    ];
    const extras = [
        'Member, DevUp Club, KIET (2023-2024) - Started web dev journey with HTML/CSS',
        'Certifications: HTML, CSS, ReactJS (LinkedIn Learning)',
        'Freelance Projects: UI Clones (Refokus, TALA)',
    ];

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);

    const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
    const skillsInView = useInView(skillsRef, { once: true, margin: '-100px' });

    return (
        <section id="about" className="min-h-[90vh] bg-transparent relative overflow-hidden py-12 sm:py-16">
            {/* Revolving Blur Glowing Div 1 */}
            <motion.div
                className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#00D4B4]/30 to-[#7B3FE4]/30 blur-md"
                initial={{ x: '10vw', y: '10vh', rotate: 0, scale: 1 }}
                animate={{
                    x: ['10vw', '30vw', '50vw', '70vw', '90vw', '60vw', '20vw'].map(v => `min(90vw, max(10vw, ${v}))`),
                    y: ['10vh', '40vh', '70vh', '50vh', '30vh', '60vh', '90vh'].map(v => `min(90vh, max(10vh, ${v}))`),
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            />

            {/* Revolving Blur Glowing Div 2 */}
            <motion.div
                className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#7B3FE4]/30 to-[#00D4B4]/30 blur-md"
                initial={{ x: '90vw', y: '90vh', rotate: 0, scale: 1 }}
                animate={{
                    x: ['90vw', '70vw', '40vw', '20vw', '50vw', '80vw', '10vw'].map(v => `min(90vw, max(10vw, ${v}))`),
                    y: ['90vh', '60vh', '30vh', '50vh', '70vh', '40vh', '20vh'].map(v => `min(90vh, max(10vh, ${v}))`),
                    rotate: 360,
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            />

            {/* Revolving Blur Glowing Div 3 */}
            <motion.div
                className="absolute w-60 h-60 rounded-full bg-gradient-to-br from-[#00D4B4]/25 to-[#7B3FE4]/25 blur-md"
                initial={{ x: '30vw', y: '70vh', rotate: 0, scale: 1 }}
                animate={{
                    x: ['30vw', '60vw', '80vw', '40vw', '10vw', '50vw', '90vw'].map(v => `min(90vw, max(10vw, ${v}))`),
                    y: ['70vh', '40vh', '20vh', '60vh', '80vh', '30vh', '10vh'].map(v => `min(90vh, max(10vh, ${v}))`),
                    rotate: 360,
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            />

            {/* Animated Background Effect */}
            <motion.div
                className="absolute inset-0 z-0"
                animate={{
                    background: [
                        'radial-gradient(circle, rgba(0, 212, 180, 0.15) 0%, rgba(123, 63, 228, 0.15) 100%)',
                        'radial-gradient(circle, rgba(123, 63, 228, 0.15) 0%, rgba(0, 212, 180, 0.15) 100%)',
                    ],
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
            >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2210%22 fill=%22rgba(0,212,180,0.05)%22/%3E%3Ccircle cx=%2220%22 cy=%2220%22 r=%225%22 fill=%22rgba(123,63,228,0.05)%22/%3E%3Ccircle cx=%2280%22 cy=%2280%22 r=%227%22 fill=%22rgba(0,212,180,0.05)%22/%3E%3C/svg%22] opacity-60" />
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-16">
                    {/* Text Section */}
                    <motion.div
                        ref={aboutRef}
                        className="w-full z-10"
                        initial={{ y: 50, opacity: 0 }}
                        animate={aboutInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Montserrat'] font-bold text-white mb-4 sm:mb-6 transform -skew-x-6 drop-shadow-md">
                            About Me
                        </h2>
                        <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-xl">
                            <p className="text-xl md:text-xl font-['Inter'] font-medium text-[#E6E6E6] mb-3 sm:mb-5 leading-relaxed drop-shadow">
                                I’m a passionate front-end developer from Ghaziabad, India, specializing in React and JavaScript. My journey began with HTML and CSS, evolving into building responsive, modern web experiences. I love tackling complex UI challenges and turning ideas into pixel-perfect designs.
                            </p>
                            <h3 className="text-xl md:text-2xl font-['Montserrat'] font-semibold text-[#00D4B4] mb-2 sm:mb-3">Education</h3>
                            <ul className="list-disc list-inside text-[#E6E6E6] mb-4 sm:mb-6 space-y-3 sm:space-y-4">
                                {education.map((edu, index) => (
                                    <li key={index} className="text-lg md:text-lg">{edu}</li>
                                ))}
                            </ul>
                            <h3 className="text-xl md:text-2xl font-['Montserrat'] font-semibold text-[#00D4B4] mb-2 sm:mb-3">Extras</h3>
                            <ul className="list-disc list-inside text-[#E6E6E6] space-y-3 sm:space-y-4">
                                {extras.map((extra, index) => (
                                    <li key={index} className="text-lg md:text-lg">{extra}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        ref={skillsRef}
                        className="w-full mt-6 sm:mt-8 z-10"
                        initial={{ y: 50, opacity: 0 }}
                        animate={skillsInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-['Montserrat'] font-bold text-white mb-4 sm:mb-6 text-center md:text-left drop-shadow-md">
                            My Skills
                        </h3>
                        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    className="bg-[#1A1A1A] p-4 sm:p-5 rounded-xl text-center transform rotate-1 hover:rotate-0 hover:bg-[#00D4B4]/20 transition-all duration-300 max-w-[150px]"
                                    initial={{ scale: 0, y: 20 }}
                                    animate={skillsInView ? { scale: 1, y: 0 } : {}}
                                    transition={{ delay: skillsInView ? index * 0.1 : 0, duration: 0.6, type: 'spring', stiffness: 120 }}
                                >
                                    <span className="text-base md:text-lg font-['Fira_Code'] font-medium text-[#00D4B4] drop-shadow">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;