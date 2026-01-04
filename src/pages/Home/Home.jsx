import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import Expertise from "../../components/Expertise/Expertise";
import ServiceHighlight from "../../components/ServiceHighlight/ServiceHighlight";
import TechSlider from "../../components/TechSlider/TechSlider";
import Testimonials from "../../components/Testimonials/Testimonials";
import CtaBanner from "../../components/CtaBanner/CtaBanner";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
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
