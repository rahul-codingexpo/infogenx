import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Analytics/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/Analytics/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/Analytics/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/Analytics/AppDevBusinessImpact/AppDevBusinessImpact";
// import AppDevImpactCTA from "../../../components/Analytics/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
const ApplicationDev = () => {
  return (
    <>
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      {/* <AppDevImpactCTA /> */}
      <Footer />
    </>
  );
};

export default ApplicationDev;
