import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/AppDevelopment/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/AppDevelopment/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/AppDevelopment/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/AppDevelopment/AppDevBusinessImpact/AppDevBusinessImpact";
import AppDevImpactCTA from "../../../components/AppDevelopment/AppDevImpactCTA/AppDevImpactCTA";
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
