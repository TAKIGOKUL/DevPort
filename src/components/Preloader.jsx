import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const counterRef = useRef(null);

    const languages = [
        "ഗോകുൽ",  // Malayalam
        "கோகுல்",   // Tamil
        "गोकुल",    // Hindi
        "ゴクル",    // Japanese
        "GOKUL"     // English
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        // Counter Animation
        let count = { val: 0 };
        tl.to(count, {
            val: 100,
            duration: 2.0,
            ease: "power2.inOut",
            onUpdate: () => {
                if (counterRef.current) {
                    counterRef.current.innerText = count.val.toFixed(0) + "%";
                }
            }
        });

        // Language Switching Animation
        // We want this to happen WHILE the counter is going, or sync with it.
        // Let's space them out over the 2 seconds of the counter, then land on English.

        languages.forEach((lang, index) => {
            // Switch text
            tl.to(textRef.current, {
                duration: 0.25,
                opacity: 1,
                onStart: () => {
                    if (textRef.current) textRef.current.innerText = lang;
                }
            }, index * 0.4); // Stagger each change
        });

        // Final state (English) cleanup & scale up
        tl.to(textRef.current, {
            scale: 1.5,
            color: "#fff",
            duration: 1,
            ease: "power4.out",
        });

        // Remove counter
        tl.to(counterRef.current, {
            opacity: 0,
            duration: 0.5
        }, "<");

        // Hold for 1 second as requested
        tl.to({}, { duration: 1.0 });

        // Exit animation
        tl.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut"
        });

    }, [onComplete]);

    return (
        <div className="preloader" ref={containerRef}>
            <div className="loader-content">
                <h1 ref={textRef} className="loader-text-lang">
                    {languages[0]}
                </h1>
            </div>
            <div className="counter-wrapper">
                <span ref={counterRef} className="loader-counter">0%</span>
            </div>
        </div>
    );
};

export default Preloader;
