import { translations } from './data/translations.js';

export default (Alpine) => {
  Alpine.store('i18n', {
    lang: 'es',
    t: translations.es,
    toggle() {
      this.lang = this.lang === 'es' ? 'en' : 'es';
      this.t = translations[this.lang];
    }
  });
};
