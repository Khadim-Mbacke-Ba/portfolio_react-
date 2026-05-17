export default function Navbar({ activeSection }) {
  const links = [
    { href: "#about", label: "À propos", id: "about" },
    { href: "#skills", label: "Compétences", id: "skills" },
    { href: "#projects", label: "Projets", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">Alex Dupont</a>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={l.href}
              className={activeSection === l.id ? "active" : ""}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="mailto:alex.dupont@email.com" className="nav-cta">Me contacter</a>
    </nav>
  );
}
