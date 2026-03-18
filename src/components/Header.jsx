import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, MessageCircle, Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // On homepage: use bare anchors for smooth scroll.
  // On other pages: prefix with "/" so the browser navigates to homepage + scrolls.
  const isHome = location.pathname === '/';
  const href = (hash) => (isHome ? hash : `/${hash}`);

  const navLinks = [
    { name: 'Home',     hash: '#home' },
    { name: 'Projects', hash: '#projects' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        {/* Logo — always goes to homepage root */}
        <Link to="/" className="logo-wrapper" onClick={closeMenu}>
          <Logo size={32} className="logo-icon" />
          <div className="logo-text">
            Mini<span>Dev</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={href(link.hash)} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>

          <div className="social-links">
            <a href="https://github.com/Njivaniaina" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href="https://www.linkedin.com/in/fenosoa-njivaniaina-razafindrakoto-a26206316" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="https://wa.me/261327105201" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
              <MessageCircle size={17} />
            </a>
          </div>

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a href={href('#contact')} className="header-cta">Contact Me</a>
        </nav>

        {/* Mobile Controls */}
        <div className="mobile-controls">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={href(link.hash)}
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href={href('#contact')} className="mobile-nav-link" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
