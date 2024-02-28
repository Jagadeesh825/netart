import React from 'react';
import call from '../assets/phone.png';
import facebook from '../assets/f.png';
import website from '../assets/i.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="icon-container">
          <div className="footer-item">
            <a href="tel:18002001234">
              <img src={call} alt="Call Icon" />
              <p>Toll free 1800 200 1234</p>
            </a>
          </div>
          <div className="footer-item">
            <a href="https://www.facebook.com/cripumps" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook Icon" />
              <p>www.facebook/cripumps</p>
            </a>
          </div>
          <div className="footer-item">
            <a href="https://www.crigroups.com" target="_blank" rel="noopener noreferrer">
              <img src={website} alt="Website Icon" />
              <p>www.crigroups.com</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
