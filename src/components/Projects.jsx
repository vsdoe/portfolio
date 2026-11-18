
import { useState } from 'react';
import { projects } from '../data/projects';

const TAG_COLORS = [
  '#e6398f',
  '#2ec4b6',
  '#ffb627',
  '#6a4fd6',
];

const PREVIEW_STYLES = [
  'preview-pink',
  'preview-lavender',
  'preview-green',
  'preview-yellow',
];

function ProjectPreview({ project, index }) {
  return (
    <div className={`project-preview ${PREVIEW_STYLES[index % 4]}`}>
      <span className="preview-index mono">
        PROJECT / {String(index + 1).padStart(2, '0')}
      </span>

      <div className="preview-window">
        <div className="preview-window-dots">
          <i /><i /><i />
        </div>

        <div className="preview-visual">
          {project.type.toLowerCase().includes('ai') ? (
            <div className="preview-ai">✳</div>
          ) : (
            <div className="preview-code mono">
              {'{ }'}
            </div>
          )}
        </div>

        <span className="preview-project-name">
          {project.name}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState('development');

  const items = projects[tab] || [];

  return (
    <section className="content-section section-shell" id="projects">
      <div className="section-heading">
        <div>
          <span className="section-kicker">
            01 / THINGS I'VE BUILT
          </span>
          <h2>Selected work<span className="pink-period">.</span></h2>
          <p>
            A few things I've built, researched,
            and spent probably too much time on.
          </p>
        </div>

        <div className="project-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={tab === 'development'}
            className={tab === 'development' ? 'active' : ''}
            onClick={() => setTab('development')}
          >
            Development
          </button>

          <button
            role="tab"
            aria-selected={tab === 'research'}
            className={tab === 'research' ? 'active' : ''}
            onClick={() => setTab('research')}
          >
            Research
          </button>
        </div>
      </div>

      <div className="project-grid">
        {items.map((project, index) => (
          <article className="project-card" key={project.name}>
            <ProjectPreview
              project={project}
              index={index}
            />

            <div className="project-card-content">
              <div className="project-type mono">
                {project.type}
              </div>

              <h3>{project.name}</h3>

              <p>{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={tag}>
                    <i
                      style={{
                        background: TAG_COLORS[i % TAG_COLORS.length],
                      }}
                    />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.link || 'https://github.com/vsdoe'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore project
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="projects-footer mono">
         MORE EXPERIMENTS, REPOSITORIES & RANDOM IDEAS ON
         <br></br>
         <br></br>
        <div>
         <a
            href="https://github.com/vsdoe"
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
