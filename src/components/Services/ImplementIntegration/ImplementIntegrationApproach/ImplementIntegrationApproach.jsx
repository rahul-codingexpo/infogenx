import "./ImplementIntegrationApproach.css";
import cornerAssent from "../../../../assets/images/corner-accent.png";
const steps = [
  {
    number: "1",
    title: "Discovery & Strategy",
    desc: "We understand business goals, users, and market context to shape the right solution.",
  },
  {
    number: "2",
    title: "User-Centric Design",
    desc: "We prioritize intuitive experiences that drive adoption and value.",
  },
  {
    number: "3",
    title: "Agile Engineering",
    desc: "Iterative development ensures quick delivery, constant feedback, and continuous improvement.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <img
        src={cornerAssent}
        alt="corner accent"
        className="automation-corner-accent"
      />
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>Our Development Approach</h2>
        </div>

        {/* Cards */}
        <div className="approach-grid">
          {steps.map((step, index) => (
            <div className="approach-card" key={index}>
              <span className="step-number">{step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <hr
          style={{
            margin: "50px 0px",
            border: "1px solid  rgba(248, 138, 60, 0.792)",
          }}
        />
        <div className="business-outcome">
          <h1>Business Outcomes</h1>
          <div className="outcome-container">
            <div className="business-outcome-item">
              <h3>Increase Efficiency</h3>
              <p>Eliminate manual tasks and accelerate cycle times.</p>
            </div>
            <div className="business-outcome-item border-left">
              <h3>Boost Accuracy</h3>
              <p>Reduce human errors and improve consistency.</p>
            </div>
            <div className="business-outcome-item border-left">
              <h3>Enhance Productivity</h3>
              <p>Free up talent for higher-value activities.</p>
            </div>
            <div className="business-outcome-item border-left">
              <h3>Drive Growth</h3>
              <p>Reallocate resources toward strategic initiatives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevApproach;
