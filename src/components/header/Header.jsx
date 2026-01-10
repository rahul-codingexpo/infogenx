import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import ServicesDropdown from "./ServicesDropdown";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

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
            <span className="nav-link">Our Services</span>

            {servicesOpen && (
              <ServicesDropdown closeMenu={() => setServicesOpen(false)} />
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setTechnologiesOpen(true)}
            onMouseLeave={() => setTechnologiesOpen(false)}
          >
            <span className="nav-link">Technologies</span>
            {technologiesOpen && (
              <ServicesDropdown closeMenu={() => setTechnologiesOpen(false)} />
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <span className="nav-link">Industries</span>
            {industriesOpen && (
              <ServicesDropdown closeMenu={() => setIndustriesOpen(false)} />
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <span className="nav-link">Products</span>
            {productsOpen && (
              <ServicesDropdown closeMenu={() => setProductsOpen(false)} />
            )}
          </div>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="quote-btn desktop-only">Request a Quote</button>

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
