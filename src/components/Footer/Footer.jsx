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
              <li>
                {" "}
                <a href="">About Us</a>
              </li>
              <li>
                {" "}
                <a href="">Partner</a>
              </li>
              <li>
                {" "}
                <a href="">Careers</a>
              </li>
              <li>
                {" "}
                <a href="">Privacy Policy</a>
              </li>
              <li>
                {" "}
                <a href="">Terms and Conditions</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>SERVICES</h4>
            <ul>
              <li>
                {" "}
                <a href="">Application & Web Development</a>
              </li>
              <li>
                {" "}
                <a href="">Data Engineering & Analytics</a>
              </li>
              <li>
                {" "}
                <a href="">Intelligent Process Automation</a>
              </li>
              <li>
                {" "}
                <a href="">AI-Powered Cloud Solutions</a>
              </li>
              <li>
                {" "}
                <a href="">Offshore Software Development</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>TECHNOLOGIES</h4>
            <ul>
              <li>
                {" "}
                <a href="">Frontend Development</a>
              </li>
              <li>
                {" "}
                <a href="">Backend Development</a>
              </li>
              <li>
                {" "}
                <a href="">Mobile App Development</a>
              </li>
              <li>
                {" "}
                <a href="">Data Engineering & Analytics</a>
              </li>
              <li>
                {" "}
                <a href="">Artificial Intelligence</a>
              </li>
              <li>
                {" "}
                <a href="">Smart Automation</a>
              </li>
              <li>Cloud Computing</li>
            </ul>
          </div>

          <div>
            <h4>INDUSTRIES</h4>
            <ul>
              <li>
                {" "}
                <a href="">Healthcare</a>
              </li>
              <li>
                {" "}
                <a href="">Retail</a>
              </li>
              <li>
                {" "}
                <a href="">Manufacturing</a>
              </li>
              <li>
                {" "}
                <a href="">Transport and Logistics</a>
              </li>
              <li>
                {" "}
                <a href="">E-Commerce</a>
              </li>
              <li>
                {" "}
                <a href="">Finance</a>
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
