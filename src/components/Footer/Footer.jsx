import "./Footer.css";
import Footerlogo from "../../assets/images/logo-footer.png";
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
            <a href="#">
              <RiInstagramLine />
            </a>
            <a href="#">
              <RiLinkedinBoxLine />
            </a>
            <a href="#">
              <RiFacebookBoxLine />
            </a>
            <a href="#">
              <RiTwitterXLine />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>INFOGENX</h4>
            <ul>
              <li>About Us</li>
              <li>Partner</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div>
            <h4>SERVICES</h4>
            <ul>
              <li>Application & Web Development</li>
              <li>Data Engineering & Analytics</li>
              <li>Intelligent Process Automation</li>
              <li>AI-Powered Cloud Solutions</li>
              <li>Offshore Software Development</li>
            </ul>
          </div>

          <div>
            <h4>TECHNOLOGIES</h4>
            <ul>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Mobile App Development</li>
              <li>Data Engineering & Analytics</li>
              <li>Artificial Intelligence</li>
              <li>Smart Automation</li>
              <li>Cloud Computing</li>
            </ul>
          </div>

          <div>
            <h4>INDUSTRIES</h4>
            <ul>
              <li>Healthcare</li>
              <li>Retail</li>
              <li>Manufacturing</li>
              <li>Transport and Logistics</li>
              <li>E-Commerce</li>
              <li>Finance</li>
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
