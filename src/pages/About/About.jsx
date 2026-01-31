import Header from "../../components/header/Header";
import AboutHero from "../../components/About/AboutHero/AboutHero";
import AboutWhoWeAre from "../../components/About/AboutWhoWeAre/AboutWhoWeAre";
import AboutWhyChoose from "../../components/About/AboutWhyChoose/AboutWhyChoose";
import AboutMissionVision from "../../components/About/AboutMissionVision/AboutMissionVision";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          AI-Enabled Applications & Automation Solutions for Australian
          Businesses | Infogenx
        </title>
        <meta
          name="description"
          content="InfogenX: Your Australian digital transformation partner for AI-powered Solutions development, analytics, automation & cloud solutions. Custom software to drive growth & efficiency – free consultation available."
        />
        <meta
          name="keywords"
          content="intelligent automation consulting Australia,business process automation with AI,AI-driven workflow automation,Strategic Exclusion"
        />
      </Helmet>
      <Header />
      <AboutHero />
      <AboutWhoWeAre />
      <AboutWhyChoose />
      <AboutMissionVision />
      <Footer />
    </>
  );
};

export default About;
