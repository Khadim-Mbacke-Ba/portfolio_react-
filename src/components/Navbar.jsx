import { Mail } from "lucide-react";

const links = [
  { href: "#about",    label: "À propos" },
  { href: "#skills",   label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar({ activeSection }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-6 md:px-16 bg-sand-100/90 backdrop-blur-xl border-b border-sand-300/60">
      <a href="#hero" className="font-serif italic text-xl text-ink tracking-tight">
        Khadim Ba
      </a>

      <ul className="hidden md:flex gap-1 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={[
                "text-sm font-medium px-3 py-1.5 rounded-md transition-colors duration-200",
                activeSection === l.href.slice(1)
                  ? "text-ink bg-sand-200"
                  : "text-ink-muted hover:text-ink hover:bg-sand-200"
              ].join(" ")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:khadim@email.com"
        className="flex items-center gap-2 text-sm font-semibold text-sand-50 bg-ink px-4 py-2 rounded-lg hover:bg-ink-secondary transition-colors duration-200"
      >
        <Mail size={14} strokeWidth={2} />
        Me contacter
      </a>
    </nav>
  );
}
