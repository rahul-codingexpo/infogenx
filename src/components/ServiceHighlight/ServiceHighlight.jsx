import "./ServiceHighlight.css";
import { useEffect, useRef, useState } from "react";
import serviceVideo1 from "../../assets/videos/Digital_Data_Processing.mp4";
import serviceVideo2 from "../../assets/videos/Digital_Data_Processing.mp4";
import serviceVideo3 from "../../assets/videos/Digital_Data_Processing.mp4";
import serviceVideo4 from "../../assets/videos/Digital_Data_Processing.mp4"; // your video

const ServiceHighlight = () => {
  const services = [
    {
      index: "01",
      title: "Custom \n Application Delivery",
      description:
        "End-to-end design and development of business applications tailored to specific workflows, integrations, and operational needs.",
      video: serviceVideo1,
      background: "#ffd6bf",
    },
    {
      index: "02",
      title: "System Integration & Platform Enablement",
      description:
        "Seamless integration across business systems, third-party tools, and enterprise platforms to ensure data flows reliably across your organization.",
      video: serviceVideo2,
      background: "#E9C9FF",
    },
    {
      index: "03",
      title: "Process Modernization",
      description:
        "Redesign and modernization of legacy processes to improve efficiency, reduce complexity, and support digital-first operations.",
      video: serviceVideo3,
      background: "#C9D5FF",
    },
    {
      index: "04",
      title: "Cloud Architecture & Migration",
      description:
        "Planning, migration, and optimization of secure cloud environments that support performance, compliance, and long-term scalability.",
      video: serviceVideo4,
      background: "#C9F9FF",
    },
    {
      index: "05",
      title: "Ongoing Support & Optimization",
      description:
        "Continuous monitoring, enhancement, and optimization to ensure systems remain reliable, secure, and aligned with evolving business goals.",
      video: serviceVideo4,
      background: "#CBFFC9",
    },
  ];
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const totalCards = services.length;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollInside = -rect.top;
      const totalScroll = section.offsetHeight - window.innerHeight;

      if (scrollInside >= 0 && scrollInside <= totalScroll) {
        const progress = scrollInside / totalScroll;
        const index = Math.min(
          totalCards - 1,
          Math.floor(progress * totalCards)
        );
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const service = services[activeIndex];

  return (
    <section
      className="service-section"
      ref={sectionRef}
      style={{ height: `${services.length * 100}vh` }}
    >
      <div className="service-sticky">
        {/* <div
          key={activeIndex}
          className="service-card active card-animate"
          style={{ background: service.background }}
        >
          
          <div className="service-content">
            <h2 className="service-title">
              {service.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>

            <p className="service-description">{service.description}</p>

            <button className="service-btn">
              Talk to our Experts <span className="arrow">→</span>
            </button>
          </div>

          
          <div className="service-media-container">
            <div style={{ padding: "0 20px" }}>
              <span className="service-index">{service.index}</span>
            </div>

            <div className="service-media">
              <video
                key={service.video} // 🔥 re-mount video on change
                src={service.video}
                autoPlay
                muted
                loop
                playsInline
                className="service-video"
              />
            </div>
          </div>
        </div> */}
        <div className="service-stack">
          {services.slice(0, activeIndex + 1).map((item, i) => {
            const isActive = i === activeIndex;
            const stackOffset = activeIndex - i;

            return (
              <div
                key={i}
                className={`service-card ${isActive ? "active" : "stacked"}`}
                style={{
                  background: item.background,
                  transform: `
            translateY(-${stackOffset * 35}px)
            
          `,
                  zIndex: 100 - stackOffset,
                }}
              >
                {/* Left */}
                <div className="service-content">
                  <h2 className="service-title">
                    {item.title.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h2>

                  <p className="service-description">{item.description}</p>

                  {isActive && (
                    <button className="service-btn">
                      Talk to our Experts <span className="arrow">→</span>
                    </button>
                  )}
                </div>

                {/* Right */}
                <div className="service-media-container">
                  {/* <span className="service-index">{item.index}</span> */}
                  <div style={{ padding: "0 20px" }}>
                    <span className="service-index">{service.index}</span>
                  </div>
                  {isActive && (
                    <div className="service-media">
                      <video
                        key={item.video}
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="service-video"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
