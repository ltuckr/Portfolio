import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="py-4 text-center bg-primary text-white">
      &copy; Made with love by ltuckr 2023. All rights reserved.
      <div className="mt-2">
        <a
          href="https://github.com/ltuckr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/ltuckr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:ltuckr.webdev@gmail.com"
          className="text-white mx-2"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
