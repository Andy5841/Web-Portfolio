import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Now from "./components/Now.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import PhotographyTeaser from "./components/PhotographyTeaser.jsx";
import PhotographyPage from "./components/PhotographyPage.jsx";
import Contact from "./components/Contact.jsx";

// Two views: the home page (everything scrolls) and a separate Photography
// page. The address bar hash picks which one: "#photography" shows the
// Photography page; anything else shows the home page.
const getPage = () =>
  window.location.hash === "#photography" ? "photography" : "home";

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // After switching pages, jump to the top or to the section that was clicked.
  useEffect(() => {
    document.title =
      page === "photography"
        ? "Photography | Andy Huynh"
        : "Andy Huynh | Computer Science Portfolio";
    const id = window.location.hash.slice(1);
    const target = page === "home" && id ? document.getElementById(id) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Navbar page={page} />
      <main>
        {page === "photography" ? (
          <PhotographyPage />
        ) : (
          <>
            <Hero />
            <Now />
            <Projects />
            <Resume />
            <Skills />
            <About />
            <PhotographyTeaser />
            <Contact />
          </>
        )}
      </main>
      <footer className="site-footer">
        <div className="container site-footer-inner">
          <p>© {new Date().getFullYear()} Andy Huynh</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
