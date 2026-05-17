import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-sand-300 py-8 px-6 md:px-16 max-w-[1100px] mx-auto flex justify-between items-center">
      <p className="text-xs font-medium text-ink-muted">
        © {new Date().getFullYear()} Khadim Mbacké Ba. Fait avec React & Tailwind.
      </p>
      <div className="flex gap-4">
        {[
          { icon: Github,   href: "https://github.com/khadim-mbacke-ba",          label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com/in/khadim-mbacke-ba",     label: "LinkedIn" },
          { icon: Mail,     href: "mailto:khadim@email.com",                       label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-ink-muted hover:text-teal-dark transition-colors duration-200"
          >
            <Icon size={16} strokeWidth={2} />
          </a>
        ))}
      </div>
    </footer>
  );
}
