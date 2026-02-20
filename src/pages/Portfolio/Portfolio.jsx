import PortfolioVideo from "../../assets/videos/portfolio.mp4";
import AboutCornerAccent from "../../assets/images/about-corner-accent.png";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import "./Portfolio.css";
import AppImg1 from "../../assets/images/infogenx-application-images-1.png";
import AppImg2 from "../../assets/images/infogenx-application-images-2.png";
import AppImg3 from "../../assets/images/infogenx-application-images-3.png";
import AppImg4 from "../../assets/images/infogenx-application-images-4.png";
import AppImg5 from "../../assets/images/infogenx-application-images-5.png";
import AppImg6 from "../../assets/images/infogenx-application-images-6.png";
import AppImg7 from "../../assets/images/infogenx-application-images-7.png";
import AppImg8 from "../../assets/images/infogenx-application-images-8.png";
import AppImg9 from "../../assets/images/infogenx-application-images-9.png";
import WebImg1 from "../../assets/images/infogenx-website-images-1.png";
import WebImg2 from "../../assets/images/infogenx-website-images-2.png";
import WebImg3 from "../../assets/images/infogenx-website-images-3.png";
import WebImg4 from "../../assets/images/infogenx-website-images-4.png";
import WebImg5 from "../../assets/images/infogenx-website-images-5.png";
import WebImg6 from "../../assets/images/infogenx-website-images-6.png";
import WebImg7 from "../../assets/images/infogenx-website-images-7.png";
import LogoImg1 from "../../assets/images/infogenx-logos-images-1.png";
import LogoImg2 from "../../assets/images/infogenx-logos-images-2.png";
import LogoImg3 from "../../assets/images/infogenx-logos-images-3.png";
import LogoImg4 from "../../assets/images/infogenx-logos-images-4.png";
import LogoImg5 from "../../assets/images/infogenx-logos-images-5.png";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
const projects = [
  {
    id: 1,
    category: "Application",
    image: AppImg1,
  },
  {
    id: 2,
    category: "Application",
    image: AppImg2,
  },
  {
    id: 3,
    category: "Application",
    image: AppImg3,
  },
  {
    id: 4,
    category: "Application",
    image: AppImg4,
  },
  {
    id: 5,
    category: "Application",
    image: AppImg5,
  },
  {
    id: 6,
    category: "Application",
    image: AppImg6,
  },
  {
    id: 7,
    category: "Application",
    image: AppImg7,
  },
  {
    id: 8,
    category: "Application",
    image: AppImg8,
  },
  {
    id: 9,
    category: "Application",
    image: AppImg9,
  },
  {
    id: 10,
    category: "Website",
    image: WebImg1,
  },
  {
    id: 11,
    category: "Website",
    image: WebImg2,
  },
  {
    id: 12,
    category: "Website",
    image: WebImg3,
  },
  {
    id: 13,
    category: "Website",
    image: WebImg4,
  },
  {
    id: 14,
    category: "Website",
    image: WebImg5,
  },
  {
    id: 15,
    category: "Website",
    image: WebImg6,
  },
  {
    id: 11,
    category: "Website",
    image: WebImg7,
  },
  {
    id: 12,
    category: "Logos",
    image: LogoImg1,
  },
  {
    id: 13,
    category: "Logos",
    image: LogoImg2,
  },
  {
    id: 14,
    category: "Logos",
    image: LogoImg3,
  },
  {
    id: 15,
    category: "Logos",
    image: LogoImg4,
  },
  {
    id: 16,
    category: "Logos",
    image: LogoImg5,
  },
];

const filters = ["All", "Application", "Website", "Logos"];
const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  return (
    <>
      <Helmet>
        <title>Our Portfolio | Infogenx Projects</title>
        <meta
          name="description"
          content="Discover Infogenx portfolio showcasing our web development, UI/UX design, and software projects delivered to clients across various industries."
        />
        <meta
          name="keywords"
          content="Infogenx portfolio, web development projects, full-stack projects, software development work, UI UX portfolio"
        />
      </Helmet>

      <Header />
      <section className="appdev-hero">
        <img
          alt="corner accent"
          className="about-corner-accent"
          src={AboutCornerAccent}
        ></img>
        <div className="appdev-container">
          {/* LEFT CONTENT */}

          <div className="appdev-left">
            <h1>Explore our portfolio of crafted websites and applications.</h1>

            <p>
              Showcasing Digital Excellence — Real Projects, Proven Impact, and
              Innovation in Action
            </p>

            <div className="appdev-buttons">
              <button
                className="primary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Get Your FREE Consultation
              </button>

              <button
                className="secondary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Talk to an Expert <span>↗</span>
              </button>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="appdev-right">
            <div className="appdev-video-wrapper">
              <div className="bg"></div>
              <video
                src={PortfolioVideo}
                autoPlay
                muted
                loop
                playsInline
                className="appdev-video"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-container">
          {/* HEADER */}
          <h2 className="portfolio-title">
            Drive Growth with Strategic Application Development
          </h2>

          <p className="portfolio-subtitle">
            The digital age demands constant innovation. A strong mobile and web
            presence is no longer enough. At Infogenx, we go beyond creating
            simple apps; we craft bespoke application solutions strategically
            aligned with your digital transformation goals.
          </p>

          {/* FILTER BUTTONS */}
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? "filter-btn active" : "filter-btn"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div className="portfolio-card" key={project.id}>
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
