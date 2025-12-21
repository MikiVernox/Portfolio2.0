import React from 'react';

const FloatingNav = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'intro', icon: '📖', label: 'Intro' },
    { id: 'projects', icon: '🎮', label: 'Projects' },
    { id: 'education', icon: '🎓', label: 'Education' },
    { id: 'certifications', icon: '🏆', label: 'Certifications' }
  ];

  return (
    <nav className="floating-nav">
      <div className="floating-nav-content">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`floating-nav-item ${activeSection === item.id ? 'active' : ''}`}
            title={item.label}
          >
            <span className="floating-nav-icon">{item.icon}</span>
            {activeSection === item.id && (
              <span className="floating-nav-label">{item.label}</span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNav;