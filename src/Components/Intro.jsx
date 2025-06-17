import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Intro() {

    const photoRef = useRef(null);
    const nameRef = useRef(null);
    const aboutHeadingRef = useRef(null);
    const aboutParaRef = useRef(null);


    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(photoRef.current, {
            opacity: 0,
            duration: 1.4,
            x: -200,
            ease: "power2.out",
        });
        return tl;
    }, [photoRef]);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(nameRef.current, {
            opacity: 0,
            duration: 1.4,
            delay: 1,
            y: 50,
            ease: "power2.out",
        });
        return tl;
    }, [nameRef]);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(aboutHeadingRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 1.2,
            ease: "power2.out",
        })
        .from(aboutParaRef.current, {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "power2.out",
        }, "-=0.6");
        return tl;
    }, [aboutHeadingRef, aboutParaRef]);


    return (
        <>
            <div className="min-h-[90vh] flex flex-col lg:flex-row text-white">
                {/* Image and Name */}
                <div className="w-full lg:w-[50%]">
                    <div className='text-white h-full mt-5 w-full flex flex-col justify-center gap-5 items-center'>
                        <img 
                            ref={photoRef}
                            className="object-cover rounded-4xl w-[100%] max-w-xs lg:w-[100%]"
                            src="/Images/Profile.jpg"
                            alt="Profile"
                        />
                        <h1 ref={nameRef} className="text-3xl lg:text-4xl text-blue-300 font-bold font-serif text-center lg:text-left">Utkarsh Kumar Singh</h1>
                    </div>
                </div>

                {/* About Section */}
                <div className="w-full lg:w-[50%]">
                    <div className='text-white h-full mt-5 w-full flex flex-col justify-center gap-5 items-center lg:items-start'>
                        <h1 ref={aboutHeadingRef} className="text-3xl lg:text-4xl font-bold font-serif text-white border-b-red-400 border-b-2 mb-3 text-center lg:text-left">About Me</h1>
                        <p ref={aboutParaRef} className="text-base lg:text-lg text-center lg:text-left px-2 lg:px-0">
                            Hey! Welcome to my portfolio. <br /> <br/> 

                            I am a passionate frontend developer with experience in building dynamic and responsive web applications. <br /> <br />

                            I specialize in React and have a strong foundation in HTML, CSS, and JavaScript. My goal is to create user-friendly interfaces that enhance the overall user experience. <br/>
                            I am always eager to learn new technologies and improve my skills. In my free time, I enjoy exploring new frameworks and dive deep into modern web development practices. <br /> <br />

                            I believe in the power of collaboration and enjoy working in teams to bring ideas to life. Let's connect and create something amazing together! <br /> <br />

                            Feel free to reach out to me for any opportunities or collaborations. <br />
                            I am always open to new challenges and excited to contribute to innovative projects.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;