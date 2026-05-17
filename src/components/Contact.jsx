import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remplace par ton endpoint (ex: Formspree, EmailJS, API perso)
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactLinks = [
    { icon: "✉️", label: "alex.dupont@email.com", href: "mailto:alex.dupont@email.com" },
    { icon: "💼", label: "linkedin.com/in/alexdupont", href: "https://linkedin.com/in/alexdupont" },
    { icon: "🐙", label: "github.com/alexdupont", href: "https://github.com/alexdupont" },
  ];

  return (
    <section id="contact" ref={ref}>
      <p className="fade-up section-label">Contact</p>
      <h2 className="fade-up section-title">Travaillons ensemble</h2>

      <div className="contact-layout">
        <div className="fade-up contact-info">
          <p>
            Vous avez un projet en tête ? Je suis ouvert aux opportunités
            freelance, aux postes fullstack, et aux collaborations intéressantes.
            N'hésitez pas à me contacter.
          </p>
          <div className="contact-links">
            {contactLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-icon" aria-hidden="true">{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <form className="fade-up contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Ex: Mission freelance, collaboration..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Décrivez votre projet ou votre demande..."
              required
            />
          </div>

          {status === "success" && (
            <div className="form-status success" role="alert">
              Message envoyé ! Je vous répondrai dans les 24h.
            </div>
          )}

          <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
            Envoyer le message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
