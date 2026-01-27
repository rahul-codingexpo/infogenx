import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox from "../../assets/images/codebox.png";
const PlatformsDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/platforms/microsoft" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Microsoft Solutions</h4>
            <p>
              Build scalable web and application solutions tailored to your
              business needs.
            </p>
          </div>
        </Link>

        <Link to="/platforms/zoho" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Zoho Solutions</h4>
            <p>
              Automate workflows to improve efficiency, accuracy, and
              operational speed.
            </p>
          </div>
        </Link>

        <Link to="/platforms/odoo" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Odoo Solutions</h4>
            <p>
              Transform raw data into reliable insights for smarter
              decision-making.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PlatformsDropdown;
