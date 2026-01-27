import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/ITPartner/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/ITPartner/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/ITPartner/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/ITPartner/AppDevBusinessImpact/AppDevBusinessImpact";
import AppDevImpactCTA from "../../../components/ITPartner/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>IT Support & Continuous Optimization Services | Infogenx</title>
        <meta
          name="description"
          content="Infogenx helps businesses resolve issues faster and continuously optimise systems through structured support and performance reporting."
        />
        <meta
          name="keywords"
          content="IT support Australia, system optimisation, performance monitoring"
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
