import "./AppDevHero.css";
import appDevVideo from "../../../assets/videos/app-dev-hero.mp4";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.png";
const AppDevHero = () => {
  return (
    <section className="appdev-hero">
      <img
        alt="corner accent"
        className="about-corner-accent"
        src={AboutCornerAccent}
      ></img>
      <div className="appdev-container">
        {/* LEFT CONTENT */}

        <div className="appdev-left">
          <h1>
            Intelligent Process <br /> Automation for Smarter <br /> Operations
          </h1>

          <p>
            Accelerate efficiency, reduce manual effort, and unlock operational
            agility with automation that scales.
          </p>

          <div className="appdev-buttons">
            <button className="primary-btn">Get Your FREE Consultation</button>

            <button className="secondary-btn automation-secondary-btn">
              Talk to an Automation Expert <span>↗</span>
            </button>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div className="appdev-right">
          <div className="appdev-video-wrapper">
            <div className="bg"></div>
            <video
              src={appDevVideo}
              autoPlay
              muted
              loop
              playsInline
              className="appdev-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevHero;
