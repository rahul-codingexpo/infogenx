import "./TermsConditions.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Infogenx</title>
        <meta
          name="description"
          content="Review the terms and conditions governing the use of Infogenx website and services, including user responsibilities and service limitations."
        />
        <meta
          name="keywords"
          content="Infogenx terms and conditions, website terms, service agreement, legal terms"
        />
      </Helmet>

      <Header />
      <section className="terms-section">
        <div className="terms-container">
          <h1 className="terms-title">Terms & Conditions</h1>

          <div className="terms-block">
            <h2>Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the Infogenx website
              and services. By accessing or using our website, you agree to be
              bound by these Terms. If you do not agree with any part of the
              Terms, you must not use our website.
            </p>
          </div>

          <div className="terms-block">
            <h2>Company Information</h2>
            <p>
              Infogenx is an IT and IT-enabled services company providing
              software solutions, application development, digital marketing,
              data services, and analytics solutions.
            </p>
            <p>
              Website:{" "}
              <a href="https://infogenx.com" rel="noreferrer">
                https://infogenx.com
              </a>
            </p>
          </div>

          <div className="terms-block">
            <h2>Use of Website</h2>
            <p>
              You agree to use this website only for lawful purposes and in a
              way that does not infringe the rights of others or restrict their
              use and enjoyment of the website.
            </p>
            <p>
              Unauthorized use of this website may give rise to a claim for
              damages and/or be a criminal offense.
            </p>
          </div>

          <div className="terms-block">
            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, software, and design, is the property of Infogenx and is
              protected by applicable copyright and intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or republish any
              content without prior written consent from Infogenx.
            </p>
          </div>

          <div className="terms-block">
            <h2>Services & Pricing</h2>
            <p>
              All services provided by Infogenx are subject to availability and
              may be modified or discontinued at any time without prior notice.
            </p>
            <p>
              Pricing, quotations, and service descriptions provided on the
              website are indicative and may vary based on project requirements.
            </p>
          </div>

          <div className="terms-block">
            <h2>User Accounts</h2>
            <p>
              If you create an account on our website, you are responsible for
              maintaining the confidentiality of your account credentials and
              for all activities that occur under your account.
            </p>
            <p>
              Infogenx reserves the right to suspend or terminate accounts found
              to be in violation of these Terms.
            </p>
          </div>

          <div className="terms-block">
            <h2>Limitation of Liability</h2>
            <p>
              Infogenx shall not be liable for any direct, indirect, incidental,
              consequential, or special damages arising out of or in connection
              with the use of our website or services.
            </p>
            <p>
              We do not guarantee that the website will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
          </div>

          <div className="terms-block">
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links
              are provided for your convenience and do not signify endorsement.
            </p>
            <p>
              Infogenx has no control over the content or practices of
              third-party websites and accepts no responsibility for them.
            </p>
          </div>

          <div className="terms-block">
            <h2>Termination</h2>
            <p>
              Infogenx may terminate or suspend access to our website and
              services immediately, without prior notice, if you breach these
              Terms and Conditions.
            </p>
          </div>

          <div className="terms-block">
            <h2>Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed and interpreted in
              accordance with the laws applicable in India, without regard to
              its conflict of law provisions.
            </p>
          </div>

          <div className="terms-block">
            <h2>Changes to Terms</h2>
            <p>
              Infogenx reserves the right to update or modify these Terms and
              Conditions at any time. Changes will be effective immediately upon
              posting on this page.
            </p>
          </div>

          <div className="terms-block">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <a href="mailto:reachus@infogenx.com">reachus@infogenx.com</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsConditions;
