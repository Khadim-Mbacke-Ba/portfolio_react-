import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    type: "Application web",
    year: "2024",
    title: "Plateforme de gestion RH",
    desc: "Application fullstack pour la gestion des employés, congés et paie. Tableau de bord temps réel, exports PDF, notifications email.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/alexdupont/rh-platform",
    live: "https://rh-platform.vercel.app",
  },
  {
    type: "API / Backend",
    year: "2024",
    title: "API e-commerce REST",
    desc: "API complète pour une boutique en ligne : catalogue produits, panier, commandes, intégration paiement Stripe et gestion des stocks.",
    stack: ["Node.js", "Express", "MongoDB", "Stripe", "Redis"],
    github: "https://github.com/alexdupont/ecom-api",
    live: null,
  },
  {
    type: "Application mobile-first",
    year: "2023",
    title: "App de suivi budgétaire",
    desc: "Interface progressive pour suivre ses dépenses par catégorie, avec visualisations graphiques et alertes de dépassement de budget.",
    stack: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    github: "https://github.com/alexdupont/budget-app",
    live: "https://budget-app.vercel.app",
  },
  {
    type: "Open Source",
    year: "2023",
    title: "CLI de scaffolding de projets",
    desc: "Outil en ligne de commande pour générer des structures de projets Node.js/React avec configuration ESLint, Prettier et Git intégrée.",
    stack: ["Node.js", "Commander.js", "Inquirer"],
    github: "https://github.com/alexdupont/scaffold-cli",
    live: null,
  },
];

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5m0 0v5m0-5L7 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref}>
      <p className="fade-up section-label">Projets</p>
      <h2 className="fade-up section-title">Travaux récents</h2>

      <div className="fade-up projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project-card">
            <div>
              <div className="project-meta">
                <span className="project-type">{project.type}</span>
                <span className="project-year">· {project.year}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-stack">
                {project.stack.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalIcon /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalIcon /> Démo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
