import React from "react";
import "./Products.css";
import Header from "../../components/header/Header";
import AppcornerAssent from "../../assets/images/appcorner.png";
import { AiOutlineStock } from "react-icons/ai";
import { RiHandHeartFill } from "react-icons/ri";
import { FaHospital } from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaSpellCheck } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import CtaBanner from "../../components/CtaBanner/CtaBanner";
const Products = () => {
  const steps = [
    {
      number: "1",
      icon: <AiOutlineStock />,
      title: "Stock Management System",
      desc: "We have a powerful Stock and Inventory management system that is easy to use. We Centralize the inventory management activities from one single system that helps you run your business efficiently.",
    },
    {
      number: "2",
      icon: <RiHandHeartFill />,
      title: "Clinic Management System",
      desc: "Our clinic management software assists healthcare establishments by offering quality billing management. It simplifies and automates the billing process, removing the need for manual intervention.",
    },
    {
      number: "3",
      icon: <FaHospital />,
      title: "Hospital Management System",
      desc: "Our hospital management system is an integrated healthcare solution which includes Pharmacy, OP Management,Laboratory Information System, Insurance And Corporate Billing and much more.",
    },
    {
      number: "4",
      icon: <FaVanShuttle />,
      title: "Transport Management System",
      desc: "Our transportation management System (TMS) designed for companies of all sizes. Features include billing and invoicing, load management, order management, shipment management, reporting, scheduling and more.",
    },
    {
      number: "5",
      icon: <FaLaptopCode />,
      title: "ERP Software",
      desc: "Our ERP software integrates various functions into one complete system to streamline processes and information across the entire application which helps you manage day-to-day business activities.",
    },
    {
      number: "6",
      icon: <FaLaptopCode />,
      title: "ODOO ERP",
      desc: "Our ERP software integrates various functions into one complete system to streamline processes and information across the entire application which helps you manage day-to-day business activities.",
    },
    {
      number: "7",
      title: "Retail POS",
      icon: <FaChartBar />,
      desc: "Our hospital management system is an integrated healthcare solution which includes Pharmacy, OP Management,Laboratory Information System, Insurance And Corporate Billing and much more.",
    },
    {
      number: "8",
      icon: <FaUserGear />,
      title: "Customer Relationship Management",
      desc: "Customer relationship management (CRM) is the combination of practices, strategies and technologies that companies use to manage and analyze customer interactions and data throughout the customer lifecycle, with the goal of improving customer service relationships and assisting in customer retention and driving sales growthin.",
    },
    {
      number: "9",
      icon: <FaTasks />,
      title: "Task Management System",
      desc: "Task management is the process of managing a task through its life cycle. It involves planning, testing, tracking, and reporting.Project managers adhering to task-oriented management have a detailed and up-to-date project schedule, and are usually good at directing team members and moving the project forward.",
    },
    {
      number: "10",
      icon: <FaBusAlt />,
      title: "Vehicle Stock Management Applicaiton",
      desc: "Vehicle Stock Management is a systematic and purposeful approach to efficiently managing an organization's inventory of vehicles. This process ensures that an organization optimally utilizes its fleet of vehicles to gain a competitive edge in the market.",
    },
    {
      number: "11",
      icon: <FaSpellCheck />,
      title: "Online Testing Application",
      desc: "Online Examination System is a technology-driven way to simplify examination activities like defining exam patterns with question banks, defining exam timer, objective/ subjective question sections, conducting exams using the computer or mobile devices in a paperless manner.",
    },
  ];
  return (
    <>
      <Header />
      <section className="WebDev-hero">
        <img
          alt="corner accent"
          class="about-corner-accent"
          src="/static/media/about-corner-accent.69f6c2ba49b10849fff3.png"
        ></img>
        <div className="webDev-hero-container">
          <h1 className="products-hero-heading">
            Products for all your Business Needs
          </h1>

          <p className="WebDev-hero-description">
            Business made easy and productive with our adaptable products, Now
            enjoy your business.
          </p>

          <div className="WebDev-hero-buttons">
            <button className="WebDev-primary-btn">
              Get Your FREE Consultation
            </button>
            <button className="WebDev-secondary-btn">Talk to an Expert</button>
          </div>
          <p className="WebDev-hero-description-bottom">
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
                <span className="product-step-number">{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                <span className="product-icon">{step.icon}</span>
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
    </>
  );
};

export default Products;
