import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for new opportunities
          </div>
          
          <h1 className="hero-title">
            Full Stack <span>Developer</span> <br />
            & DevOps Enthusiast
          </h1>
          
          <p className="hero-subtitle">
            I craft end-to-end web applications and reliable infrastructures. From modern React frontends to robust Larvel/Django backends and CI/CD pipelines.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" download>
              Download CV <Download size={18} />
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">5+</span>
              <span className="stat-label">Projects<br/>Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">3+</span>
              <span className="stat-label">Tech<br/>Stacks</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Client<br/>Commitment</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-wrapper glass-panel">
            <div className="browser-mockup">
              <div className="browser-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="browser-body">
                <div className="code-block">
                  <pre>
                    <code>
                      <span className="code-keyword">const</span> <span className="code-def">developer</span> = {'{'}
                      <br/>  <span className="code-prop">name</span>: <span className="code-string">"MiniDev"</span>,
                      <br/>  <span className="code-prop">role</span>: <span className="code-string">"Full Stack Dev"</span>,
                      <br/>  <span className="code-prop">skills</span>: [<span className="code-string">"React"</span>, <span className="code-string">"NextJS"</span>, <span className="code-string">"Laravel"</span>, <span className="code-string">"Django"</span>, <span className="code-string">"Docker"</span>], 
                      <br/>  <span className="code-prop">passion</span>: <span className="code-string">"Clean Code & DevOps"</span>
                      <br/>{'}'};
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
