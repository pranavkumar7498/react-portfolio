import React from 'react'

import './Footer.css';
import Social from './Sociallinks/Social';

 const Footer = () => {
      
        return (

          <div className="main-footer">
          <div className="container">
            <div className="row">
              {/* Column1 */}
              <div className="col">
                
                <h6 className="list-unstyled">
                  <li>851101</li>
                  <li>Bihar, India</li>
                  <li>Dak Bangla Street-1</li>
                </h6>
              </div>
              
             <Social/>
            </div>
            <hr />
            <div className="row">
              <p className="col-sm">
                &copy;{new Date().getFullYear()} Pranav Kumar | All rights reserved |
                Terms Of Service | Privacy
              </p>
            </div>
          </div>
        </div>
        );
}

export default Footer;


