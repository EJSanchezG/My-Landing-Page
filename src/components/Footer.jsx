import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Contact.css';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <span className="footer-name">Eddie Jesus Ezequiel Sanchez Guerrero</span>
        <span>© 2026 | {t.footer.rights}</span>
      </div>
    </footer>
  );
};

export default Footer;
