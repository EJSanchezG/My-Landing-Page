import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/Education.css';

export const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="formacion" className="section-fullscreen">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-graduation-cap"></i>
            {t.nav.formacion}
          </div>
          <h2 className="section-title">{t.education.sectionTitle}</h2>
          <p className="section-subtitle">{t.education.subtitle}</p>
        </div>

        <div className="education-layout">
          {/* Main Degree Card */}
          <div className="degree-card">
            <div className="degree-icon">
              <i className="fa-solid fa-user-graduate"></i>
            </div>
            <h3 className="degree-title">{t.education.degree.title}</h3>
            <h4 className="degree-institution">{t.education.degree.institution}</h4>
            <p className="degree-detail">{t.education.degree.detail}</p>
            <div className="degree-location">
              <i className="fa-solid fa-location-dot"></i>
              {t.education.degree.location}
            </div>
          </div>

          {/* Certifications Panel */}
          <div className="certs-panel">
            <h3 className="certs-title-sub">
              <i className="fa-solid fa-award"></i>
              {t.education.certificationsTitle}
            </h3>
            
            <div className="certs-grid">
              {t.education.certifications.map((cert, index) => (
                <div className="cert-card" key={index}>
                  <div className="cert-icon">
                    <i className="fa-solid fa-certificate"></i>
                  </div>
                  <div className="cert-info">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
