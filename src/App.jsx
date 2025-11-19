import Hero from "./Components/Hero";
import Header from "./Layout/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Layout/Footer";
import Resume from "./Components/Resume";
import CustomCursor from "./Components/CustomCursor";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
        <div className="text-2xl text-[#00D4B4] font-['Montserrat']">Loading...</div>
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
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
