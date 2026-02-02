import "./Footer.css";
import Footerlogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top row */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src={Footerlogo} alt="Infogenx" />
            <p>
              A leading digital transformation and process automation company
              empowering businesses to thrive in today’s dynamic landscape.
            </p>
          </div>

          <div className="footer-social">
            <Link
              to="https://www.instagram.com/infogenx_pvt_ltd/"
              target="_blank"
            >
              <RiInstagramLine />
            </Link>
            <Link
              to="https://www.linkedin.com/company/infogenx-pvt-ltd/"
              target="_blank"
            >
              <RiLinkedinBoxLine />
            </Link>
            <Link to="https://www.facebook.com/Infogenx" target="_blank">
              <RiFacebookBoxLine />
            </Link>
            <Link to="https://x.com/Infogenx1" target="_blank">
              <RiTwitterXLine />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>INFOGENX</h4>
            <ul>
              <li>
                {" "}
                <Link to="/about">About Us</Link>
              </li>
              <li>
                {" "}
                <Link to="/products">Products</Link>
              </li>
              <li>
                {" "}
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                {" "}
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                {" "}
                <Link to="/terms-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>SERVICES</h4>
            <ul>
              <li>
                {" "}
                <Link to="/services/implementation-integration">
                  Implementation & Integration
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/services/managed-services">Managed Services</Link>
              </li>
              <li>
                {" "}
                <Link to="/services/consulting-advisory">
                  Consulting & Advisory
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/services/support-optimization">
                  Support & Optimization
                </Link>
              </li>
              {/* <li>
                {" "}
                <Link to="/services/it-partner">
                  Offshore Software Development
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h4>SOLUTIONS</h4>
            <ul>
              <li>
                {" "}
                <Link to="/solutions/digital-transformation">
                  Digital Transformation
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/solutions/intelligent-automation">
                  Intelligent Automation
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/solutions/modern-applications">
                  Modern Applications
                </Link>
              </li>

              <li>
                {" "}
                <Link to="/solutions/data-analytics-ai">
                  Data Analytics & AI
                </Link>
              </li>
              <li>
                <Link to="/solutions/api-integration">
                  Integration & API Enablement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>INDUSTRIES</h4>
            <ul>
              <li>
                {" "}
                <Link to="/industries/healthcare-solutions">Healthcare</Link>
              </li>
              <li>
                {" "}
                <Link to="/industries/retail-solutions">Retail</Link>
              </li>
              <li>
                {" "}
                <Link to="/industries/manufacturing-solutions">
                  Manufacturing
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/industries/transport-logistics">
                  Transport and Logistics
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/industries/e-commerce-solutions">E-Commerce</Link>
              </li>
              <li>
                {" "}
                <Link to="/industries/finance-solutions">Finance</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          Copyright © 2025 All rights reserved. Infogenx Pvt Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
