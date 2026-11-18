
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Research from './components/Research';
import Journey from './components/Journey';
import About from './components/About';
import Sidekick from './components/Sidekick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import './redesign.css';

export default function App() {
  return (
    <>
      <div id="app" className="portfolio-app">
        <Nav />

        <main>
          <Home />

          <Projects />

          <Research />

          <Journey />

          {/* <About /> */}

          <footer className="site-footer" id="contact">
            <div className="footer-inner">
              <div>
                <span className="section-kicker">HAVE A GOOD ONE</span>
                <h2>Let's build something.</h2>
                <p>
                  Always happy to talk about AI, research,
                  software or interesting ideas.
                </p>
                <br></br>
                <div className="footer-socials">
                 <a href="https://www.linkedin.com/in/divya-gupta-3a505617a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href="https://github.com/vsdoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="mailto:divya2207.work@gmail.com" aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              </div>
              </div>

            
 

            <div className="footer-bottom">
              <span className="mono">vsdoe © 2026</span>
              <span>Made with code & coffee ☕</span>
              <a href="#home">Back to top ↑</a>
            </div>
          </footer>
        </main>
      </div>

      <Sidekick page="home" />
    </>
  );
}
