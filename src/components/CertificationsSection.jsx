import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import { certifications } from '../data/portfolioData';

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section">
      <FadeInSection>
        <div className="section-header">
          <span className="section-icon">🏆</span>
          <h2 className="section-heading">Certifications & Licenses</h2>
        </div>
      </FadeInSection>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <FadeInSection key={cert.id} delay={index * 50}>
            <div 
              className="certification-card"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Immagine certificato */}
              {cert.image && (
                <div className="certification-image-preview">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="certification-img"
                  />
                  <div className="certification-overlay">
                    <span className="certification-view-text">View</span>
                  </div>
                </div>
              )}
              
              <div className="certification-info">
                <div className="certification-header">
                  <span className="certification-year">{cert.year}</span>
                </div>
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      {/* Modal per visualizzare il certificato in grande */}
      {selectedCert && (
        <div 
          className="certification-modal"
          onClick={() => setSelectedCert(null)}
        >
          <div className="certification-modal-content">
            <button 
              className="certification-modal-close"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
            <img 
              src={selectedCert.image} 
              alt={selectedCert.name}
              className="certification-modal-img"
            />
            <div className="certification-modal-info">
              <h3>{selectedCert.name}</h3>
              <p>{selectedCert.issuer} • {selectedCert.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;