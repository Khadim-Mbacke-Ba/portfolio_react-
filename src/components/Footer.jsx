export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-copy">© {year} Alex Dupont. Fait avec React.</p>
      <div className="footer-links">
        <a href="https://github.com/alexdupont" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/alexdupont" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:alex.dupont@email.com">Email</a>
      </div>
    </footer>
  );
}
