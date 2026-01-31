import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Solutions/ModernApplication/ModernApplicationHero/ModernApplicationHero";
import AppDevExpertise from "../../../components/Solutions/ModernApplication/ModernApplicationExpertise/ModernApplicationExpertise";
import AppDevApproach from "../../../components/Solutions/ModernApplication/ModernApplicationApproach/ModernApplicationApproach";
import AppDevBusinessImpact from "../../../components/Solutions/ModernApplication/ModernApplicationBusinessImpact/ModernApplicationBusinessImpact";
import AppDevImpactCTA from "../../../components/Solutions/ModernApplication/ModernApplicationImpactCTA/ModernApplicationImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ModernApplication = () => {
  return (
    <>
      <Helmet>
        <title>Modern Application Development & Engineering | Infogenx</title>
        <meta
          name="description"
          content="Infogenx designs and builds secure, scalable, cloud-native applications that support business growth and long-term digital scalability. "
        />
        <meta
          name="keywords"
          content="application development Australia, cloud-native applications, custom software engineering"
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

export default ModernApplication;
