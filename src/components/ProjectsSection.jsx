import React from 'react';
import { ExternalLink } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { projects } from '../data/portfolioData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <FadeInSection>
        <div className="section-header">
          <span className="section-icon">🎮</span>
          <h2 className="section-heading">Featured Projects</h2>
        </div>
      </FadeInSection>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <FadeInSection key={project.id} delay={index * 100}>
            <div className={`project-card bg-gradient-to-br ${project.gradient}`}>
              
              {/* Video YouTube - Piccolo a sinistra */}
              {project.videoId && (
                <div className="project-video-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&loop=1&playlist=${project.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="project-video"
                  />
                </div>
              )}
              
              {/* Contenuto progetto */}
              <div className="project-content">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-type">{project.type}</p>
                  </div>
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      aria-label={`Apri ${project.title}`}
                    >
                      <ExternalLink className="project-icon" size={24} />
                    </a>
                  ) : (
                    <ExternalLink className="project-icon" size={24} />
                  )}
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;