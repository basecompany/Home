import React from 'react';
import './ProjectCardModal.css';

export interface Link {
    url: string;
    label: string;
}

export interface ProjectCardModalProps {
    project: {
        img: string;
        alt: string;
        title: string;
        date: string;
        role: string;
        techStack: string[];
        description: string;
        links?: Link[];
        link?: string;
        linkText?: string;
        images?: string[];
    };
}

const ProjectCardModal: React.FC<ProjectCardModalProps> = ({ project }) => (
    <div className="project-card-modal">
        <div className="project-card-modal__sidebar">
            <img
                className="project-card-modal__image"
                src={project.img}
                alt={project.alt}
            />
            <h2 className="project-card-modal__title">{project.title}</h2>
            <div className="project-card-modal__meta">
                <span className="project-card-modal__date">{project.date}</span>
                <span className="project-card-modal__role">{project.role}</span>
            </div>
        </div>

        <div className="project-card-modal__content">
            <div className="project-card-modal__section">
                <strong>Technologies:</strong>
                <ul className="project-card-modal__tech-list">
                    {project.techStack.map((tech, i) => (
                        <li key={i} className="project-card-modal__tech-item">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="project-card-modal__section">
                <strong>Description:</strong>
                <p className="project-card-modal__description">{project.description}</p>
            </div>

            {project.links && (
                <div className="project-card-modal__section">
                    <strong>Links:</strong>
                    <ul className="project-card-modal__links-list">
                        {project.links.map((l, i) => (
                            <li key={i}>
                                <a
                                    className="project-card-modal__link"
                                    href={l.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/*{project.link && project.link !== '#' && (*/}
            {/*    <a*/}
            {/*        className="project-card-modal__primary-link"*/}
            {/*        href={project.link}*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        {project.linkText}*/}
            {/*    </a>*/}
            {/*)}*/}

            {project.images && project.images.length > 1 && (
                <div className="project-card-modal__gallery">
                    <strong>Gallery:</strong>
                    <div className="project-card-modal__gallery-images">
                        {project.images.map((src, i) => (
                            <img
                                key={i}
                                className="project-card-modal__gallery-image"
                                src={src}
                                alt={`${project.alt} gallery ${i}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
);

export default ProjectCardModal;
