import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const InternshipCard = ({ internship, index }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className="group relative border border-white/10 bg-gray-900/40 overflow-hidden rounded-3xl hover:border-white/20 transition-colors duration-500"
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

            <div className="relative p-8">
                {/* Company & Role Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold font-['Montserrat'] text-white group-hover:text-[#00D4B4] transition-colors">
                                {internship.company}
                            </h3>
                            {internship.website && (
                                <a
                                    href={internship.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                        </div>
                        <p className="text-lg text-[#00D4B4]/80 font-['Inter'] font-medium mb-1">
                            {internship.role}
                        </p>
                        <p className="text-sm text-gray-500 font-['Inter']">
                            {internship.duration}
                        </p>
                    </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                    {internship.responsibilities.map((responsibility, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.3 }}
                        >
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00D4B4] flex-shrink-0" />
                            <p className="text-gray-400 font-['Inter'] text-sm leading-relaxed">
                                {responsibility}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Technologies Badge */}
                {internship.technologies && (
                    <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                            {internship.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-xs font-['Inter'] font-medium bg-white/5 text-[#00D4B4]/80 rounded-full border border-white/10"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Certificate & LOR Links */}
                        <div className="flex gap-3">
                            {internship.certificateUrl && (
                                <a
                                    href={internship.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-[#00D4B4] rounded-xl hover:bg-white transition-colors"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Certificate
                                </a>
                            )}
                            {internship.lorUrl && (
                                <a
                                    href={internship.lorUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-white/10 border border-white/10 rounded-xl hover:bg-[#00D4B4] hover:text-black transition-colors"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    LOR
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const Internships = () => {
    const internships = [
        {
            company: "Rablo Innovative",
            role: "Frontend Developer & Frontend Team Lead",
            duration: "November 2025 - February 2026",
            website: "https://www.linkedin.com/company/rabloskillup/",
            responsibilities: [
                "Served as Frontend Team Lead at Rablo.in; built 35% of core product features (including dashboards and UI modules) and led their implementation across development, API integration, and deployment.",
                "Built high-fidelity, scalable, and responsive user interfaces from complex Figma designs using Next.js and TypeScript.",
                "Owned frontend architecture and component design, enforced code quality through reviews, and mentored team members on best practices.",
                "Integrated backend APIs for authentication, dynamic data handling, and business workflows, while optimizing performance and achieving Lighthouse scores of 85+."
            ],
            technologies: ["Next.js", "TypeScript", "React", "Figma", "API Integration", "Tailwind CSS"],
            certificateUrl: "https://drive.google.com/file/d/12G8zzeF57NLxP-bPwVAGQ97DZXdViYON/view",
            lorUrl: "https://drive.google.com/file/d/1cbH0nlIhzUvFAwMgYnZRr3Cpr8WwgvvJ/view?usp=sharing"
        }
    ];

    return (
        <section id="internships" className="py-16 relative">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-['Montserrat'] mb-6">
                        Professional <span className="text-[#00D4B4]">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl text-lg">
                        Industry experience working on real-world projects and leading development teams.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {internships.map((internship, index) => (
                        <InternshipCard key={index} internship={internship} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;