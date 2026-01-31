import "./AITech.css";
import AppcornerAssent from "../../../../assets/images/corner-accent.png";
const WebDevTech = () => {
  return (
    <section className="tech-web-section">
      <div className="tech-web-container">
        {/* WHAT WE OFFER */}
        <div className="tech-web-header">
          <span className="app-section-label">What We Offer</span>
          <h2>What Web Development Means</h2>

          <p className="tech-web-desc">
            Web development isn’t just about code – it’s about creating digital
            platforms that engage users, support business goals, and adapt to
            your future needs.
          </p>

          <p className="tech-web-desc">
            We combine proven technologies, UX-centric design, and
            performance-focused engineering to deliver websites and web
            applications that are secure, responsive, and scalable across
            devices.
          </p>
        </div>

        {/* CORE TECHNOLOGY STACK */}
        <div className="tech-stack">
          <h3>Core Technology Stack</h3>

          <div className="tech-stack-grid">
            <div className="tech-stack-card">
              <h4>Front-End Development</h4>
              <p>
                We build intuitive user interfaces that are fast, engaging, and
                accessible across devices.
              </p>
              <span className="tech-label">Technologies:</span>
              <p>
                HTML5, CSS3, JavaScript
                <br />
                React, Angular, Vue
              </p>
            </div>

            <div className="tech-stack-card">
              <h4>API & Microservices</h4>
              <p>
                Integrate platforms and data sources with robust API
                architectures that scale with your needs.
              </p>
              <span className="tech-label">Technologies:</span>
              <p>
                RESTful APIs, GraphQL
                <br />
                Microservices architecture
              </p>
            </div>

            <div className="tech-stack-card">
              <h4>Back-End Development</h4>
              <p>
                Our backend solutions power your applications with reliable,
                scalable server-side logic.
              </p>
              <span className="tech-label">Technologies:</span>
              <p>
                Node.js
                <br />
                Python (Django, Flask)
                <br />
                PHP (Laravel, CodeIgniter)
              </p>
            </div>

            <div className="tech-stack-card">
              <h4>Database & Storage</h4>
              <p>Data-driven web apps with secure, optimized data handling.</p>
              <span className="tech-label">Technologies:</span>
              <p>
                SQL / NoSQL databases
                <br />
                Cloud storage, caching
              </p>
            </div>
          </div>
        </div>
        <hr />
        {/* APPROACH */}
        <div className="tech-approach">
          <span className="app-section-label">Approach</span>
          <h3>Our Web Development Approach</h3>

          <div className="tech-approach-grid">
            <div>
              <h5>Plan & Architect</h5>
              <p>
                We start with strategic requirements and UX goals to define a
                clear web architecture and roadmap.
              </p>
            </div>

            <div>
              <h5>Design & Prototype</h5>
              <p>
                User interfaces are crafted with usability and conversion in
                mind, backed by UX principles and responsive design.
              </p>
            </div>

            <div>
              <h5>Build & Integrate</h5>
              <p>
                Modular, scalable development with iterative releases for faster
                feedback and quality.
              </p>
            </div>

            <div>
              <h5>Test & Optimize</h5>
              <p>
                Performance, security, and cross-device testing ensure a
                reliable experience.
              </p>
            </div>

            <div>
              <h5>Launch & Support</h5>
              <p>
                Deployment with long-term support and performance monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CORNER ACCENT */}
      <img
        src={AppcornerAssent}
        alt="corner accent"
        className="web-corner-accent"
      />
    </section>
  );
};

export default WebDevTech;
