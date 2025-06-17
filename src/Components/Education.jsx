import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Education() {
    
    const cardData = [
        { title: "KIET Group of Institutions, Ghaziabad", degree: "Bachelor of Technology in CSE(AI&ML)", duration: "October 2023 - Present", location: "Ghaziabad, India", percentage: null },
        { title: "Army Public School, Varanasi (CBSE)", degree: "12th with PCM", duration: "2021-22", location: null, percentage: "83.8%" },
        { title: "Army Public School, Varanasi (CBSE)", degree: "10th with PCMB", duration: "2019-20", location: null, percentage: "89%" },
    ];
    
    const cardRef = useRef(null);
    const headingRef = useRef(null);

    useGSAP( () => {
        const tl = gsap.timeline();
        tl.from(headingRef.current, {
            opacity: 0,
            duration: 1,
            y: -100,
            ease: "power2.out",
        });
        return tl;
    }, [headingRef]);
    
    useGSAP( () => {
        const tl = gsap.timeline();
        tl.from(cardRef.current, {
            opacity: 0,
            delay: 1,
            duration: 1.4,
            x: -500,
            ease: "power2.out",
        });
        return tl;
    }, [cardRef]);


    return (
        <div className="h-[90vh] text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                <h2 ref={headingRef} className="text-4xl font-bold font-serif text-white border-b-red-400 border-b-2 mb-8 ">
                    Education
                </h2>
                
                <div ref={cardRef} className="space-y-10">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-opacity-20 bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-opacity-30 transition duration-300 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-semibold text-red-400">{card.title}</h3>
                            <p className="text-lg text-white mt-2">{card.degree}</p>
                            <div className="flex justify-between items-center mt-4 text-white">
                                {card.percentage && <p className="text-sm">Percentage - {card.percentage}</p>}
                                <p className="text-sm">{card.duration}</p>
                                {card.location && <p className="text-sm">{card.location}</p>}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
export default Education;