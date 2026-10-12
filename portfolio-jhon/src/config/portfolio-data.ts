/**
 * Configuración del Portfolio - Jhon Monroy
 * 
 * Este archivo contiene toda la información personal y profesional
 * que se muestra en el sitio web.
 */

export const personalInfo = {
  name: "Jhon Edilberto Monroy Barrios",
  title: "Maestro en Ciencias Informáticas",
  subtitle: "Investigador | Especialista en I+D+i",
  bio: "Profesional con sólida experiencia en el desarrollo de aplicaciones y sistemas de información. Especialista en Interacción Humano-Computador, Informática Educativa e Inteligencia Artificial.",
  
  contact: {
    email: "jhoedmon@gmail.com",
    phone: "+51 974 437 150",
    address: "Urb. San Agustín D-19, Yanahuara, Arequipa, Perú",
    birthDate: "21 de septiembre de 1986",
    dni: "43993541"
  },

  social: {
    linkedin: "https://linkedin.com/in/jhon-monroy",
    github: "https://github.com/jhonmonroy",
    twitter: "https://twitter.com/jhonmonroy",
    facebook: "https://facebook.com/jhon.monroy"
  }
};

export const stats = {
  experience: 15,
  publications: 8,
  projects: 5,
  awards: 7
};

export const services = [
  {
    id: 1,
    icon: "💻",
    title: "Desarrollo de Software",
    features: [
      "Aplicaciones web y móviles",
      "Sistemas de información",
      "Automatización de procesos"
    ],
    description: "Desarrollo de aplicaciones personalizadas utilizando Python, Java, PHP y tecnologías modernas.",
    priceRange: "$500 - $2000"
  },
  {
    id: 2,
    icon: "🧠",
    title: "Investigación en IA",
    features: [
      "Deep Learning",
      "Computer Vision",
      "Machine Learning"
    ],
    description: "Consultoría e investigación en proyectos de inteligencia artificial, visión por computador y análisis de datos.",
    priceRange: "$800 - $3000"
  },
  {
    id: 3,
    icon: "🎓",
    title: "Capacitación y Docencia",
    features: [
      "Cursos de programación",
      "Asesoría en investigación",
      "Talleres especializados"
    ],
    description: "Capacitación en tecnologías de información, programación y metodología de investigación científica.",
    priceRange: "$300 - $1500"
  }
];

export const skills = {
  languages: [
    { name: "Español", level: 100 },
    { name: "Inglés", level: 70 }
  ],
  technical: [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "PHP", level: 75 },
    { name: "Machine Learning / IA", level: 85 },
    { name: "MySQL / Bases de Datos", level: 80 },
    { name: "Angular / Spring MVC", level: 70 }
  ]
};

export const experience = [
  {
    year: "2023 - 2025",
    company: "Universidad de San Martín de Porres (USMP)",
    position: "Docente en Investigación e Ingeniería de Computación",
    description: "Actividades académicas relacionadas con programación, negocios digitales e investigación en la carrera profesional de Ingeniería de Computación y Sistemas.",
    location: "Arequipa"
  },
  {
    year: "2021 - 2022",
    company: "Universidad Tecnológica del Perú (UTP)",
    position: "Coinvestigador - Proyecto de Computer Vision",
    description: "Investigación en Computer Vision y Deep Learning, aplicados al proyecto: \"Prototipo de sistema de videovigilancia inteligente de distanciamiento social y uso de mascarillas utilizando técnicas de Deep Learning y Computer Vision.\"",
    location: "Arequipa"
  },
  {
    year: "2018 - 2022",
    company: "Universidad Tecnológica del Perú (UTP)",
    position: "Docente en Ingeniería de Sistemas e Informática",
    description: "Actividades académicas relacionadas con programación, negocios digitales y cloud computing en la carrera profesional de Ingeniería de Sistemas e Informática.",
    location: "Arequipa"
  },
  {
    year: "2017 - 2019",
    company: "Universidad Nacional de San Agustín",
    position: "Coinvestigador - Proyecto PROCIENCIA",
    description: "Investigación en tecnologías educativas: \"Plataforma interactiva de programación visual con interfaces tangibles, con aplicación en la enseñanza de matemática en Educación Básica Regular.\"",
    location: "Arequipa"
  }
];

