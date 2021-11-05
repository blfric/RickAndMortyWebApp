
const Footer = ({ children }) => {

  return (
    <footer className="footer">
      <div className="footer-links">
        <p>Other links</p>
        <a>Offical site</a>
        <a>Adult swim</a>
      </div>
      <div className="footer-links">
        <p>Developers</p>
        <a>RickAndMorty API</a>
        <a>React</a>
        <a>Redux</a>
      </div>
    </footer>
  );
}

export default Footer;