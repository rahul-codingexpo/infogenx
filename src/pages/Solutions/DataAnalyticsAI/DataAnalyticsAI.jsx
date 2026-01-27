import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/AppDevelopment/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/AppDevelopment/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/AppDevelopment/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/AppDevelopment/AppDevBusinessImpact/AppDevBusinessImpact";
import AppDevImpactCTA from "../../../components/AppDevelopment/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const DataAnalyticsAI = () => {
  return (
    <>
      <Helmet>
        <title>
          Data, Analytics & AI Consulting Services | Infogenx Australia
        </title>
        <meta
          name="description"
          content="Turn data into confident decisions with Infogenx’s analytics engineering and AI solutions designed for insight, performance, and business impact. "
        />
        <meta
          name="keywords"
          content="data analytics consulting Australia, AI consulting, analytics engineering"
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

export default DataAnalyticsAI;
