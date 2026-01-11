import Header from "../../../components/header/Header";
import WebDevHero from "../../../components/MobileApp/WebDevHero/WebDevHero";
import WebDevTech from "../../../components/MobileApp/WebDevTech/WebDevTech";
import WebDevExpertise from "../../../components/MobileApp/WebDevExperties/WebDevExpertise";
import WebDevOutcomes from "../../../components/MobileApp/WebDevOutcomes/WebDevOutcomes";
import WebDevImpactCTA from "../../../components/MobileApp/WebDevImpactCTA/WebDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
const MobileApp = () => {
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

export default MobileApp;
