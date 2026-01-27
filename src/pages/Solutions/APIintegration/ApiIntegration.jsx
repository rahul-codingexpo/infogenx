import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Analytics/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/Analytics/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/Analytics/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/Analytics/AppDevBusinessImpact/AppDevBusinessImpact";
// import AppDevImpactCTA from "../../../components/Analytics/AppDevImpactCTA/AppDevImpactCTA";
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
      {/* <AppDevImpactCTA /> */}
      <Footer />
    </>
  );
};

export default ApiIntegration;
