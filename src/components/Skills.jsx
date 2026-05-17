import { useEffect, useRef } from "react";
import { Monitor, Server, Cloud, Link2, TestTube2, Wrench } from "lucide-react";

const SKILLS = [
  { icon: Monitor,    title: "Frontend",         tags: ["React", "Next.js", "Flutter", "Tailwind CSS"] },
  { icon: Server,     title: "Backend",          tags: ["c","c++","java","php","python","c#","Spring Boot","laravel","Django","sql","postgresql","oracle","sql server","mysql","sqlite"] },
  { icon: Cloud,      title: "DevOps & Cloud",   tags: ["Docker", "GitHub Actions"] },
  { icon: Link2,      title: "APIs & Intégrations", tags: ["REST", "GraphQL", "Prisma", "Redis", "WebSockets"] },
  { icon: TestTube2,  title: "Tests & Qualité",  tags: ["Jest", "Vitest", "Cypress", "ESLint", "Prettier"] },
  { icon: Wrench,     title: "Outils",           tags: ["Git", "GitHub", "gitlab","Figma", "Postman", "VS Code","Visual Studio","eclipse"] },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".fade-up").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 80)
          );
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="border-t border-sand-300 py-24 px-6 md:px-16 max-w-[1100px] mx-auto"
    >
      <p className="fade-up text-2xs uppercase tracking-[0.14em] font-semibold text-ink-muted mb-3">Compétences</p>
      <h2 className="fade-up font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] tracking-[-0.03em] text-ink mb-12">
        Stack technique
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SKILLS.map(({ icon: Icon, title, tags }, i) => (
          <div
            key={title}
            className="fade-up bg-white border border-sand-300 rounded-xl p-5 hover:border-teal-mid hover:-translate-y-0.5 transition-all duration-200 group"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal-light border border-teal-mid flex items-center justify-center flex-shrink-0">
                <Icon size={17} strokeWidth={1.75} className="text-teal-dark" />
              </div>
              <span className="text-sm font-semibold text-ink tracking-wide">{title}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-1 bg-teal-light text-teal-dark rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
