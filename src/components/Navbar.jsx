import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Navbar.css';

// Navigation items configuration
const NAV_ITEMS = [
  { id: 'inicio', icon: 'fa-house', labelKey: 'inicio' },
  { id: 'sobre-mi', icon: 'fa-user', labelKey: 'sobreMi' },
  { id: 'experiencia', icon: 'fa-briefcase', labelKey: 'experiencia' },
  { id: 'habilidades', icon: 'fa-code', labelKey: 'habilidades' },
  { id: 'formacion', icon: 'fa-graduation-cap', labelKey: 'formacion' },
  { id: 'contacto', icon: 'fa-envelope', labelKey: 'contacto' }
];

export const Navbar = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Mobile Bottom Navigation Bar (< 1024px) */}
      <nav className="bottom-nav" aria-label="Mobile navigation">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="bottom-nav-item"
            aria-label={t.nav[item.labelKey]}
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <span>{t.nav[item.labelKey]}</span>
          </a>
        ))}
      </nav>

      {/* Desktop Top Navigation Bar (>= 1024px) */}
      <nav className="desktop-nav" aria-label="Desktop navigation">
        <div className="desktop-nav-inner">
          <a href="#inicio" className="desktop-nav-brand">
            &lt;Eddie.Sanchez /&gt;
          </a>
          <ul className="desktop-nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="desktop-nav-link"
                  aria-label={t.nav[item.labelKey]}
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                  {t.nav[item.labelKey]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;