import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/AppDevelopment/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/AppDevelopment/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/AppDevelopment/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/AppDevelopment/AppDevBusinessImpact/AppDevBusinessImpact";
import AppDevImpactCTA from "../../../components/AppDevelopment/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const DigitalTransformation = () => {
  return (
    <>
      <Helmet>
        <title>
          Digital Transformation Consulting for Australian Businesses | Infogenx
        </title>
        <meta
          name="description"
          content="Infogenx helps Australian organizations modernize systems, optimize operations, and scale securely through outcome-driven digital transformation consulting. "
        />
        <meta
          name="keywords"
          content="digital transformation consulting Australia, business process transformation, enterprise modernization"
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

export default DigitalTransformation;
