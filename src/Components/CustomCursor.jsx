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
                e.target.closest('button') ||
                e.target.closest('.cursor-pointer')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    return (
        <>
            {/* Center Glowing Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-[#00F5D4] rounded-full pointer-events-none z-[9999] shadow-[0_0_12px_#00F5D4,0_0_24px_#00F5D4]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 1.8 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 600,
                    damping: 30,
                    mass: 0.4,
                }}
            />
            {/* Outer Luminous Follower Ring */}
            <motion.div
                className="fixed top-0 left-0 w-9 h-9 border-2 border-[#00F5D4]/80 bg-[#00F5D4]/10 rounded-full pointer-events-none z-[9998] shadow-[0_0_20px_rgba(0,245,212,0.4)]"
                animate={{
                    x: mousePosition.x - 18,
                    y: mousePosition.y - 18,
                    scale: isHovering ? 1.75 : 1,
                    opacity: isHovering ? 0.95 : 0.65,
                    borderColor: isHovering ? '#7B3FE4' : 'rgba(0, 245, 212, 0.8)',
                    backgroundColor: isHovering ? 'rgba(123, 63, 228, 0.15)' : 'rgba(0, 245, 212, 0.08)',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 22,
                    mass: 0.5,
                }}
            />
        </>
    );
};

export default CustomCursor;