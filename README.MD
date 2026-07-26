# Landing Page Profesional - Eddie Jesus Ezequiel Sanchez Guerrero

Sitio web personal y portafolio profesional interactivo de **Eddie Jesus Ezequiel Sanchez Guerrero**, Ingeniero Informatico especializado en desarrollo Backend con Java (Spring Boot), arquitectura de software, modernizacion de sistemas criticos y desarrollo Frontend accesible y de alto rendimiento.

---

## Caracteristicas Principales

- **Arquitectura Ultrarrapida (SSG):** Construido 100% con **Astro 7 (v7.1.3)** y **Alpine.js 3** para lograr una carga instantanea con cero sobrecarga (zero hydration overhead) de React.
- **Soporte Bilingue Reactivo (i18n):** Estrategia de internacionalizacion en tiempo real (Espanol / Ingles) mediante un store global en Alpine.js (`$store.i18n`). Permite cambiar de idioma al instante sin parpadeos ni recargas de pagina.
- **Estilos Modulares en CSS Puro:** Diseno desarrollado 100% con CSS Nativo Modular (`variables.css`, `global.css`, `Navbar.css`, etc.) utilizando variables CSS, Flexbox, CSS Grid y animaciones `@keyframes`. Estrictamente **sin estilos en linea**.
- **Iconos Oficiales con Font Awesome 7:** Integracion de `@fortawesome/fontawesome-free` (v7.3.1) empaquetados y optimizados directamente en la compilacion de Astro.
- **Despliegue GitHub Pages Optimizado:** Configurado en `astro.config.mjs` con `build: { assets: 'assets' }` para compilar los recursos en `dist/assets/` en lugar de `_astro/`, evitando bloqueos de Jekyll sin necesidad de archivo `.nojekyll`.
- **Estrategia Mobile First:** Diseno responsivo optimizado para dispositivos moviles (`< 768px`), tablets (`>= 768px`) y escritorio (`>= 1024px`).
- **Navegacion Movil Flotante (Bottom Navigation Bar):** En pantallas moviles, cuenta con una barra flotante en la parte inferior para navegacion intuitiva basada en el estandar moderno de aplicaciones moviles.
- **Carrusel de Fotos con Animacion CSS:** Presentacion interactiva de fotos de perfil en la seccion "Sobre Mi" con transicion suave `crossfade` (fade-in / fade-out) mediante CSS puro.
- **Integracion de Inteligencia Artificial:** Resaltado profesional sobre como la IA se aplica en el flujo de trabajo para optimizar y elevar la calidad en el desarrollo de software.
- **Secciones Full-Screen (100vh):**
  1. **Inicio (`#inicio`):** Presentacion principal, perfil e impacto.
  2. **Sobre Mi (`#sobre-mi`):** Trayectoria, principios de software, integracion de IA y galeria animada.
  3. **Experiencia (`#experiencia`):** Cronologia laboral detallada (Caja Piura, Universidad de Piura, R2CTEC).
  4. **Habilidades (`#habilidades`):** Lenguajes, Frameworks, Bases de Datos, DevOps y Herramientas.
  5. **Formacion (`#formacion`):** Titulo universitario, equivalencias y certificaciones tecnologicas.
  6. **Contacto (`#contacto`):** Canales directos de comunicacion, envio de correo e interaccion interactiva.

---

## Stack Tecnologico

- **Core & SSG:** [Astro 7 (v7.1.3)](https://astro.build/)
- **Interactividad en Cliente:** [Alpine.js 3](https://alpinejs.dev/) (`@astrojs/alpinejs` v1.0.0)
- **Lenguajes:** HTML5, JavaScript Nativo (ES6+), CSS3 Modular
- **Iconos:** Font Awesome 7 (`@fortawesome/fontawesome-free` v7.3.1)
- **Tipografias:** Plus Jakarta Sans & JetBrains Mono (via Google Fonts)
- **Despliegue:** GitHub Pages (`gh-pages` v6.3.0)

---

## Estructura del Proyecto

```text
.
|-- astro.config.mjs       # Configuracion principal de Astro (Alpine integration, base, assets folder)
|-- build.js               # Script ejecutor de build optimizado para Windows
|-- package.json           # Dependencias y scripts del proyecto (Astro 7 + FontAwesome 7)
|-- public/                # Recursos estaticos (imagenes, favicon, PDF del CV)
|   |-- img/
|   |-- favicon.svg
|   `-- CV - Eddie Sanchez.pdf
`-- src/
    |-- components/        # Componentes UI de Astro
    |   |-- Footer.astro
    |   |-- ImageCycler.astro
    |   |-- LanguageToggle.astro
    |   |-- Navbar.astro
    |   `-- sections/      # Secciones principales de la landing
    |       |-- AboutSection.astro
    |       |-- ContactSection.astro
    |       |-- EducationSection.astro
    |       |-- ExperienceSection.astro
    |       |-- HeroSection.astro
    |       `-- SkillsSection.astro
    |-- data/
    |   `-- translations.js # Diccionario bilingue (ES / EN)
    |-- entrypoint.js      # Inicializador del store i18n de Alpine.js
    |-- layouts/
    |   `-- Layout.astro   # Layout HTML5 base con SEO metas y fuentes
    |-- pages/
    |   `-- index.astro    # Pagina de entrada principal
    `-- styles/            # CSS Modulares del sistema de diseno
        |-- About.css
        |-- Contact.css
        |-- Education.css
        |-- Experience.css
        |-- Footer.css
        |-- Hero.css
        |-- ImageCycler.css
        |-- LanguageToggle.css
        |-- Navbar.css
        |-- Skills.css
        |-- global.css
        `-- variables.css
```

---

## Instalacion y Ejecucion Local

1. **Instalar dependencias:**
   ```bash
   npm install
   # o usando pnpm:
   npx pnpm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para produccion (Genera la carpeta dist/):**
   ```bash
   npm run build
   ```

4. **Previsualizar la compilacion de produccion:**
   ```bash
   npm run preview
   ```

5. **Desplegar en GitHub Pages:**
   ```bash
   npm run deploy
   ```

---

(c) 2026 Eddie Jesus Ezequiel Sanchez Guerrero. Todos los derechos reservados.
