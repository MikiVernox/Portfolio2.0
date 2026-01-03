import React from 'react';
import FadeInSection from './FadeInSection';
import { experience } from '../data/portfolioData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section">
      <FadeInSection>
        <div className="section-header">
          <span className="section-icon">💼</span>
          <h2 className="section-heading">Work Experience</h2>
        </div>
      </FadeInSection>

      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <FadeInSection key={exp.id} delay={index * 100}>
            <div className="experience-item">
              <div className={`experience-dot ${exp.current ? 'current' : ''}`} />
              
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                {exp.current && (
                  <span className="current-badge">Current</span>
                )}
              </div>
              
              <div className="experience-meta">
                <span>{exp.period}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
              
              <p className="experience-description">
                {exp.description}
              </p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;