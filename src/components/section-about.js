import React from 'react';

import { skills } from '../utilities/data';

import '../../style/section-about.css';

const About = () => {
  // const skills = ['JavaScript', 'ES6', 'React', 'Redux', 'jQuery', 'HTML5', 'CSS3', 'SCSS', 'Webpack'];
  const skillSet = skills.map(skill => <li key={skill}>{skill}</li>);

  return (
    <div id="about" className="card">
      <div className="card-title">
        <h2>PETER KREVENETS | WEB DEVELOPER</h2>
      </div>
      <div className="content">
        <div className="column column-photo">
          <img src="https://res.cloudinary.com/gurugumawaru/image/upload/v1493300381/about-avatar_wtxbgm.jpg" alt="Peter Krevenets" />
        </div>
        <div className="column column-text">
          <p>My passion is learning and coding is the part I like best.
            If it was in my power, I would learn every programming language
            and wouldn't stop at that.</p>
          <p>Being a morning person, I usually find myself sipping coffee
            and thinking over a particularly tricky example or a code problem
            while the sun is still rising over trees and houses.</p>
          <p>My ambition is to develop innovative products that will help
            people and humanity.</p>
          <p>Aside from coding I enjoy travelling, reading, listening to music,
            watching movies, and interacting with people.</p>
          <ul className="skill-list">
            {skillSet}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
