import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

const ContactSection = ({ profileData }) => {
  return (
    <section className="contact-section">
      <FadeInSection>
        <div className="contact-content">
          
          {/* Immagine con crediti artista */}
          <div className="contact-image-wrapper">
            <img 
              src="./oni_ill.png" 
              alt="Contact illustration"
              className="contact-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="contact-image-credits">
              <p>Artwork by <a href="https://instagram.com/artist" target="_blank" rel="noopener noreferrer">@artist_name</a></p>
            </div>
          </div>

          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-text">
            Do you have an exciting ptoject in mind, need assistance, or just want to say hello? Feel free to reach out! I'm always open to discussing new opportunities and collaborations.
          </p>
          <a
            href={`mailto:${profileData.email}`}
            className="contact-button"
          >
            <Mail size={24} />
            Get in Touch
            <ArrowUpRight size={24} />
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ContactSection;