import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import { profileData } from './data/portfolioData';

// Importa FloatingNav solo se esiste, altrimenti usa null
let FloatingNav = null;
try {
  FloatingNav = require('./components/FloatingNav').default;
} catch (e) {
  console.log('FloatingNav not found, using sidebar navigation');
}

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const scrollContainerRef = useRef(null);

  // Scroll tracking per attivare la sezione corretta nella sidebar
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      const sections = ['intro', 'projects', 'experience', 'education', 'certifications'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
          }
        }
      });
    };

    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  // Funzione per scrollare a una sezione specifica
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && scrollContainerRef.current) {
      const offsetTop = element.offsetTop - 100;
      scrollContainerRef.current.scrollTo({ 
        top: offsetTop, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Background Effects */}
      <div className="bg-gradient" />
      <div className="bg-grid" />

      <div className="portfolio-layout">
        {/* Sidebar */}
        <Sidebar 
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          profileData={profileData}
        />

        {/* Floating Navigation Bubble - Solo se esiste */}
        {FloatingNav && (
          <FloatingNav 
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        )}

        {/* Main Content */}
        <main ref={scrollContainerRef} className="main-content">
          <IntroSection 
            profileData={profileData} 
            scrollToSection={scrollToSection} 
          />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection profileData={profileData} />

          {/* Footer */}
          <footer className="footer">
            <div className="footer-content">
              <p>© 2024 Michele Domenico Vernone</p>
              <p>Crafted with ❤️ using React & Tailwind</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;