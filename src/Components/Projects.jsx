import { useRef, useEffect } from "react";
import gsap from "gsap";
import refokus from '../assets/Images/refokusLandingPage.png';
import tala from '../assets/Images/TalaLandingPage.png';
import bubble from '../assets/Images/BubblegameLandingPage.png';
import { useGSAP } from "@gsap/react";

function Projects() {
    const headingRef = useRef(null);
    const projectRefs = useRef([]);

    const projects = [
        {
            title: "Refokus UI Clone",
            landingPageImg: refokus,
            date: "February 2025",
            tech: ["ReactJS", "Tailwind CSS", "JavaScript", "Framer Motion"],
            description: "Cloned the Refokus website UI using React.js, replicating its modern design and animations. Delivered pixel-perfect accuracy and optimized performance for seamless cross-device functionality.",
            codeLink: "https://github.com/utkarsh-12zero9/Refokus-UI-Clone",
            liveLink: "https://refokus-ui-cl-git-463446-utkarsh-kumar-singhs-projects-f2e44fce.vercel.app/"
        },
        {
            title: "TALA UI Clone",
            landingPageImg: tala,
            date: "January 2025",
            tech: ["HTML", "CSS", "JavaScript", "GSAP"],
            description: "Cloned a website of TALA (fruit-based snacks) using HTML, CSS, and JS. Added interactive UI and smooth scroll animations with GSAP for enhanced visuals.",
            codeLink: "https://github.com/utkarsh-12zero9/Tala-UI-Clone",
            liveLink: "https://utkarsh-12zero9.github.io/Tala-UI-Clone/"
        },
        {
            title: "Bubble Game",
            landingPageImg: bubble,
            date: "December 2024",
            tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
            description: "Built a simple bubble popping game while learning JavaScript. Improved logical thinking and explored event bubbling for DOM interactions.",
            codeLink: "https://github.com/utkarsh-12zero9/Bubble-Game",
            liveLink: "https://github.com/utkarsh-12zero9/Bubble-Game"
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(headingRef.current, {
            opacity: 0,
            y: -40,
            duration: 1,
            ease: "power2.out"
        });
        return tl;
    }, [headingRef]);
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(projectRefs.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
        });
        return tl;
    }, [projectRefs]);

    return (
        <div className="min-h-[90vh] text-white py-16 px-4 sm:px-6 lg:px-8">
            <h2
                ref={headingRef}
                className="text-4xl font-bold font-serif text-white border-b-red-400 border-b-2 mb-8 "
            >
                Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={el => projectRefs.current[index] = el}
                        className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <img 
                            src={project.landingPageImg} 
                            alt={`${project.title} landing page`} 
                            className="w-full h-40 object-cover rounded-md mb-2"
                        />
                        <div className="mb-2 text-sm text-gray-400">{project.date}</div>
                        <p className="text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, idx) => (
                                <span key={idx} className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white text-white font-medium px-3 py-1 rounded hover:bg-white hover:text-black transition"
                            >
                                GitHub
                            </a>
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white text-white font-medium px-3 py-1 rounded hover:bg-white hover:text-black transition"
                            >
                                Live
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;