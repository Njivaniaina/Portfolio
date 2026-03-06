import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI, seamless payment integration, and a dedicated admin panel for product management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105153ce67?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'Stripe', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Real-time financial analytics dashboard providing insightful data visualizations and portfolio management tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Vite', 'React', 'Chart.js', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'An AI-powered tool that helps marketers generate SEO-optimized content briefs and blog posts in seconds.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'OpenAI', 'CSS Modules'],
    liveUrl: '#',
    githubUrl: '#'
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