export const projects = [
  {
    year: "2023",
    title: "Sistema de Videovigilancia Inteligente",
    description: "Prototipo de sistema utilizando Deep Learning y Computer Vision para detección de distanciamiento social y uso de mascarillas.",
    tags: ["Deep Learning", "Computer Vision", "Python"],
    icon: "🎥"
  },
  {
    year: "2017",
    title: "Plataforma de Programación Visual con Interfaces Tangibles",
    description: "Sistema interactivo para la enseñanza de matemática en Educación Básica utilizando interfaces tangibles y programación visual.",
    tags: ["HCI", "Educación", "Interfaces Tangibles"],
    icon: "🎮"
  },
  {
    year: "2018",
    title: "ERS-TOOL: Modelo Híbrido para Elicitación de Requisitos",
    description: "Herramienta híbrida para la elicitación de requisitos de software en español, presentado en República Checa.",
    tags: ["Ingeniería de Software", "NLP"],
    icon: "🔧"
  },
  {
    year: "2017",
    title: "Matelogic: Aprendizaje Matemático Interactivo",
    description: "Plataforma de aprendizaje matemático basada en desafíos, presentado en International Conference on Information and Education Technology, Japón.",
    tags: ["Educación", "Gamificación"],
    icon: "📐"
  }
];

export const education = [
  {
    year: "2020",
    degree: "Licenciado en Ciencias de la Educación",
    institution: "Universidad Nacional de San Agustín, Arequipa"
  },
  {
    year: "2017-2019",
    degree: "Egresado de Doctorado en Administración (DBA)",
    institution: "Universidad Nacional de San Agustín, Arequipa"
  },
  {
    year: "2014-2015",
    degree: "Maestría en Ciencias: Informática, mención en Tecnologías de Información",
    institution: "Universidad Nacional de San Agustín, Arequipa"
  },
  {
    year: "2004-2008",
    degree: "Profesor de Educación Técnica, especialidad de Computación e Informática",
    institution: "Instituto Superior Pedagógico Santa María, Arequipa"
  }
];

export const publications = [
  {
    year: "2023",
    title: "Review of Social Distancing and Face Mask of Coronavirus Spread",
    conference: "JINIS 2023: XXX International Conference on Systems Engineering"
  },
  {
    year: "2019",
    title: "Employer Branding and Its Impact on Millennial Job Expectations",
    conference: "RISTI — Revista Ibérica de Sistemas y Tecnologías de Información"
  },
  {
    year: "2018",
    title: "ERS-TOOL: Hybrid Model for Software Requirements Elicitation in Spanish",
    conference: "International Conference on Software and Services Engineering, República Checa"
  },
  {
    year: "2017",
    title: "Matelogic: Interactive Mathematical Learning Based on Challenges",
    conference: "International Conference on Information and Education Technology (ICIET), Japón"
  }
];

export const awards = [
  {
    year: "2021",
    title: "Reconocimiento por excelente desempeño",
    institution: "Universidad Tecnológica del Perú, Arequipa"
  },
  {
    year: "2020",
    title: "Reconocimiento por excelente desempeño",
    institution: "Universidad Tecnológica del Perú, Arequipa"
  },
  {
    year: "2018",
    title: "Ganador de incentivo por filiación de artículos científicos",
    institution: "Universidad Nacional de San Agustín de Arequipa"
  },
  {
    year: "2015-2016",
    title: "Ganador de la beca de Maestría en Informática",
    institution: "CONCYTEC"
  },
  {
    year: "2015",
    title: "Reconocimiento Karl Steinbuch de Informática por mejor exposición",
    institution: "Universidad Nacional de San Agustín de Arequipa"
  }
];
