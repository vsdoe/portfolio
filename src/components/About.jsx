
const moments = [
  {
    emoji: '☕',
    title: 'Coffee enthusiast',
    description: 'A functioning caffeine dependency.',
  },
  {
    emoji: '🏔️',
    title: 'Mountain chaser',
    description: 'Usually questioning the hike halfway up.',
  },
  {
    emoji: '📚',
    title: 'Thriller reader',
    description: 'Psychological plots and questionable characters.',
  },
  {
    emoji: '✈️',
    title: 'Serial traveller',
    description: 'Planning the next trip before unpacking.',
  },
];

export default function About() {
  return (
    <section className="about-section section-shell" id="about">
      <div className="section-heading">
        <div>
          <span className="section-kicker">
            04 / OUTSIDE THE TERMINAL
          </span>

          <h2>A little beyond code<span className="pink-period">.</span></h2>

          <p>
            There's more to life than staring at a screen.
            Allegedly.
          </p>
        </div>
      </div>

      <div className="about-grid">
        {moments.map((item) => (
          <article className="about-card" key={item.title}>
            <span className="about-emoji">{item.emoji}</span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="about-note">
        <span className="mono">CURRENTLY</span>
        <p>
          Learning new things, collecting passport stamps,
          and maintaining an impressive number of open browser tabs.
        </p>
      </div>
    </section>
  );
}
