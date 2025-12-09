import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const links = ['About', 'Projects', 'Experience', 'Certifications', 'Achievements', 'Contact'];

    const scrollToSection = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo hoverable">Gokul GK</div>
                <ul className="nav-links">
                    {links.map((link) => (
                        <li key={link} className="nav-item">
                            <button
                                className="nav-btn hoverable"
                                onClick={() => scrollToSection(link)}
                            >
                                {link}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
