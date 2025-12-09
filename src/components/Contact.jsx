import React from 'react';
import { personalDetails } from '../data';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="footer-section">
            {/* Large CTA Section */}
            <div className="footer-cta-block">
                <div className="cta-inner">
                    <span className="cta-eyebrow">Have a project in mind?</span>
                    <h2 className="cta-headline">Let's build something <br />amazing together.</h2>
                    <a href={`mailto:${personalDetails.email}`} className="cta-button">
                        Get in Touch →
                    </a>
                </div>
            </div>

            {/* Footer Grid */}
            <div className="footer-grid">
                <div className="footer-brand">
                    <span className="brand-name">{personalDetails.name}</span>
                    <p className="brand-tagline">Creative AI Engineer crafting intelligent digital experiences.</p>
                </div>

                <div className="footer-nav">
                    <span className="nav-title">Quick Links</span>
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                </div>

                <div className="footer-social">
                    <span className="nav-title">Connect</span>
                    <a href={personalDetails.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={personalDetails.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={`mailto:${personalDetails.email}`}>Email</a>
                </div>

                <div className="footer-contact">
                    <span className="nav-title">Contact</span>
                    <span className="contact-item">{personalDetails.email}</span>
                    <span className="contact-item">Kerala, India</span>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom-bar">
                <span className="copyright">© {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</span>
                <span className="made-with">Made with ♥ and code</span>
            </div>
        </footer>
    );
};

export default Contact;
