import React, { useEffect, useRef } from 'react';
import './BackgroundEffect.css';

const BackgroundEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let mouse = { x: -1000, y: -1000 };

        // Configuration
        const GRID_SIZE = 40; // Spacing between dots
        const DOT_SIZE = 1.5;
        const GLOW_RADIUS = 250;
        const DOT_COLOR = [255, 255, 255]; // RGB

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const draw = () => {
            ctx.fillStyle = 'rgba(12, 12, 12, 1)'; // Match background color to clear
            ctx.fillRect(0, 0, canvas.width, canvas.height); // Clear screen

            const cols = Math.ceil(canvas.width / GRID_SIZE);
            const rows = Math.ceil(canvas.height / GRID_SIZE);

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = i * GRID_SIZE;
                    const y = j * GRID_SIZE;

                    // Calculate distance from mouse
                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Calculate opacity based on distance
                    let alpha = 0.05; // Base opacity (dim)

                    if (dist < GLOW_RADIUS) {
                        // Map distance to opacity (closer = brighter)
                        const map = (1 - dist / GLOW_RADIUS);
                        alpha = 0.05 + (map * 0.4); // Boost opacity up to ~0.45

                        // Draw glow effect for active dots
                        const glowStrength = map * 5;
                        if (glowStrength > 0.5) {
                            ctx.beginPath();
                            ctx.arc(x, y, DOT_SIZE * 2, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(${DOT_COLOR.join(',')}, ${alpha * 0.5})`;
                            ctx.fill();
                        }
                    }

                    // Draw the dot
                    ctx.beginPath();
                    ctx.arc(x, y, DOT_SIZE, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${DOT_COLOR.join(',')}, ${alpha})`;
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="background-canvas" />;
};

export default BackgroundEffect;
