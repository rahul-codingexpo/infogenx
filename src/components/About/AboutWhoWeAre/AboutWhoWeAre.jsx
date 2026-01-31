import "./AboutWhoWeAre.css";
import teamImage from "../../../assets/images/about-team.png";

const AboutWhoWeAre = () => {
  return (
    <section className="about-who-section">
      <div className="about-who-container">
        {/* Top content */}
        <div className="about-who-top">
          {/* Left */}
          <div className="about-who-left">
            <span className="about-label">Who We Are</span>
            <h2>
              Infogenx is a team of <br />
              technologists, <br />
              strategists, and creative <br />
              thinkers.
            </h2>
          </div>

          {/* Right */}
          <div className="about-who-right">
            <h4>
              United by a single purpose: simplify complexity and accelerate
              smarter growth for organizations worldwide.
            </h4>

            <p>
              We partner with businesses across industries to build future-ready
              systems – from intelligent automation and data solutions to
              cloud-first platforms and adaptive application ecosystems. Our
              approach combines deep technical expertise with practical business
              outcomes.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="about-who-image">
          <img src={teamImage} alt="Infogenx Team" />
        </div>

        {/* Bottom content */}
        <div className="about-who-bottom">
          {/* Left */}
          <div className="about-who-bottom-left">
            <span className="about-label">How We Work</span>
            <h3>
              We take a business-first <span>approach to technology.</span>
            </h3>
          </div>

          {/* Right */}
          <div className="about-who-points">
            <ul>
              <li>- We listen to your goals.</li>
              <li>- We design custom solutions that scale.</li>
              <li>- We deliver with transparency, quality, and speed.</li>
            </ul>

            <p>
              Our team blends innovation with discipline to ensure your digital
              transformation is strategic, measurable, and sustainable.
            </p>
          </div>
        </div>

        <hr style={{ "margin-top": "100px", border: "1px solid #ddd" }} />
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
