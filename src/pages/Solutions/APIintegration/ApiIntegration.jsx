import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Solutions/ApiIntegration/ApiIntegrationHero/ApiIntegrationHero";
import AppDevExpertise from "../../../components/Solutions/ApiIntegration/ApiIntegrationExpertise/ApiIntegrationExpertise";
import AppDevApproach from "../../../components/Solutions/ApiIntegration/ApiIntegrationApproach/ApiIntegrationApproach";
import AppDevBusinessImpact from "../../../components/Solutions/ApiIntegration/ApiIntegrationBusinessImpact/ApiIntegrationBusinessImpact";
import AppDevImpactCTA from "../../../components/Solutions/ApiIntegration/ApiIntegrationImpactCTA/ApiIntegrationImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApiIntegration = () => {
  return (
    <>
      <Helmet>
        <title>System Integration & API Enablement Services | Infogenx</title>
        <meta
          name="description"
          content="Infogenx delivers seamless system integration and API-first solutions that connect platforms, automate data flow, and improve operational efficiency. "
        />
        <meta
          name="keywords"
          content="system integration services, API integration Australia, enterprise integration"
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

export default ApiIntegration;
