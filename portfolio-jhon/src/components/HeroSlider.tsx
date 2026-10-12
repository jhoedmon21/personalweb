"use client";

import { useEffect, useState } from "react";

type Slide = {
  number: string;
  category: string;
  lines: string[];
  description: string;
  ctaHref: string;
  ctaLabel: string;
  bgClass: string;
  ariaLabel: string;
};

const slides: Slide[] = [
  {
    number: "01",
    category: "Especialista y consultor en I+D+i",
    lines: ["Jhon Edilberto", "Monroy Barrios", "Maestro en Ciencias Informáticas"],
    description:
      "Profesional con sólida experiencia en el desarrollo de aplicaciones y sistemas de información. Especialista y consultor en proyectos de I+D+i, con enfoque en Interacción Humano-Computador, Informática Educativa e Inteligencia Artificial.",
    ctaHref: "#portfolio",
    ctaLabel: "Ver publicaciones",
    bgClass: "slide-bg-1",
    ariaLabel: "Volcán Misti y ciudad de Arequipa, Perú",
  },
  {
    number: "02",
    category: "Docencia Universitaria",
    lines: ["Experiencia académica", "en universidades", "de Arequipa, Perú"],
    description:
      "Docente en Investigación e Ingeniería de Computación y Sistemas en la USMP, con experiencia docente en la UTP y la UNSA en programación, negocios digitales, cloud computing e investigación.",
    ctaHref: "#resume",
    ctaLabel: "Ver experiencia",
    bgClass: "slide-bg-2",
    ariaLabel: "Plaza de Armas de Arequipa, Perú",
  },
  {
    number: "03",
    category: "Investigación Científica",
    lines: ["Publicaciones", "en congresos y revistas", "internacionales"],
    description:
      "Investigador en proyectos financiados por PROCIENCIA. Publicaciones en Deep Learning, Computer Vision, Tecnología Educativa e Interfaces Tangibles presentadas en Perú, Japón, Chile, Inglaterra y República Checa.",
    ctaHref: "#portfolio",
    ctaLabel: "Ver publicaciones",
    bgClass: "slide-bg-3",
    ariaLabel: "Monasterio de Santa Catalina de Siena, Arequipa, Perú",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearTimeout(timer);
  }, [current]);

  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="hero-slider" id="home">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.number}
            className={`slide ${slide.bgClass} ${index === current ? "active" : ""}`}
            role="img"
            aria-label={slide.ariaLabel}
          >
            <div className="slide-content">
              <div className="slide-number">{slide.number}</div>
              <div className="slide-category">{slide.category}</div>
              <h1 className="slide-title">
                {slide.lines.map((line) => (
                  <span className="line" key={line}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="slide-description">{slide.description}</p>
              <a href={slide.ctaHref} className="btn-primary">
                {slide.ctaLabel}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button className="slider-btn prev" onClick={goPrev} aria-label="Slide anterior">
          ←
        </button>
        <button className="slider-btn next" onClick={goNext} aria-label="Siguiente slide">
          →
        </button>
      </div>

      <div className="slider-indicators">
        {slides.map((slide, index) => (
          <span
            key={slide.number}
            className={`indicator ${index === current ? "active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={`Ir al slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setCurrent(index);
            }}
          ></span>
        ))}
      </div>

      <div className="scroll-down">
        <span>Desplázate para descubrir</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
