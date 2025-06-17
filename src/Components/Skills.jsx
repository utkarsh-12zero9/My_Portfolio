import HTMLLogo from '../assets/Images/HTML.webp';
import CSSLogo from '../assets/Images/CSS.webp';
import BootstrapLogo from '../assets/Images/Bootstrap.webp';
import JavaScriptLogo from '../assets/Images/JavaScript.webp';
import ReactLogo from '../assets/Images/ReactJS.webp';
import TailwindLogo from '../assets/Images/TailwindCSS.webp';
import FigmaLogo from '../assets/Images/Figma.webp';
import GitLogo from '../assets/Images/Git.webp';
import GitHubLogo from '../assets/Images/GitHub.webp';
import VSCodeLogo from '../assets/Images/VS Code.webp';
import gsap from "gsap";
import { useRef, useEffect } from "react";
import SkillCard from './SkillCard';


function Skills() {
    const logos = [
        { src: HTMLLogo, alt: 'HTML5' },
        { src: CSSLogo, alt: 'CSS3' },
        { src: BootstrapLogo, alt: 'Bootstrap' },
        { src: JavaScriptLogo, alt: 'JavaScript' },
        { src: ReactLogo, alt: 'React' },
        { src: TailwindLogo, alt: 'Tailwind CSS' },
        { src: FigmaLogo, alt: 'Figma' },
        { src: GitLogo, alt: 'Git' },
        { src: GitHubLogo, alt: 'GitHub' },
        { src: VSCodeLogo, alt: 'VS Code' }
    ];

    const cards = [
        { title: 'Frontend Development', skills: ['HTML5', 'CSS', 'Bootstrap', 'JavaScript', 'React.js', 'TailwindCSS'] },
        { title: 'UI/UX Design', skills: ['Responsive Design', 'Figma'] },
        { title: 'Development Tools', skills: ['Git & GitHub', 'VS Code'] }
    ];

    const headingRef = useRef(null);
    const cardRefs = useRef([]);
    const logoRefs = useRef([]);

    useEffect(() => {
        gsap.from(headingRef.current, {
            opacity: 0,
            y: -40,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from(cardRefs.current, {
            opacity: 0,
            duration: 1.4,
            x: -200,
            ease: "power2.out",
        });
        
        gsap.from(logoRefs.current, {
            opacity: 0,
            scale: 0.7,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.7)",
            delay: 0.8
        });
    }, []);

    return (
        <div className="min-h-[90vh] text-white py-16 px-4 sm:px-6 lg:px-8 ">
            <h2
                ref={headingRef}
                className="text-4xl font-bold font-serif text-white border-b-red-400 border-b-2 mb-8 "
            >
                Skills
            </h2>

            <div ref={cardRefs} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {cards.map((card, index) => (
                    <SkillCard key={index} card={card} idx={index} cardRefs={cardRefs} />
                ))}
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 sm:gap-6 lg:gap-8 h-full mt-5 place-items-center">
                {logos.map((logo, idx) => (
                    <img
                        key={idx}
                        ref={el => (logoRefs.current[idx] = el)}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-24 lg:w-24 object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills;