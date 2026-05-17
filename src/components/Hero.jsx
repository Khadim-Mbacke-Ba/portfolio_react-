import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll(".fade-up");
    setTimeout(() => items.forEach((item, i) => {
      setTimeout(() => item.classList.add("visible"), i * 100);
    }), 100);
  }, []);

  return (
    <section id="hero" ref={ref}>
      <div className="fade-up hero-eyebrow">
        <span className="hero-dot" aria-hidden="true" />
        Disponible pour de nouveaux projets
      </div>

      <h1 className="fade-up hero-title">
        Développeur<br />
        <em>Fullstack,</em><br />
        basé à Dakar
      </h1>

      <p className="fade-up hero-desc">
        Je conçois et développe des applications web performantes,
        du backend robuste aux interfaces soignées — avec une attention
        particulière à l'expérience utilisateur et à la qualité du code.
      </p>

      <div className="fade-up hero-actions">
        <a href="#projects" className="btn-primary">
          Voir mes projets
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          href="/cv-khadimmbackeba.pdf"
          download
          className="btn-secondary"
        >
          Télécharger le CV
        </a>
      </div>

      <div className="fade-up hero-stats">
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Années d'expérience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">4+</span>
          <span className="stat-label">Projets livrés</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">4</span>
          <span className="stat-label">Clients satisfaits</span>
        </div>
      </div>
    </section>
  );
}
