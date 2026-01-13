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
    setTimeout(() => setLoading(false), 900);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="relative">
          {/* Container */}
          <div className="border-2 border-white/20 rounded-xl px-12 py-6 overflow-hidden relative">
            {/* Animated fill */}
            <div className="absolute inset-0 bg-[#00D4B4] origin-left animate-pulse" style={{
              animation: 'fillLeftToRight 2s ease-in-out infinite',
              transformOrigin: 'left'
            }}></div>
            {/* Text */}
            <div className="relative z-10 text-white font-bold text-2xl tracking-wide">Utkarsh</div>
          </div>
          {/* CSS Animation */}
          <style jsx>{`
            @keyframes fillLeftToRight {
              0% { transform: scaleX(0); }
              50% { transform: scaleX(1); }
              100% { transform: scaleX(0); }
            }
          `}</style>
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
      <Internships />
      <Projects />
      <Stats />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;