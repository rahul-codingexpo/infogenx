import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox1 from "../../assets/images/Microsoft Solutions.png";
import CodeBox2 from "../../assets/images/Zoho Solutions.png";
import CodeBox3 from "../../assets/images/Odoo Solutions.png";
const PlatformsDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/platforms/microsoft" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox1} alt="Service-img" />
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
            <img src={CodeBox2} alt="Service-img" />
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
            <img src={CodeBox3} alt="Service-img" />
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
