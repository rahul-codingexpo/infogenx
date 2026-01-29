import { useState } from "react";
import "./GetinTouch.css";
import CustomerSupport from "../../../assets/videos/customer-support.mp4";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.png";
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const GetinTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    location: "",
    desiredService: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Odoo CRM
      const odooResponse = await fetch(
        "https://igxerp.infogenx.com/form/submit",
        {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            phone: formData.contactNumber,
            email: formData.email,
            "entry.720479336": formData.location,
            "entry.505898934": formData.desiredService,
            message: formData.message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await odooResponse.json();
      console.log("Odoo submission successful:", data);

      // Submit to Google Forms
      const googleFormUrl =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfyVw9o6-iQW88bgzL96jD6KHesu3V-J-QkOJQAKRYwVCDj0A/formResponse";
      const params = new URLSearchParams();
      params.append("entry.1583188992", formData.name);
      params.append("entry.59106495", formData.contactNumber);
      params.append("entry.1507836294", formData.email);
      params.append("entry.1678940442", formData.location);
      params.append("entry.645797029", formData.desiredService);
      params.append("entry.2000705636", formData.message);

      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });

      console.log("Google Form submission successful");

      // Show thank you message
      setShowThankYou(true);

      // Reset form
      setFormData({
        name: "",
        contactNumber: "",
        email: "",
        location: "",
        desiredService: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Infogenx | Book an AI & Automation Call</title>
        <meta
          name="description"
          content="InfogenX: Your Australian digital transformation partner for AI-powered Solutions development, analytics, automation & cloud solutions. Custom software to drive growth & efficiency – free consultation available."
        />
        <meta
          name="keywords"
          content="intelligent automation consulting Australia,business process automation with AI,AI-driven workflow automation,Strategic Exclusion"
        />
      </Helmet>
      <Header />
      <section className="appdev-hero">
        <img
          alt="corner accent"
          className="about-corner-accent"
          src={AboutCornerAccent}
        />
        <div className="appdev-container">
          <div className="appdev-left">
            <h1>
              Ready to Digitize Your Business Affordably? Contact Us Today!
            </h1>
            <p>
              Still hanging back with uncertainties? However, no worries at all!
              Therefore, try our Free consulting and advice to see the results
              for yourself
            </p>
            <div className="appdev-buttons">
              <button className="primary-btn">
                Get Your FREE Consultation
              </button>
              <button className="secondary-btn">
                Talk to an Expert <span>↗</span>
              </button>
            </div>
          </div>

          <div className="appdev-right">
            <div className="appdev-video-wrapper">
              <div className="bg"></div>
              <video
                src={CustomerSupport}
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

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            {/* <div className="contact-locations">
              <h2 className="contact-title">Our Worldwide Locations</h2>
              <div className="location-details">
                <div className="location-block">
                  <h4>Australia</h4>
                  <p>
                    Unit 3 / 22 Hertford Street Upper
                    <br />
                    Mount Gravatt, Brisbane,
                    <br />
                    Queensland - 4122 Australia
                  </p>
                  <span>+61 403339424</span>
                </div>

                <div className="location-block">
                  <h4>India - Coimbatore</h4>
                  <p>
                    1936-1940, Trichy Road, Ramanatha
                    <br />
                    Puram,
                    <br />
                    Coimbatore - 641045
                  </p>
                  <span>+91 9787806366</span>
                </div>

                <div className="location-block">
                  <h4>Papua New Guinea</h4>
                  <p>
                    Po Box 1843, Konedobu,
                    <br />
                    Port Moresby,
                    <br />
                    NCD-121 Papua New Guinea
                  </p>
                  <span>+6757 5917607</span>
                </div>

                <div className="location-block">
                  <h4>India - Chennai</h4>
                  <p>
                    10th Floor, CITIUS A Block, Phase 1,
                    <br />
                    Olympia Tech Park - Plot No.1,
                    <br />
                    SIDCO Industrial Estate, Guindy,
                    <br />
                    Chennai - 600032
                  </p>
                  <span>+91 9787806366</span>
                </div>
              </div>
            </div> */}

            <div className="contact-form-container">
              <h2 className="contact-title">Get In Touch</h2>

              {!showThankYou ? (
                <div className="contact-form-wrapper">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="tel"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-row">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <input
                      type="text"
                      name="desiredService"
                      placeholder="Desired Service"
                      className="full-width"
                      value={formData.desiredService}
                      onChange={handleChange}
                      required
                    />

                    <textarea
                      rows="4"
                      name="message"
                      placeholder="Message"
                      className="full-width"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="thank-you-message">
                  <h3>Thank You!</h3>
                  <p>
                    Your message has been successfully submitted. We'll get back
                    to you soon!
                  </p>
                  <button onClick={() => setShowThankYou(false)}>
                    Submit Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GetinTouch;
