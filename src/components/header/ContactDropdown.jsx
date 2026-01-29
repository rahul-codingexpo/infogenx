import { Link } from "react-router-dom";
import "./ContactDropdown.css";
// import CodeBox from "../../assets/images/codebox.png";
const ContactDropdown = ({ closeMenu }) => {
  return (
    <div className="contact-dropdown">
      <div className="contact-drop-container">
        <Link to="/contact-us/get-in-touch" onClick={closeMenu}>
          <div className="service-info">
            <h4>Get in Touch</h4>
          </div>
        </Link>

        <Link to="/contact-us/global-locations" onClick={closeMenu}>
          <div className="service-info">
            <h4>Global Locations</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactDropdown;
