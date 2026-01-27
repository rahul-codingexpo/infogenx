import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/ECommerce/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/ECommerce/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/ECommerce/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/ECommerce/AppDevBusinessImpact/AppDevBusinessImpact";
import AppDevImpactCTA from "../../../components/ECommerce/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>AI-Enabled E-Commerce Solutions |InfogenX Australia</title>
        <meta
          name="description"
          content="What is best AI for e-commerce Australia, Infogenx's ecommerce solutions is best to scale e-commerce with InfogenX's platform-focused AI & automation platform .It provides consulting on AI for e-commerce  in Australia: personalisation, analytics & conversion optimisation."
        />
        <meta
          name="keywords"
          content="AI consulting e-commerce, intelligent automation online retail, digital transformation e-commerce Australia, AI-enabled personalisation solutions, conversion optimisation automation Australia"
        />
      </Helmet>
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <Footer />
    </>
  );
};

export default ApplicationDev;
