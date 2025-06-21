import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Contact() {
    const contacts = [
        
        {
            icon: <FaEnvelope size={22} />,
            label: "Email",
            value: "utkarshkumarsingh12003@gmail.com",
            link: "mailto:utkarshkumarsingh12003@gmail.com"
        },
        {
            icon: <FaLinkedin size={22} />,
            label: "LinkedIn",
            value: "utkarsh-12zero9",
            link: "https://www.linkedin.com/in/utkarsh-12zero9/"
        },
        {
            icon: <FaGithub size={22} />,
            label: "GitHub",
            value: "utkarsh-12zero9",
            link: "https://github.com/utkarsh-12zero9"
        },
        {
            icon: <FaCode size={22} />,
            label: "LeetCode",
            value: "utkarsh120903",
            link: "https://leetcode.com/u/utkarsh120903/"
        }
    ];

    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#0f0f0f] py-16 px-4">
            <div className="w-full max-w-2xl mx-auto">
                <h2 className="text-5xl font-extrabold font-serif text-center text-white mb-6 tracking-tight">
                    Get in Touch
                </h2>
                <p className="text-center text-lg text-gray-200 mb-12">
                    I’d love to connect! Reach out via any of the platforms below.
                </p>
                <div className="bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col items-center mb-10 border border-gray-200">
                    <p className="text-2xl font-semibold text-gray-900 font-serif mb-1">Utkarsh Kumar Singh</p>
                    <p className="text-gray-700 mb-2">Ghaziabad, India</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contacts.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/90 hover:bg-gray-100 p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
                            aria-label={contact.label}
                        >
                            <div className="text-red-500 group-hover:scale-110 transition-transform duration-200">
                                {contact.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">{contact.label}</span>
                                <span className="text-base text-gray-900 font-medium break-all">{contact.value}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
        );
}

export default Contact;