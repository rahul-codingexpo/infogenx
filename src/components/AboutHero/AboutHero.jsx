import "./AboutHero.css";
import aboutHeroBg from "../../assets/images/about-hero-bg.jpg";
import AboutCornerAccent from "../../assets/images/about-corner-accent.png";
const AboutHero = () => {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${aboutHeroBg})` }}
    >
      <img
        alt="corner accent"
        className="about-corner-accent"
        src={AboutCornerAccent}
      ></img>
      <div className="about-hero-overlay" />

      <div className="about-hero-container">
        {/* Left content */}
        <div className="about-hero-left">
          <h1>
            Innovating Digital <br />
            Transformation Through <br />
            Scalable Technology
          </h1>

          <div className="about-hero-buttons">
            <button className="about-primary-btn">Talk to an Expert</button>

            <button className="about-secondary-btn">
              Explore our Services <span>↗</span>
            </button>
          </div>
        </div>

        {/* Right content */}
        <div className="about-hero-right">
          <p>
            We help businesses transform operations, improve efficiency, and
            unlock growth with low-code, automation, analytics, and cloud
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
