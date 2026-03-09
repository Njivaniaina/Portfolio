import React from 'react';
import { Github, Linkedin, MessageCircle, Heart } from 'lucide-react';
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
              <a href="https://www.linkedin.com/in/fenosoa-njivaniaina-razafindrakoto-a26206316?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWBm%2FhIQFR4aIJ5QhAxnO0A%3D%3D" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/261327105201" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
                <MessageCircle size={20} />
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
