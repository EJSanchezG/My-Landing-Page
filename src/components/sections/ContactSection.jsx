import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/Contact.css';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(t.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contacto" className="section-fullscreen">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fa-solid fa-envelope"></i>
            {t.nav.contacto}
          </div>
          <h2 className="section-title">{t.contact.sectionTitle}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-container-inner">
          <div className="contact-grid">
            {/* Email Contact Card - Option B: Copy to Clipboard */}
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <i className="fa-solid fa-envelope-open-text"></i>
              </div>
              <span className="contact-label">{t.contact.labels.email}</span>
              <button 
                type="button"
                onClick={handleCopyEmail}
                className={`contact-link copy-btn ${copied ? 'copied' : ''}`}
                aria-label={t.contact.labels.copyEmail}
              >
                {copied ? (
                  <>
                    <i className="fa-solid fa-check"></i>
                    {t.contact.labels.emailCopied}
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-copy"></i>
                    {t.contact.labels.copyEmail}
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Contact Card */}
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <span className="contact-label">{t.contact.labels.phone}</span>
              <a 
                href={`https://wa.me/${t.contact.whatsappNumber}?text=${encodeURIComponent(t.contact.whatsappMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                {t.contact.labels.sendWhatsapp}
                <i className="fa-solid fa-paper-plane"></i>
              </a>
            </div>

            {/* Location Contact Card */}
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <span className="contact-label">{t.contact.labels.location}</span>
              <span className="contact-link contact-location-link">
                Piura, PE
              </span>
            </div>

            {/* GitHub Profile Contact Card */}
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <i className="fa-brands fa-github"></i>
              </div>
              <span className="contact-label">{t.contact.labels.github}</span>
              <a 
                href={t.contact.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                GitHub
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
