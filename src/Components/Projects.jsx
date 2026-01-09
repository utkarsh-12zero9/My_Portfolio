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

    // Bento grid layout configuration
    const getCardClasses = () => {
        // First card: spans 2 columns and 2 rows (large featured)
        if (index === 0) return 'md:col-span-2 md:row-span-2';
        // Fourth card: spans 2 columns, 1 row (wide)
        if (index === 3) return 'md:col-span-2 md:row-span-1';
        // Other cards: standard 1x1
        return 'md:col-span-1 md:row-span-1';
    };

    const getImageHeight = () => {
        if (index === 0) return 'h-80'; // Taller for large card
        if (index === 3) return 'h-56'; // Medium for wide card
        return 'h-64'; // Standard height
    };

    return (
        <motion.div
            className={`group relative border border-white/10 bg-gray-900/40 overflow-hidden rounded-3xl hover:border-white/20 transition-colors duration-500 ${getCardClasses()}`}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(0, 212, 180, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative h-full flex flex-col">
                <div className="px-8 pt-8 pb-4 flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold font-['Montserrat'] text-white group-hover:text-[#00D4B4] transition-colors">
                            {project.title}
                        </h3>
                        <a
                            href={project.link}
                            target="_blank"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>
                    <p className="text-gray-400 font-['Inter'] text-sm leading-relaxed mb-6">
                        {project.description}
                    </p>
                </div>

                <div className="relative mt-auto overflow-hidden rounded-b-3xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full ${getImageHeight()} object-cover object-top transform group-hover:scale-105 transition-transform duration-700`}
                    />
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
            link: 'https://modern-online-exam-portal.netlify.app/',
            image: ExamPortal,
        },
        {
            title: 'AyurSutra',
            description: "Digital management solution for Panchakarma therapy centers, streamlining patient records and scheduling.",
            link: 'https://aayursutra.netlify.app/',
            image: AyurSutra,
        },
        {
            title: 'HomeMaid',
            description: "On-demand service booking platform connecting homeowners with trusted domestic help professionals.",
            link: 'https://homemaid.netlify.app/',
            image: HomeMaid,
        },
        {
            title: 'Refokus Clone',
            description: "Pixel-perfect recreation of the award-winning Refokus website, demonstrating mastery of complex animations and layout.",
            link: 'https://refokus-ui-cl-git-463446-utkarsh-kumar-singhs-projects-f2e44fce.vercel.app/',
            image: Refokus,
        },
    ];

    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-['Montserrat'] mb-6">
                        Selected <span className="text-[#00D4B4]">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl text-lg">
                        A collection of projects that showcase my passion for building robust and beautiful web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;