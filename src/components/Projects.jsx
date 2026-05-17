import { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    type: "Application web",
    year: "2024",
    title: "Plateforme de gestion RH",
    desc: "Application fullstack pour la gestion des employés, congés et paie. Tableau de bord temps réel, exports PDF, notifications email.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/khadim-mbacke-ba",
    live: "https://rh-platform.vercel.app",
  },
  {
    type: "API / Backend",
    year: "2024",
    title: "API e-commerce REST",
    desc: "API complète pour une boutique en ligne : catalogue produits, panier, commandes, intégration paiement Stripe et gestion des stocks.",
    stack: ["Node.js", "Express", "MongoDB", "Stripe", "Redis"],
    github: "https://github.com/khadim-mbacke-ba",
    live: null,
  },
  {
    type: "Application mobile-first",
    year: "2023",
    title: "App de suivi budgétaire",
    desc: "Interface progressive pour suivre ses dépenses par catégorie, avec visualisations graphiques et alertes de dépassement de budget.",
    stack: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    github: "https://github.com/khadim-mbacke-ba",
    live: "https://budget-app.vercel.app",
  },
  {
    type: "Open Source",
    year: "2023",
    title: "CLI de scaffolding de projets",
    desc: "Outil en ligne de commande pour générer des structures de projets Node.js/React avec configuration ESLint, Prettier et Git intégrée.",
    stack: ["Node.js", "Commander.js", "Inquirer"],
    github: "https://github.com/khadim-mbacke-ba",
    live: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".fade-up").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 90)
          );
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="border-t border-sand-300 py-24 px-6 md:px-16 max-w-[1100px] mx-auto"
    >
      <p className="fade-up text-2xs uppercase tracking-[0.14em] font-semibold text-ink-muted mb-3">Projets</p>
      <h2 className="fade-up font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] tracking-[-0.03em] text-ink mb-12">
        Travaux récents
      </h2>

      <div className="fade-up border border-sand-300 rounded-xl overflow-hidden divide-y divide-sand-300">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="bg-white grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 p-7 hover:bg-teal-light/30 transition-colors duration-200 group"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-2xs font-semibold uppercase tracking-[0.1em] text-teal-dark bg-teal-light px-2.5 py-1 rounded">
                  {p.type}
                </span>
                <span className="text-xs font-medium text-ink-muted">{p.year}</span>
              </div>
              <h3 className="font-serif text-[1.4rem] tracking-[-0.025em] text-ink mb-2 leading-tight">
                {p.title}
              </h3>
              <p className="text-[0.9375rem] text-ink-secondary leading-relaxed font-normal max-w-xl">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2 py-1 border border-sand-300 rounded text-ink-muted bg-transparent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex md:flex-col gap-3 md:items-end justify-start md:justify-start pt-1">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted hover:text-teal-dark transition-colors duration-200"
                >
                  <Github size={14} strokeWidth={2} />
                  GitHub
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted hover:text-teal-dark transition-colors duration-200"
                >
                  <ExternalLink size={14} strokeWidth={2} />
                  Démo live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
