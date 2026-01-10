import "./AboutWhyChoose.css";

const AboutWhyChoose = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <span className="why-choose-label">Why Choose Infogenx?</span>

        <div className="why-choose-grid">
          <div className="why-card">
            <h3>Trusted Expertise</h3>
            <p>
              Our specialists bring real experience across AI, cloud,
              automation, low-code platforms, and end-to-end digital systems.
            </p>
            <p className="muted">
              We solve problems – not just build software.
            </p>
          </div>

          <div className="why-card">
            <h3>Tailored, Business-Driven Solutions</h3>
            <p>
              Every business is unique. We craft solutions that fit your
              workflows, data context, and long-term roadmap.
            </p>
          </div>
        </div>

        <div className="why-divider" />

        <div className="why-choose-grid">
          <div className="why-card">
            <h3>Global Perspective, Personal Approach</h3>
            <p>
              We combine international standards with attentive collaboration to
              ensure your success.
            </p>
          </div>

          <div className="why-card">
            <h3>Operational Impact</h3>
            <p>
              We focus on outcomes that matter: productivity gains, better
              decision-making, reduced cycle times, and faster time-to-value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
