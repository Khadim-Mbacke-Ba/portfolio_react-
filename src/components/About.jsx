import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const infos = [
    { label: "Localisation", value: "Dakar, Sénégal" },
    { label: "Disponibilité", value: "Freelance & CDI" },
    { label: "Langues", value: "Français, Anglais" },
    { label: "Formation", value: "Licence Informatique" },
    { label: "Expérience", value: "3+ ans" },
  ];

  return (
    <section id="about" ref={ref}>
      <p className="fade-up section-label">À propos</p>
      <h2 className="fade-up section-title">
        Passionné par la<br />construction de produits
      </h2>

      <div className="about-grid">
        <div className="fade-up about-text">
          <p>
            Je suis développeur Fullstack avec plus de 3 ans d'expérience dans
            la conception d'applications web — des APIs RESTful aux interfaces
            réactives. J'aime travailler sur des projets complexes qui demandent
            à la fois rigueur technique et sens du produit.
          </p>
          <p>
            Mon approche est centrée sur la qualité : code propre, architecture
            réfléchie, et collaboration étroite avec les équipes produit et design.
            Je m'investis dans chaque projet comme si c'était le mien.
          </p>
          <p>
            En dehors du code, je suis actif dans la communauté tech de Dakar —
            je contribue à des projets open source et participe à des meetups locaux.
          </p>
        </div>

        <div className="fade-up about-card">
          {infos.map((item) => (
            <div key={item.label} className="about-card-row">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
