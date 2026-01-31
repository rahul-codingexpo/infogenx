import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/ImplementIntegration/ImplementIntegrationHero/ImplementIntegrationHero";
import AppDevExpertise from "../../../components/Services/ImplementIntegration/ImplementIntegrationExpertise/ImplementIntegrationExpertise";
import AppDevApproach from "../../../components/Services/ImplementIntegration/ImplementIntegrationApproach/ImplementIntegrationApproach";
import AppDevBusinessImpact from "../../../components/Services/ImplementIntegration/ImplementIntegrationBusinessImpact/ImplementIntegrationBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/ImplementIntegration/ImplementIntegrationImpactCTA/ImplementIntegrationImpactCTA";
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
