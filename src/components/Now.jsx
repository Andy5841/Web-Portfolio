import { nowItems, updated } from "../data/now.js";

export default function Now() {
  return (
    <section className="now" id="now" aria-labelledby="now-title">
      <div className="container">
        <div className="now-heading">
          <h2 id="now-title">What I'm up to now</h2>
          <p>Updated {updated}</p>
        </div>
        <ul className="now-grid">
          {nowItems.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.link && <a href={item.link.href}>{item.link.label}</a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
