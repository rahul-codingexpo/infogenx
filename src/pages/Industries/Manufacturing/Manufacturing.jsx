import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Industries/Manufacturing/ManufacturingHero/ManufacturingHero";
import AppDevExpertise from "../../../components/Industries/Manufacturing/ManufacturingExpertise/ManufacturingExpertise";
import AppDevApproach from "../../../components/Industries/Manufacturing/ManufacturingApproach/ManufacturingApproach";
import AppDevBusinessImpact from "../../../components/Industries/Manufacturing/ManufacturingBusinessImpact/ManufacturingBusinessImpact";
import AppDevImpactCTA from "../../../components/Industries/Manufacturing/ManufacturingImpactCTA/ManufacturingImpactCTA";
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
