import { resume, overview } from "../data/resume.js";

export default function Resume() {
  const { recent, earlier } = overview;
  return (
    <section className="section" id="resume" aria-labelledby="resume-title">
      <div className="container">
        <h2 id="resume-title">Resume</h2>
        <div className="resume-layout">
          <div className="resume-preview">
            <a href={resume.file} target="_blank" rel="noopener noreferrer" aria-label="Open the resume (PDF)">
              <img
                src={resume.preview}
                alt="Preview of Andy's resume, first page"
                width={resume.previewWidth}
                height={resume.previewHeight}
                loading="lazy"
              />
            </a>
            <div className="button-row">
              <a className="button button-dark" href={resume.file} target="_blank" rel="noopener noreferrer">
                Open PDF
              </a>
              <a className="button button-outline" href={resume.file} download>
                Download
              </a>
            </div>
          </div>

          <div className="resume-overview">
            <h3>Quick overview</h3>

            <div className="overview-item">
              <p className="overview-label">{recent.label}</p>
              <p className="overview-role">{recent.role}</p>
              <p className="overview-meta">{recent.meta}</p>
              <p>{recent.summary}</p>
              <ul className="overview-points">
                {recent.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="overview-item">
              <p className="overview-label">{earlier.label}</p>
              <p className="overview-role">{earlier.role}</p>
              <p className="overview-meta">{earlier.meta}</p>
              <p>{earlier.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
