import { motion } from 'framer-motion';

const Resume = () => {
  const skillsPreview = ['Full-Stack Development', 'MERN Stack', 'Version control', 'Problem Solving'];

  return (
  <section id="resume" className="min-h-[90vh] bg-gradient-to-br from-[#0f1119] to-[#1a1d2e] relative overflow-hidden py-12 sm:py-20 md:py-24">
    {/* Animated Background Effect */}
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      animate={{
        background: [
          'radial-gradient(ellipse at 50% 48%, rgba(0, 212, 180, 0.14) 0%, rgba(123, 63, 228, 0.12) 100%)',
          'radial-gradient(ellipse at 50% 52%, rgba(123, 63, 228, 0.16) 0%, rgba(0, 212, 180, 0.14) 100%)',
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
    />
    
    {/* Revolving Glow */}
    <motion.div
      className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-[#00D4B4]/35 to-[#7B3FE4]/30 blur-3xl"
      initial={{ x: '20vw', y: '20vh', rotate: 0, scale: 1 }}
      animate={{
        x: ['20vw', '50vw', '80vw', '40vw', '10vw'].map(v => `min(90vw, max(10vw, ${v}))`),
        y: ['20vh', '60vh', '40vh', '80vh', '30vh'].map(v => `min(90vh, max(10vh, ${v}))`),
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
    />

    <div className="container mx-auto px-4 sm:px-6 md:px-20 text-center relative z-10">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Montserrat'] font-extrabold text-white mb-6 sm:mb-10 md:mb-14 transform -skew-x-3 drop-shadow-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        My Resume
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto bg-[#1e2233]/85 backdrop-blur-xl border border-[#5538c5]/20 p-6 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-[#00D4B4]/20 transition-all"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-base sm:text-lg md:text-xl font-['Inter'] text-[#e8ecf5] mb-6 sm:mb-8 md:mb-10 leading-relaxed">
          I'm <span className="text-[#00D4B4] font-semibold">Utkarsh Kumar Singh</span>, a full-stack MERN developer from Ghaziabad, India, passionate about crafting dynamic web experiences with MERN Stack and TailwindCSS. With a B.Tech in CSE (AI&ML) and hands-on projects like AyurSutra and HomeMaid, I blend creativity with technical skills to deliver pixel-perfect designs.
        </p>
        
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-['Montserrat'] font-bold bg-gradient-to-r from-[#00D4B4] to-[#7B3FE4] bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-7">
            Key Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {skillsPreview.map((skill, index) => (
              <motion.span
                key={skill}
                className="bg-[#0d1018]/70 backdrop-blur-sm border border-[#00D4B4]/30 text-[#00D4B4] px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-lg sm:rounded-xl font-['Fira_Code'] text-sm sm:text-base md:text-lg shadow-md hover:shadow-[#00D4B4]/30 hover:border-[#00D4B4]/60 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.08, rotate: 2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        
        <motion.a
          href="/resume.pdf"
          download="Utkarsh_Kumar_Singh_SDE_Resume.pdf"
          className="inline-flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-5 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-gradient-to-r from-[#00D4B4] to-[#03ab92] text-white font-['Montserrat'] text-base sm:text-lg font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-[#00D4B4]/40 hover:from-[#7B3FE4] hover:to-[#6432c7] transition-all duration-300 transform hover:scale-105"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  </section>
);



};

export default Resume;