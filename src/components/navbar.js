import React from 'react';

import { scrollAction } from '../utilities/model';

import '../../style/navbar-main.css';
import '../../style/navbar-tooltips.css';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <ul className="fa-list">
        <li className="about">
          <a href="#about" onClick={scrollAction}>
            <i className="fa fa-home" data-link="#about"></i>
          </a>
        </li>
        <li className="portfolio">
          <a href="#portfolio" onClick={scrollAction}>
            <i className="fa fa-list-ul" data-link="#portfolio"></i>
          </a>
        </li>
        <li className="contact">
          <a href="#contact" onClick={scrollAction}>
            <i className="fa fa-envelope-o" data-link="#contact"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
