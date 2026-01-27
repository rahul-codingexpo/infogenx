import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Transport/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/Transport/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/Transport/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/Transport/AppDevBusinessImpact/AppDevBusinessImpact";
import AppDevImpactCTA from "../../../components/Transport/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation for Logistics |InfogenX Australia</title>
        <meta
          name="description"
          content="Optimise transport & logistics with InfogenX's AI solutions in Australia: route optimisation, fleet analytics & intelligent automation for Brisbane & national operations."
        />
        <meta
          name="keywords"
          content="AI consulting transport logistics, intelligent automation logistics solutions, digital transformation logistics Australia, fleet management AI Australia, route optimisation automation Brisbane"
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
