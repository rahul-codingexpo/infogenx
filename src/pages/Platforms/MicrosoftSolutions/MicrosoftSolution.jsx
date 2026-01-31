import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Platforms/Microsoft/MicrosoftHero/MicrosoftHero";
import AppDevExpertise from "../../../components/Platforms/Microsoft/MicrosoftExpertise/MicrosoftExpertise";
import AppDevApproach from "../../../components/Platforms/Microsoft/MicrosoftApproach/MicrosoftApproach";
import AppDevBusinessImpact from "../../../components/Platforms/Microsoft/MicrosoftBusinessImpact/MicrosoftBusinessImpact";
// import AppDevImpactCTA from "../../../components/Platforms/Microsoft/MicrosoftImpactCTA/MicrosoftImpactCTA";
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
