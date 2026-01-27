import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/AppDevelopment/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/AppDevelopment/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/AppDevelopment/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/AppDevelopment/AppDevBusinessImpact/AppDevBusinessImpact";
import AppDevImpactCTA from "../../../components/AppDevelopment/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>Technology Implementation & System Integration | Infogenx</title>
        <meta
          name="description"
          content="Infogenx provides end-to-end technology implementation and integration services to ensure reliable deployment and seamless platform connectivity."
        />
        <meta
          name="keywords"
          content="system implementation services, platform integration Australia"
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
