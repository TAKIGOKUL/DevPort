import React from 'react';
import { achievements } from '../data';
import './Achievements.css';

const Achievements = () => {
    return (
        <section id="achievements" className="achievements-section-standalone">
            <div className="achievements-container">
                <h2 className="section-title">ACHIEVEMENTS</h2>
                <div className="achievements-grid">
                    {achievements.map((ach, index) => (
                        <a
                            href={ach.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="achievement-card-nothing"
                        >
                            <div className="ach-number">#{String(index + 1).padStart(2, '0')}</div>
                            <h4 className="ach-title">{ach.title}</h4>
                            <span className="ach-org">{ach.org}</span>
                            <p className="ach-desc">{ach.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
