import Hero from "./Components/Hero";
import Header from "./Layout/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Internships from "./Components/Internships";
import Contact from "./Components/Contact";
import Footer from "./Layout/Footer";
import Resume from "./Components/Resume";
import CustomCursor from "./Components/CustomCursor";
import { useEffect, useState } from "react";
import Stats from "./Components/Stats";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#00D4B4] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-[#00D4B4] font-bold text-xl">U</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Internships />
      <Stats />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};