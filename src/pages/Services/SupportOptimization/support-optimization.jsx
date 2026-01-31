import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/SupportOptimization/SupportHero/SupportHero";
import AppDevExpertise from "../../../components/Services/SupportOptimization/SupportExpertise/SupportExpertise";
import AppDevApproach from "../../../components/Services/SupportOptimization/SupportApproach/SupportApproach";
import AppDevBusinessImpact from "../../../components/Services/SupportOptimization/SupportBusinessImpact/SupportBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/SupportOptimization/SupportImpactCTA/SupportImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>IT Support & Continuous Optimization Services | Infogenx</title>
        <meta
          name="description"
          content="Infogenx helps businesses resolve issues faster and continuously optimise systems through structured support and performance reporting."
        />
        <meta
          name="keywords"
          content="IT support Australia, system optimisation, performance monitoring"
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
