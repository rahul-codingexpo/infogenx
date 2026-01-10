import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox from "../../assets/images/codebox.png";
const ServicesDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/services/application-development" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Application Development</h4>
            <p>
              Build scalable web and application solutions tailored to your
              business needs.
            </p>
          </div>
        </Link>

        <Link to="/services/automation" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Automation</h4>
            <p>
              Automate workflows to improve efficiency, accuracy, and
              operational speed.
            </p>
          </div>
        </Link>

        <Link to="/services/analytics" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Analytics Engineering</h4>
            <p>
              Transform raw data into reliable insights for smarter
              decision-making.
            </p>
          </div>
        </Link>

        <Link to="/services/it-partner" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>IT Solutions Partner</h4>
            <p>Extend development capacity with reliable offshore teams.</p>
          </div>
        </Link>

        <Link to="/services/cloud-ai" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>AI-Powered Cloud Solutions</h4>
            <p>
              Design secure, scalable cloud systems enhanced with intelligence.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesDropdown;
