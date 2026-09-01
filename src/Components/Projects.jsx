import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import HomeMaid from "../assets/Images/HomeMaid.png";
import ExamPortal from "../assets/Images/ExamPortal.png";
import pdfIntelChatbot from "../assets/Images/pdfIntelChatbot.png";

const ProjectCard = ({ project, index }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className="group relative border border-white/10 bg-gray-950/60 overflow-hidden rounded-2xl hover:border-[#00F5D4]/70 hover:shadow-[0_0_35px_rgba(0,245,212,0.2)] transition-all duration-500 backdrop-blur-xl"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8 }}
        >
            {/* Animated gradient border effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            550px circle at ${mouseX}px ${mouseY}px,
                            rgba(0, 245, 212, 0.35),
                            rgba(123, 63, 228, 0.18) 40%,
                            transparent 75%
                        )
                    `,
                }}
            />

            <div className="relative h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-56">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90 z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1.5 text-xs font-semibold font-['Inter'] bg-gray-900/80 text-[#00D4B4] border border-[#00D4B4]/50 rounded-full backdrop-blur-xl shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
                            {project.category}
                        </span>
                    </div>

                    {/* External & GitHub Links */}
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-gray-900/80 hover:bg-[#00D4B4]/20 border border-white/20 hover:border-[#00D4B4]/50 text-white/80 hover:text-[#00D4B4] transition-all duration-300 backdrop-blur-md shadow-lg hover:scale-105"
                                aria-label={`View ${project.title} source code on GitHub`}
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-gray-900/80 hover:bg-[#00D4B4]/20 border border-white/20 hover:border-[#00D4B4]/50 text-white/80 hover:text-[#00D4B4] transition-all duration-300 backdrop-blur-md shadow-lg hover:scale-105"
                                aria-label={`View ${project.title} live demo`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold font-['Montserrat'] text-white mb-3 group-hover:text-[#00D4B4] transition-colors duration-300">
                        {project.title}
                    </h3>

                    <p className="text-gray-400 font-['Inter'] text-sm leading-relaxed mb-6 flex-1">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="px-3 py-1 text-xs font-medium font-['Fira Code'] bg-white/5 text-gray-300 rounded-lg border border-white/10 group-hover:border-[#00D4B4]/20 group-hover:text-[#00D4B4] transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "TeaserAI",
            description: "AI-powered video teaser generator that transforms long videos into engaging highlights by extracting speech-to-text transcripts, identifying peak viral moments, and slicing ready-to-share teasers.",
            category: "AI & ML",
            link: 'https://teaserai.vercel.app/',
            github: 'https://github.com/utkarsh-12zero9/TeaserAI',
            image: pdfIntelChatbot,
            tech: ["React.js", "FastAPI", "Gemini API", "GenAI"]
        },
        {
            title: "RAG Chatbot",
            description: "Developed a Full-Stack RAG chatbot using Next.js, FastAPI, LangChain, Hugging Face LLMs, and FAISS for AI-powered document Q&A with vector embeddings, semantic retrieval, and Tesseract OCR.",
            category: "AI & ML",
            link: 'https://pdf-intel-chatbot.vercel.app/',
            github: 'https://github.com/utkarsh-12zero9/PDF_Chatbot',
            image: pdfIntelChatbot,
            tech: ["Next.js", "FastAPI", "LangChain", "Hugging Face", "FAISS", "Tailwind CSS"]
        },
        {
            title: "ExamPortal",
            description: "Designed and developed a secure, scalable online exam portal enabling educational institutions to manage exams and users with React, Redux Toolkit, Tailwind CSS, Lucide React, and React Router.",
            category: "EdTech",
            link: 'https://modern-online-exam-portal.netlify.app/',
            github: 'https://github.com/utkarsh-12zero9/Online-Exam-Portal',
            image: ExamPortal,
            tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind CSS", "Lucide React"]
        },
        {
            title: 'HomeMaid',
            description: "Developed a responsive service booking web app to hire local domestic help using modern frontend stack. Ensured cross-device compatibility and deployed using Netlify.",
            category: "Service Platform",
            link: 'https://homemaid.netlify.app/',
            github: 'https://github.com/utkarsh-12zero9/HomeMaid',
            image: HomeMaid,
            tech: ["React", "Redux", "REST API", "Tailwind CSS", "Netlify"]
        },
    ];

    return (
        <section id="projects" className="py-16 relative">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-['Montserrat'] mb-6">
                        Selected <span className="text-[#00D4B4]">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                        A collection of projects that showcase my passion for building robust and beautiful web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
