import "./HealthcareApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";
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
  {
    number: "4",
    title: "Quality Assurance",
    desc: "Rigorous testing ensures security, performance, and reliability.",
  },
  {
    number: "5",
    title: "Deployment & Support",
    desc: "We launch with confidence and provide ongoing support to keep your systems running smoothly.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
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
      </div>

      {/* Corner Accent */}
      {/* <div className="approach-accent" /> */}
      <img
        src={AppcornerAssent}
        alt="corner accent"
        className="app-corner-accent"
      />
    </section>
  );
};

export default AppDevApproach;
