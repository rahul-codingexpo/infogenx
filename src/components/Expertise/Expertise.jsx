import { useEffect, useRef } from "react";
import "./Expertise.css";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";

const Expertise = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = Array.from(
      section.querySelectorAll(".expertise-card")
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
            Math.min(1, (scrollPastCenter - delay) / fadeDistance)
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
            We help businesses build scalable applications, intelligent
            automation, and data-driven systems using modern low-code and cloud
            platforms.
          </p>
        </div>

        <div className="expertise-cards">
          <div className="expertise-card first-card">
            <h4>Low-Code Application Development</h4>
            <p>
              Build flexible, business-ready applications that accelerate
              delivery and adapt as your needs evolve.
            </p>
            <img src={card1} alt="" />
          </div>

          <div className="expertise-card center-card">
            <h4>Intelligent Automation</h4>
            <p>
              Simplify complex workflows, eliminate repetitive tasks, and
              improve operational efficiency with automation.
            </p>
            <img src={card2} alt="" />
          </div>

          <div className="expertise-card last-card">
            <h4>Analytics & AI</h4>
            <p>
              Transform business data into actionable insights that support
              smarter, faster decision-making.
            </p>
            <img src={card3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
