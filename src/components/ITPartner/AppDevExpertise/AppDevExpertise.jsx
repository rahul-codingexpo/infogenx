import "./AppDevExpertise.css";
import IconA from "../../../assets/images/icon1.png";
import IconB from "../../../assets/images/icon2.png";
import IconC from "../../../assets/images/icon3.png";
import IconD from "../../../assets/images/icon4.png";
import IconE from "../../../assets/images/icon5.png";
import { WiStars } from "react-icons/wi";
const AppDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="top-expertise-container">
        <div className="top-expertise-container-left">
          <span className="section-label">What it really means</span>
          <h2>More than a vendor. A true technology partner.</h2>
        </div>
        <div className="top-expertise-container-right">
          <p>
            We don’t just deliver tools — we collaborate closely with your teams
            to understand goals, challenges, and opportunities, then design
            solutions that actually work for your business.
          </p>
          <div className="right-expertise-content">
            <div className="right-content-icon-text">
              <WiStars className="starIcon" />
              <p>Align IT with business strategy</p>
            </div>
            <div className="right-content-icon-text">
              <WiStars className="starIcon" />
              <p>Reduce complexity and technical debt</p>
            </div>
            <div className="right-content-icon-text">
              <WiStars className="starIcon" />
              <p>Improve reliability and user experience</p>
            </div>
            <div className="right-content-icon-text">
              <WiStars className="starIcon" />
              <p> Support sustainable digital growth</p>
            </div>
          </div>
        </div>
      </div>
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
        <div className="ITappdev-expertise-grid">
          <div className="ITexpertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>AI-Powered Codeless Development</h4>
            <p>
              Rapidly prototype and launch business apps without traditional
              coding constraints.
            </p>
          </div>

          <div className="ITexpertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Custom Application Development</h4>
            <p>
              Deliberately crafted web and mobile solutions aligned with your
              strategic goals.
            </p>
          </div>

          <div className="ITexpertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Cloud-Native Application Engineering</h4>
            <p>
              Build resilient, scalable applications optimized for AWS, Azure,
              GCP, and hybrid architectures.
            </p>
          </div>

          <div className="ITexpertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Application Modernization & Optimization</h4>
            <p>
              Upgrade legacy systems with performance, usability, and
              future-ready capabilities.
            </p>
          </div>

          <div className="ITexpertise-item">
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

export default AppDevExpertise;
