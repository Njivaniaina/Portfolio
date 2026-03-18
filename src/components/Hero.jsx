import React from 'react';
import { ArrowRight, Download, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Subtle ambient blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <p className="hero-greeting">Hello I'm</p>
          <h1 className="hero-name">Fenosoa<br/>Njivaniaina</h1>
          <div className="hero-role">
            <span className="gold-bar" />
            Full Stack Developer &amp; DevOps Enthusiast
          </div>

          <p className="hero-subtitle">
            I craft end-to-end web applications and reliable infrastructures—modern React frontends, robust Laravel/Django backends, and CI/CD pipelines.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={17} />
            </a>
            <a href="/CV.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer" download>
              <Download size={17} /> Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">5+</span>
              <span className="stat-label">Projects<br/>Completed</span>
            </div>
            <span className="stat-sep" />
            <div className="stat-item">
              <span className="stat-value">3+</span>
              <span className="stat-label">Tech<br/>Stacks</span>
            </div>
            <span className="stat-sep" />
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Client<br/>Commitment</span>
            </div>
          </div>
        </div>

        {/* RIGHT – Photo in geometric frame */}
        <div className="hero-visual">
          {/* Rotating ring */}
          <div className="photo-ring" />

          {/* Diamond clip */}
          <div className="photo-diamond">
            <img src="/me.jpg" alt="Fenosoa Njivaniaina" className="photo-img" />
          </div>

          {/* SVG triangle border overlay */}
          <svg className="diamond-svg" viewBox="0 0 320 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="160,10 310,340 10,340"
              stroke="#c9a84c"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
            />
          </svg>

          {/* Floating badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
