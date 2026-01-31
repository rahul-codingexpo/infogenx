import "./AIExpertise.css";
import IconA from "../../../../assets/images/icon1.png";
import IconB from "../../../../assets/images/icon2.png";
import IconC from "../../../../assets/images/icon3.png";
import IconD from "../../../../assets/images/icon4.png";
import IconE from "../../../../assets/images/icon5.png";
const WebDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="appdev-expertise-container">
        {/* Heading */}
        <div className="appdev-expertise-header">
          <span className="section-label">What We Do</span>
          <h2>
            Our Application <br />
            Development Expertise
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>AI-Powered Codeless Development</h4>
            <p>
              Rapidly prototype and launch business apps without traditional
              coding constraints.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Custom Application Development</h4>
            <p>
              Deliberately crafted web and mobile solutions aligned with your
              strategic goals.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Cloud-Native Application Engineering</h4>
            <p>
              Build resilient, scalable applications optimized for AWS, Azure,
              GCP, and hybrid architectures.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Application Modernization & Optimization</h4>
            <p>
              Upgrade legacy systems with performance, usability, and
              future-ready capabilities.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaShieldAlt className="expertise-icon" /> */}
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Security, Scalability, & Compliance</h4>
            <p>
              Ensure applications meet industry standards while performing under
              real-world load.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevExpertise;
