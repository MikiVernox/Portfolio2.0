import React from 'react';
import { Github, Linkedin, Youtube, Instagram, Mail, Globe, Phone, MapPin } from 'lucide-react';
import '../styles/Sidebar.css';
import ProfilePicture from '../assets/profile-picture.jpg';


const Sidebar = ({ activeSection, scrollToSection, profileData }) => {
  const navItems = [
    { id: 'intro', label: 'Intro', icon: '📖' },
    { id: 'projects', label: 'Projects', icon: '🎮' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="avatar-wrapper">
            <div className="avatar-glow" />
            {/* MODIFICA: Usa immagine invece di emoji */}
            <div className="avatar avatar-image">
              <img 
                src={ProfilePicture}
                alt="Michele Vernone" 
                className="avatar-img"
              />
            </div>
          </div>
          <h1 className="profile-name">{profileData.name}</h1>
          <p className="profile-pronouns">{profileData.pronouns}</p>
          <p className="profile-title">{profileData.title}</p>
          <div className="profile-location">
            <MapPin size={14} />
            <span>{profileData.location}</span>
          </div>
        </div>

        {/* Contact */}
        <div className="contact-section">
          <h3 className="section-title">Contact</h3>
          <div className="contact-list">
            <a href={`mailto:${profileData.email}`} className="contact-item">
              <div className="contact-icon">
                <Mail size={14} />
              </div>
              <span className="contact-text">{profileData.email}</span>
            </a>
            <a href={`https://${profileData.website}`} className="contact-item">
              <div className="contact-icon">
                <Globe size={14} />
              </div>
              <span className="contact-text">{profileData.website}</span>
            </a>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={14} />
              </div>
              <span className="contact-text">{profileData.phone}</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h3 className="section-title">Technical Skills</h3>
          <div className="skills-category">
            <p className="skills-category-title">Languages</p>
            <div className="skills-list">
              {profileData.skills.languages.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <p className="skills-category-title">Engines</p>
            <div className="skills-list">
              {profileData.skills.engines.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/MikiVernox" className="social-link"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/michele-domenico-vernone-61491b241/" className="social-link"><Linkedin size={18} /></a>
          <a href="https://www.instagram.com/mikivernox/" className="social-link"><Instagram size={18} /></a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;