import { useEffect, useRef } from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".fade-up") ?? [];
    setTimeout(() => {
      items.forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 110));
    }, 80);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col justify-center gap-8 pt-[calc(68px+4rem)] pb-16 px-6 md:px-16 max-w-[1100px] mx-auto"
    >
      <div className="fade-up flex items-center gap-2 w-fit bg-sand-200 border border-sand-300 rounded-full px-4 py-1.5">
        <span className="w-2 h-2 rounded-full bg-teal animate-pulse flex-shrink-0" />
        <span className="text-sm font-medium text-ink-muted">Disponible pour de nouveaux projets</span>
      </div>

      <h1 className="fade-up font-serif text-[clamp(3.25rem,7.5vw,5.75rem)] font-normal leading-[1.06] tracking-[-0.04em] text-ink">
        Développeur<br />
        <em className="not-italic text-ink-muted">Fullstack,</em><br />
        basé à Dakar
      </h1>

      <div className="fade-up flex items-center gap-2 text-sm text-ink-muted">
        <MapPin size={14} strokeWidth={2} />
        Dakar, Sénégal
      </div>

      <p className="fade-up max-w-[520px] text-[1.0625rem] text-ink-secondary leading-[1.75] font-normal">
        Je conçois et développe des applications web performantes —
        du backend robuste aux interfaces soignées — avec une attention
        particulière à la qualité du code et à l'expérience utilisateur.
      </p>

      <div className="fade-up flex items-center gap-3 flex-wrap">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-ink text-sand-50 text-[0.9375rem] font-semibold px-6 py-3 rounded-lg hover:bg-ink-secondary transition-all duration-200 hover:-translate-y-0.5"
        >
          Voir mes projets
          <ArrowRight size={16} strokeWidth={2} />
        </a>
        <a
          href="/cv-khadim-ba.pdf"
          download
          className="inline-flex items-center gap-2 bg-transparent text-ink text-[0.9375rem] font-medium px-6 py-3 rounded-lg border border-sand-300 hover:bg-sand-200 hover:border-sand-400 transition-all duration-200 hover:-translate-y-0.5"
        >
          <Download size={15} strokeWidth={2} />
          Télécharger le CV
        </a>
      </div>

      <div className="fade-up flex gap-10 pt-6 border-t border-sand-300">
        {[
          { n: "3+", l: "Ans d'expérience" },
          { n: "20+", l: "Projets livrés" },
          { n: "8",   l: "Clients satisfaits" },
        ].map(({ n, l }) => (
          <div key={l} className="flex flex-col gap-0.5">
            <span className="font-serif text-[1.875rem] leading-none tracking-[-0.05em] text-ink">{n}</span>
            <span className="text-xs font-medium text-ink-muted">{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
