// import { useState } from "react";
// import "./Contact.css";
// import Header from "../../components/header/Header";
// import Footer from "../../components/Footer/Footer";

// const AuditContact = () => {
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     company: "",
//     bottleneck: "",
//     platform: "Select",
//     goal: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();

//     formDataToSend.append(
//       "xnQsjsdp",
//       "7312cd03445ee78b709bfbc6cb14150090b922896223c38c5f4f14d874cfedd9",
//     );
//     formDataToSend.append(
//       "xmIwtLD",
//       "0add789db63115e56bb6a38e9d40fa603e73a23a36c2c83eccd1cd60f6d3cdb715d4f89b2855898858ccff31d0acee55",
//     );
//     formDataToSend.append("actionType", "TGVhZHM=");
//     formDataToSend.append(
//       "returnURL",
//       "https://infogenx.vercel.app/contact-us",
//     );

//     formDataToSend.append("Last Name", formData.fullName || "Audit Lead");
//     formDataToSend.append("Company", formData.company || "Not Provided");

//     formDataToSend.append(
//       "Description",
//       `
//       Platform: ${formData.platform}
//       Bottleneck: ${formData.bottleneck}
//       Goal: ${formData.goal}`,
//     );

//     const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact);

//     if (isEmail) {
//       formDataToSend.append("Email", formData.contact);
//     } else {
//       formDataToSend.append("Phone", formData.contact);
//     }

//     formDataToSend.append("Lead Source", "Website Audit");
//     formDataToSend.append("Lead Status", "Not Contacted");

//     await fetch("https://crm.zoho.com/crm/WebToLeadForm", {
//       method: "POST",
//       body: formDataToSend,
//       mode: "no-cors", // IMPORTANT
//     });

//     // ✅ Show Thank You Popup
//     setShowThankYou(true);

//     // ✅ Redirect after 6 sec
//     setTimeout(() => {
//       window.location.href = "/contact-us";
//     }, 6000);
//   };

//   return (
//     <>
//       <Header />
//       <section className="audit-section">
//         <div className="audit-container">
//           {/* LEFT CONTENT */}
//           <div className="audit-left">
//             <h1>
//               Scale Smarter with an AI-Driven <br /> Business Audit
//             </h1>

//             <h3>Transform your ecosystem with AI-enabled intelligence.</h3>

//             <p>
//               Whether you’re scaling on Zoho, Shopify, Odoo, or Microsoft, we
//               bridge the gap between <strong>standard</strong> and{" "}
//               <strong>superior</strong>.
//             </p>

