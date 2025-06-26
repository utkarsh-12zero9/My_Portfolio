import { motion } from 'framer-motion';
import Tala from "../assets/Images/TalaLandingPage.png";
import Refokus from "../assets/Images/RefokusLandingPage.png";
import BubbleGame from "../assets/Images/BubbleGameLandingPage.png";

const Projects = () => {
  const projects = [
    {
      title: 'Refokus UI Clone',
      description: 'A responsive UI clone of the Refokus website, built with React and Tailwind CSS.',
      link: 'https://refokus-ui-cl-git-463446-utkarsh-kumar-singhs-projects-f2e44fce.vercel.app/',
      image: Refokus, 
    },
    {
      title: 'TALA UI Clone',
      description: 'A modern UI clone of the TALA website, focusing on pixel-perfect design with HTML/CSS.',
      link: 'https://utkarsh-12zero9.github.io/Tala-UI-Clone/',
      image: Tala, 
    },
    {
      title: 'Bubble Game',
      description: 'A fun interactive bubble-popping game developed with JavaScript and Canvas.',
      link: 'https://github.com/utkarsh-12zero9/Bubble-Game',
      image: BubbleGame,
    },
    {
      title: 'Upcoming Project',
      description: 'Stay tuned for my next exciting project!',
      link: '#',
      image: '', 
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
          className="text-3xl sm:text-4xl md:text-5xl font-['Montserrat'] font-bold text-white mb-8 sm:mb-12 text-center transform -skew-x-6 drop-shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-[#1A1A1A] p-6 sm:p-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', stiffness: 120 }}
            >
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