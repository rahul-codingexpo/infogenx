import { useState } from "react";
import "./RequestQuote.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const RequestQuote = () => {
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
          content="Get in touch with Infogenx to discuss your digital transformation goals, request a demo, or book an Australian-led strategy consultation."
        />
        <meta
          name="keywords"
          content="contact AI & Automation Australia company, IT strategy call Australia"
        />
      </Helmet>
      <Header />
      <div className="request-quote-page">
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
                Your message has been successfully submitted. We'll get back to
                you soon!
              </p>
              <button onClick={() => setShowThankYou(false)}>
                Submit Another Message
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RequestQuote;
