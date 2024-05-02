import React from 'react';

export default function Project({
    imgSrc,
    imgAlt,
    title,
    description,
    demoLink,
    githubLink
}){
    return (
        <div className="project-card">
            <img 
                src={imgSrc}
                alt={imgAlt}
                className="project-image"
            />
            <h1 className="project-title">{title}</h1>
            <p className="project-description">{description}</p>
            <div className="project-links">
                <a href={demoLink} className="project-demo-link">Demo</a>
                <a href={githubLink} className="project-hithub-link">Repo</a>
            </div>
        </div>
    )
} 