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
                <Link to="/services/it-partner">Partner</Link>
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
                <Link to="/term-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>SERVICES</h4>
            <ul>
              <li>
                {" "}
                <Link to="/services/application-development">
                  Application & Web Development
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/services/analytics">
                  Data Engineering & Analytics
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/services/automation">
                  Intelligent Process Automation
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/services/cloud-ai">AI-Powered Cloud Solutions</Link>
              </li>
              <li>
                {" "}
                <Link to="/services/it-partner">
                  Offshore Software Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>TECHNOLOGIES</h4>
            <ul>
              <li>
                {" "}
                <Link to="/technologies/web-development">
                  Frontend Development
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/technologies/web-development">
                  Backend Development
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/technologies/mobile-app-development">
                  Mobile App Development
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/services/analytics">
                  Data Engineering & Analytics
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/technologies/artificial-intelligence">
                  Artificial Intelligence
                </Link>
              </li>
              {/* <li>
                {" "}
                <Link to="/technologies/smart-automation">
                  Smart Automation
                </Link>
              </li> */}
              <li>
                <Link to="/technologies/cloud-computing">Cloud Computing</Link>
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
