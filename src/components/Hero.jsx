import React, { useEffect, useState } from 'react';
import { personalDetails } from '../data';
import './Hero.css';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="hero" className="hero-section">
            {/* Animated background glow */}
            <div
                className="hero-glow"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                }}
            ></div>

            {/* Decorative elements */}
            <div className="hero-decoration decoration-1"></div>
            <div className="hero-decoration decoration-2"></div>

            <div className="hero-container">
                {/* Main content - Left side */}
                <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                    <div className="hero-greeting">
                        <span className="greeting-text">Hi There,</span>
                    </div>

                    <h1 className="hero-title">
                        I am <span className="hero-name">{personalDetails.name.split(' ')[0]}</span>
                    </h1>

                    <h2 className="hero-role">
                        <span className="role-icon">⚡</span>
                        {personalDetails.role}
                    </h2>

                    <p className="hero-description">
                        {personalDetails.tagline || "Passionate about building innovative solutions with cutting-edge technologies. Transforming ideas into reality through code and creativity."}
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn-primary">
                            <span>View My Work</span>
                            <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn-secondary">
                            <span>Get In Touch</span>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">2+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Projects Done</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* Right side - Profile Image */}
                <div className={`hero-image-wrapper ${isVisible ? 'visible' : ''}`}>
                    <div className="image-background">
                        <div className="image-glow"></div>
                    </div>
                    <img
                        src={personalDetails.profileImg}
                        alt={personalDetails.name}
                        className="hero-profile-image"
                    />
                    <div className="image-badge">
                        <span className="badge-dot"></span>
                        <span className="badge-text">Available for Work</span>
                    </div>
                </div>
            </div>

            {/* Social Links - Vertical side bar */}
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
