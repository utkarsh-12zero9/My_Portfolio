import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);
    const mousePos = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

    const { scrollY, scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Parallax transforms for ambient glowing orbs
    const orb1Y = useTransform(scrollY, [0, 3000], [0, 400]);
    const orb2Y = useTransform(scrollY, [0, 3000], [0, -350]);
    const orb3Y = useTransform(scrollY, [0, 3000], [0, 250]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current.targetX = e.clientX;
            mousePos.current.targetY = e.clientY;
            setMouseCoords({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Interactive Particle Canvas Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        window.addEventListener('resize', handleResize);

        // Particle configuration
        const particleCount = Math.min(Math.floor(window.innerWidth / 18), 80);
        let particles = [];

        const colors = ['#00F5D4', '#00D4B4', '#A855F7', '#38BDF8', '#818CF8'];

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.55;
                this.vy = (Math.random() - 0.5) * 0.55;
                this.radius = Math.random() * 2.2 + 1.0;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.alpha = Math.random() * 0.5 + 0.35;
                this.baseAlpha = this.alpha;
            }

            update(mouse) {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction (gentle attraction / ripple)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 170;

                if (dist < maxDist) {
                    const force = (1 - dist / maxDist) * 0.035;
                    this.vx += (dx / dist) * force;
                    this.vy += (dy / dist) * force;
                    this.alpha = Math.min(this.baseAlpha + (1 - dist / maxDist) * 0.65, 1);
                } else {
                    this.alpha += (this.baseAlpha - this.alpha) * 0.05;
                }

                // Damping to keep speed controlled
                this.vx *= 0.99;
                this.vy *= 0.99;
            }

            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 12;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        initParticles();

        const render = () => {
            // Smooth mouse position lerping
            mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.12;
            mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.12;

            ctx.clearRect(0, 0, width, height);

            // Connect nearby particles
            const connectDistance = 135;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectDistance) {
                        const alpha = (1 - dist / connectDistance) * 0.20;
                        ctx.save();
                        ctx.strokeStyle = '#00F5D4';
                        ctx.globalAlpha = alpha;
                        ctx.lineWidth = 0.85;
                        ctx.shadowColor = '#00F5D4';
                        ctx.shadowBlur = 3;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }

            // Update and draw particles
            particles.forEach((particle) => {
                particle.update(mousePos.current);
                particle.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const floatingTokens = [
        { label: '</>', x: '7%', y: '16%', delay: 0 },
        { label: '{ }', x: '93%', y: '24%', delay: 1.5 },
        { label: 'const', x: '88%', y: '65%', delay: 2.2 },
        { label: 'AI', x: '10%', y: '72%', delay: 0.8 },
        { label: '01', x: '94%', y: '46%', delay: 3 },
        { label: 'λ', x: '5%', y: '42%', delay: 1.8 },
    ];

    return (
        <>
            {/* Top Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#00F5D4] via-[#A855F7] to-[#00F5D4] origin-left z-[100] shadow-[0_0_15px_#00F5D4,0_0_30px_#A855F7]"
                style={{ scaleX: smoothProgress }}
            />

            {/* Fixed Background Canvas & Atmospheric Glow Layers */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
                {/* Interactive Dynamic Mouse Spotlight */}
                <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(700px circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(0, 245, 212, 0.07), rgba(123, 63, 228, 0.04) 45%, transparent 75%)`,
                    }}
                />

                {/* Subtle Cyber Grid with Radial Fade */}
                <div
                    className="absolute inset-0 opacity-[0.16]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(0, 212, 180, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 212, 180, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '48px 48px',
                        maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 95%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 95%)',
                    }}
                />

                {/* Particle Canvas for Constellation & Interactions */}
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-75" />

                {/* Ambient Glowing Parallax Aurora Orbs */}
                <motion.div
                    style={{ y: orb1Y }}
                    className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-[#7B3FE4]/18 filter blur-[110px] mix-blend-screen animate-pulse duration-1000"
                />
                <motion.div
                    style={{ y: orb2Y }}
                    className="absolute top-[35%] -right-[12%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[#00D4B4]/15 filter blur-[110px] mix-blend-screen"
                />
                <motion.div
                    style={{ y: orb3Y }}
                    className="absolute bottom-[-10%] left-[25%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#3B82F6]/14 filter blur-[120px] mix-blend-screen"
                />

                {/* Floating Ambient Micro Code Tokens */}
                {floatingTokens.map((token, index) => (
                    <motion.div
                        key={index}
                        className="hidden md:flex absolute items-center justify-center font-['Fira_Code'] text-xs font-bold px-3 py-1.5 rounded-xl border border-[#00D4B4]/25 bg-black/50 text-[#00D4B4] shadow-[0_0_12px_rgba(0,212,180,0.18)] select-none backdrop-blur-md"
                        style={{ left: token.x, top: token.y }}
                        animate={{
                            y: [0, -12, 0],
                            opacity: [0.4, 0.75, 0.4],
                            scale: [1, 1.04, 1],
                        }}
                        transition={{
                            duration: 4.5 + index,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: token.delay,
                        }}
                    >
                        {token.label}
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default InteractiveBackground;
