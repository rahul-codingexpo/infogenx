import "./MobileAppHero.css";

const WebDevHero = () => {
  return (
    <section className="WebDev-hero">
      <img
        alt="corner accent"
        class="about-corner-accent"
        src="/static/media/about-corner-accent.69f6c2ba49b10849fff3.png"
      ></img>
      <div className="WebDev-hero-container">
        <h1 className="WebDev-hero-heading">
          Mobile App Development for Digital Impact
        </h1>

        <p className="WebDev-hero-description">
          Build fast, scalable, secure, and future-ready web platforms using
          modern web technologies and best engineering practices.
        </p>

        <div className="WebDev-hero-buttons">
          <button className="WebDev-primary-btn">
            Get Your FREE Consultation
          </button>
          <button className="WebDev-secondary-btn">
            Talk to a Web Development Expert
          </button>
        </div>
        <p className="WebDev-hero-description-bottom">
          Build fast, scalable, secure, and future-ready web platforms using
          modern web technologies and best engineering practices.
        </p>
      </div>
    </section>
  );
};

export default WebDevHero;
