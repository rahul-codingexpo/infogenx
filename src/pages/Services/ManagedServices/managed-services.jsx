import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/ManagedServices/ManagedServicesHero/ManagedServicesHero";
import AppDevExpertise from "../../../components/Services/ManagedServices/ManagedServicesExpertise/ManagedServicesExpertise";
import AppDevApproach from "../../../components/Services/ManagedServices/ManagedServicesApproach/ManagedServicesApproach";
import AppDevBusinessImpact from "../../../components/Services/ManagedServices/ManagedServicesBusinessImpact/ManagedServicesBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/ManagedServices/ManagedServicesImpactCTA/ManagedServicesImpactCTA";
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
