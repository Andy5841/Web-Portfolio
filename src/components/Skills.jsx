import skills from "../data/skills.js";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title">Skills &amp; Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.group}>
              <h3>{skill.group}</h3>
              <ul className="tag-list">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
