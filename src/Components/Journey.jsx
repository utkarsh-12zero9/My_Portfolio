import { motion } from 'framer-motion';

const journey = [
    {
        year: "2020",
        title: "Secondary Education (10th)",
        description: "Completed 10th grade at Army Public School with 89%. This was where my interest in technology began to take root.",
        status: "Completed",
        color: "#00D4B4"
    },
    {
        year: "2022",
        title: "Higher Secondary (12th)",
        description: "Graduated with 83.8% from Army Public School. Focused on Physics, Chemistry, and Mathematics, laying the groundwork for engineering.",
        status: "Completed",
        color: "#7B3FE4"
    },
    {
        year: "2023",
        title: "The Turning Point: JEE Preparation",
        description: "Took a gap year for JEE preparation. While I managed an 89%ile in Mains, this period was more about character building and discovering my true passion for programming.",
        status: "Transformation",
        color: "#F6AD55"
    },
    {
        year: "2023",
        title: "B.Tech at KIET Group of Institutions",
        description: "Joined KIET (affiliated with AKTU) in Computer Science & Engineering (AI & ML). A new chapter in my technical journey began.",
        status: "Milestone",
        color: "#00D4B4"
    },
    {
        year: "2024",
        title: "Web Dev Mastery & DSA Grinding",
        description: "Dived deep into the MERN stack and modern frontend tools. Alongside web development, I was grinding myself with DSA, solving hundreds of challenges.",
        status: "Growth",
        color: "#7B3FE4"
    },
    {
        year: "2025",
        title: "Professional Breakthrough: Rablo Innovate",
        description: "Secured an internship at Rablo Innovate as a Frontend Developer and was quickly promoted to Team Lead. Built 35% of core product features.",
        status: "Professional",
        color: "#00D4B4"
    },
    {
        year: "2026",
        title: "Current Focus: AI & ML",
        description: "Currently specializing in Machine Learning, building scalable architectures, and preparing for the next big transition in my career.",
        status: "Evolving",
        color: "#7B3FE4"
    }
];

const JourneyCard = ({ milestone, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col md:flex-row gap-8 mb-16 md:mb-24 relative pl-10 md:pl-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>
            {/* Heading Section (Year, Title, Status) */}
            <div className={`flex-1 flex flex-col items-start md:items-inherit ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-4xl md:text-7xl font-bold font-['Montserrat'] text-white/20 group-hover:text-[#00D4B4]/40 transition-colors duration-500">
                        {milestone.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-1 md:mt-2 font-['Montserrat'] group-hover:text-[#00D4B4] transition-colors">
                        {milestone.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="w-2 h-2 rounded-full bg-[#00D4B4] animate-ping opacity-75" />
                        <p className="text-[#00D4B4] text-xs md:text-sm font-semibold uppercase tracking-widest">
                            {milestone.status}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Timeline Center Node */}
            <div className="absolute left-0 top-0 bottom-[-64px] md:bottom-0 md:relative md:left-auto md:top-auto md:flex md:justify-center md:w-auto">
                <div className="w-0.5 h-full bg-gradient-to-b from-[#00D4B4]/50 via-white/10 to-[#7B3FE4]/50 absolute top-0 bottom-0 left-[7px] md:left-1/2 md:-translate-x-1/2" />
                <motion.div
                    className="w-5 h-5 rounded-full bg-[#050505] border-4 border-[#00D4B4] relative z-10 mt-2 md:mt-0 shadow-[0_0_12px_#00D4B4] group-hover:scale-125 transition-transform"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                />
            </div>

            {/* Summary Section (Description Card) */}
            <div className={`flex-1 flex flex-col items-start ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                >
                    <div className={`p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-[#00D4B4]/30 group-hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm max-w-md ${!isEven ? 'md:ml-auto' : ''}`}>
                        <p className="text-gray-400 text-base md:text-sm leading-relaxed font-['Inter'] group-hover:text-gray-300 transition-colors">
                            {milestone.description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const Journey = () => {
    return (
        <section id="journey" className="py-16 relative overflow-hidden z-10">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
                <motion.div
                    className="mb-24 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-['Montserrat'] mb-6">
                        My <span className="text-[#00D4B4]">Journey</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A timeline of my growth, challenges, and the milestones that shaped my path in technology.
                    </p>
                </motion.div>

                <div className="relative">
                    {journey.map((milestone, index) => (
                        <JourneyCard key={index} milestone={milestone} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
