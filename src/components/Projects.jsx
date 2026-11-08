import projects from "../data/projects.js";

function ProjectCard({ project }) {
  const hasLinks = project.liveUrl || project.sourceUrl;
  return (
    <article className="project-card">
      <div className="project-media">
        {project.image ? (
          <img src={project.image} alt="" loading="lazy" />
        ) : (
          <span aria-hidden="true">{project.name}</span>
        )}
      </div>
      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {hasLinks && (
          <p className="project-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live site
              </a>
            )}
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <h2 id="work-title">Work</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
