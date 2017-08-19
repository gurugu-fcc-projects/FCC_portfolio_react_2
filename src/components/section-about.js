import React from 'react';

import { skills } from '../utilities/data';

import '../../style/section-about.css';

const About = () => {
  const skillSet = skills.map(skill => <li key={skill}>{skill}</li>);

  return (
    <div id="about" className="card">
      <div className="card-title">
        <h2>PETER KREVENETS | DEVELOPER</h2>
      </div>
      <div className="content">
        <div className="column column-photo">
          <img src="https://res.cloudinary.com/gurugumawaru/image/upload/v1493300381/about-avatar_wtxbgm.jpg" alt="Peter Krevenets" />
        </div>
        <div className="column column-text">
          <p>I love learning! And I also love coding and morning coffee!</p>
          <p>For now I'm happy coding almost anything, but I see myself doing
            something great. I want to help humanity overcome it's deficiencies, 
            eradicate injustice, fight disease, hunger, and death...
            and colonize other planets and far off stars!
          </p>
          <p>Anyway, when I can take time off work
            I enjoy travelling, reading, listening to music,
            watching movies, and living the life.</p>
          <ul className="skill-list">
            {skillSet}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
