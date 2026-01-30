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
            {/* Innovating Digital <br />
            Transformation Through <br />
            Scalable Technology */}
            Modernizing Australian Business with Intelligent Engineering.
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
            At Infogenx, we believe technology should be an accelerator, not a
            bottleneck. We specialize in transforming complex workflows into
            seamless, AI-enabled applications. By combining analytics
            engineering with deep platform expertise, we help businesses across
            Australia turn raw data into decisive action and manual tasks into
            automated growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
