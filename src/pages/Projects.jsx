import React, { useMemo } from 'react';
import '../css/Projects.css';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../config/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {

    const heroProject = useMemo(
        () => projects.find(p => p.featured) ?? projects[0],
        []
    );

    const otherFeatured = useMemo(
        () => projects.filter(p => p.featured && p.id !== heroProject?.id),
        [heroProject]
    );

    const regularProjects = useMemo(
        () => projects.filter(p => !p.featured),
        []
    );

    return (
        <div className="projects-page">
            <div className="projects-container">

                <section className="projects-header">
                    <h1 className="projects-title">
                        Projelerim & Çalışmalarım
                    </h1>
                    <p className="projects-subtitle">
                        Gerçek problemleri çözmek için geliştirdiğim yazılım projeleri ve
                        yenilikçi çözümler
                    </p>
                </section>

                {heroProject && (
                    <section className="hero-project">
                        <div className="hero-badge">
                            ⭐ Öne Çıkan Proje
                        </div>

                        <div className="hero-content">
                            <div className="hero-image-wrapper">
                                <div className="image-glow"></div>
                                <img
                                    src={heroProject.image}
                                    alt={heroProject.title}
                                    loading="lazy"
                                    className="hero-image"
                                />

                                <div className="hero-overlay">
                                    <div className="hero-links">
                                        {heroProject.github && (
                                            <a
                                                href={heroProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hero-link github"
                                                aria-label="GitHub Repository"
                                            >
                                                <FaGithub />
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                        {/* İLERDE PROJELERİ CANLIYA AÇTIĞIMDA KULLANACAĞIM KISIM */}
                                        {/* {heroProject.demo && (
                                            <a
                                                href={heroProject.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hero-link demo"
                                                aria-label="Live Demo"
                                            >
                                                <FaExternalLinkAlt />
                                                <span>Canlı Demo</span>
                                            </a>
                                        )} */}
                                    </div>
                                </div>
                            </div>

                            <div className="hero-info">
                                <div className="hero-meta">
                                    <span className="hero-category">
                                        {heroProject.category}
                                    </span>
                                    <span className="hero-date">
                                        {heroProject.date}
                                    </span>
                                </div>

                                <h2 className="hero-title">
                                    {heroProject.title}
                                </h2>

                                <p className="hero-description">
                                    {heroProject.description}
                                </p>

                                <div className="hero-technologies">
                                    {heroProject.technologies.slice(0, 5).map((tech, i) => (
                                        <div
                                            key={i}
                                            className="hero-tech"
                                            style={{
                                                borderColor: tech.color,
                                                '--tech-color': tech.color
                                            }}
                                        >
                                            <span style={{ color: tech.color }}>
                                                {tech.icon}
                                            </span>
                                            {tech.name}
                                        </div>
                                    ))}

                                    {heroProject.technologies.length > 5 && (
                                        <div className="hero-tech hero-tech-more">
                                            +{heroProject.technologies.length - 5} daha
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {otherFeatured.length > 0 && (
                    <section className="featured-section">
                        <div className="section-header">
                            <h2 className="section-title">
                                Diğer Öne Çıkan Projeler
                            </h2>
                            <div className="section-line"></div>
                        </div>

                        <div className="featured-grid">
                            {otherFeatured.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {regularProjects.length > 0 && (
                    <section className="all-projects-section">
                        <div className="section-header">
                            <h2 className="section-title">
                                Tüm Projeler
                            </h2>
                            <div className="section-line"></div>
                        </div>

                        <div className="projects-grid">
                            {regularProjects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </section>
                )}
                <section className="github-cta">
                    <div className="cta-content">
                        <div className="cta-icon-wrapper">
                            <FaCode className="cta-icon" />
                        </div>
                        <h2>Daha Fazla Proje</h2>
                        <p>
                            Açık kaynak çalışmalarımı ve diğer projelerimi
                            GitHub profilimde inceleyebilirsiniz.
                        </p>

                        <a
                            href="https://github.com/burakkturgut"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-btn"
                        >
                            <FaGithub />
                            <span>GitHub Profilimi Ziyaret Et</span>
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Projects;