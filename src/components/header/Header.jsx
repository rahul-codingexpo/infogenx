import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import ServicesDropdown from "./ServicesDropdown";
// import TechnologiesDropdown from "./TechnologiesDropdown";
// import IndustriesDropdown from "./IndustriesDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import PlatformsDropdown from "./PlatformsDropdown";
import InsightDropdown from "./InsightDropdown";
// import ContactDropdown from "./ContactDropdown";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  // const [technologiesOpen, setTechnologiesOpen] = useState(false);
  // const [industriesOpen, setIndustriesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [insightOpen, setInsightOpen] = useState(false);
  // const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Infogenx Logo" />
        </Link>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/about">About us</Link>

          <div
            className="nav-item"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="nav-link">Services</span>

            {servicesOpen && (
              <ServicesDropdown closeMenu={() => setServicesOpen(false)} />
            )}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <span className="nav-link">Solutions</span>

            {solutionsOpen && (
              <SolutionsDropdown closeMenu={() => setSolutionsOpen(false)} />
            )}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setPlatformsOpen(true)}
            onMouseLeave={() => setPlatformsOpen(false)}
          >
            <span className="nav-link">Platforms</span>

            {platformsOpen && (
              <PlatformsDropdown closeMenu={() => setPlatformsOpen(false)} />
            )}
          </div>

          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>

          {/* <div
            className="nav-item"
            onMouseEnter={() => setTechnologiesOpen(true)}
            onMouseLeave={() => setTechnologiesOpen(false)}
          >
            <span className="nav-link">Technologies</span>
            {technologiesOpen && (
              <TechnologiesDropdown
                closeMenu={() => setTechnologiesOpen(false)}
              />
            )}
          </div> */}

          {/* <div
            className="nav-item"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <span className="nav-link">Industries</span>
            {industriesOpen && (
              <IndustriesDropdown closeMenu={() => setIndustriesOpen(false)} />
            )}
          </div> */}

          <Link to="/portfolio">Portfolio</Link>
          {/* <Link to="/blog">Blog</Link>  */}
          {/* <Link to="/insights">Insights</Link> */}
          <div
            className="nav-item"
            onMouseEnter={() => setInsightOpen(true)}
            onMouseLeave={() => setInsightOpen(false)}
          >
            <span className="nav-link">Insights</span>
            {insightOpen && (
              <InsightDropdown closeMenu={() => setInsightOpen(false)} />
            )}
          </div>

          <Link to="/contact-us">Contact Us</Link>
          {/* <div
            className="nav-item"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            <span className="nav-link">Contact Us</span>
            {contactOpen && (
              <ContactDropdown closeMenu={() => setContactOpen(false)} />
            )}
          </div> */}
        </nav>
        <div className="quote-wrapper">
          <Link to="/contact-us" className="quote-btn desktop-only">
            Request Strategy Briefing
          </Link>
          <span className="quote-tooltip">
            Request a tailored quote for smart app Automation and Analytics
            Engineering
          </span>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

export default Header;
