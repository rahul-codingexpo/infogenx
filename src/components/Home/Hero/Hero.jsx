import "./Hero.css";
import aiIcon from "../../../assets/images/aiIcon.png";
import automationIcon from "../../../assets/images/automationIcon.png";
import analyticsIcon from "../../../assets/images/analyticalIcon.png";
import AiSetting from "../../../assets/images/ICONinfogenx1.png";
import heroVideo from "../../../assets/videos/herovideobg.mp4";
import MicrosoftImg from "../../../assets/images/microsoft (2).png";
import ZohoImg from "../../../assets/images/zoho (2).png";
import OdooImg from "../../../assets/images/odoo (2).png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
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
          {/* <span>Innovate</span>, <span>Automate</span>, and <span>Scale</span> */}
          {/* <span>Apps</span>, <span>Automation</span>, <span>Analytics</span>,
          <span>And AI</span> */}
          <span>Build Smarter. Automate Faster. Decide Better.</span>
        </h1>

        <h2 className="hero-subheading">
          AI-enabled applications, automation, and analytics for{" "}
          <span>Microsoft, Zoho, and Odoo—engineered</span> for growth,
          governance, and impact.
        </h2>

        {/* <p className="hero-description">
          From strategy to scalable delivery. Built for growth, governance, and
          impact.
        </p> */}
        <div
          style={{ textAlign: "center", fontWeight: "500", color: "#403f3f" }}
        >
          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Start Your Transformation
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Talk to an Expert
            </button>
          </div>
          <p className="hero-proof">
            Join 50+ Australian businesses scaling with AI.
          </p>
        </div>
        <div className="hero-brands">
          <img src={MicrosoftImg} alt="Microsoft" />
          <img src={ZohoImg} alt="Zoho" />
          <img
            src={OdooImg}
            alt="Odoo"
            // style={{ height: "100px", margin: "0" }}
          />
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
        {/*another Left-right */}
        <img
          src={AiSetting}
          alt="Automation"
          className="float-icon4 float-horizontal icon-4"
        />
      </div>
    </section>
  );
};

export default Hero;
