import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="logo">
              Mini<span>Dev</span>
            </a>
            <p className="footer-description">
              Building beautiful, interactive digital experiences with modern web technologies.
            </p>
          </div>
          
          <div className="footer-social">
            <div className="social-links footer-links">
              <a href="https://github.com/Njivaniaina" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/razafindrakoto-fenosoa-njivaniaina" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} MiniDev. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={14} className="heart-icon" /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
