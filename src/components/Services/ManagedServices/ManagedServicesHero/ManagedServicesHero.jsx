import "./ManagedServicesHero.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import appDevVideo from "../../../../assets/videos/managed-services.mp4";
import AboutCornerAccent from "../../../../assets/images/about-corner-accent.png";
const AppDevHero = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // slow speed
    }
  }, []);
  return (
    <section className="appdev-hero">
      <img
        alt="corner accent"
        className="about-corner-accent"
        src={AboutCornerAccent}
      ></img>
      <div className="appdev-container">
        {/* LEFT CONTENT */}

        <div className="appdev-left">
          <h1>Support That Scales</h1>

          <p>
            Proactive managed services and monitoring for Microsoft, Zoho, and
            Odoo platforms keeping Australian businesses running smoothly.
          </p>

          <div className="appdev-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Explore Managed Services{" "}
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Talk to an Expert <span>↗</span>
            </button>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div className="appdev-right">
          <div className="appdev-video-wrapper">
            <div className="bg"></div>
            <video
              src={appDevVideo}
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="appdev-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevHero;
