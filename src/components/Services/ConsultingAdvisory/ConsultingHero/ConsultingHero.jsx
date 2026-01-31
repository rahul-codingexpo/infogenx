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
          <h1>Applied Artificial Intelligence</h1>

          <p>
            Practical AI embedded into applications, automation, and
            analytics—secure, responsible, and business-ready.
          </p>

          <div className="appdev-buttons">
            <button className="primary-btn">Get Your FREE Consultation</button>

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
