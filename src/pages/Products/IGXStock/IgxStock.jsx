import "./IgxStock.css";
import logo from "../../../assets/images/products/Igx-stocklogo.png";
import laptopImg from "../../../assets/images/products/laptop.png";
import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import img1 from "../../../assets/images/products/igx1.png";
import img2 from "../../../assets/images/products/igx2.png";
import img3 from "../../../assets/images/products/igx3.png";
import img4 from "../../../assets/images/products/igx4.png";
import img5 from "../../../assets/images/products/igx5.png";
import img6 from "../../../assets/images/products/igx6.png";
import img7 from "../../../assets/images/products/igx7.png";
import img8 from "../../../assets/images/products/igx8.png";
import img9 from "../../../assets/images/products/igx9.png";
import img10 from "../../../assets/images/products/igx10.png";
import img11 from "../../../assets/images/products/igx11.png";
import { Link } from "react-router-dom";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineTrophy } from "react-icons/hi2";
import { VscRemoteExplorer } from "react-icons/vsc";
import { RiShieldCheckLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { Helmet } from "react-helmet-async";

const descItems = [
  {
    icon: <IoCloudDownloadOutline />,
    title: "Real-Time Inventory Management",
    text: "seamlessly keep track of available stocks and make smart stock consumption decisions, as the Stock Management Software devastates possibilities of erroneous readings, and ensures harmony between physically available stock versus stocks in data. This methodical system allows recipe standardization and enables curbing cost of food production.",
  },
  {
    icon: <IoMdCheckmarkCircleOutline />,
    title: "Intuitive User Interface",
    text: "Highly self-descriptive and intuitive software system that is easily accessible across the hierarchy of employees. The software allows multiple user account generation with ‘specific’ page roles and login credentials so that each user base is destined with a specific module to keep track of.",
  },
  {
    icon: <HiOutlineTrophy />,
    title: "Stock Taking",
    text: "Utmost ease of product procurement with Stock Taking facility. Conveniently choose from the list of Suppliers and Product lists. In just a few clicks, your Suppliers receive Product Request mail which is then tracked in real-time on the Stock Management Software.",
  },
  {
    icon: <VscRemoteExplorer />,
    title: "Remote Management",
    text: "one-stop solution to manage and maintain stocks across chain of restaurants where you can create Purchase Orders, track Stock Consumption and access Stock Requirement at one point and cater to the needs across the entire chain of restaurants with utmost ease",
  },
  {
    icon: <HiOutlineTrophy />,
    title: "Raw Material Management",
    text: "Get automatic alerts/reminders when your stocks go down. The Stock Management Software comes with ‘Threshold Switch’ to aid you with automatic re-ordering to ensure that your business is always up and running.",
  },
  {
    icon: <RiShieldCheckLine />,
    title: "Report And Analytics Generation",
    text: "Stock Management Software dashboard produces concise data analytics on the total available stocks, total used, and revenue generation reports. Plus, the graphical weekly progress report gives you the bird’s eye view of stock usage, allowing clear acquaintance of the over-demanding stocks.",
  },
];
const features = [
  {
    icon: <IoDiamondOutline />,
    title: "Real-Time Inventory Management",
    text: "Seamlessly keep track of available stocks and make smart stock consumption decisions, as the Stock Management Software devastates possibilities of erroneous readings, and ensures harmony between physically available stock versus stocks in data. This methodical system allows recipe standardization and enables curbing cost of food production.",
  },
  {
    icon: <MdOutlineRemoveRedEye />,
    title: "Intuitive User Interface",
    text: "Highly self-descriptive and intuitive software system that is easily accessible across the hierarchy of employees. The software allows multiple user account generation with ‘specific’ page roles and login credentials so that each user base is destined with a specific module to keep track of.",
  },
  {
    icon: <GrUpdate />,
    title: "Stock Taking",
    text: "Utmost ease of product procurement with Stock Taking facility. Conveniently choose from the list of Suppliers and Product lists. In just a few clicks, your Suppliers receive Product Request mail which is then tracked in real-time on the Stock Management Software.",
  },
  {
    icon: <RxAvatar />,
    title: "Remote Management",
    text: "One-stop solution to manage and maintain stocks across chain of restaurants where you can create Purchase Orders, track Stock Consumption and access Stock Requirement at one point and cater to the needs across the entire chain of restaurants with utmost ease.",
  },
  {
    icon: <VscRemoteExplorer />,
    title: "Raw Material Management",
    text: "Get automatic alerts/reminders when your stocks go down. The Stock Management Software comes with ‘Threshold Switch’ to aid you with automatic re-ordering to ensure that your business is always up and running.",
  },
  {
    icon: <RiShieldCheckLine />,
    title: "Report And Analytics Generation",
    text: "Stock Management Software dashboard produces concise data analytics on the total available stocks, total used, and revenue generation reports. Plus, the graphical weekly progress report gives you the bird’s eye view of stock usage, allowing clear acquaintance of the over-demanding stocks.",
  },
];

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

const IgxStock = () => {
  const [index, setIndex] = useState(0);

  const visibleSlides = 3;
  const maxIndex = images.length - visibleSlides;

  // Auto move 1 by 1
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [maxIndex]);
  return (
    <>
      <Helmet>
        <title>Stock Management System in Brisbane, Australia|Infogenx</title>
        <meta
          name="description"
          content="Streamline inventory with InfogenX's custom Stock Management System in Brisbane. Real-time tracking, automated reordering, and seamless integration for Australian businesses. Request a free demo"
        />
        <meta
          name="keywords"
          content="automation software, custom software development, ERP software, ODOO ERP, stock management system, inventory management software,  business automation solutions, software products Australia, Brisbane software development"
        />
      </Helmet>
      {/* NAVBAR */}
      <header className="igx-navbar">
        <div className="igx-nav-container">
          <div className="igx-nav-logo">
            <Link to="">
              <img src={logo} alt="IGX Stock" />
            </Link>
          </div>

          <nav className="igx-nav-links">
            <a className="active" href="#about">
              About
            </a>
            <a href="#description">Description</a>
            <a href="#feature">Features</a>
            <a href="#tour">Tour</a>
            <a href="#pricing">Pricing</a>
          </nav>

          <button
            className="igx-nav-btn"
            onClick={() =>
              window.open("https://stockmgmt.infogenx.com/login.php")
            }
          >
            Sign In
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="igx-hero">
        <div className="igx-hero-overlay"></div>

        <div className="igx-hero-container">
          <div className="igx-hero-content">
            <h1>
              Efficient Stock -<br />
              Management Software <br />
              For Restaurants
            </h1>

            <p>
              A constructive and holistic stock management software to
              strategically handle and manage inventories. As your business
              volume grows multifold, it becomes inevitable to have your own
              Stock Management Software to discard discrepancies and bring forth
              orderliness in functioning.
            </p>

            <button
              className="igx-hero-btn"
              onClick={() =>
                window.open("https://stockmgmt.infogenx.com/login.php")
              }
            >
              Try It Free For 30 Days
            </button>
          </div>

          <div className="igx-hero-image">
            <img src={laptopImg} alt="Dashboard Preview" />
          </div>
        </div>
      </section>

      <section className="igx-description-section">
        <h2>Description</h2>

        <div className="igx-description-grid" id="description">
          {descItems.map((item, i) => (
            <div className="igx-description-card" key={i}>
              <div className="igx-desc-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="igx-experience-section" id="feature">
        <h2>Experience reports that are actually useful.</h2>
        <p className="igx-subtitle">
          Track all inventory-related costs and run reports effortlessly.
        </p>

        <div className="igx-experience-grid">
          {features.map((item, index) => (
            <div className="igx-experience-card" key={index}>
              <div className="igx-icon-box">{item.icon}</div>
              <div className="igx-experience-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="igx-tour-carousel-section" id="tour">
        <h2 className="igx-tour-title">Tour</h2>

        <div className="igx-carousel-wrapper">
          <div
            className="igx-carousel-track"
            style={{
              transform: `translateX(-${index * (100 / visibleSlides)}%)`,
            }}
          >
            {images.map((img, i) => (
              <div className="igx-carousel-slide" key={i}>
                <img src={img} alt={`Tour ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="igx-carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </section>

      <section className="igx-pricing-section" id="pricing">
        <h2 className="igx-pricing-title">
          Choose the product that you really need!
        </h2>

        <div className="igx-pricing-cards">
          {/* FREE PLAN */}
          <div className="igx-pricing-card free">
            <span className="igx-plan-name">FREE – Basic Plan</span>
            <h3 className="igx-price">$0</h3>

            <h4 className="igx-highlight">1 User For 60 Days</h4>

            <button
              className="igx-btn dark"
              onClick={() =>
                window.open("https://stockmgmt.infogenx.com/login.php")
              }
            >
              TRY IT
            </button>

            <ul>
              <li>Entry Level of Stock Management</li>
              <li>Features Provided</li>
              <li>Maximum 5 Categories</li>
              <li>Maximum 5 Suppliers</li>
              <li>Manage 10 Products</li>
              <li>Unlimited Stock takes</li>
              <li>Limit up to 50 Transactions</li>
              <li>No Inventory Management</li>
              <li>No Threshold limit for ordering</li>
            </ul>
          </div>

          {/* STANDARD PLAN */}
          <div className="igx-pricing-card standard">
            <span className="igx-plan-name">Standard Plan</span>
            <h3 className="igx-price">$200</h3>

            <h4 className="igx-highlight">10 User</h4>

            <button
              className="igx-btn primary"
              onClick={() =>
                window.open("https://stockmgmt.infogenx.com/login.php")
              }
            >
              SUBSCRIBE
            </button>

            <ul>
              <li>Premium Level of Stock Management</li>
              <li>Features Provided</li>
              <li>User Access Management</li>
              <li>Unlimited Product Categories</li>
              <li>Extended Supplier Limits</li>
              <li>Maximum Number of Products</li>
              <li>Unlimited Stock Takes</li>
              <li>Unlimited Transactions</li>
              <li>Threshold Limit for Ordering</li>
              <li>Inventory Management Enabled</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="igx-footer">
        <div className="igx-footer-overlay"></div>

        <div className="igx-footer-container">
          {/* ABOUT */}
          <div className="igx-footer-col">
            <h3>About us</h3>
            <p>
              Infogenx is a fast growing IT and ITES Company that provides
              reliable and effective solutions to your business needs in the
              areas of Application Development, Digital Marketing, Data Services
              and Data Analytics.
            </p>
          </div>

          {/* LINKS */}
          <div className="igx-footer-col">
            <h3>Support Links</h3>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#description">Description</a>
              </li>
              <li>
                <a href="#feature">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="igx-footer-col">
            <h3>Contact with us</h3>

            <p>
              <FaPhoneAlt /> +91 75300 30099, +91 97878 06366
            </p>
            <p>
              <FaEnvelope /> reachus@infogenx.com
            </p>

            <div className="igx-social">
              <span>Get in touch:</span>
              <a href="https://www.facebook.com/Infogenx">
                <FaFacebookF />
              </a>
              <a href="https://x.com/Infogenx1">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/infogenx-pvt-ltd/">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="igx-footer-bottom">
          © Copyright 2026 IGX STOCK, All Rights Reserved
        </div>

        {/* Scroll Top */}
        <button
          className="igx-scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </footer>
    </>
  );
};

export default IgxStock;
