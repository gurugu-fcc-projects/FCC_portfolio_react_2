import React from 'react';

import '../../style/section-contact.css';

const Contact = () => {
  return (
    <div id="contact" className="card">

      <div className="card-title">
        <h2>CONTACT</h2>
      </div>

      <div className="card-text">
        <p>
          This is where a contact form should be, but I have
          no need for that at the moment.
        </p>
        <p>
          That's why you can reach me using any of the following channels:
        </p>
        <p className="card-text-details">
          <a href="mailto:peter.k.nets@gmail.com">
            <i className="fa fa-envelope"></i><span>peter.k.nets@gmail.com</span>
          </a>
          <a href="mailto:peter.k.nets@gmail.com">
            <i className="fa fa-twitter"></i><span>peter.krevenets</span>
          </a>
          <a href="mailto:peter.k.nets@gmail.com">
            <i className="fa fa-linkedin"></i><span>Peter Krevenets</span>
          </a>
        </p>
      </div>

    </div>
  );
}

export default Contact;
