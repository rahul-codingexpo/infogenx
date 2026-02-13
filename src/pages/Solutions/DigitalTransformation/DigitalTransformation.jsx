import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Solutions/DigitalTransformation/DigitalTransformationHero/DigitalTransformationHero";
import AppDevExpertise from "../../../components/Solutions/DigitalTransformation/DigitalTransformationExpertise/DigitalTransformationExpertise";
import AppDevApproach from "../../../components/Solutions/DigitalTransformation/DigitalTransformationApproach/DigitalTransformationApproach";
import AppDevBusinessImpact from "../../../components/Solutions/DigitalTransformation/DigitalTransformationBusinessImpact/DigitalTransformationBusinessImpact";
import AppDevImpactCTA from "../../../components/Solutions/DigitalTransformation/DigitalTransformationImpactCTA/DigitalTransformationImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const DigitalTransformation = () => {
  return (
    <>
      <Helmet>
        <title>
          Digital Transformation for Australian Businesses | Infogenx
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
