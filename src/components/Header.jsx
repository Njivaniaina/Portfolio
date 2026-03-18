import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, MessageCircle, Sun, Moon } from 'lucide-react';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',     href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact',  href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        {/* Logo */}
        <a href="#home" className="logo">
          Mini<span>Dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>

          <div className="social-links">
            <a href="https://github.com/Njivaniaina" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/fenosoa-njivaniaina-razafindrakoto-a26206316" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://wa.me/261327105201" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <a href="#contact" className="header-cta">Contact Me</a>
        </nav>

        {/* Mobile Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme" style={{ display: 'none' }}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button onClick={() => { toggleTheme(); setIsMenuOpen(false); }} className="mobile-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              {theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode'}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
