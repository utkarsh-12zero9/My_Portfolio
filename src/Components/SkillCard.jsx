function SkillCard({ card, idx, cardRefs }) {
    return (
        <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="bg-black/30 h-[100%] backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:bg-black/50 transition-all duration-400 transform hover:-translate-y-2"
        >
            <h3 className="text-2xl font-bold text-red-500 mb-6 border-l-4 border-red-500 pl-4">
                {card.title}
            </h3>

            <ul className="space-y-4">
                {card.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center group">
                        <span className="text-blue-300 mr-3 group-hover:text-red-400 transition-colors"> → </span>
                        <span className="group-hover:text-blue-300 transition-colors">
                            {skill}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
