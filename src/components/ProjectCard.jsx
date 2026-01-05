import React, { memo } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import '../css/ProjectCard.css';

const ProjectCard = memo(({ project }) => {
    const {
        title,
        description,
        image,
        category,
        date,
        technologies,
        github,
        demo,
        featured
    } = project;

    return (
        <article className="project-card">

            {featured && (
                <div className="featured-badge">
                    <FaStar />
                    <span>Öne Çıkan</span>
                </div>
            )}

            <div className="project-image-wrapper">
                <div className="image-shine"></div>
                <img
                    src={image}
                    alt={title}
                    className="project-image"
                    loading="lazy"
                />

                <div className="project-overlay">
                    <div className="project-links">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link github"
                                onClick={(e) => e.stopPropagation()}
                                aria-label="GitHub Repository"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                        )}

                        {/* İLERDE PROJELERİ CANLIYA AÇTIĞIMDA KULLANACAĞIM KISIM */}
                        {/* {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link demo"
                                onClick={(e) => e.stopPropagation()}
                                aria-label="Live Demo"
                            >
                                <FaExternalLinkAlt />
                                <span>Demo</span>
                            </a>
                        )} */}
                    </div>
                </div>
            </div>

            <div className="project-content">
                <div className="project-header">
                    <span className="project-category">
                        {category}
                    </span>
                    <span className="project-date">
                        {date}
                    </span>
                </div>

                <h3 className="project-title">
                    {title}
                </h3>

                <p className="project-description">
                    {description}
                </p>

                <div className="project-technologies">
                    {technologies.slice(0, 4).map((tech, index) => (
                        <div
                            key={tech.name ?? index}
                            className="tech-badge"
                            style={{
                                borderColor: tech.color,
                                '--tech-color': tech.color
                            }}
                        >
                            <span style={{ color: tech.color }}>
                                {tech.icon}
                            </span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}

                    {technologies.length > 4 && (
                        <div className="tech-badge tech-more">
                            +{technologies.length - 4}
                        </div>
                    )}
                </div>
            </div>

        </article>
    );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;