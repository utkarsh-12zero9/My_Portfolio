import { motion } from 'framer-motion';
import AyurSutra from "../assets/Images/AyurSutraLandingPage.png";
import Refokus from "../assets/Images/refokusLandingPage.png";
import HomeMaid from "../assets/Images/HomeMaid.png";
import ExamPortal from "../assets/Images/ExamPortal.png";

const Projects = () => {
    const projects = [
        {
            title: "ExamPortal",
            description: "Built a secure, scalable online exam portal with React, Redux Toolkit, Tailwind CSS, role-based access, real-time proctoring, analytics, and full exam/course management. Added session persistence, mobile responsiveness, accessibility, and deployment-ready builds.",
            link: 'https://modern-online-exam-portal.netlify.app/',
            image: ExamPortal,
        },
        {
            title: 'AyurSutra',
            description: "AyurSutra, Panchakarma Patient Management and Therapy Scheduling Software. I handled the Frontend development using React, Tailwind CSS, and Axios.",
            link: 'https://aayursutra.netlify.app/',
            image: AyurSutra,
        },
        {
            title: 'HomeMaid',
            description: 'HomeMaid is a responsive service booking website inspired by real-world needs, crafted with React and Tailwind CSS to deliver a seamless user experience.',
            link: 'https://homemaid.netlify.app/',
            image: HomeMaid,
        },
        {
            title: 'Refokus UI Clone',
            description: 'A responsive UI clone of the Refokus website, built with React and Tailwind CSS.',
            link: 'https://refokus-ui-cl-git-463446-utkarsh-kumar-singhs-projects-f2e44fce.vercel.app/',
            image: Refokus,
        },
    ];

    return (
    <section
        id="projects"
        className="min-h-[90vh] bg-transparent relative overflow-hidden py-16 sm:py-20"
    >
        {/* Background Animation */}
        <motion.div
            className="absolute inset-0 z-0 pointer-events-none opacity-70"
            animate={{
                background: [
                    'radial-gradient(circle at center, rgba(0,212,180,0.10), rgba(123,63,228,0.10))',
                    'radial-gradient(circle at center, rgba(123,63,228,0.10), rgba(0,212,180,0.10))',
                ],
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-20 relative z-10">
            {/* Section Heading */}
            <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-['Montserrat'] font-bold text-white mb-10 sm:mb-14 tracking-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Projects
            </motion.h2>

            {/* Projects Grid */}
            <div className="sm:text-sm md:text-md grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="bg-[#121212]/70 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-[#00D4B4]/20 transition-all duration-300 hover:-translate-y-2 relative group"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.6,
                            type: "spring",
                            stiffness: 120,
                        }}
                    >
                        {/* Soft Glow Border */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-[#00D4B4]/40 transition-all duration-300"
                            animate={{
                                boxShadow: [
                                    "0 0 0px rgba(0,212,180,0)",
                                    "0 0 15px rgba(0,212,180,0.35)",
                                    "0 0 0px rgba(0,212,180,0)",
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        />

                        {/* Project Image */}
                        {project.image && (
                            <img
                                src={project.image}
                                alt={`${project.title} Screenshot`}
                                className="w-full h-52 object-cover rounded-lg mb-5 shadow-md hover:shadow-xl transition-all duration-300"
                            />
                        )}

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-['Montserrat'] font-semibold text-[#00D4B4] mb-3">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base sm:text-lg font-['Inter'] text-[#E6E6E6] mb-5 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Button */}
                        <a
                            href={project.link}
                            target="_blank"
                            aria-label={`View ${project.title} Project`}
                            className="inline-block text-sm sm:text-base font-semibold text-[#00D4B4] hover:text-black border border-[#00D4B4] px-4 py-2 rounded-lg hover:bg-[#00D4B4] transition-all duration-300"
                        >
                            View Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

};

export default Projects;