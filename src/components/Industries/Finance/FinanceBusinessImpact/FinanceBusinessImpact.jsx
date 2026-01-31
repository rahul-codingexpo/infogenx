import "./FinanceBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.png";
import Business2 from "../../../../assets/images/businessimg2.png";
import Business3 from "../../../../assets/images/businessimg3.png";
import Business4 from "../../../../assets/images/businessimg4.png";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        {/* Header */}
        <div className="business-impact-header">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Built for Business Impact</h2>
        </div>

        {/* Grid */}
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="" />
            </div>
            <div className="impact-content">
              <h4>Outcome-Driven Solutions</h4>
              <p>
                We focus on delivering measurable results – faster
                time-to-market, reduced costs, and scalable systems.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>Low-Code & Enterprise Expertise</h4>
              <p>
                We combine bleeding-edge platforms with engineering experience
                to meet real business needs.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Secure, Scalable, and Compliant</h4>
              <p>
                Solutions designed to meet industry standards and handle
                enterprise-grade scale.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Cross-Industry Experience</h4>
              <p>
                We serve diverse sectors, including finance, logistics,
                healthcare, and retail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevBusinessImpact;
