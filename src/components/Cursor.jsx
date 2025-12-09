import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Cursor.css';

const Cursor = () => {
    const cursorRef = useRef(null);
    const containerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // Store last position to calculate distance for trails
    const lastPos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Initial setup
        const cursor = cursorRef.current;
        const xSet = gsap.quickSetter(cursor, "x", "px");
        const ySet = gsap.quickSetter(cursor, "y", "px");

        const updatePosition = (e) => {
            cursorPos.current = { x: e.clientX, y: e.clientY };

            // Move head immediately
            xSet(e.clientX);
            ySet(e.clientY);

            // Calculate distance for trail spawning
            const dx = e.clientX - lastPos.current.x;
            const dy = e.clientY - lastPos.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > 15) { // Spawn threshold
                spawnBinaryParticle(e.clientX, e.clientY);
                lastPos.current = { x: e.clientX, y: e.clientY };
            }
        };

        const spawnBinaryParticle = (x, y) => {
            if (!containerRef.current) return;

            const particle = document.createElement('span');
            particle.className = 'binary-particle';
            particle.innerText = Math.random() > 0.5 ? '1' : '0';

            // Random subtle offsets
            // const offsetX = (Math.random() - 0.5) * 10;
            // const offsetY = (Math.random() - 0.5) * 10;

            // particle.style.left = `${x + offsetX}px`;
            // particle.style.top = `${y + offsetY}px`;

            // Better to set initial pos via GSAP to ensure it matches
            gsap.set(particle, { x: x, y: y, scale: 1, opacity: 0.8 });

            containerRef.current.appendChild(particle);

            // Animate
            gsap.to(particle, {
                opacity: 0,
                scale: 0.5,
                y: y + 20, // Drift down slightly
                duration: 0.8,
                ease: "power1.out",
                onComplete: () => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }
            });
        };

        window.addEventListener('mousemove', updatePosition);

        // Hover detection
        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        const hoverables = document.querySelectorAll('a, button, .hoverable, .accordion-item');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    return (
        <div className="cursor-container" ref={containerRef}>
            <div
                ref={cursorRef}
                className={`cursor-comet ${isHovering ? 'hovering' : ''}`}
            />
        </div>
    );
};

export default Cursor;
