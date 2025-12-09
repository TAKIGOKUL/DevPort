import React, { useState, useEffect, useRef } from 'react';
import { experiences } from '../data';
import './Timeline.css';

const AccordionItem = ({ exp, isOpen, onClick, id }) => {
    return (
        <div id={id} className={`accordion-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <div className="accordion-header">
                <h3 className="acc-role">{exp.role}</h3>
                <span className="acc-company">{exp.company}</span>
                <span className="acc-icon">{isOpen ? '−' : '+'}</span>
            </div>
            <div className="accordion-content">
                <div className="acc-inner">
                    <span className="acc-date">{exp.date}</span>
                    <p className="acc-desc">{exp.desc}</p>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px -45% 0px', // Active when element is in the vertical center 10%
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.dataset.index);
                    setOpenIndex(index);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const items = document.querySelectorAll('.accordion-item');
        items.forEach((item, index) => {
            item.dataset.index = index;
            observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="section-container" ref={sectionRef}>
            <h2 className="section-title">Experience</h2>

            <div className="experience-accordion">
                {experiences.map((exp, index) => (
                    <AccordionItem
                        key={index}
                        exp={exp}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;
