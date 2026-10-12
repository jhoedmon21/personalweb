import { HeroSlider } from "../components/HeroSlider";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#" className="logo">JHON MONROY</a>
          <button className="menu-toggle" id="menuToggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-menu" id="navMenu">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#resume">Experiencia</a></li>
            <li><a href="#portfolio">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSlider />

      {/* Quick Links */}
      <div className="quick-links">
        <a href="#about">Acerca de</a>
        <a href="#services">Servicios</a>
        <a href="#skills">Habilidades</a>
        <a href="#resume">Experiencia</a>
        <a href="#portfolio">Proyectos</a>
      </div>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">PROFESIONAL CON EXPERIENCIA EN INVESTIGACIÓN Y DOCENCIA</span>
            <h2 className="section-title">
              <span className="title-line">Soluciones innovadoras</span>
              <span className="title-line">para impulsar proyectos</span>
              <span className="title-line">de investigación y tecnología</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <h3>Curabitur convallis fringilla diam</h3>
              <p>
                Profesional con sólida experiencia en el desarrollo de aplicaciones y sistemas de información. 
                Especialista en informática, con formación en Tecnología Educativa e Investigación. 
                Investigador en proyectos financiados por PROCIENCIA.
              </p>
              <p>
                Experiencia en Interacción Humano-Computador, Informática Educativa e Inteligencia Artificial. 
                Docente universitario con más de 10 años de experiencia en instituciones de prestigio.
              </p>
              <ul className="about-list">
                <li>✓ Desarrollo de aplicaciones con Python, Java y PHP</li>
                <li>✓ Investigación en Deep Learning y Computer Vision</li>
                <li>✓ Experiencia en docencia universitaria e investigación</li>
                <li>✓ Publicaciones en congresos internacionales</li>
              </ul>
              <a href="#contact" className="btn-primary">Contáctame</a>
            </div>

            <div className="about-image">
              <img
                src="/images/about.jpg"
                alt="Mirador de Yanahuara con el volcán Misti al fondo, Arequipa, Perú"
                className="about-photo"
                loading="lazy"
              />
            </div>
          </div>

          <div className="stats-counter">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Años de experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Publicaciones científicas</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Proyectos de investigación</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7</div>
              <div className="stat-label">Reconocimientos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">SERVICIOS PROFESIONALES</span>
            <h2 className="section-title">Mis Servicios</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Desarrollo de Software</h3>
              <ul className="service-features">
                <li>Aplicaciones web y móviles</li>
                <li>Sistemas de información</li>
                <li>Automatización de procesos</li>
              </ul>
              <p>Desarrollo de aplicaciones personalizadas utilizando Python, Java, PHP y tecnologías modernas.</p>
              <div className="service-price">Precio: <span>$500 - $2000</span></div>
            </div>

            <div className="service-card">
              <div className="service-icon">🧠</div>
              <h3>Investigación en IA</h3>
              <ul className="service-features">
                <li>Deep Learning</li>
                <li>Computer Vision</li>
                <li>Machine Learning</li>
              </ul>
              <p>Consultoría e investigación en proyectos de inteligencia artificial, visión por computador y análisis de datos.</p>
              <div className="service-price">Precio: <span>$800 - $3000</span></div>
            </div>

            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Capacitación y Docencia</h3>
              <ul className="service-features">
                <li>Cursos de programación</li>
                <li>Asesoría en investigación</li>
                <li>Talleres especializados</li>
              </ul>
              <p>Capacitación en tecnologías de información, programación y metodología de investigación científica.</p>
              <div className="service-price">Precio: <span>$300 - $1500</span></div>
            </div>
          </div>

          <div className="services-cta">
            <h4>¿Listo para iniciar tu proyecto?</h4>
            <a href="#contact" className="btn-primary">Contacto</a>
          </div>
        </div>

        <div className="section-number">01.</div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">COMPETENCIAS PROFESIONALES</span>
            <h2 className="section-title">Mis Habilidades</h2>
          </div>

          <div className="skills-content">
            <div className="skills-column">
              <h3>Habilidades de Idiomas</h3>
              <div className="language-skills">
                <div className="language-item">
                  <span className="language-name">Español</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="language-item">
                  <span className="language-name">Inglés</span>
                  <div className="language-bar">
                    <div className="language-fill" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-column">
              <h3>Habilidades Técnicas</h3>
              <div className="tech-skills">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Python</span>
                    <span className="skill-percent">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Java</span>
                    <span className="skill-percent">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '85%'}}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">PHP</span>
                    <span className="skill-percent">75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '75%'}}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Machine Learning / IA</span>
                    <span className="skill-percent">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '85%'}}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">MySQL / Bases de Datos</span>
                    <span className="skill-percent">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '80%'}}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Angular / Spring MVC</span>
                    <span className="skill-percent">70%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-number">03.</div>
      </section>

      {/* Resume Section */}
      <section className="resume-section" id="resume">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">TRAYECTORIA PROFESIONAL</span>
            <h2 className="section-title">Experiencia</h2>
          </div>

          <div className="resume-timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - 2025</div>
              <div className="timeline-content">
                <h3>Universidad de San Martín de Porres (USMP)</h3>
                <h4>Docente en Investigación e Ingeniería de Computación y Sistemas</h4>
                <p>
                  Actividades académicas relacionadas con programación, negocios digitales e investigación 
                  en la carrera profesional de Ingeniería de Computación y Sistemas.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2021 - 2022</div>
              <div className="timeline-content">
                <h3>Universidad Tecnológica del Perú (UTP)</h3>
                <h4>Coinvestigador - Proyecto de Computer Vision</h4>
                <p>
                  Investigación en Computer Vision y Deep Learning, aplicados al proyecto: 
                  "Prototipo de sistema de videovigilancia inteligente de distanciamiento social y uso 
                  de mascarillas utilizando técnicas de Deep Learning y Computer Vision."
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2018 - 2022</div>
              <div className="timeline-content">
                <h3>Universidad Tecnológica del Perú (UTP)</h3>
                <h4>Docente en Ingeniería de Sistemas e Informática</h4>
                <p>
                  Actividades académicas relacionadas con programación, negocios digitales y cloud computing 
                  en la carrera profesional de Ingeniería de Sistemas e Informática.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2017 - 2019</div>
              <div className="timeline-content">
                <h3>Universidad Nacional de San Agustín</h3>
                <h4>Coinvestigador - Proyecto PROCIENCIA</h4>
                <p>
                  Investigación en tecnologías educativas: "Plataforma interactiva de programación 
                  visual con interfaces tangibles, con aplicación en la enseñanza de matemática 
                  en Educación Básica Regular."
                </p>
              </div>
            </div>
          </div>

          <div className="resume-download">
            <a href="/Professional_CV_Jhon.pdf" download="CV_Jhon_Edilberto_Monroy_Barrios.pdf" className="btn-primary">
              ⬇ Descargar CV completo
            </a>
          </div>
        </div>

        <div className="section-number">04.</div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="portfolio">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">TRABAJOS E INVESTIGACIONES</span>
            <h2 className="section-title">Proyectos Destacados</h2>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="/images/pub-1.jpg" alt="Plaza de Armas de Arequipa, Perú" loading="lazy" />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-date">2023</span>
                <h3>Sistema de Videovigilancia Inteligente</h3>
                <p>
                  Prototipo de sistema utilizando Deep Learning y Computer Vision para 
                  detección de distanciamiento social y uso de mascarillas.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Deep Learning</span>
                  <span className="tag">Computer Vision</span>
                  <span className="tag">Python</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="/images/pub-2.jpg" alt="Monasterio de Santa Catalina, Arequipa, Perú" loading="lazy" />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-date">2017</span>
                <h3>Plataforma de Programación Visual con Interfaces Tangibles</h3>
                <p>
                  Sistema interactivo para la enseñanza de matemática en Educación Básica 
                  utilizando interfaces tangibles y programación visual.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">HCI</span>
                  <span className="tag">Educación</span>
                  <span className="tag">Interfaces Tangibles</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="/images/pub-3.jpg" alt="Volcán Misti desde la ciudad de Arequipa, Perú" loading="lazy" />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-date">2018</span>
                <h3>ERS-TOOL: Modelo Híbrido para Elicitación de Requisitos</h3>
                <p>
                  Herramienta híbrida para la elicitación de requisitos de software en español, 
                  presentado en República Checa.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Ingeniería de Software</span>
                  <span className="tag">NLP</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="/images/pub-4.jpg" alt="Arcos de la plaza de Yanahuara con el volcán Misti, Arequipa, Perú" loading="lazy" />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-date">2017</span>
                <h3>Matelogic: Aprendizaje Matemático Interactivo</h3>
                <p>
                  Plataforma de aprendizaje matemático basada en desafíos, presentado en 
                  International Conference on Information and Education Technology, Japón.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Educación</span>
                  <span className="tag">Gamificación</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-number">05.</div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <span className="contact-number">001.</span>
              <h2>Suscríbete</h2>
              <p>¿Quieres ser notificado sobre nuevas publicaciones o proyectos? Suscríbete y te enviaré una notificación por correo.</p>
              
              <form className="subscribe-form">
                <input type="email" placeholder="Tu correo electrónico" required />
                <button type="submit" className="btn-primary">Suscribirse</button>
              </form>
            </div>

            <div className="contact-details">
              <span className="contact-number">002.</span>
              <h2>Contacto</h2>
              
              <div className="contact-items">
                <div className="contact-item">
                  <span>📞</span>
                  <div>
                    <h4>Teléfono</h4>
                    <a href="tel:+51974437150">+51 974 437 150</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span>📧</span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:jhoedmon@gmail.com">jhoedmon@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span>📍</span>
                  <div>
                    <h4>Dirección</h4>
                    <p>Urb. San Agustín D-19<br />Yanahuara, Arequipa, Perú</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">in</a>
                <a href="#" className="social-link">GH</a>
                <a href="#" className="social-link">𝕏</a>
                <a href="#" className="social-link">fb</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Jhon Monroy / Todos los derechos reservados.</p>
        </div>
        <a href="#home" className="back-to-top" id="backToTop">↑</a>
      </footer>
    </>
  );
}
