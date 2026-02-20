import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox1 from "../../assets/images/Implementation & Integration.png";
import CodeBox2 from "../../assets/images/Managed Services.png";
import CodeBox3 from "../../assets/images/Consulting & Advisory.png";
import CodeBox4 from "../../assets/images/Support & Optimization.png";
const ServicesDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/services/implementation-integration" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox1} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Implementation & Integration</h4>
            <p>
              Build scalable web and application solutions tailored to your
              business needs.
            </p>
          </div>
        </Link>

        <Link to="/services/managed-services" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox2} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Managed Services</h4>
            <p>
              Automate workflows to improve efficiency, accuracy, and
              operational speed.
            </p>
          </div>
        </Link>

        <Link to="/services/consulting-advisory" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox3} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Consulting & Advisory</h4>
            <p>
              Transform raw data into reliable insights for smarter
              decision-making.
            </p>
          </div>
        </Link>

        <Link to="/services/support-optimization" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox4} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Support & Optimization</h4>
            <p>Extend development capacity with reliable offshore teams.</p>
          </div>
        </Link>
        {/* 
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
        </Link> */}
      </div>
    </div>
  );
};

export default ServicesDropdown;
