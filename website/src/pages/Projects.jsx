import React from 'react';
import projectsData from '../data/projects.json';
import '../assets/styles/projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p className="projects-intro">
        A couple of projects that I'm especially proud of! I'm always looking for new ideas, so feel free to contact me with anything you'd like to see!
      </p>
      <div className="projects-grid">
        {projectsData.projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 