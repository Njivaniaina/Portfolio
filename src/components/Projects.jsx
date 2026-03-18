import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projectsData } from "../data/projects";
import "./Projects.css";

// Show only the last 3 projects on the homepage
const PREVIEW_COUNT = 3;
const previewProjects = projectsData.slice(-PREVIEW_COUNT);

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">My Latest Work</h2>
          <p className="section-subtitle">A selection of my most recent projects</p>
        </div>

        <div className="projects-grid">
          {previewProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="project-card"
              style={{ textDecoration: "none" }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="project-link" style={{ pointerEvents: "none" }}>
                    <ExternalLink size={18} />
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDesc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See all projects CTA */}
        <div className="projects-cta">
          <Link to="/projects" className="btn btn-outline">
            See All Projects <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
