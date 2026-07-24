import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/Skills.css';

export const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="habilidades" className="section-fullscreen">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-code"></i>
            {t.nav.habilidades}
          </div>
          <h2 className="section-title">{t.skills.sectionTitle}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </div>

        <div className="skills-grid">
          {t.skills.categories.map((category, index) => (
            <div className="skills-card" key={index}>
              <div className="skills-card-header">
                <i className={`fa-solid ${category.icon}`}></i>
                <h3 className="skills-card-title">{category.title}</h3>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="skill-badge">
                    <i className="fa-solid fa-circle-check"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
