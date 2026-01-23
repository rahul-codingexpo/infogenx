import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox from "../../assets/images/codebox.png";
const SolutionsDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/solutions/digital-transformation" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
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
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Intelligent Automation</h4>
            <p>
              Automate workflows to improve efficiency, accuracy, and
              operational speed.
            </p>
          </div>
        </Link>

        <Link to="/solutions/modern-application" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
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
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Data Analytics & AI</h4>
            <p>Extend development capacity with reliable offshore teams.</p>
          </div>
        </Link>

        <Link to="/solutions/api-integration" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
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
