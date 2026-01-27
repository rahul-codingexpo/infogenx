import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Manufacturing/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/Manufacturing/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/Manufacturing/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/Manufacturing/AppDevBusinessImpact/AppDevBusinessImpact";
import AppDevImpactCTA from "../../../components/Manufacturing/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>AI in Manufacturing Australia|InfogenX Australia</title>
        <meta
          name="description"
          content="what is intelligent automation in manufacturing,  Intelligent automation for Australian manufacturers by InfogenX: predictive maintenance, supply chain AI & analytics consulting for efficiency gains."
        />
        <meta
          name="keywords"
          content="intelligent automation manufacturing, digital transformation manufacturing Australia, AI-enabled production solutions, predictive maintenance automation Australia, supply chain AI consulting"
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
