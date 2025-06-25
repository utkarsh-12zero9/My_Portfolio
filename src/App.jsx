import Hero from "./Components/Hero";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App = () => {
    return (
        <div className="relative min-h-screen flex flex-col bg-[#0A0A0A] text-white">
            <Header />
            <main className="flex-1">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;