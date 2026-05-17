import { useEffect, useRef } from "react";
import { MapPin, Briefcase, Languages, GraduationCap, Clock } from "lucide-react";

const infos = [
  { icon: MapPin,        label: "Localisation", value: "Dakar, Sénégal" },
  { icon: Briefcase,     label: "Disponibilité", value: "Freelance & CDI" },
  { icon: Languages,     label: "Langues",       value: "Français · Anglais" },
  { icon: GraduationCap, label: "Formation",     value: "Licence Informatique" },
  { icon: Clock,         label: "Expérience",    value: "3+ ans" },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".fade-up").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 110)
          );
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="border-t border-sand-300 py-24 px-6 md:px-16 max-w-[1100px] mx-auto"
    >
      <p className="fade-up text-2xs uppercase tracking-[0.14em] font-semibold text-ink-muted mb-3">À propos</p>
      <h2 className="fade-up font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] tracking-[-0.03em] text-ink mb-12">
        Passionné par la<br />construction de produits
      </h2>

      <div className="grid md:grid-cols-[1fr_1.15fr] gap-16 md:gap-20 items-start">
        <div className="fade-up space-y-4">
          {[
            "Développeur Fullstack avec plus de 3 ans d'expérience dans la conception d'applications web — des APIs RESTful aux interfaces réactives. J'aime travailler sur des projets complexes qui demandent à la fois rigueur technique et sens du produit.",
            "Mon approche est centrée sur la qualité : code propre, architecture réfléchie, et collaboration étroite avec les équipes produit et design. Je m'investis dans chaque projet comme si c'était le mien.",
            "En dehors du code, je suis actif dans la communauté tech de Dakar — je contribue à des projets open source et participe à des meetups locaux.",
          ].map((p, i) => (
            <p key={i} className="text-[1.0625rem] text-ink-secondary leading-[1.8] font-normal">{p}</p>
          ))}
        </div>

        <div className="fade-up bg-white border border-sand-300 rounded-xl overflow-hidden">
          {infos.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between px-6 py-4 border-b border-sand-200 last:border-b-0 group"
            >
              <div className="flex items-center gap-3 text-ink-muted text-sm font-medium">
                <Icon size={15} strokeWidth={2} className="text-teal" />
                {label}
              </div>
              <span className="text-sm font-semibold text-ink">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
