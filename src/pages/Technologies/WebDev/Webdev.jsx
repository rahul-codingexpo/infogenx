import Header from "../../../components/header/Header";
import WebDevHero from "../../../components/Technologies/WebDev/WebDevHero/WebDevHero";
import WebDevTech from "../../../components/Technologies/WebDev/WebDevTech/WebDevTech";
import WebDevExpertise from "../../../components/Technologies/WebDev/WebDevExperties/WebDevExpertise";
import WebDevOutcomes from "../../../components/Technologies/WebDev/WebDevOutcomes/WebDevOutcomes";
import WebDevImpactCTA from "../../../components/Technologies/WebDev/WebDevImpactCTA/WebDevImpactCTA";
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
