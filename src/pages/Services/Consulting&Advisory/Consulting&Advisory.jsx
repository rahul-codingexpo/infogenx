import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Analytics/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/Analytics/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/Analytics/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/Analytics/AppDevBusinessImpact/AppDevBusinessImpact";
// import AppDevImpactCTA from "../../../components/Analytics/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>
          AI & Automation Consulting & Platform Advisory Services | Infogenx
          Australia
        </title>
        <meta
          name="description"
          content="Make confident AI-Enabled Business Solutions decisions with Infogenx’s consulting and advisory services focused on strategy, planning, and business alignment."
        />
        <meta
          name="keywords"
          content="AI & Automation Consulting Australia, technology advisory, digital strategy consulting"
        />
      </Helmet>
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
