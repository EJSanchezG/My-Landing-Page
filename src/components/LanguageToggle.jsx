import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageToggle.css';

// SVG Flag components for high fidelity
const USAFlag = () => (
  <svg viewBox="0 0 640 480" width="100%" height="100%">
    <path fill="#bd3d44" d="M0 0h640v480H0z"/>
    <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 276.9h640M0 350.8h640M0 424.6h640"/>
    <path fill="#192f5d" d="M0 0h256v258.5H0z"/>
    <g fill="#fff">
      <circle cx="25" cy="25" r="8"/>
      <circle cx="76" cy="25" r="8"/>
      <circle cx="128" cy="25" r="8"/>
      <circle cx="179" cy="25" r="8"/>
      <circle cx="230" cy="25" r="8"/>
      <circle cx="51" cy="51" r="8"/>
      <circle cx="102" cy="51" r="8"/>
      <circle cx="153" cy="51" r="8"/>
      <circle cx="204" cy="51" r="8"/>
      <circle cx="25" cy="77" r="8"/>
      <circle cx="76" cy="77" r="8"/>
      <circle cx="128" cy="77" r="8"/>
      <circle cx="179" cy="77" r="8"/>
      <circle cx="230" cy="77" r="8"/>
      <circle cx="51" cy="103" r="8"/>
      <circle cx="102" cy="103" r="8"/>
      <circle cx="153" cy="103" r="8"/>
      <circle cx="204" cy="103" r="8"/>
      <circle cx="25" cy="129" r="8"/>
      <circle cx="76" cy="129" r="8"/>
      <circle cx="128" cy="129" r="8"/>
      <circle cx="179" cy="129" r="8"/>
      <circle cx="230" cy="129" r="8"/>
      <circle cx="51" cy="155" r="8"/>
      <circle cx="102" cy="155" r="8"/>
      <circle cx="153" cy="155" r="8"/>
      <circle cx="204" cy="155" r="8"/>
      <circle cx="25" cy="181" r="8"/>
      <circle cx="76" cy="181" r="8"/>
      <circle cx="128" cy="181" r="8"/>
      <circle cx="179" cy="181" r="8"/>
      <circle cx="230" cy="181" r="8"/>
      <circle cx="51" cy="207" r="8"/>
      <circle cx="102" cy="207" r="8"/>
      <circle cx="153" cy="207" r="8"/>
      <circle cx="204" cy="207" r="8"/>
      <circle cx="25" cy="233" r="8"/>
      <circle cx="76" cy="233" r="8"/>
      <circle cx="128" cy="233" r="8"/>
      <circle cx="179" cy="233" r="8"/>
      <circle cx="230" cy="233" r="8"/>
    </g>
  </svg>
);

const PeruFlag = () => (
  <svg viewBox="0 0 640 480" width="100%" height="100%">
    <path fill="#D91023" d="M0 0h213.3v480H0z"/>
    <path fill="#FFFFFF" d="M213.3 0h213.4v480H213.3z"/>
    <path fill="#D91023" d="M426.7 0H640v480H426.7z"/>
  </svg>
);

export const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle-container">
      <button 
        className="language-toggle-btn" 
        onClick={toggleLanguage}
        title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        <div className="flag-icon">
          {lang === 'es' ? <USAFlag /> : <PeruFlag />}
        </div>
        <span className="lang-code">
          {lang === 'es' ? 'EN' : 'ES'}
        </span>
      </button>
    </div>
  );
};

export default LanguageToggle;
