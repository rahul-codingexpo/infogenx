import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Analytics/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/Analytics/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/Analytics/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/Analytics/AppDevBusinessImpact/AppDevBusinessImpact";
// import AppDevImpactCTA from "../../../components/Analytics/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const MicrosoftSolution = () => {
  return (
    <>
      <Helmet>
        <title>
          Microsoft Consulting & Power Platform Solutions | Infogenx
        </title>
        <meta
          name="description"
          content="Unlock the full value of Microsoft 365, Power Platform, Azure Data & AI, and Dynamics with Infogenx’s consulting and implementation services. "
        />
        <meta
          name="keywords"
          content="Microsoft consulting Australia, Power Platform automation, Azure data AI"
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

export default MicrosoftSolution;
