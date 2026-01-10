import "./AboutMissionVision.css";
import missionVideo from "../../assets/videos/mission.mp4";

const AboutMissionVision = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Left content */}

        <div className="mission-top-container">
          <div className="mission-block">
            <span className="section-label">Mission & Vision</span>
            <h2>Our Mission</h2>
            <p>
              Empower businesses with intelligent digital systems that fuel
              growth, foster innovation, and drive impact.
            </p>
          </div>

          <div className="mission-block">
            <h2>Our Vision</h2>
            <p>
              To be a global leader in digital transformation — where technology
              amplifies human potential across industries.
            </p>
          </div>
        </div>
        <div className="mission-bottom-container">
          <div className="mission-left">
            <div className="values-block">
              <span className="section-label">Core Values</span>

              <ul className="values-list">
                <li>
                  <strong>Innovation First</strong>
                  <span>Creative solutions with real business effect</span>
                </li>

                <li>
                  <strong>Client-Centric</strong>
                  <span>Your success is our priority</span>
                </li>

                <li>
                  <strong>Excellence Always</strong>
                  <span>We deliver quality, every time</span>
                </li>

                <li>
                  <strong>Agility & Adaptability</strong>
                  <span>Fast, flexible, future-ready</span>
                </li>

                <li>
                  <strong>Integrity & Transparency</strong>
                  <span>Clear, honest collaboration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right image */}
          <div className="mission-right">
            <div className="mission-right">
              <div className="mission-image-wrapper">
                <video
                  src={missionVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="mission-video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
