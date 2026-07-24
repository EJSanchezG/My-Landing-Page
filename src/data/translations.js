export const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      sobreMi: "Sobre Mí",
      experiencia: "Experiencia",
      habilidades: "Habilidades",
      formacion: "Formación",
      contacto: "Contacto"
    },
    hero: {
      greeting: "Hola, soy",
      name: "Eddie Jesus Ezequiel Sanchez Guerrero",
      title: "Ingeniero Informático | Java Backend & React Frontend",
      tagline: "Especialista en desarrollo de software robusto, modernización de sistemas críticos en el sector financiero e integración avanzada de Inteligencia Artificial para optimizar procesos.",
      badge: "Disponible para Proyectos y Oportunidades",
      ctaPrimary: "Contacto Directo",
      ctaSecondary: "Ver Experiencia",
      ctaResume: "Ver CV en PDF",
      scroll: "Desplazar"
    },
    about: {
      sectionTitle: "Sobre Mí",
      subtitle: "Perfil Profesional y Filosofía de Desarrollo",
      paragraph1: "Ingeniero Informático con más de 3 años de experiencia especializada en el ecosistema Java (Spring Boot) y desarrollo web moderno. Destaco por liderar la migración y modernización de sistemas financieros legacy (VB6 a Java 21) en entidades bancarias de alto volumen, garantizando alta disponibilidad, seguridad criptográfica y cero interrupciones en operaciones críticas.",
      paragraph2: "Aplico rigurosamente los principios SOLID, Clean Code y patrones de diseño para construir arquitecturas escalables, mantenibles y de alto rendimiento. Mi enfoque combina la robustez del desarrollo Backend enterprise con interfaces Frontend dinámicas y altamente optimizadas.",
      aiHighlightTitle: "Impulso e Integración de Inteligencia Artificial",
      aiHighlightText: "Integro estratégicamente herramientas de Inteligencia Artificial de vanguardia en mi flujo de trabajo diario. La adopción de la IA me permite optimizar el ciclo de vida del software: desde la aceleración en el diseño de arquitectura y refactorización de código legacy, hasta la automatización de pruebas y resolución eficiente de problemas complejos, logrando entregas más ágiles con estándares superiores de calidad.",
      stats: {
        yearsExp: "Años de experiencia",
        yearsExpDesc: "3 años Backend Java y 2 años Frontend React",
        fullStack: "Full Stack",
        fullStackDesc: "Spring Boot & React",
        cleanArch: "Clean Architecture",
        cleanArchDesc: "Principios SOLID y Testing"
      }
    },
    experience: {
      sectionTitle: "Experiencia Profesional",
      subtitle: "Trayectoria en Entidades Financieras y Proyectos Tecnológicos",
      jobs: [
        {
          company: "Caja Piura",
          role: "Desarrollador de Software",
          period: "Oct 2023 - Presente",
          location: "Piura, Perú",
          description: "Liderazgo técnico en la modernización del sistema core financiero y soluciones críticas institucionales.",
          achievements: [
            "Modernización completa de módulos legacy de VB6 a Java 21 con Spring Boot y JBoss 8.",
            "Desarrollo e implementación del sistema de contingencia financiera con base de datos encriptada mediante SQLCipher.",
            "Implementación y optimización de la plataforma biométrica integrada con RENIEC para validación de identidad en tiempo real."
          ],
          technologies: ["Java 21", "Spring Boot", "JBoss 8", "SQLCipher", "Oracle DB", "RENIEC API", "Clean Code"]
        },
        {
          company: "Universidad de Piura",
          role: "Analista Junior de Servidores y Servicios",
          period: "Ago 2023 - Sep 2023",
          location: "Piura, Perú",
          description: "Gestión de infraestructura de servidores y cumplimiento de normativas de seguridad TI.",
          achievements: [
            "Gestión integral de activos de TI y monitoreo preventivo de infraestructura de servidores.",
            "Auditoría e implementación de directivas de cumplimiento de seguridad informática institucionales."
          ],
          technologies: ["S.O Windows", "Office"]
        },
        {
          company: "R2CTEC",
          role: "Consultor Independiente / Desarrollador Web",
          period: "Jul 2022 - Oct 2022",
          location: "Piura, Perú",
          description: "Diseño y despliegue de sistema web de facturación electrónica comercial.",
          achievements: [
            "Desarrollo full-stack de plataforma de facturación electrónica integrada con Nubefact y SUNAT.",
            "Diseño de base de datos relacional optimizada en MySQL y frontend intuitivo y responsivo."
          ],
          technologies: ["Laravel", "PHP", "MySQL", "Nubefact API", "JavaScript", "CSS3"]
        }
      ]
    },
    skills: {
      sectionTitle: "Habilidades & Stack Tecnológico",
      subtitle: "Dominio de Lenguajes, Frameworks, Bases de Datos y Herramientas DevOps",
      categories: [
        {
          title: "Lenguajes de Programación",
          icon: "fa-code",
          skills: ["Java (8 - 21)", "JavaScript (ES6+)", "TypeScript", "Python", "SQL", "PHP"]
        },
        {
          title: "Backend & Frameworks",
          icon: "fa-server",
          skills: ["Spring Boot", "Hibernate / JPA", "JBoss / WildFly", "RESTful APIs", "Laravel", "Microservicios"]
        },
        {
          title: "Frontend Web",
          icon: "fa-desktop",
          skills: ["React 19", "HTML5 / CSS3 / JS", "CSS Modules / Flexbox / Grid", "Responsive Design", "i18n", "UI/UX Optimization"]
        },
        {
          title: "Bases de Datos & Seguridad",
          icon: "fa-database",
          skills: ["Oracle DB", "MySQL", "PostgreSQL", "IBM DB2", "MongoDB", "SQLCipher (Encryption)"]
        },
        {
          title: "Herramientas, Cloud & AI",
          icon: "fa-cubes",
          skills: ["Docker", "Git / GitHub", "AWS", "Microsoft Azure", "Maven", "AI Coding Assistants (Copilot / LLMs)"]
        }
      ]
    },
    education: {
      sectionTitle: "Formación & Certificaciones",
      subtitle: "Grado Académico Universitario y Certificaciones Profesionales",
      degree: {
        title: "Ingeniero Informático",
        institution: "Universidad Nacional de Piura",
        detail: "Equivalencia a Grado Universitario en España.",
        location: "Piura, Perú"
      },
      certificationsTitle: "Certificaciones Técnicas",
      certifications: [
        { name: "CURSO PROFESIONAL DE TYPESCRIPT", issuer: "CodigoFacilito" },
        { name: "CURSO PROFESIONAL DE JAVASCRIPT", issuer: "CodigoFacilito" },
        { name: "CURSO DE FUNDAMENTOS DE AZURE", issuer: "CodigoFacilito" },
        { name: "CURSO DE FUNDAMENTOS DE AWS", issuer: "CodigoFacilito" },
        { name: "PYTHON DE CERO A EXPERTO", issuer: "Cámara de Comercio Exterior" },
        { name: "CURSO A FONDO DE GITHUB", issuer: "CodigoFacilito" },
        { name: "CURSO PROFESIONAL DE DOCKER", issuer: "CodigoFacilito" }
      ]
    },
    contact: {
      sectionTitle: "Contacto Directo",
      subtitle: "¿Tienes un proyecto o deseas comunicarte conmigo? ¡Hablemos!",
      email: "ing.eddiesanchez@gmail.com",
      whatsappNumber: "51941593095",
      whatsappMessage: "Hola Ing. Jesus Sanchez, he revisado su sitio web y estoy interesad@ en contactar con usted. Mi nombre es [Tu Nombre] de la empresa [Tu Empresa].",
      location: "Piura, Perú",
      github: "https://github.com/EJSanchezG",
      labels: {
        email: "Correo Electrónico",
        phone: "WhatsApp Directo",
        location: "Ubicación",
        github: "Perfil de GitHub",
        copyEmail: "Copiar Correo",
        emailCopied: "¡Correo Copiado!",
        sendWhatsapp: "Enviar Mensaje"
      }
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      inicio: "Home",
      sobreMi: "About Me",
      experiencia: "Experience",
      habilidades: "Skills",
      formacion: "Education",
      contacto: "Contact"
    },
    hero: {
      greeting: "Hello, I am",
      name: "Eddie Jesus Ezequiel Sanchez Guerrero",
      title: "Computer Engineer | Java Backend & React Frontend",
      tagline: "Specialist in robust software development, critical system modernization in the financial sector, and advanced Artificial Intelligence integration to optimize development workflows.",
      badge: "Available for Projects & Opportunities",
      ctaPrimary: "Direct Contact",
      ctaSecondary: "View Experience",
      ctaResume: "View Resume in PDF",
      scroll: "Scroll"
    },
    about: {
      sectionTitle: "About Me",
      subtitle: "Professional Profile & Development Philosophy",
      paragraph1: "Computer Engineer with over 3 years of specialized experience in the Java ecosystem (Spring Boot) and modern web development. I excel in leading the migration and modernization of legacy financial systems (VB6 to Java 21) in high-volume banking institutions, ensuring high availability, cryptographic security, and zero downtime in critical operations.",
      paragraph2: "I strictly adhere to SOLID principles, Clean Code, and design patterns to build scalable, maintainable, and high-performance architectures. My approach blends enterprise Backend robustness with dynamic, highly optimized Frontend interfaces.",
      aiHighlightTitle: "Artificial Intelligence Integration & Optimization",
      aiHighlightText: "I strategically integrate cutting-edge Artificial Intelligence tools into my daily engineering workflow. Leveraging AI enables me to optimize the software development lifecycle: from accelerating architectural design and refactoring legacy code, to automated testing and efficient resolution of complex engineering challenges, delivering high-quality software with enhanced agility.",
      stats: {
        yearsExp: "Years of Experience",
        yearsExpDesc: "3 years Backend Java & 2 years Frontend React",
        fullStack: "Full Stack",
        fullStackDesc: "Spring Boot & React",
        cleanArch: "Clean Architecture",
        cleanArchDesc: "SOLID Principles & Testing"
      }
    },
    experience: {
      sectionTitle: "Professional Experience",
      subtitle: "Career History in Financial Institutions & Tech Projects",
      jobs: [
        {
          company: "Caja Piura",
          role: "Software Developer",
          period: "Oct 2023 - Present",
          location: "Piura, Peru",
          description: "Technical leadership in modernizing core banking systems and critical institutional solutions.",
          achievements: [
            "Complete modernization of legacy VB6 modules to Java 21 with Spring Boot and JBoss 8.",
            "Development and implementation of a financial contingency system featuring encrypted database storage via SQLCipher.",
            "Implementation and optimization of the biometric platform integrated with RENIEC for real-time identity verification."
          ],
          technologies: ["Java 21", "Spring Boot", "JBoss 8", "SQLCipher", "Oracle DB", "RENIEC API", "Clean Code"]
        },
        {
          company: "Universidad de Piura",
          role: "Junior Server & Services Analyst",
          period: "Aug 2023 - Sep 2023",
          location: "Piura, Peru",
          description: "Server infrastructure management and IT security compliance auditing.",
          achievements: [
            "End-to-end management of IT assets and preventive monitoring of server infrastructure.",
            "Auditing and implementation of institutional IT security directives and policies."
          ],
          technologies: ["S.O Windows", "Office"]
        },
        {
          company: "R2CTEC",
          role: "Independent Consultant / Web Developer",
          period: "Jul 2022 - Oct 2022",
          location: "Piura, Peru",
          description: "Design and deployment of a web-based commercial electronic invoicing system.",
          achievements: [
            "Full-stack development of an electronic invoicing platform integrated with Nubefact and SUNAT.",
            "Design of an optimized relational MySQL database paired with an intuitive, responsive frontend."
          ],
          technologies: ["Laravel", "PHP", "MySQL", "Nubefact API", "JavaScript", "CSS3"]
        }
      ]
    },
    skills: {
      sectionTitle: "Skills & Tech Stack",
      subtitle: "Proficiency in Languages, Frameworks, Databases, and DevOps Tools",
      categories: [
        {
          title: "Programming Languages",
          icon: "fa-code",
          skills: ["Java (8 - 21)", "JavaScript (ES6+)", "TypeScript", "Python", "SQL", "PHP"]
        },
        {
          title: "Backend & Frameworks",
          icon: "fa-server",
          skills: ["Spring Boot", "Hibernate / JPA", "JBoss / WildFly", "RESTful APIs", "Laravel", "Microservices"]
        },
        {
          title: "Frontend Web",
          icon: "fa-desktop",
          skills: ["React 19", "HTML5 / CSS3 / JS", "CSS Modules / Flexbox / Grid", "Responsive Design", "i18n", "UI/UX Optimization"]
        },
        {
          title: "Databases & Security",
          icon: "fa-database",
          skills: ["Oracle DB", "MySQL", "PostgreSQL", "IBM DB2", "MongoDB", "SQLCipher (Encryption)"]
        },
        {
          title: "Tools, Cloud & AI",
          icon: "fa-cubes",
          skills: ["Docker", "Git / GitHub", "AWS", "Microsoft Azure", "Maven", "AI Coding Assistants (Copilot / LLMs)"]
        }
      ]
    },
    education: {
      sectionTitle: "Education & Certifications",
      subtitle: "Academic Degree & Professional Technology Certifications",
      degree: {
        title: "Computer Engineer",
        institution: "Universidad Nacional de Piura",
        detail: "Equivalence to a University Degree in Spain.",
        location: "Piura, Peru"
      },
      certificationsTitle: "Technical Certifications",
      certifications: [
        { name: "CURSO PROFESIONAL DE TYPESCRIPT", issuer: "CodigoFacilito" },
        { name: "CURSO PROFESIONAL DE JAVASCRIPT", issuer: "CodigoFacilito" },
        { name: "CURSO DE FUNDAMENTOS DE AZURE", issuer: "CodigoFacilito" },
        { name: "CURSO DE FUNDAMENTOS DE AWS", issuer: "CodigoFacilito" },
        { name: "PYTHON DE CERO A EXPERTO", issuer: "Cámara de Comercio Exterior" },
        { name: "CURSO A FONDO DE GITHUB", issuer: "CodigoFacilito" },
        { name: "CURSO PROFESIONAL DE DOCKER", issuer: "CodigoFacilito" }
      ]
    },
    contact: {
      sectionTitle: "Direct Contact",
      subtitle: "Have a project or want to get in touch? Let's talk!",
      email: "ing.eddiesanchez@gmail.com",
      whatsappNumber: "51941593095",
      whatsappMessage: "Hello Eng. Jesus Sanchez, I reviewed your website and I am interested in contacting you. My name is [Your Name] from [Your Company].",
      location: "Piura, Peru",
      github: "https://github.com/EJSanchezG",
      labels: {
        email: "Email Address",
        phone: "Direct WhatsApp",
        location: "Location",
        github: "GitHub Profile",
        copyEmail: "Copy Email",
        emailCopied: "Email Copied!",
        sendWhatsapp: "Send Message"
      }
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};
