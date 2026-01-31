import Header from "../../../components/header/Header";
import WebDevHero from "../../../components/Technologies/MobileApp/MobileAppHero/MobileAppHero";
import WebDevTech from "../../../components/Technologies/MobileApp/MobileAppTech/MobileAppTech";
import WebDevExpertise from "../../../components/Technologies/MobileApp/MobileAppExperties/MobileAppExpertise";
import WebDevOutcomes from "../../../components/Technologies/MobileApp/MobileAppOutcomes/MobileAppOutcomes";
import WebDevImpactCTA from "../../../components/Technologies/MobileApp/MobileAppImpactCTA/MobileAppImpactCTA";
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
