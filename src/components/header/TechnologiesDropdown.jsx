import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox from "../../assets/images/codebox.png";
const ServicesDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/technologies/web-development" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Web Development</h4>
            <p>
              Build scalable web and application solutions tailored to your
              business needs.
            </p>
          </div>
        </Link>

        <Link to="/technologies/mobile-app-development" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Mobile App Development</h4>
            <p>
              Automate workflows to improve efficiency, accuracy, and
              operational speed.
            </p>
          </div>
        </Link>

        <Link to="/technologies/artificial-intelligence" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Artificial Intelligence</h4>
            <p>
              Transform raw data into reliable insights for smarter
              decision-making.
            </p>
          </div>
        </Link>

        <Link to="/technologies/cloud-computing" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox} alt="Service-img" />
          </div>
          <div className="service-info">
            <h4>Cloud Computing</h4>
            <p>Extend development capacity with reliable offshore teams.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesDropdown;
