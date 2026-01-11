import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox from "../../assets/images/codebox.png";
const ServicesDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/industries/healthcare-solutions" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Healthcare Solutions</h4>
            <p>
              Build scalable web and application solutions tailored to your
              business needs.
            </p>
          </div>
        </Link>

        <Link to="/industries/retail-solutions" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Retail Solutions</h4>
            <p>
              Automate workflows to improve efficiency, accuracy, and
              operational speed.
            </p>
          </div>
        </Link>

        <Link to="/industries/manufacturing-solutions" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Manufacturing Solutions</h4>
            <p>
              Transform raw data into reliable insights for smarter
              decision-making.
            </p>
          </div>
        </Link>

        <Link to="/industries/transport-logistics" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Transport and Logistics</h4>
            <p>Extend development capacity with reliable offshore teams.</p>
          </div>
        </Link>

        <Link to="/industries/e-commerce-solutions" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>E-Commerce Solutions</h4>
            <p>Extend development capacity with reliable offshore teams.</p>
          </div>
        </Link>

        <Link to="/industries/finance-solutions" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Finance Solutions</h4>
            <p>Extend development capacity with reliable offshore teams.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesDropdown;
