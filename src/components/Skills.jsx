import { useEffect, useRef } from "react";

const SKILLS = [
  {
    icon: "⚡",
    title: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite","html"],
  },
  {
    icon: "🛠",
    title: "Backend",
    tags: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB","Spring boot","laravel","Djngo","java","python"],
  },
  {
    icon: "☁️",
    title: "DevOps & Cloud",
    tags: ["Docker", "GitHub Actions", "Vercel", "Linux", "Nginx"],
  },
  {
    icon: "🔗",
    title: "APIs & Intégrations",
    tags: ["REST", "GraphQL", "Prisma", "Redis", "WebSockets"],
  },
  {
    icon: "🧪",
    title: "Tests & Qualité",
    tags: ["Jest", "Vitest", "Cypress", "ESLint", "Prettier"],
  },
  {
    icon: "🗂",
    title: "Outils",
    tags: ["Git", "GitHub", "Figma", "Postman", "VS Code"],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
    <section id="skills" ref={ref}>
      <p className="fade-up section-label">Compétences</p>
      <h2 className="fade-up section-title">Stack technique</h2>

      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div key={skill.title} className="fade-up skill-card">
            <div className="skill-card-header">
              <div className="skill-icon" aria-hidden="true">{skill.icon}</div>
              <span className="skill-card-title">{skill.title}</span>
            </div>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
