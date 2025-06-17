import { Routes, Route } from 'react-router-dom';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
    return (
        <div className='px-20'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;