import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Retail/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/Retail/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/Retail/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/Retail/AppDevBusinessImpact/AppDevBusinessImpact";
import AppDevImpactCTA from "../../../components/Retail/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>
          {" "}
          AI automation retail Australia | AI Solutions by InfogenX Australia
        </title>
        <meta
          name="description"
          content="best AI solutions for retail Australia, Transform retail with InfogenX's AI-enabled solutions in Australia: inventory automation, customer analytics & personalised experiences. Local expertise for scalable growth."
        />
        <meta
          name="keywords"
          content="AI consulting retail, intelligent automation retail solutions, digital transformation retail Australia, AI-enabled inventory management, customer analytics automation Australia, platform-focused retail AI"
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
