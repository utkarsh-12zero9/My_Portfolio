import { motion } from 'framer-motion';

const Resume = () => {
  const skillsPreview = ['Full-Stack Development', 'MERN Stack', 'Version control', 'Problem Solving'];

  return (
    <section id="resume" className="min-h-[90vh] bg-transparent relative overflow-hidden py-16 sm:py-16">
      {/* Animated Background Effect */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle, rgba(0, 212, 180, 0.1) 0%, rgba(123, 63, 228, 0.1) 100%)',
            'radial-gradient(circle, rgba(123, 63, 228, 0.1) 0%, rgba(0, 212, 180, 0.1) 100%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      />
      {/* Revolving Glow Div */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#00D4B4]/30 to-[#7B3FE4]/30 blur-md"
        initial={{ x: '20vw', y: '20vh', rotate: 0, scale: 1 }}
        animate={{
          x: ['20vw', '50vw', '80vw', '40vw', '10vw'].map(v => `min(90vw, max(10vw, ${v}))`),
          y: ['20vh', '60vh', '40vh', '80vh', '30vh'].map(v => `min(90vh, max(10vh, ${v}))`),
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-20 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-['Montserrat'] font-bold text-white mb-6 sm:mb-8 transform -skew-x-6 drop-shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Resume
        </motion.h2>

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-lg sm:text-xl font-['Inter'] text-[#E6E6E6] mb-6">
            I’m Utkarsh Kumar Singh, a full-stack MERN developer from Ghaziabad, India, passionate about crafting dynamic web experiences with MERN Stack and TailwindCSS. With a B.Tech in CSE (AI&ML) and hands-on projects like AyurSutra and HomeMaid, I blend creativity with technical skills to deliver pixel-perfect designs.
          </p>
          <div className="mb-6 mt-12">
            <h3 className="text-xl sm:text-2xl font-['Montserrat'] font-semibold text-[#3ffdc4] mt-8 mb-5">Key Skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skillsPreview.map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-[#1A1A1A] text-[#00D4B4] px-3 py-1 rounded transform rotate-2 font-['Fira_Code']"
                  whileHover={{ rotate: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.a
            href="/resume.pdf"
            download="Utkarsh_Kumar_Singh_SDE_Resume.pdf"
            className="inline-block mt-5 px-6 py-3 bg-[#00D4B4] text-black font-['Inter'] text-lg font-extrabold transform skew-x-6 hover:bg-[#7B3FE4] hover:text-white transition-colors duration-300 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;