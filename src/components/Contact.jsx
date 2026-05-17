import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const contactLinks = [
  { icon: Mail,     label: "khadim@email.com",                    href: "mailto:khadim@email.com" },
  { icon: Linkedin, label: "linkedin.com/in/khadim-mbacke-ba",    href: "https://linkedin.com/in/khadim-mbacke-ba" },
  { icon: Github,   label: "github.com/khadim-mbacke-ba",         href: "https://github.com/khadim-mbacke-ba" },
];

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".fade-up").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 100)
          );
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Intègre Formspree : remplace l'URL par ton endpoint
    // fetch("https://formspree.io/f/TON_ID", { method:"POST", ... })
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="border-t border-sand-300 py-24 px-6 md:px-16 max-w-[1100px] mx-auto"
    >
      <p className="fade-up text-2xs uppercase tracking-[0.14em] font-semibold text-ink-muted mb-3">Contact</p>
      <h2 className="fade-up font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] tracking-[-0.03em] text-ink mb-12">
        Travaillons ensemble
      </h2>

      <div className="grid md:grid-cols-[1fr_1.15fr] gap-16 md:gap-20 items-start">
        <div className="fade-up">
          <p className="text-[1.0625rem] text-ink-secondary leading-[1.75] font-normal mb-8">
            Vous avez un projet en tête ? Je suis ouvert aux opportunités
            freelance, aux postes fullstack, et aux collaborations intéressantes.
            N'hésitez pas à me contacter.
          </p>
          <div className="space-y-3">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-[0.9375rem] font-medium text-ink-secondary hover:text-teal-dark transition-colors duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-light border border-teal-mid flex items-center justify-center flex-shrink-0 group-hover:bg-teal-mid transition-colors duration-200">
                  <Icon size={15} strokeWidth={2} className="text-teal-dark" />
                </div>
                {label}
              </a>
            ))}
          </div>
        </div>

        <form className="fade-up space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "name",  label: "Nom",   type: "text",  placeholder: "Votre nom" },
              { name: "email", label: "Email", type: "email", placeholder: "votre@email.com" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name} className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-ink-secondary tracking-wide">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="text-[0.9375rem] text-ink bg-white border border-sand-300 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10 placeholder:text-ink-muted"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-ink-secondary tracking-wide">Sujet</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Ex: Mission freelance, collaboration..."
              required
              className="text-[0.9375rem] text-ink bg-white border border-sand-300 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10 placeholder:text-ink-muted"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-ink-secondary tracking-wide">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Décrivez votre projet ou votre demande..."
              required
              className="text-[0.9375rem] text-ink bg-white border border-sand-300 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10 placeholder:text-ink-muted resize-none"
            />
          </div>

          {status === "success" && (
            <div className="text-sm font-medium px-4 py-3 rounded-lg bg-teal-light text-teal-dark border border-teal-mid">
              Message envoyé ! Je vous répondrai dans les 24h.
            </div>
          )}

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-ink text-sand-50 text-[0.9375rem] font-semibold px-6 py-3 rounded-lg hover:bg-ink-secondary transition-all duration-200 hover:-translate-y-0.5"
          >
            <Send size={15} strokeWidth={2} />
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}
