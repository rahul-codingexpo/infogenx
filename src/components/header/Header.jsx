import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import ServicesDropdown from "./ServicesDropdown";
import TechnologiesDropdown from "./TechnologiesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Infogenx Logo" />
        </Link>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About us
          </Link>
          {/* <Link to="/services">Our Services</Link>
          <Link to="/technologies">Technologies</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/products">Products</Link> */}
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
              <ServicesDropdown closeMenu={() => setSolutionsOpen(false)} />
            )}
          </div>
          <div
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
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <span className="nav-link">Industries</span>
            {industriesOpen && (
              <IndustriesDropdown closeMenu={() => setIndustriesOpen(false)} />
            )}
          </div>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/portfolio">Portfolio</Link>
          {/* <Link to="/blog">Blog</Link>  */}
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="quote-btn desktop-only">
            Request a Quote
          </Link>
        </nav>

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
