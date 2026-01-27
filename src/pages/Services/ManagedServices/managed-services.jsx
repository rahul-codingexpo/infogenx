import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/CloudAI/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/CloudAI/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/CloudAI/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/CloudAI/AppDevBusinessImpact/AppDevBusinessImpact";
import AppDevImpactCTA from "../../../components/CloudAI/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>
          Managed IT Services & Ongoing Support | Infogenx Australia
        </title>
        <meta
          name="description"
          content="Ensure performance, security, and reliability with Infogenx’s managed services, proactive monitoring, and SLA-driven IT support."
        />
        <meta
          name="keywords"
          content="managed IT services Australia, IT support and maintenance"
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
