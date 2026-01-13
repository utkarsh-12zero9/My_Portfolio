import { motion } from 'framer-motion';

const Resume = () => {
  const skillsPreview = ['Full-Stack Development', 'MERN Stack', 'Version Control', 'Problem Solving'];

  return (
    <section id="resume" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-['Montserrat'] mb-8">
            My <span className="text-[#00D4B4]">Resume</span>
          </h2>

          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-['Inter']">
              I'm <span className="text-[#00D4B4] font-semibold">Utkarsh Kumar Singh</span>, a MERN Stack Developer from Ghaziabad, India. I blend creativity with technical skills to deliver pixel-perfect designs and robust production-ready applications.
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-6 font-['Montserrat']">Core Competencies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillsPreview.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00D4B4] font-mono text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: '#00D4B4' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.a
              href="/resume.pdf"
              download="Utkarsh_Kumar_Singh_SDE_Resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#00D4B4] text-black font-bold rounded-full hover:bg-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;