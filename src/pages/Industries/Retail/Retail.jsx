import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Industries/Retail/RetailHero/RetailHero";
import AppDevExpertise from "../../../components/Industries/Retail/RetailExpertise/RetailExpertise";
import AppDevApproach from "../../../components/Industries/Retail/RetailApproach/RetailApproach";
import AppDevBusinessImpact from "../../../components/Industries/Retail/RetailBusinessImpact/RetailBusinessImpact";
import AppDevImpactCTA from "../../../components/Industries/Retail/RetailImpactCTA/RetailImpactCTA";
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
