import React from 'react';
import { Code2 } from 'lucide-react';
import { FaInstagram, FaGlobe, FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Left Side: Logo & Website Name */}
        <div className="footer-left">
          <div className="footer-logo">
            <Code2 size={24} />
          </div>
          <span className="footer-brand">TechScribe</span>
        </div>

        {/* Middle: Copyright */}
        <div className="footer-middle">
          &copy; <span className="footer-highlight">Krupachaitanya</span> 2026. All rights reserved.
        </div>

        {/* Right Side: Social Icons & Email */}
        <div className="footer-right">
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/_dairyof.chaitu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-link">
              <FaInstagram size={20} />
            </a>
            <a href="https://twinco.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Company Link" className="social-icon-link">
              <FaGlobe size={20} />
            </a>
            <a href="https://github.com/Krupachaitanya" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-link">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/krupa1030" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-link">
              <FaLinkedin size={20} />
            </a>
            <a href="https://krupa-portfolioo.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="social-icon-link">
              <FaUserCircle size={20} />
            </a>
          </div>
          <a href="mailto:twincosolutions03@gmail.com" className="footer-mail">
            twincosolutions03@gmail.com
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
