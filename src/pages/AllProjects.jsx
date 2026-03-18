import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/Projects.css';
import './ProjectPages.css';

const AllProjects = ({ theme, toggleTheme }) => {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="all-projects-page">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <div className="all-projects-hero">
            <span className="section-label">Portfolio</span>
            <h1 className="section-title">All Projects</h1>
            <p className="section-subtitle">Every project I've built, contributed to, or shipped</p>
          </div>

          <div className="projects-grid">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="project-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <span className="project-link" style={{ pointerEvents: 'none' }}>
                      <ExternalLink size={18} />
                    </span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDesc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AllProjects;
