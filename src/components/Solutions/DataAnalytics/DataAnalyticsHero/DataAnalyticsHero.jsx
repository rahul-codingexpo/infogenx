import "./DataAnalyticsHero.css";
import appDevVideo from "../../../../assets/videos/app-dev-hero.mp4";
import AboutCornerAccent from "../../../../assets/images/about-corner-accent.png";
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
            {/* AI-enabled Application Development */}
            Decide Confidently
          </h1>

          <p>
            Analytics engineering and embedded AI that transform data into
            predictive insights and smarter business decisions.
          </p>

          <div className="appdev-buttons">
            <button className="primary-btn">Unlock Analytics & AI </button>

            <button className="secondary-btn">
              Talk to an Expert <span>↗</span>
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
