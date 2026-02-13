import "./ConsultingHero.css";
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
          <h1>Strategy That Works</h1>

          <p>
            Australian digital transformation consulting and platform strategy
            advisory helping organisations choose and roadmap Microsoft, Zoho,
            or Odoo solutions.
          </p>

          <div className="appdev-buttons">
            <button className="primary-btn">Book Advisory Session </button>

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
