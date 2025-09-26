import { motion } from 'framer-motion';
import AyurSutra from "../assets/Images/AyurSutraLandingPage.png";
import Refokus from "../assets/Images/refokusLandingPage.png";
import HomeMaid from "../assets/Images/HomeMaid.png";

const Projects = () => {
    const projects = [
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
        <section id="projects" className="min-h-[90vh] bg-transparent relative overflow-hidden py-12 sm:py-16">
            {/* Animated Background Effect */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                animate={{
                    background: [
                        'radial-gradient(circle, rgba(0, 212, 180, 0.1) 0%, rgba(123, 63, 228, 0.1) 100%)',
                        'radial-gradient(circle, rgba(123, 63, 228, 0.1) 0%, rgba(0, 212, 180, 0.1) 100%)',
                    ],
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
            />

            <div className="container mx-auto px-4 sm:px-6 md:px-20">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-['Montserrat'] font-bold text-white mb-8 sm:mb-12 transform -skew-x-6 drop-shadow-md"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="bg-[#1A1A1A] p-6 sm:p-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl relative group"
                            initial={{ scale: 0, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', stiffness: 120 }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-xl pointer-events-none z-10 border-2 border-[#00D4B4] group-hover:border-[#03ab92]"
                                initial={{ boxShadow: '0 0 0px 0px #00D4B4' }}
                                animate={{ boxShadow: ['0 0 0px 0px #00D4B4', '0 0 8px 3px #00D4B4', '0 0 0px 0px #00D4B4'] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                                style={{ transitionProperty: 'box-shadow, border-color' }}
                            />
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={`${project.title} Screenshot`}
                                    className="w-full h-48 object-cover rounded-md mb-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                                    aria-label={`${project.title} Screenshot`}
                                />
                            )}
                            <h3 className="text-xl sm:text-2xl font-['Montserrat'] font-semibold text-[#00D4B4] mb-4">
                                {project.title}
                            </h3>
                            <p className="text-lg sm:text-xl font-['Inter'] font-medium text-[#E6E6E6] mb-4">
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                className="text-base font-semibold sm:text-lg text-[#00D4B4] hover:text-[#fff] border-2 py-1.5 px-3 rounded-lg hover:bg-[#00D4B4] transition-colors duration-300"
                                target="_blank"
                                aria-label={`View ${project.title} Project`}
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