import React from "react";
import "./Products.css";
import Header from "../../components/header/Header";
import AppcornerAssent from "../../assets/images/appcorner.png";
import { AiOutlineStock } from "react-icons/ai";
// import { RiHandHeartFill } from "react-icons/ri";
// import { FaHospital } from "react-icons/fa";
// import { FaVanShuttle } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
// import { FaTasks } from "react-icons/fa";
// import { FaBusAlt } from "react-icons/fa";
// import { FaSpellCheck } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import CtaBanner from "../../components/Home/CtaBanner/CtaBanner";
import { useState } from "react";
import DemoPopup from "./DemoPopup";
const Products = () => {
  const steps = [
    {
      number: "1",
      icon: <AiOutlineStock />,
      title: "Stock Management System",
      desc: "We have a powerful Stock and Inventory management system that is easy to use. We Centralize the inventory management activities from one single system that helps you run your business efficiently.",
      btn1: "./products/stock-management-system",
      demo: {
        loginUrl: "https://stockmgmt.infogenx.com/login.php",
        email: "admin@gmail.com",
        password: "admin",
      },
    },
    // {
    //   number: "2",
    //   icon: <RiHandHeartFill />,
    //   title: "Clinic Management System",
    //   desc: "Our clinic management software assists healthcare establishments by offering quality billing management. It simplifies and automates the billing process, removing the need for manual intervention.",
    // },
    // {
    //   number: "3",
    //   icon: <FaHospital />,
    //   title: "Hospital Management System",
    //   desc: "Our hospital management system is an integrated healthcare solution which includes Pharmacy, OP Management,Laboratory Information System, Insurance And Corporate Billing and much more.",
    // },
    // {
    //   number: "4",
    //   icon: <FaVanShuttle />,
    //   title: "Transport Management System",
    //   desc: "Our transportation management System (TMS) designed for companies of all sizes. Features include billing and invoicing, load management, order management, shipment management, reporting, scheduling and more.",
    // },
    // {
    //   number: "5",
    //   icon: <FaLaptopCode />,
    //   title: "ERP Software",
    //   desc: "Our ERP software integrates various functions into one complete system to streamline processes and information across the entire application which helps you manage day-to-day business activities.",
    // },
    {
      number: "2",
      icon: <FaLaptopCode />,
      title: "ODOO ERP",
      desc: "Our ERP software integrates various functions into one complete system to streamline processes and information across the entire application which helps you manage day-to-day business activities.",
      btn1: "./products/odoo-erp-management-system",
      demo: {
        loginUrl:
          "https://igxerp.infogenx.com/web/login?_gl=1*nmuj0q*_ga*MTAyMjU4OTU4LjE3NjgxNDcwMzI.*_ga_97FMVFGS43*czE3Njk2MDcwMzUkbzEzJGcxJHQxNzY5NjA3ODIxJGo2MCRsMCRoMTg1ODg1MTkzOA..",
        email: "infogenx",
        password: "12345",
      },
    },
    {
      number: "3",
      title: "Retail POS",
      icon: <FaChartBar />,
      desc: "Our hospital management system is an integrated healthcare solution which includes Pharmacy, OP Management,Laboratory Information System, Insurance And Corporate Billing and much more.",
      btn1: "./products/retail-pos-management-system",
      demo: {
        loginUrl:
          "https://pos.infogenx.com/?_gl=1*sob463*_ga*MTAyMjU4OTU4LjE3NjgxNDcwMzI.*_ga_97FMVFGS43*czE3Njk2MDcwMzUkbzEzJGcxJHQxNzY5NjA3ODIxJGo2MCRsMCRoMTg1ODg1MTkzOA..",
        email: "admin@gmail.com",
        password: "admin",
      },
    },
    {
      number: "4",
      icon: <FaUserGear />,
      title: "Customer Relationship Management",
      desc: "Customer relationship management (CRM) is the combination of practices, strategies and technologies that companies use to manage and analyze customer interactions and data throughout the customer lifecycle, with the goal of improving customer service relationships and assisting in customer retention and driving sales growthin.",
      btn1: "./products/customer-relationship-management-system",
      demo: {
        loginUrl:
          "https://crm.infogenx.com/index.php?action=Login&module=Users&_gl=1*sob463*_ga*MTAyMjU4OTU4LjE3NjgxNDcwMzI.*_ga_97FMVFGS43*czE3Njk2MDcwMzUkbzEzJGcxJHQxNzY5NjA3ODIxJGo2MCRsMCRoMTg1ODg1MTkzOA..",
        email: "admin",
        password: "admin",
      },
    },
    // {
    //   number: "9",
    //   icon: <FaTasks />,
    //   title: "Task Management System",
    //   desc: "Task management is the process of managing a task through its life cycle. It involves planning, testing, tracking, and reporting.Project managers adhering to task-oriented management have a detailed and up-to-date project schedule, and are usually good at directing team members and moving the project forward.",
    // },
    // {
    //   number: "10",
    //   icon: <FaBusAlt />,
    //   title: "Vehicle Stock Management Applicaiton",
    //   desc: "Vehicle Stock Management is a systematic and purposeful approach to efficiently managing an organization's inventory of vehicles. This process ensures that an organization optimally utilizes its fleet of vehicles to gain a competitive edge in the market.",
    // },
    // {
    //   number: "11",
    //   icon: <FaSpellCheck />,
    //   title: "Online Testing Application",
    //   desc: "Online Examination System is a technology-driven way to simplify examination activities like defining exam patterns with question banks, defining exam timer, objective/ subjective question sections, conducting exams using the computer or mobile devices in a paperless manner.",
    // },
  ];
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <>
      <Header />
      <section className="product-WebDev-hero">
        <img
          alt="corner accent"
          className="about-corner-accent"
          src="/static/media/about-corner-accent.69f6c2ba49b10849fff3.png"
        ></img>
        <div className="product-WebDev-hero-container">
          <h1 className="product-products-hero-heading">
            Products for all your Business Needs
          </h1>

          <p className="product-WebDev-hero-description">
            Business made easy and productive with our adaptable products, Now
            enjoy your business.
          </p>

          <div className="WebDev-hero-buttons">
            <button className="product-WebDev-primary-btn">
              Get Your FREE Consultation
            </button>
            <button className="product-WebDev-secondary-btn">
              Talk to an Expert
            </button>
          </div>
          <p className="product-WebDev-hero-description-bottom">
            At Infogenx, our products are designed to empower businesses across
            industries with intelligent, scalable, and ready-to-deploy digital
            solutions.
          </p>
        </div>
      </section>

      {/*section -*/}

      <section className="product-approach-section">
        <div className="approach-container">
          {/* Header */}
          <div className="approach-header">
            <span className="app-section-label">Readymade Softwares</span>
            <h2>Solutions for Startup to Enterprise</h2>
          </div>

          {/* Cards */}
          <div className="approach-grid">
            {steps.map((step, index) => (
              <div className="product-approach-card" key={index}>
                <div className="approach-card-content">
                  <span className="product-step-number">{step.number}</span>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  <span className="product-icon">{step.icon}</span>
                </div>
                <div className="approach-card-button">
                  <button
                    onClick={() => window.open(step.btn1, "_blank")}
                    className="try-btn"
                  >
                    Try for free
                  </button>
                  {/* <button
                    onClick={() => window.open(step.btn2, "_blank")}
                    className="demo-btn"
                  >
                    Show Demo
                  </button> */}
                  <button
                    className="demo-btn"
                    onClick={() => setActiveDemo(step)}
                  >
                    Show Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corner Accent */}
        {/* <div className="approach-accent" /> */}
        <img
          src={AppcornerAssent}
          alt="corner accent"
          className="app-corner-accent"
        />
      </section>
      <CtaBanner />
      <Footer />
      {activeDemo && (
        <DemoPopup data={activeDemo} onClose={() => setActiveDemo(null)} />
      )}
    </>
  );
};

export default Products;
