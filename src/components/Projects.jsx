import React from 'react';
import { projects } from '../data';
import './Projects.css';

const Projects = () => {
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
        <section id="projects" className="section-container" onMouseMove={handleMouseMove}>
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
        </section>
    );
};

export default Projects;
