export default function Navbar({ page }) {
  return (
    <header className="site-header" id="top">
      <div className="container site-header-inner">
        <a className="wordmark" href="#top">Andy Huynh</a>
        <nav aria-label="Main">
          <ul className="nav-list">
            <li><a href="#work">Work</a></li>
            <li><a href="#resume">Resume</a></li>
            <li>
              <a
                href="#photography"
                aria-current={page === "photography" ? "page" : undefined}
              >
                Photography
              </a>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
