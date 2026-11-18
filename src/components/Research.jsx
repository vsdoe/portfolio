
const interests = [
  {
    number: '01',
    title: 'Human-AI Interaction',
    description: 'How people interact with, interpret and collaborate with AI systems.',
  },
  {
    number: '02',
    title: 'Trustworthy AI',
    description: 'Trust calibration, fairness, transparency and responsible AI.',
  },
  {
    number: '03',
    title: 'LLM Evaluation',
    description: 'Understanding model behaviour, evaluation and linguistic bias.',
  },
  {
    number: '04',
    title: 'Explainable AI',
    description: 'Making AI decisions more understandable to the people using them.',
  },
];

export default function Research() {
  return (
    <section className="research-section section-shell" id="research">
      <div className="section-heading">
        <div>
          <span className="section-kicker">
            02 / QUESTIONS I'M EXPLORING
          </span>
          <h2>Research & interests<span className="pink-period">.</span></h2>
          <p>
            Interested in intelligent systems,
            and the humans on the other side of the screen.
          </p>
        </div>
      </div>

      <div className="research-feature">
        <div className="research-feature-main">
          <span className="research-label mono">
            CURRENTLY WORKING ON / MASTER'S THESIS
          </span>

          <h3>PrepBot</h3>

          <p>
            An AI-powered interview simulator exploring
            trust calibration, fairness perception and
            error attribution in AI-generated interview feedback.
          </p>

          <div className="research-tags">
            <span>Trustworthy AI</span>
            <span>Human-AI Interaction</span>
            <span>LLM Evaluation</span>
          </div>

          <a
            href="https://prepbot-interview-simulator.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="research-link"
          >
            Explore PrepBot 
          </a>
        </div>

        <div className="research-visual">
          <div className="research-node node-one">AI</div>
          <div className="research-node node-two">HUMAN</div>
          <div className="research-node node-three">TRUST</div>

          <svg viewBox="0 0 300 260" aria-hidden="true">
            <path d="M150 65 L65 175 L235 175 Z" />
            <circle cx="150" cy="65" r="5" />
            <circle cx="65" cy="175" r="5" />
            <circle cx="235" cy="175" r="5" />
          </svg>
        </div>
      </div>

      <div className="interest-grid">
        {interests.map((item) => (
          <article className="interest-item" key={item.number}>
            <span className="mono interest-number">
              {item.number}
            </span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}
