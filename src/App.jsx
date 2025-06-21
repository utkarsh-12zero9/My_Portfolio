
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="px-4 sm:px-6 lg:px-20 bg-[#0f0f0f]">
      <Navbar />
      <Intro />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;