import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox1 from "../../assets/images/Digital Transformation.png";
import CodeBox2 from "../../assets/images/Intelligent Automation.png";
import CodeBox3 from "../../assets/images/Modern Applications.png";
import CodeBox4 from "../../assets/images/Data Analytics & AI.png";
import CodeBox5 from "../../assets/images/Integration & API Enablement.png";
const SolutionsDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/solutions/digital-transformation" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox1} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Digital Transformation</h4>
            <p>
              Build scalable web and application solutions tailored to your
              business needs.
            </p>
          </div>
        </Link>

        <Link to="/solutions/intelligent-automation" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox2} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Intelligent Automation</h4>
            <p>
              Automate workflows to improve efficiency, accuracy, and
              operational speed.
            </p>
          </div>
        </Link>

        <Link to="/solutions/modern-applications" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox3} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Modern Applications</h4>
            <p>
              Transform raw data into reliable insights for smarter
              decision-making.
            </p>
          </div>
        </Link>

        <Link to="/solutions/data-analytics-ai" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox4} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Data Analytics & AI</h4>
            <p>Extend development capacity with reliable offshore teams.</p>
          </div>
        </Link>

        <Link to="/solutions/api-integration" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox5} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4> Integration & API Enablement</h4>
            <p>
              Design secure, scalable cloud systems enhanced with intelligence.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SolutionsDropdown;
