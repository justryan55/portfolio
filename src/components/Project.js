import React from 'react';

export default function Project({
    imgSrc,
    imgAlt,
    title,
    description,
    demoLink,
    githubLink,
    target
}){

    const hideDemoLink = title === "Umbrella Talk"
    return (
        <div className="project-card">
            <a href={demoLink} target={target} title={title}>
                <img 
                    src={imgSrc}
                    alt={imgAlt}
                    className="project-image"
                />
            </a>    
            <h1 className="project-title">{title}</h1>
            <p className="project-description">{description}</p>
            <div className="project-links">
                {!hideDemoLink && <a href={demoLink} target={target} className="project-demo-link">Demo</a>}
                <a href={githubLink} className="project-github-link" target='_blank' rel='noreferrer'>Repo</a>
            </div>
        </div>
    )
} 