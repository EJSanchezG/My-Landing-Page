import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/Hero.css';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="section-fullscreen hero-section">
      <div className="container hero-container">
        <div className="hero-badge" data-aos="fade-down">
          <i className="fa-solid fa-circle"></i>
          {t.hero.badge}
        </div>
        
        <p className="hero-greeting">{t.hero.greeting}</p>
        <h1 className="hero-name">{t.hero.name}</h1>
        <h2 className="hero-title">{t.hero.title}</h2>
        <p className="hero-tagline">{t.hero.tagline}</p>
        
        <div className="hero-ctas">
          <a href="#contacto" className="btn-primary">
            <i className="fa-solid fa-paper-plane"></i>
            {t.hero.ctaPrimary}
          </a>
          <a href="#experiencia" className="btn-secondary">
            <i className="fa-solid fa-briefcase"></i>
            {t.hero.ctaSecondary}
          </a>
          <a 
            href="/CV - Eddie Sanchez.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-resume"
          >
            <i className="fa-solid fa-file-pdf"></i>
            {t.hero.ctaResume}
          </a>
        </div>

        <div className="scroll-indicator">
          <span>{t.hero.scroll}</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
