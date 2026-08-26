import React, { useEffect, useState } from 'react';
import { personalDetails } from '../data';
import './Hero.css';

const ROLES = ['AI Engineer', 'Full-Stack SDE', 'UI/UX Developer', 'Agentic AI Builder'];

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        const timer = setInterval(() => {
            setRoleIndex((i) => (i + 1) % ROLES.length);
        }, 2400);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-grid-lines" aria-hidden="true">
                <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>

            <div className={`hero-inner ${isVisible ? 'visible' : ''}`}>
                <div className="hero-meta-row">
                    <span>{personalDetails.location.replace(', India', '')} — IN</span>
                    <span className="hero-meta-line"></span>
                    <span>B.Tech CSE &apos;26</span>
                </div>

                <div className="hero-panels">
                    <div className="hero-panel hero-panel-text">
                        <div className="hero-text-center">
                            <h1 className="hero-name">
                                <span>Gokul</span>
                                <span>G K<em>.</em></span>
                            </h1>

                            <div className="hero-role-row">
                                <span className="hero-role-text">{ROLES[roleIndex]}</span>
                                <span className="hero-role-cursor" aria-hidden="true"></span>
                            </div>

                            <p className="hero-desc">
                                Final-year CS engineer building agentic AI systems, full-stack web apps
                                and cross-platform mobile products. I ship: eight production apps, four
                                AI systems, two hackathon wins.
                            </p>

                            <div className="hero-cta-row">
                                <a href="#projects" className="hbtn hbtn-primary hoverable">See the work</a>
                                <a href="https://github.com/TAKIGOKUL" target="_blank" rel="noreferrer" className="hbtn hbtn-secondary hoverable">GitHub</a>
                                <a href="https://drive.google.com/file/d/1HmLMatWxnhFK9GsDP_8EWzeLAM7MtVLR/view?usp=sharing" target="_blank" rel="noreferrer" className="hbtn hbtn-secondary hoverable">Résumé (PDF)</a>
                            </div>

                            <div className="hero-availability">
                                <span className="hero-availability-dot" aria-hidden="true"></span>
                                Open to full-time roles — graduated May 2026
                            </div>
                        </div>
                    </div>

                    <div className="hero-panel hero-panel-photo">
                        <img
                            src={personalDetails.profileImg}
                            alt={personalDetails.name}
                            className="hero-photo"
                        />
                    </div>
                </div>

                <div className="hero-stats-strip">
                    <div className="hero-stat">
                        <span className="hero-stat-num">8+</span>
                        <span className="hero-stat-label">Production apps shipped</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-num">10+</span>
                        <span className="hero-stat-label">Hackathons — 2 wins</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-num">150+</span>
                        <span className="hero-stat-label">Engineers led, IEEE PES</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-num">100+</span>
                        <span className="hero-stat-label">Students taught GenAI</span>
                    </div>
                </div>
            </div>

            {/* Social Links - Vertical side bar (floating buttons — unchanged) */}
            <div className="hero-socials-vertical">
                <a
                    href="https://api.whatsapp.com/send?phone=918129725007&text="
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-v"
                    aria-label="WhatsApp"
                >
                    <i className="ri-whatsapp-line"></i>
                </a>
                <a
                    href="https://www.instagram.com/ad.astra.___/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-v"
                    aria-label="Instagram"
                >
                    <i className="ri-instagram-line"></i>
                </a>
                <a
                    href="https://github.com/TAKIGOKUL"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-v"
                    aria-label="GitHub"
                >
                    <i className="ri-github-line"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/gokul-gk-b0b718261/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-v"
                    aria-label="LinkedIn"
                >
                    <i className="ri-linkedin-line"></i>
                </a>
                <a
                    href="https://t.me/alchemist_taki"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-v"
                    aria-label="Telegram"
                >
                    <i className="ri-telegram-line"></i>
                </a>
                <a
                    href="mailto:gokul23gopakumar@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-v"
                    aria-label="Email"
                >
                    <i className="ri-mail-line"></i>
                </a>
                <a
                    href="tel:8129725007"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-v"
                    aria-label="Phone"
                >
                    <i className="ri-phone-line"></i>
                </a>
                <div className="social-line"></div>
            </div>
        </section>
    );
};

export default Hero;
