import { useRef, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import gsap from "gsap";

function Contact() {
    const headingRef = useRef(null);
    const cardRefs = useRef([]);

    const contacts = [
        {
            icon: <FaPhoneAlt size={24} />,
            label: "Phone",
            value: "+91-7897573300",
            link: "tel:+917897573300"
        },
        {
            icon: <FaEnvelope size={24} />,
            label: "Email",
            value: "utkarshkumarsingh12003@gmail.com",
            link: "mailto:utkarshkumarsingh12003@gmail.com"
        },
        {
            icon: <FaLinkedin size={24} />,
            label: "LinkedIn",
            value: "LinkedIn Profile",
            link: "https://www.linkedin.com/in/utkarsh-12zero9/"
        },
        {
            icon: <FaGithub size={24} />,
            label: "GitHub",
            value: "GitHub Profile",
            link: "https://github.com/utkarsh-12zero9"
        },
        {
            icon: <FaCode size={24} />,
            label: "LeetCode",
            value: "LeetCode Profile",
            link: "https://leetcode.com/u/utkarsh120903/"
        }
    ];

    useEffect(() => {
        gsap.from(headingRef.current, {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from(cardRefs.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.3
        });
    }, []);

    return (
        <div className="min-h-[90vh] text-white py-20 px-6 sm:px-10 lg:px-20 bg-[#0f0f0f]">
            <h2
                ref={headingRef}
                className="text-4xl font-bold font-serif text-white border-b-red-400 border-b-2 mb-8 "
            >
                Contact
            </h2>

            <div className="text-center mb-12 text-gray-300">
                <p className="text-2xl font-serif font-semibold text-white">Utkarsh Kumar Singh</p>
                <p>Ghaziabad, India</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        ref={el => (cardRefs.current[index] = el)}
                        className="flex items-center gap-4 bg-[#1f1f1f] p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="text-red-400">{contact.icon}</div>
                        <div className="text-left">
                            <p className="text-sm text-gray-400">{contact.label}</p>
                            <p className="text-base text-white break-all">{contact.value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contact;