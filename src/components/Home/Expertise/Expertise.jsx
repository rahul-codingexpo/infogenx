import { useEffect, useRef } from "react";
import "./Expertise.css";
import card1 from "../../../assets/images/card1.png";
import card2 from "../../../assets/images/card2.png";
import card3 from "../../../assets/images/card3.png";

const Expertise = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = Array.from(
      section.querySelectorAll(".expertise-card"),
    ).reverse(); // 🔥 reverse order

    const maxMove = 120;
    const fadeDistance = 300;

    const onScroll = () => {
      // ❌ Disable animation on tablet & mobile
      if (window.innerWidth <= 1024) {
        cards.forEach((card) => {
          card.style.transform = "translateY(0)";
          card.style.opacity = "1";
        });
        return;
      }
      const rect = section.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 25;

      if (rect.top < viewportCenter) {
        const scrollPastCenter = viewportCenter - rect.top;

        cards.forEach((card, index) => {
          const delay = index * 120;
          const progress = Math.max(
            0,
            Math.min(1, (scrollPastCenter - delay) / fadeDistance),
          );

          card.style.transform = `translateY(${-progress * maxMove}px)`;
          card.style.opacity = 1 - progress;
        });
      } else {
        cards.forEach((card) => {
          card.style.transform = "translateY(0)";
          card.style.opacity = "1";
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="expertise-section" ref={sectionRef}>
      <div className="expertise-container">
        <div className="expertise-content">
          <h2 className="expertise-heading">
            Apps, Data & Automation <br />
            Experts Driving Digital <br />
            Transformation
          </h2>

          <p className="expertise-description">
            We help Australian businesses build scalable AI-enabled
            applications, intelligent automation workflows, and analytics-driven
            systems using trusted platforms including Microsoft, Zoho, and Odoo.
          </p>
        </div>

        <div className="expertise-cards">
          <div className="expertise-card first-card">
            <h4>AI-Enabled Application Development </h4>
            <p>
              Custom applications engineered for seamless integration, security,
              and business growth across your chosen platform.
            </p>
            <img src={card1} alt="" />
          </div>

          <div className="expertise-card center-card">
            <h4>Intelligent Automation for Repetitive Work</h4>
            <p>
              AI-driven workflow orchestration that eliminates repetitive tasks,
              reduces errors, and accelerates operational efficiency.
            </p>
            <img src={card2} alt="" />
          </div>

          <div className="expertise-card last-card">
            <h4>AI-Powered Business Insights</h4>
            <p>
              AI powered Analytics and embedded intelligence that turn raw data
              into predictive insights and confident decision-making.
            </p>
            <img src={card3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
