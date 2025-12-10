import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="nav-container">
                <a href="#hero" className="nav-logo" onClick={closeMenu}>
                    <span className="logo-text">GOKUL</span>
                    <span className="logo-accent">.</span>
                </a>

                {/* Hamburger Menu Button */}
                <button
                    className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>

                {/* Navigation Menu */}
                <div className={`nav-menu-wrapper ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav-menu">
                        {navLinks.map((link, index) => (
                            <li key={link.name} style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                                <a href={link.href} className="nav-link" onClick={closeMenu}>
                                    <span className="nav-link-number">0{index + 1}.</span>
                                    <span className="nav-link-text">{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile-only social links */}
                    <div className="mobile-socials">
                        <a href="https://github.com/TAKIGOKUL" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <i className="ri-github-line"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/gokul-gk-b0b718261/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="ri-linkedin-line"></i>
                        </a>
                        <a href="https://www.instagram.com/ad.astra.___/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="mailto:gokul23gopakumar@gmail.com" aria-label="Email">
                            <i className="ri-mail-line"></i>
                        </a>
                    </div>
                </div>

                {/* Backdrop for mobile menu */}
                <div
                    className={`nav-backdrop ${menuOpen ? 'open' : ''}`}
                    onClick={closeMenu}
                ></div>
            </div>
        </nav>
    );
};

export default Navbar;
