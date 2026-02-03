import "../GetinTouch/GetinTouch.css";
import CustomerSupport from "../../../assets/videos/customer-support.mp4";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.png";
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const GetinTouch = () => {
  return (
    <>
      <Helmet>
        <title>
          Get in Touch for AI Automation Solutions -Infogenx IT Services |
          Australia |India
        </title>
        <meta
          name="description"
          content="Get in touch with Infogenx to discuss how  build customised AI-enabled applications, intelligent automation, and analytics solutions for Australian businesses across Microsoft, Zoho, Shopify, and Odoo platforms."
        />
        <meta
          name="keywords"
          content="Get in touch AI Automation,Platform specialists,Business enablement,Decision intelligence
AI & Automation Consulting, Digital Transformation Partner,Business Systems & AI Solutions, AI-Enabled Business Solutions,Automation & Analytics Consultin Platform-Focused Digital Solutions,AI consulting services,intelligent automation solutions, analytics consulting
what is intelligent automation, AI in business"
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
            <div className="contact-locations">
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

                {/* <div className="location-block">
                  <h4>Papua New Guinea</h4>
                  <p>
                    Po Box 1843, Konedobu,
                    <br />
                    Port Moresby,
                    <br />
                    NCD-121 Papua New Guinea
                  </p>
                  <span>+6757 5917607</span>
                </div> */}

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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GetinTouch;
