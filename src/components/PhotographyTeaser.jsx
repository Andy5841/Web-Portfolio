// Band on the home page that links to the Photography page.
export default function PhotographyTeaser() {
  return (
    <section className="teaser" aria-labelledby="teaser-title">
      <img
        className="photo-fill teaser-image"
        src="/images/hero-nyc.JPG"
        alt="The Brooklyn Bridge and the Manhattan skyline at dusk"
        width="5998"
        height="3988"
        loading="lazy"
        decoding="async"
      />
      <div className="container teaser-inner">
        <div className="panel teaser-panel">
          <h2 id="teaser-title">Photography</h2>
          <p>Sports, portraits, and landscapes, kept on their own page.</p>
          <div className="button-row">
            <a className="button button-light" href="#photography">View photography</a>
          </div>
        </div>
      </div>
    </section>
  );
}
