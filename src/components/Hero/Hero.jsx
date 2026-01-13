import "./Hero.css";

import aiIcon from "../../assets/images/aiIcon.png";
import automationIcon from "../../assets/images/automationIcon.png";
import analyticsIcon from "../../assets/images/analyticalIcon.png";
import NetworkBackground from "../NetworkBackground/NetworkBackground";
import heroVideo from "../../assets/videos/herovideobg.mp4";
const Hero = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* <NetworkBackground /> */}
      <div className="hero-container">
        <h1 className="hero-heading">
          <span>Innovate</span>, <span>Automate</span>, and <span>Scale</span>
        </h1>

        <h2 className="hero-subheading">
          with Low-Code Systems Built for Real Businesses
        </h2>

        <p className="hero-description">
          We design and integrate scalable applications, automation, and
          analytics using Microsoft, Google, AWS, Zoho, and Odoo platforms.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Your FREE Consultation</button>
          <button className="secondary-btn">Talk to an Expert</button>
        </div>
      </div>

      <div className="hero-floating-icons">
        {/* Top-down animation */}
        <img
          src={aiIcon}
          alt="AI"
          className="float-icon1 float-vertical icon-1"
        />

        {/* Left-right animation */}
        <img
          src={automationIcon}
          alt="Automation"
          className="float-icon2 float-vertical icon-2"
        />

        {/* Another top-down */}
        <img
          src={analyticsIcon}
          alt="Analytics"
          className="float-icon3 float-horizontal icon-3"
        />
      </div>
    </section>
  );
};

export default Hero;
