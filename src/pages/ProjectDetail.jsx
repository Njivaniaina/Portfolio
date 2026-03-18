import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProjectPages.css';
import '../components/Projects.css';

const ProjectDetail = ({ theme, toggleTheme }) => {
  const { id } = useParams();
  const index = projectsData.findIndex((p) => p.id === id);

  if (index === -1) return <Navigate to="/" replace />;

  const project = projectsData[index];
  const prev = projectsData[index - 1] || null;
  const next = projectsData[index + 1] || null;

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="project-detail-page">
        <div className="container">

          {/* Back link */}
          <div className="detail-back">
            <Link to="/projects" className="back-link">
              <ArrowLeft size={14} /> All Projects
            </Link>
          </div>

          {/* Hero: image + meta */}
          <div className="detail-hero">
            <div className="detail-image-wrapper">
              <img src={project.image} alt={project.title} className="detail-image" />
            </div>

            <div className="detail-meta">
              <span className="section-label">Project</span>
              <h1 className="detail-title">{project.title}</h1>

              {/* Info grid inside meta */}
              <div className="detail-info-grid" style={{ margin: '0.5rem 0' }}>
                <div className="info-item">
                  <p className="detail-label">Year</p>
                  <p className="detail-value">{project.year}</p>
                </div>
                <div className="info-item">
                  <p className="detail-label">Role</p>
                  <p className="detail-value">{project.role}</p>
                </div>
                <div className="info-item">
                  <p className="detail-label">Stack</p>
                  <p className="detail-value">{project.tags.slice(0, 2).join(', ')}</p>
                </div>
              </div>

              <div className="detail-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>

              <div className="detail-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} /> View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <Github size={16} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* About this project */}
          <div className="detail-body">
            <h2>About this project</h2>
            <p>{project.fullDesc}</p>
          </div>

          {/* Prev / Next navigation */}
          <div className="detail-nav">
            {prev ? (
              <Link to={`/projects/${prev.id}`} className="detail-nav-btn">
                <span className="detail-nav-hint">← Previous</span>
                <span className="detail-nav-title">{prev.title}</span>
              </Link>
            ) : <div />}

            {next ? (
              <Link to={`/projects/${next.id}`} className="detail-nav-btn next">
                <span className="detail-nav-hint">Next →</span>
                <span className="detail-nav-title">{next.title}</span>
              </Link>
            ) : <div />}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
