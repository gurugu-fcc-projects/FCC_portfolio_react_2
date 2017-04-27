import React from 'react';

import { projects } from '../utilities/data';

import '../../style/section-portfolio.css';

const Portfolio = () => {
  const projectSet = projects.map(project => {
    return (
      <div key={project.id} className="project">
        <h2>{project.title}</h2>
        <a href={project.href} target="_blank">
          <img src={project.screenshotLink} alt={project.screenshotLabel} />
        </a>
        <h4>Description:</h4>
        <p>{project.description}</p>
        <h4>Goal:</h4>
        <p>{project.goal}</p>
        <h4>Technologies:</h4>
        <ul>
          {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
    )
  });

  return (
    <div id="portfolio" className="card">
      <div className="card-title">
        <h2>PORTFOLIO</h2>
      </div>
      <div className="projects">
        {projectSet}
      </div>
    </div>
  );
}

export default Portfolio;
