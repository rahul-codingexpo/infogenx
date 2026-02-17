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
          AI Automation & Application Development Company in Australia |
          Infogenx
        </title>
        <meta
          name="description"
          content="Infogenx is an Australian AI automation and application development company delivering intelligent apps, workflow automation, and analytics using Microsoft, Zoho, and Odoo."
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
