import "./WebDevOutcomes.css";
import outcomeImage from "../../../../assets/images/tech-outcomes.png";

const WebDevOutcomes = () => {
  return (
    <section className="tech-outcomes-section">
      <div className="tech-outcomes-container">
        {/* LEFT IMAGE */}
        <div className="tech-outcomes-image">
          <img src={outcomeImage} alt="Business Outcomes" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="tech-outcomes-content">
          <span className="section-label">Why Choose Infogenx</span>

          <h2>
            Business Outcomes <br />
            you can Expect
          </h2>

          <div className="outcome-item">
            <h4>Better Engagement & Conversions</h4>
            <p>
              Intuitive interfaces keep users longer and improve actions taken.
            </p>
          </div>

          <div className="outcome-item">
            <h4>Lower Maintenance Costs</h4>
            <p>Clean, maintainable code reduces future overhead.</p>
          </div>

          <div className="outcome-item">
            <h4>Mobile-Ready Experiences</h4>
            <p>Fully responsive for every screen size.</p>
          </div>

          <div className="outcome-item">
            <h4>Scalable Systems</h4>
            <p>Built to support new features and integrations over time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevOutcomes;
