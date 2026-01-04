import "./ServiceHighlight.css";
import serviceVideo from "../../assets/videos/Digital_Data_Processing.mp4"; // your video

const ServiceHighlight = () => {
  return (
    <section className="service-section">
      <div className="service-card">
        {/* Left content */}
        <div className="service-content">
          <h2 className="service-title">
            Custom <br /> Application Delivery
          </h2>

          <p className="service-description">
            End-to-end design and development of business applications tailored
            to specific workflows, integrations, and operational needs.
          </p>

          <button className="service-btn">
            Talk to our Experts
            <span className="arrow">→</span>
          </button>
        </div>

        {/* Right video box */}
        <div className="service-media-container">
          <div>
            <span className="service-index">01</span>
          </div>
          <div className="service-media">
            <video
              src={serviceVideo}
              autoPlay
              muted
              loop
              playsInline
              className="service-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
