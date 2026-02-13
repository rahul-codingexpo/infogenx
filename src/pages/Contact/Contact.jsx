import { useState } from "react";
import "./Contact.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";

const AuditContact = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    bottleneck: "",
    platform: "",
    goal: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const form = document.createElement("form");
  //     form.method = "POST";
  //     form.action = "https://crm.zoho.com/crm/WebToLeadForm";

  //     const addField = (name, value) => {
  //       const input = document.createElement("input");
  //       input.type = "hidden";
  //       input.name = name;
  //       input.value = value;
  //       form.appendChild(input);
  //     };

  //     // 🔐 Zoho Hidden Required Fields
  //     addField(
  //       "xnQsjsdp",
  //       "7312cd03445ee78b709bfbc6cb14150090b922896223c38c5f4f14d874cfedd9",
  //     );
  //     addField(
  //       "xmIwtLD",
  //       "0add789db63115e56bb6a38e9d40fa603e73a23a36c2c83eccd1cd60f6d3cdb715d4f89b2855898858ccff31d0acee55",
  //     );
  //     addField("actionType", "TGVhZHM=");
  //     addField("returnURL", "https://infogenx.vercel.app/contact-us");

  //     // 📌 Mandatory Fields
  //     addField("Last Name", formData.fullName || "Audit Lead");
  //     addField("Company", formData.company || "Not Provided");

  //     // 📌 Optional Mapping
  //     addField(
  //       "Description",
  //       `
  // Bottleneck: ${formData.bottleneck}
  // Platform: ${formData.platform}
  // Goal: ${formData.goal}
  // `,
  //     );

  //     if (formData.contact.includes("@")) {
  //       addField("Email", formData.contact);
  //     } else {
  //       addField("Phone", formData.contact);
  //     }

  //     addField("Lead Source", "Website Audit");
  //     addField("Lead Status", "Not Contacted");

  //     document.body.appendChild(form);
  //     form.submit();
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append(
      "xnQsjsdp",
      "7312cd03445ee78b709bfbc6cb14150090b922896223c38c5f4f14d874cfedd9",
    );
    formDataToSend.append(
      "xmIwtLD",
      "0add789db63115e56bb6a38e9d40fa603e73a23a36c2c83eccd1cd60f6d3cdb715d4f89b2855898858ccff31d0acee55",
    );
    formDataToSend.append("actionType", "TGVhZHM=");
    formDataToSend.append(
      "returnURL",
      "https://infogenx.vercel.app/contact-us",
    );

    formDataToSend.append("Last Name", formData.fullName || "Audit Lead");
    formDataToSend.append("Company", formData.company || "Not Provided");

    formDataToSend.append(
      "Description",
      `
      Platform: ${formData.platform}
      Bottleneck: ${formData.bottleneck}
      Goal: ${formData.goal}`,
    );

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact);

    if (isEmail) {
      formDataToSend.append("Email", formData.contact);
    } else {
      formDataToSend.append("Phone", formData.contact);
    }

    formDataToSend.append("Lead Source", "Website Audit");
    formDataToSend.append("Lead Status", "Not Contacted");

    await fetch("https://crm.zoho.com/crm/WebToLeadForm", {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors", // IMPORTANT
    });

    // ✅ Show Thank You Popup
    setShowThankYou(true);

    // ✅ Redirect after 6 sec
    setTimeout(() => {
      window.location.href = "/contact-us";
    }, 6000);
  };

  return (
    <>
      <Header />
      <section className="audit-section">
        <div className="audit-container">
          {/* LEFT CONTENT */}
          <div className="audit-left">
            <h1>
              Scale Smarter with an AI-Driven <br /> Business Audit
            </h1>

            <h3>Transform your ecosystem with AI-enabled intelligence.</h3>

            <p>
              Whether you’re scaling on Zoho, Shopify, Odoo, or Microsoft, we
              bridge the gap between <strong>standard</strong> and{" "}
              <strong>superior</strong>.
            </p>

            <h4>What’s included in your Free Audit?</h4>
            <ul>
              <li>Leak Detection – identify time & money loss</li>
              <li>AI Integration Mapping – 10× output opportunities</li>
              <li>Platform Synergy – tools that work together</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="audit-right">
            {/* FORM CARD */}
            <div className="audit-form-card">
              {/* ✅ FORM WRAPPER ADDED */}
              <form onSubmit={handleSubmit}>
                <p
                  className="form-line"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Hi Infogenx! My name is &nbsp;
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    style={{
                      flex: 1,
                      minWidth: "100px",
                      paddingBottom: 0,
                    }}
                  />
                </p>

                <p
                  className="form-line"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Company Name &nbsp;
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    style={{
                      flex: 1,
                      minWidth: "100px",
                      paddingBottom: 0,
                    }}
                  />
                </p>

                <p className="form-line" style={{ paddingTop: "10px" }}>
                  Currently, our biggest bottleneck is
                  <input
                    type="text"
                    name="bottleneck"
                    value={formData.bottleneck}
                    onChange={handleChange}
                  />
                </p>

                <p className="form-line">
                  We are currently using
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                  >
                    <option disabled>Select</option>
                    <option>Zoho</option>
                    <option>Shopify</option>
                    <option>Odoo</option>
                    <option>Microsoft</option>
                    <option>Other</option>
                  </select>
                </p>

                <p className="form-line">
                  I want this audit because I want to
                  <input
                    type="text"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                  />
                </p>

                <p className="form-line">
                  Email / Call me on
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </p>

                <button type="submit" className="audit-btn">
                  CLAIM MY FREE AUDIT
                </button>
              </form>
              {showThankYou && (
                <div className="thankyou-overlay">
                  <div className="thankyou-popup">
                    <h2>🎉 Thank You!</h2>
                    <p>Your request has been submitted...</p>
                    <p>Our team will contact you shortly.</p>
                  </div>
                </div>
              )}
            </div>

            {/* SIDE CARDS */}
            <div className="audit-side-cards">
              <div className="fast-facts">
                <h5>Fast Facts</h5>
                <ul>
                  <li>Expertise in 4 Major Ecosystems</li>
                  <li>Zero-obligation, 100% actionable insights</li>
                  <li>Tailored AI solutions for your industry</li>
                </ul>
              </div>

              <div className="did-you-know">
                <h5>Did you know?</h5>
                <p>
                  Most businesses we audit discover
                  <strong> 15+ hours of manual work per week </strong>
                  that can be automated immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AuditContact;
