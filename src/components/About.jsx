export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title">A little about me</h2>
        <div className="about-layout">
          <img
            className="about-photo"
            src="/images/about-portrait.JPG"
            alt="Andy in a dark suit, adjusting his tie"
            width="1920"
            height="2560"
            loading="lazy"
          />
          <div className="about-text">
            <p className="lead">A Little About Me!</p>
            <p>
              I'm currently studying Computer Science at Northeastern
              University, where I've been exploring everything from software
              development to cybersecurity. I like understanding what's
              happening behind the scenes, whether that's figuring out why
              something works, tracking down a difficult bug, or building
              something from scratch.
            </p>
            <p>
              Lately, I've become particularly interested in cybersecurity. I'm
              fascinated by the ways systems can be compromised, how
              vulnerabilities are discovered, and what it takes to make
              technology more secure. I've enjoyed getting hands-on with
              security research and learning to look at technology from a
              different perspective—not just how to build something, but how it
              can be broken and how to protect it.
            </p>
            <p>
              I'm especially drawn to projects that let me learn something new.
              Some of my experiences have involved software development,
              research, and finding ways to make repetitive technical work more
              efficient. I enjoy the process just as much as the end result:
              experimenting, making mistakes, and gradually getting something
              to work.
            </p>
            <p>
              Photography is another big interest of mine. I enjoy bringing my
              camera along when I'm out exploring, noticing little details, and
              capturing places from a different perspective. It's a nice change
              of pace from spending time behind a screen.
            </p>
            <p>
              I'm still figuring out exactly where I want to take my interests,
              and that's part of what I enjoy about being a student. There's
              always something new to learn, build, or explore.
            </p>
            <dl className="facts">
              <div>
                <dt>Degree</dt>
                <dd>BS Computer Science, Systems concentration</dd>
              </div>
              <div>
                <dt>Expected graduation</dt>
                <dd>May 2029</dd>
              </div>
              <div>
                <dt>GPA</dt>
                <dd>3.72</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
