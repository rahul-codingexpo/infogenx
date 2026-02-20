import "./TransportImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.png";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        {/* LEFT */}
        <div className="impact-cta-left">
          <h2>
            Transform Your Ideas into <span>Impact</span>
          </h2>

          <p>
            Whether you’re building a new application, modernizing legacy
            systems, or scaling digital operations, we’re here to help.
          </p>

          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Get Your FREE Consultation
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Talk to an Expert <span>↗</span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="impact-cta-right">
          <div className="impact-cta-content">
            <ul>
              <li>
                <img src={Correct} alt="correct" /> Enterprise-ready solutions
              </li>
              <li>
                <img src={Correct} alt="correct" /> Technology you can trust
              </li>
              <li>
                <img src={Correct} alt="correct" /> Outcomes you can measure
              </li>
            </ul>

            <p className="impact-note">
              Let’s build the future together.
              <br />
              <strong>Contact us today.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevImpactCTA;
