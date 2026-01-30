import { Link } from "react-router-dom";
import "./InsightDropdown.css";
// import CodeBox from "../../assets/images/codebox.png";
const PlatformsDropdown = ({ closeMenu }) => {
  return (
    <div className="insight-dropdown">
      <div className="insight-container">
        <Link to="https://blog.infogenx.com/" onClick={closeMenu}>
          <div className="service-info">
            <h4>Blog</h4>
          </div>
        </Link>

        <Link to="/insights/case-studies" onClick={closeMenu}>
          <div className="service-info">
            <h4>Case Studies</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PlatformsDropdown;
