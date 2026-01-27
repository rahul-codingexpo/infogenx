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
        <title>AI Automation & AI Consulting for Healthcare Australia</title>
        <meta
          name="description"
          content="what is intelligent automation in healthcare Australia, Infogenx delivers intelligent automation & AI consulting for Australian healthcare providers – streamline patient care, compliance & analytics. Brisbane-based digital transformation experts."
        />
        <meta
          name="keywords"
          content="intelligent automation healthcare, digital transformation healthcare Australia, AI-enabled healthcare solutions, automation analytics healthcare, AI in healthcare Australia, patient management automation Australia"
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
