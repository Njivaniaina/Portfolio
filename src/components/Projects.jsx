import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Fonds Patrimoniaux - Digital Library',
    description: "Development of the digital library platform for the University of Antananarivo's Heritage Funds (Fonds Patrimoniaux).",
    image: '/projects/biblio.png',
    tags: ['Web Development', 'Digital Library', 'Archives'],
    liveUrl: 'http://biblio.univ-antananarivo.mg/fonds-patrimoniaux',
    githubUrl: 'https://github.com/Njivaniaina/'
  },
  {
    id: 2,
    title: 'Network Administration - MISA',
    description: 'Network Administrator at MISA (Mathématiques, Informatique et Statistiques Appliquées), University of Antananarivo. Managed IT infrastructure and network security.',
    image: '/projects/misa.png',
    tags: ['SysAdmin', 'Networking', 'Infrastructure', 'Security'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Njivaniaina/'
  },
  {
    id: 3,
    title: 'Science Faculty - Backup System',
    description: 'Contributed to the development of an automated and secure backup system for the Faculty of Sciences (Siansa) website, ensuring data integrity.',
    image: '/projects/siansa.png',
    tags: ['DevOps', 'Backup System', 'Data Security'],
    liveUrl: 'https://siansa.univ-antananarivo.mg/',
    githubUrl: 'https://github.com/Njivaniaina/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Works</h2>
        <p className="section-subtitle">A selection of my recent projects</p>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" aria-label="View Live Site">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className="project-link" aria-label="View Source">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
