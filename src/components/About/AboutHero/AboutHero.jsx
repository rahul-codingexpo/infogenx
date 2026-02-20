import "./AboutHero.css";
import { useNavigate } from "react-router-dom";
import aboutHeroBg from "../../../assets/images/about-hero-bg.jpg";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.png";
const AboutHero = () => {
  const navigate = useNavigate();
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
            {/* Modernizing Australian Business with Intelligent Engineering. */}
            About InfogenX <br />
            Australia
          </h1>

          <div className="about-hero-buttons">
            <button
              className="about-primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Meet Our Team{" "}
            </button>

            <button
              className="about-secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us <span>↗</span>
            </button>
          </div>
        </div>

        {/* Right content */}
        <div className="about-hero-right">
          <p>
            Australian-focused partner delivering AI-enabled applications,
            intelligent automation, and analytics engineering across Microsoft,
            Zoho, and Odoo platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
