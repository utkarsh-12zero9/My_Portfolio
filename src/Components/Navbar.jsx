import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const property = "text-white hover:text-red-400 cursor-pointer transition-all duration-200";
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='h-[10vh] flex items-center text-white mt-5 font-serif px-4'>
            <div className='w-[50%] text-3xl font-bold'>
                <Link to="/" className="text-red-500 hover:text-white transition-all duration-200">
                    Portfolio
                </Link>
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="lg:hidden w-[50%] flex justify-end">
                <button
                    className="focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu" >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Desktop Menu */}
            <div className='w-[50%] text-xl font-normal items-center justify-end hidden lg:flex'>
                <ul className='flex gap-8'>
                    <li>
                        <Link to="/intro" className={property}>Introduction</Link>
                    </li>
                    <li>
                        <Link to="/education" className={property}>Education</Link>
                    </li>
                    <li>
                        <Link to="/skills" className={property}>Skills</Link>
                    </li>
                    <li>
                        <Link to="/projects" className={property}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={property}>Contact</Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-[10vh] right-0 w-full bg-gray-900 z-50 lg:hidden">
                    <ul className='flex flex-col gap-6 p-6'>
                        <li>
                            <Link to="/intro" className={property} onClick={() => setMenuOpen(false)}>Introduction</Link>
                        </li>
                        <li>
                            <Link to="/education" className={property} onClick={() => setMenuOpen(false)}>Education</Link>
                        </li>
                        <li>
                            <Link to="/skills" className={property} onClick={() => setMenuOpen(false)}>Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects" className={property} onClick={() => setMenuOpen(false)}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={property} onClick={() => setMenuOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;