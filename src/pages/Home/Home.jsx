import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import Expertise from "../../components/Expertise/Expertise";
import ServiceHighlight from "../../components/ServiceHighlight/ServiceHighlight";
import TechSlider from "../../components/TechSlider/TechSlider";
import Testimonials from "../../components/Testimonials/Testimonials";
import CtaBanner from "../../components/CtaBanner/CtaBanner";
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
          content="Infogenx is an AI-enabled application builder and automation partner for delivering AI-enabled applications, intelligent automation, and analytics to drive measurable business outcomes for Australian businesses. "
        />
        <meta
          name="keywords"
          content="Australian IT consulting, AI solutions Australia, digital transformation services, AI-enabled intelligent automation,intelligent process automation solutions,AI application development Australia,AI-enabled business applications,application modernization Australia,enterprise application transformation"
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
