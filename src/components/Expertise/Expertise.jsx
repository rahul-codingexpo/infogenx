import "./Expertise.css";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
const Expertise = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        {/* Left Content */}
        <div className="expertise-content">
          <h2 className="expertise-heading">
            Apps, Data & Automation <br />
            Experts Driving Digital <br />
            Transformation
          </h2>

          <p className="expertise-description">
            We help businesses build scalable applications, intelligent
            automation, and data-driven systems using modern low-code and cloud
            platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="expertise-cards">
          <div className="expertise-card first-card">
            <h4>Low-Code Application Development</h4>
            <p>
              Build flexible, business-ready applications that accelerate
              delivery and adapt as your needs evolve.
            </p>

            <img src={card1} alt="" />
          </div>

          <div className="expertise-card center-card">
            <h4>Intelligent Automation</h4>
            <p>
              Simplify complex workflows, eliminate repetitive tasks, and
              improve operational efficiency with automation.
            </p>
            <img src={card2} alt="" />
          </div>

          <div className="expertise-card last-card">
            <h4>Analytics & AI</h4>
            <p>
              Transform business data into actionable insights that support
              smarter, faster decision-making.
            </p>
            <img src={card3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
