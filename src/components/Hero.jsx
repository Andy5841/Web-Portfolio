export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="photo-fill hero-image"
        src="/images/hero-prudential.JPG"
        alt="The Prudential Center in Boston against a pink and orange sunset sky"
        width="5279"
        height="2969"
        fetchpriority="high"
      />
      <div className="container hero-inner">
        <div className="panel hero-panel">
          <h1 id="hero-title">Hi! I'm Andy.</h1>
          <p>
            I'm a computer science student at Northeastern University with a
            growing interest in cybersecurity and software engineering. I enjoy
            figuring out how things work, exploring how they can be improved,
            and building projects that let me learn something new.
          </p>
          <p>
            Outside of CS, you'll probably find me with a camera, exploring
            somewhere new, or finding something else to get interested in.
          </p>
          <div className="button-row">
            <a className="button button-light" href="#work">View projects</a>
            <a className="button button-outline-light" href="#contact">Contact me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
