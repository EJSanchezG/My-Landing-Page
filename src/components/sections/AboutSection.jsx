import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ImageCycler } from '../ImageCycler';
import '../../styles/About.css';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="section-fullscreen">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-user-gear"></i>
            {t.nav.sobreMi}
          </div>
          <h2 className="section-title">{t.about.sectionTitle}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <p className="about-p">{t.about.paragraph1}</p>
            <p className="about-p">{t.about.paragraph2}</p>
            
            <div className="about-ai-card">
              <div className="about-ai-header">
                <i className="fa-solid fa-brain-circuit"></i>
                <h3>{t.about.aiHighlightTitle}</h3>
              </div>
              <p className="about-ai-p">{t.about.aiHighlightText}</p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">{t.about.stats.yearsExp}</span>
                <span className="stat-desc">{t.about.stats.yearsExpDesc}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{t.about.stats.fullStack}</span>
                <span className="stat-desc">{t.about.stats.fullStackDesc}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{t.about.stats.cleanArch}</span>
                <span className="stat-desc">{t.about.stats.cleanArchDesc}</span>
              </div>
            </div>
          </div>

          <div className="about-image-container">
            <ImageCycler />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
