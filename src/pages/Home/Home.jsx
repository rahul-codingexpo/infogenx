import Header from "../../components/header/Header";
import Hero from "../../components/Home/Hero/Hero";
import Expertise from "../../components/Home/Expertise/Expertise";
import ServiceHighlight from "../../components/Home/ServiceHighlight/ServiceHighlight";
import TechSlider from "../../components/Home/TechSlider/TechSlider";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import CtaBanner from "../../components/Home/CtaBanner/CtaBanner";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          AI-Enabled Applications & Automation Solutions for Australian
          Businesses | Infogenx
        </title>
        <meta
          name="description"
          content="Infogenx builds AI-enabled business applications and intelligent automation solutions for Australian organisations, with analytics supporting smarter decision-making across Microsoft, Zoho, Shopify, and Odoo platforms."
        />
        <meta
          name="keywords"
          content="AI application development Australia, AI-enabled business applications, intelligent automation Australia, application modernisation services"
        />
      </Helmet>
      <Header />
      <Hero />
      <Expertise />
      <ServiceHighlight />
      <TechSlider />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </>
  );
};

export default Home;
