import Hero from "./Components/Hero";
import Header from "./Layout/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Layout/Footer";
import { useEffect, useState } from "react";
import Resume from "./Components/Resume";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
                <div className="w-16 h-16 border-4 border-[#00D4B4] border-t-transparent rounded-full animate-spin mr-5"></div> Loading
            </div>
        );
    }

    return (
        <div className={`relative min-h-screen flex flex-col dark:bg-[#0A0A0A] dark:text-white`}>
            <Header />
            <main className="flex-1">
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Resume />
            </main>
            <Footer />
        </div>
    );
};

export default App;