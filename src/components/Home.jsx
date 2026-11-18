
import RobotSvg from './RobotSvg';

export default function Home() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <div className="hero-kicker mono">
          <span className="pink-dot" />
          DIVYA GUPTA: PORTFOLIO
        </div>

        <h1>
          Hi, I'm <span className="hero-name">Divya.</span>
          <br />
          Somewhere between
          <br />
          technology, creativity
          <br />
          <span className="highlight-text">
            and human curiosity.
          </span>
        </h1>

        <div className="hero-meta">
          <span>MSc Computer Science</span>
          <span>·</span>
          <span>Saarland University</span>
          <span>·</span>
          <span>Previously @ FICO</span>
        </div>

        <p className="hero-description">
          I'm interested in the intersection of AI,
          Human-Computer Interaction and software engineering.
          Currently building an AI-powered interview simulator
          and exploring Trustworthy AI through my master's thesis.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore my work
          </a>
        </div>

        <div className="hero-location mono">
          <span className="location-pulse" />
          BASED IN SAARBRÜCKEN, GERMANY
        </div>
      </div>

      <div className="hero-art">
        <div className="hero-grid" />

        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        <div className="hero-orb">
          <span>AI</span>
        </div>

        <div className="hero-code-window">
          <div className="code-window-top">
            <span />
            <span />
            <span />
            <small className="mono">currently.js</small>
          </div>

          <div className="code-content mono">
            <p><span>01</span> const interests = [</p>
            <p> <span>02</span> "artificial intelligence",</p>
            <p> <span>03</span> "human interaction",</p>
            <p> <span>04</span> "building things"</p>
            <p><span>05</span> ];</p>
            <br />
            <p className="code-comment">
              // coffee is essential
            </p>
            <p>
              <span>06</span> brewCoffee();
              <span className="typing-cursor">_</span>
            </p>
          </div>
        </div>

        <div className="hero-float-tag tag-ai mono">
          <span>✳</span> APPLIED AI
        </div>

        <div className="hero-float-tag tag-hci mono">
          HUMAN × TECHNOLOGY
        </div>

        <div className="hero-robot">
          <RobotSvg on={true} />
        </div>

        <span className="hero-sparkle sparkle-one">✳</span>
        <span className="hero-sparkle sparkle-two">+</span>
      </div>
    </section>
  );
}
