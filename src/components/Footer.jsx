export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-copy">© {year} Alex Dupont. Fait avec React.</p>
      <div className="footer-links">
        <a href="https://github.com/Khadim-Mbacke-Ba" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/khadimmbackeba" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:serignekhadimmbackeba40@gmail.com">Email</a>
      </div>
    </footer>
  );
}


