import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#00D4B4] rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />

            {/* Cursor border ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-3 border-[#4d7315] rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? '#ffffff' : '#00D4B4',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.6,
                }}
            />

            {/* Glow effect */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#00D4B4]/30 to-[#7B3FE4]/30 rounded-full pointer-events-none z-[9997] blur-lg"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    scale: isHovering ? 2 : 1,
                    opacity: isHovering ? 0.6 : 0.3,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    mass: 0.8,
                }}
            />
        </>
    );
};

export default CustomCursor;