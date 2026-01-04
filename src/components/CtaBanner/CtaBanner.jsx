import "./CtaBanner.css";

const CtaBanner = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <p className="cta-subtitle">
          Ready to Digitize Your Business Affordably?
        </p>

        <h2 className="cta-title">Contact Us Today!</h2>

        <div className="cta-buttons">
          <button className="cta-primary">Get Your FREE Consultation</button>

          <button className="cta-secondary">Talk to an Expert</button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
