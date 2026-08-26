import React, { useRef } from 'react';
import { projects } from '../data';
import { useScrollActivate } from '../hooks/useScrollActivate';
import './Projects.css';

const Projects = () => {
    const sectionRef = useRef(null);
    useScrollActivate(sectionRef, '.project-card');

    const handleMouseMove = (e) => {
        const cards = document.getElementsByClassName("project-card");
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };

    return (
        <section id="projects" className="section-container" ref={sectionRef} onMouseMove={handleMouseMove}>
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <a
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="project-card hoverable"
                    >
                        <div className="card-image-container">
                            <img src={project.img} alt={project.title} className="card-image" />
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <span className="project-year">{project.year}</span>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                            <p className="project-desc">{project.desc}</p>
                            <div className="project-tags">
                                {project.tech.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="card-glow"></div>
                    </a>
                ))}
            </div>

            <div className="projects-view-all">
                <a
                    href="https://github.com/TAKIGOKUL?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-view-all hoverable"
                >
                    <span>View All Projects</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Projects;
