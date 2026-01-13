import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import AyurSutra from "../assets/Images/AyurSutraLandingPage.png";
import Refokus from "../assets/Images/refokusLandingPage.png";
import HomeMaid from "../assets/Images/HomeMaid.png";
import ExamPortal from "../assets/Images/ExamPortal.png";

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
            className="group relative border border-white/10 bg-gray-900/40 overflow-hidden rounded-2xl hover:border-[#00D4B4]/40 transition-all duration-500"
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
                            500px circle at ${mouseX}px ${mouseY}px,
                            rgba(0, 212, 180, 0.2),
                            transparent 70%
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

                    {/* External Link Button */}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-white/5 hover:bg-[#00D4B4]/20 border border-white/10 hover:border-[#00D4B4]/40 text-white/70 hover:text-[#00D4B4] transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
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
            title: "ExamPortal",
            description: "A comprehensive online examination system featuring real-time proctoring, role-based access control, and detailed analytics. Built for scalability and security.",
            category: "Full Stack",
            link: 'https://modern-online-exam-portal.netlify.app/',
            image: ExamPortal,
            tech: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"]
        },
        {
            title: 'HomeMaid',
            description: "On-demand service booking platform connecting homeowners with trusted domestic help professionals.",
            category: "Service Platform",
            link: 'https://homemaid.netlify.app/',
            image: HomeMaid,
            tech: ["React", "Redux", "REST API"]
        },
        {
            title: 'AyurSutra',
            description: "Digital management solution for Panchakarma therapy centers, streamlining patient records and scheduling.",
            category: "Healthcare",
            link: 'https://aayursutra.netlify.app/',
            image: AyurSutra,
            tech: ["React", "Tailwind",]
        },
        {
            title: 'Refokus Clone',
            description: "Pixel-perfect recreation of the award-winning Refokus website, demonstrating mastery of complex animations and layout.",
            category: "UI Clone",
            link: 'https://refokus-ui-cl-git-463446-utkarsh-kumar-singhs-projects-f2e44fce.vercel.app/',
            image: Refokus,
            tech: ["React", "Framer Motion", "GSAP"]
        },
    ];

    return (
        <section id="projects" className="py-32 relative">
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