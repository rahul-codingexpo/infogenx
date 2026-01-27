import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Analytics/AppDevHero/AppDevHero";
import AppDevExpertise from "../../../components/Analytics/AppDevExpertise/AppDevExpertise";
import AppDevApproach from "../../../components/Analytics/AppDevApproach/AppDevApproach";
import AppDevBusinessImpact from "../../../components/Analytics/AppDevBusinessImpact/AppDevBusinessImpact";
// import AppDevImpactCTA from "../../../components/Analytics/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const OdooSolution = () => {
  return (
    <>
      <Helmet>
        <title>Odoo ERP Implementation & Customisation | Infogenx</title>
        <meta
          name="description"
          content="Infogenx delivers Odoo ERP implementation, custom modules, and workflow automation to streamline operations and improve business visibility. "
        />
        <meta
          name="keywords"
          content="Odoo ERP Australia, Odoo implementation, ERP automation"
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

export default OdooSolution;
