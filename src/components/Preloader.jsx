import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

const SEGMENT_COUNT = 20;

const STATUS_STEPS = [
    { at: 0, label: 'INITIALIZING' },
    { at: 20, label: 'LOADING ASSETS' },
    { at: 50, label: 'COMPILING PROFILE' },
    { at: 80, label: 'FINALIZING' },
    { at: 100, label: 'SYSTEM READY' },
];

const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const counterRef = useRef(null);
    const statusRef = useRef(null);
    const segmentRefs = useRef([]);
    const lastLabel = useRef('');
    const lastFilled = useRef(0);

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

        // Counter + status + segmented bar, all driven from one source of truth
        let count = { val: 0 };
        tl.to(count, {
            val: 100,
            duration: 2.0,
            ease: "power2.inOut",
            onUpdate: () => {
                const val = count.val;
                if (counterRef.current) {
                    counterRef.current.innerText = val.toFixed(0).padStart(3, '0') + "%";
                }

                // Mechanical, percussive status snap — instant, not eased
                const step = [...STATUS_STEPS].reverse().find((s) => val >= s.at);
                if (step && step.label !== lastLabel.current && statusRef.current) {
                    lastLabel.current = step.label;
                    statusRef.current.innerText = `[${step.label}]`;
                    statusRef.current.classList.remove('snap');
                    void statusRef.current.offsetWidth; // restart animation
                    statusRef.current.classList.add('snap');
                }

                // Segmented dot-matrix progress bar
                const filled = Math.round((val / 100) * SEGMENT_COUNT);
                if (filled !== lastFilled.current) {
                    lastFilled.current = filled;
                    segmentRefs.current.forEach((seg, i) => {
                        if (!seg) return;
                        seg.classList.toggle('filled', i < filled);
                    });
                }
            }
        });

        // Language Switching Animation
        languages.forEach((lang, index) => {
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

        // Remove counter + status + segments
        tl.to([counterRef.current, statusRef.current], {
            opacity: 0,
            duration: 0.5
        }, "<");

        tl.to('.segment-bar', {
            opacity: 0,
            duration: 0.4
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
            <div className="preloader-grid" aria-hidden="true"></div>

            <div className="loader-content">
                <h1 ref={textRef} className="loader-text-lang">
                    {languages[0]}
                </h1>

                <div className="segment-bar" aria-hidden="true">
                    {Array.from({ length: SEGMENT_COUNT }).map((_, i) => (
                        <span
                            key={i}
                            className="segment"
                            ref={(el) => (segmentRefs.current[i] = el)}
                        />
                    ))}
                </div>

                <span ref={statusRef} className="loader-status">[INITIALIZING]</span>
            </div>

            <div className="counter-wrapper">
                <span ref={counterRef} className="loader-counter">000%</span>
            </div>
        </div>
    );
};

export default Preloader;
