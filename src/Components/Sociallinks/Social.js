import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faFacebook,
  faLinkedin,
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Social() {
    return (
        <div className="social-container">
        <h5>Get in touch.</h5>
       
        <a
          href="https://www.facebook.com/pranav.mishra.5492"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
      
        <a
          href="https://github.com/pranavkumar7498"
          className="Github social"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
         href="https://www.linkedin.com/in/pranav-kumar-81575714a/"
          className="Linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a
         href="https://twitter.com/I_m_pranav07"
          className="Twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        <a
         href="https://www.instagram.com/pmishra_ig/"
          className="Instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>
    )
}

export default Social;
