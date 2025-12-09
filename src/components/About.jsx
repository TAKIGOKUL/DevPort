import React from 'react';
import { personalDetails } from '../data';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p className="about-text">{personalDetails.about}</p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Awards</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
