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
import DSAStats from "./Components/DSAStats";
import GithubStats from "./Components/GithubStats";
import Journey from "./Components/Journey";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [codolioData, setCodolioData] = useState(null);
  const [statsError, setStatsError] = useState(null);
  const githubUsername = "utkarsh-12zero9";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.codolio.com/profile?userKey=${githubUsername}`);
        const data = await response.json();
        if (data.status.success) {
          setCodolioData(data.data);
        } else {
          setStatsError("Profile data not available");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setStatsError("Metrics sync failed");
      }
    };

    fetchData();
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
      <section id="dsa" className="py-12 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12">
          <DSAStats codolioData={codolioData} />
        </div>
      </section>
      <section id="github" className="py-12 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12">
          <GithubStats username={githubUsername} />
        </div>
      </section>
      <Projects />
      <Journey />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;