//             <h4>What’s included in your Free Audit?</h4>
//             <ul>
//               <li>Leak Detection – identify time & money loss</li>
//               <li>AI Integration Mapping – 10× output opportunities</li>
//               <li>Platform Synergy – tools that work together</li>
//             </ul>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="audit-right">
//             {/* FORM CARD */}
//             <div className="audit-form-card">
//               {/* ✅ FORM WRAPPER ADDED */}
//               <form onSubmit={handleSubmit}>
//                 <p
//                   className="form-line"
//                   style={{ display: "flex", alignItems: "center" }}
//                 >
//                   Hi Infogenx! My name is &nbsp;
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                     style={{
//                       flex: 1,
//                       minWidth: "100px",
//                       paddingBottom: 0,
//                     }}
//                   />
//                 </p>

//                 <p
//                   className="form-line"
//                   style={{ display: "flex", alignItems: "center" }}
//                 >
//                   Company Name &nbsp;
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     required
//                     style={{
//                       flex: 1,
//                       minWidth: "100px",
//                       paddingBottom: 0,
//                     }}
//                   />
//                 </p>

//                 <p className="form-line" style={{ paddingTop: "10px" }}>
//                   Currently, our biggest bottleneck is
//                   <input
//                     type="text"
//                     name="bottleneck"
//                     value={formData.bottleneck}
//                     onChange={handleChange}
//                   />
//                 </p>

//                 <p className="form-line">
//                   We are currently using
//                   <select
//                     name="platform"
//                     value={formData.platform}
//                     onChange={handleChange}
//                   >
//                     <option disabled>Select</option>
//                     <option>Zoho</option>
//                     <option>Shopify</option>
//                     <option>Odoo</option>
//                     <option>Microsoft</option>
//                     <option>Other</option>
//                   </select>
//                 </p>

//                 <p className="form-line">
//                   I want this audit because I want to
//                   <input
//                     type="text"
//                     name="goal"
//                     value={formData.goal}
//                     onChange={handleChange}
//                   />
//                 </p>

//                 <p className="form-line">
//                   Email / Call me on
//                   <input
//                     type="text"
//                     name="contact"
//                     value={formData.contact}
//                     onChange={handleChange}
//                     required
//                   />
//                 </p>

//                 <button type="submit" className="audit-btn">
//                   CLAIM MY FREE AUDIT
//                 </button>
//               </form>
//               {showThankYou && (
//                 <div className="thankyou-overlay">
//                   <div className="thankyou-popup">
//                     <h2>🎉 Thank You!</h2>
//                     <p>Your request has been submitted...</p>
//                     <p>Our team will contact you shortly.</p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* SIDE CARDS */}
//             <div className="audit-side-cards">
//               <div className="fast-facts">
//                 <h5>Fast Facts</h5>
//                 <ul>
//                   <li>Expertise in 4 Major Ecosystems</li>
//                   <li>Zero-obligation, 100% actionable insights</li>
//                   <li>Tailored AI solutions for your industry</li>
//                 </ul>
//               </div>

//               <div className="did-you-know">
//                 <h5>Did you know?</h5>
//                 <p>
//                   Most businesses we audit discover
//                   <strong> 15+ hours of manual work per week </strong>
//                   that can be automated immediately.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default AuditContact;

//=========================updated code ======================

// StrategicContact.jsx
import React from "react";
import "./Contact.css";

const StrategicContact = () => {
  return (
    <section className="strategy-section">
      <div className="strategy-container">
        {/* LEFT CONTENT */}
        <div className="strategy-left">
          <span className="eyebrow">GLOBAL AI STRATEGY ALLIANCE</span>

          <h1>
            Orchestrate Growth:
            <br />
            <span>Strategic AI Integration</span>
            <br />
            for Modern Ecosystems.
          </h1>

          <p className="subtitle">
            Partner with Infogenx to architect high-yield, AI-integrated
            roadmaps across Microsoft, Zoho, and Global SaaS ecosystems.
            Tailored for executive leaders in Australia and India seeking
            capital efficiency, operational clarity, and defensible market
            dominance.
          </p>

          <div className="lux-divider" />

          <div className="fast-facts">
            <h3>Fast Facts</h3>
            <ul>
              <li>
                Cross-Border Capability: Australia & India delivery teams
                ensuring 24/7 continuity.
              </li>
              <li>
                High-Yield Architecture: $100k–$500k+ enterprise transformations
                prioritizing ROI.
              </li>
              <li>
                Ecosystem Neutrality: Microsoft, Zoho, Shopify & Odoo
                integration expertise.
              </li>
            </ul>
          </div>

          <div className="did-you-know">
            <h3>Strategic Insight</h3>
            <p>
              Enterprises that fail to embed AI into core operational
              architecture by 2026 may face up to 30% higher cost-of-capital
              versus AI-native competitors. We don’t automate tasks — we
              engineer valuation leverage.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="strategy-form-card">
          <h2>Request a Confidential Strategy Consultation</h2>

          {/* STEP 1 */}
          <div className="form-step">
            {/* <h5>Step 1 — Identity & Authority</h5> */}
            <div className="grid-2">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Business Email" />
              <input type="text" placeholder="Company Name" />
              <select>
                <option>Designation / Role</option>
                <option>CEO</option>
                <option>COO</option>
                <option>CIO</option>
                <option>Director</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="form-step">
            {/* <h5>Step 2 — Ecosystem & Transformation Goals</h5> */}

            <select>
              <option>Organisation Size</option>
              <option>10–50</option>
              <option>50–200</option>
              <option>200–1000</option>
              <option>1000+</option>
            </select>

            <select style={{ marginTop: "20px" }}>
              <option>Primary Business Objective</option>
              <option>Operational Efficiency</option>
              <option>Revenue Growth</option>
              <option>Cost Optimisation</option>
              <option>AI Adoption</option>
              <option>System Consolidation</option>
            </select>

            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> Microsoft
              </label>
              <label>
                <input type="checkbox" /> Zoho
              </label>
              <label>
                <input type="checkbox" /> Shopify
              </label>
              <label>
                <input type="checkbox" /> Odoo
              </label>
              <label>
                <input type="checkbox" /> Salesforce
              </label>
              <label>
                <input type="checkbox" /> Custom-built
              </label>
              <label>
                <input type="checkbox" /> Manual / Excel
              </label>
            </div>

            <select style={{ marginTop: "20px" }}>
              <option>Estimated Transformation Budget (AUD)</option>
              <option>Under $100k</option>
              <option>$100k – $250k</option>
              <option>$250k – $500k</option>
              <option>$500k+</option>
            </select>
          </div>

          {/* STEP 3 */}
          <div className="form-step">
            {/* <h5>Step 3 — Strategic Context</h5> */}
            <textarea
              placeholder="Describe your current transformation challenge"
              rows="4"
            ></textarea>
            <input
              type="text"
              placeholder="Phone Number (International Format)"
              style={{ marginTop: "20px" }}
            />
          </div>

          <button className="strategy-btn">Request Strategy Briefing</button>

          <p className="confidential-note">
            All consultations are conducted under strict NDA protocols to
            safeguard proprietary operational data and competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicContact;
