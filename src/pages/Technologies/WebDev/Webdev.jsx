import Header from "../../../components/header/Header";
import WebDevHero from "../../../components/WebDev/WebDevHero/WebDevHero";
import WebDevTech from "../../../components/WebDev/WebDevTech/WebDevTech";
import WebDevExpertise from "../../../components/WebDev/WebDevExperties/WebDevExpertise";
import WebDevOutcomes from "../../../components/WebDev/WebDevOutcomes/WebDevOutcomes";
import WebDevImpactCTA from "../../../components/WebDev/WebDevImpactCTA/WebDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
const WebDevelopment = () => {
  return (
    <>
      <Header />
      <WebDevHero />
      <WebDevTech />
      <WebDevExpertise />
      <WebDevOutcomes />
      <WebDevImpactCTA />
      <Footer />
    </>
  );
};

export default WebDevelopment;
