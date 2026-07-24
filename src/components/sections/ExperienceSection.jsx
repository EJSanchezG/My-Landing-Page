import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/Experience.css';

export const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="section-fullscreen">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-briefcase"></i>
            {t.nav.experiencia}
          </div>
          <h2 className="section-title">{t.experience.sectionTitle}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </div>

        <div className="experience-timeline">
          {t.experience.jobs.map((job, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-role">{job.role}</h3>
                  <div className="job-meta">
                    <span className="job-company">
                      <i className="fa-solid fa-building-columns"></i>
                      {job.company}
                    </span>
                    <span className="job-period">
                      <i className="fa-regular fa-calendar-days"></i>
                      {job.period}
                    </span>
                    <span className="job-location">
                      <i className="fa-solid fa-location-dot"></i>
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="job-desc">{job.description}</p>

                <ul className="job-achievements">
                  {job.achievements.map((ach, aIndex) => (
                    <li key={aIndex}>{ach}</li>
                  ))}
                </ul>

                <div className="job-techs">
                  {job.technologies.map((tech, tIndex) => (
                    <span className="tech-tag" key={tIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
