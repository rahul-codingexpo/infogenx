import { useEffect, useState, useRef } from "react";
import "./Testimonials.css";
import riteWheelzLogo from "../../../assets/images/rite-wheelz.png";
import cheramiLogo from "../../../assets/images/cherami.png";
import cornerAssent from "../../../assets/images/corner-accent.png";

const testimonials = [
  {
    text: "Infogenx is superior in keeping up their promises. Good in delivering the services on time frame. I am gratified with my Ecommerce project, done with Infogenx people. Thanks!!",
    company: "Rite Wheelz",
    name: "Rite Wheelz",
    location: "Australia",
    logo: riteWheelzLogo,
  },
  {
    text: "It makes us feel happy every time we click over it. And because the website is designed to be flexible, I can update it super easily whenever we want. Thank you Infogenx.",
    company: "Cherami",
    name: "Leon Leslie",
    location: "Australia",
    logo: cheramiLogo,
  },
  {
    text: "Infogenx is superior in keeping up their promises. Good in delivering the services on time frame. I am gratified with my Ecommerce project, done with Infogenx people. Thanks!!",
    company: "Rite Wheelz",
    name: "Rite Wheelz",
    location: "Australia",
    logo: riteWheelzLogo,
  },
  {
    text: "It makes us feel happy every time we click over it. And because the website is designed to be flexible, I can update it super easily whenever we want. Thank you Infogenx.",
    company: "Cherami",
    name: "Leon Leslie",
    location: "Australia",
    logo: cheramiLogo,
  },
  {
    text: "Infogenx is superior in keeping up their promises. Good in delivering the services on time frame. I am gratified with my Ecommerce project, done with Infogenx people. Thanks!!",
    company: "Rite Wheelz",
    name: "Rite Wheelz",
    location: "Australia",
    logo: riteWheelzLogo,
  },
  {
    text: "It makes us feel happy every time we click over it. And because the website is designed to be flexible, I can update it super easily whenever we want. Thank you Infogenx.",
    company: "Cherami",
    name: "Leon Leslie",
    location: "Australia",
    logo: cheramiLogo,
  },
  {
    text: "Infogenx is superior in keeping up their promises. Good in delivering the services on time frame. I am gratified with my Ecommerce project, done with Infogenx people. Thanks!!",
    company: "Rite Wheelz",
    name: "Rite Wheelz",
    location: "Australia",
    logo: riteWheelzLogo,
  },
];

// const Testimonials = () => {
//   const [index, setIndex] = useState(1);
//   const [animate, setAnimate] = useState(true);
//   const trackRef = useRef(null);

//   const slides = [
//     testimonials[testimonials.length - 1],
//     ...testimonials,
//     testimonials[0],
//   ];

//   const CARD_WIDTH = 450;
//   const GAP = 40;
//   const MOVE_X = CARD_WIDTH + GAP;

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => prev + 1);
//     }, 3500);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (index === slides.length - 1) {
//       setTimeout(() => {
//         setAnimate(false);
//         setIndex(1);
//       }, 800);
//     }

//     if (index === 0) {
//       setTimeout(() => {
//         setAnimate(false);
//         setIndex(slides.length - 1);
//       }, 800);
//     }
//   }, [index, slides.length]);

//   useEffect(() => {
//     if (!animate) {
//       requestAnimationFrame(() => setAnimate(true));
//     }
//   }, [animate]);

//   return (
//     <section className="testimonials-section">
//       <h2 className="testimonials-title">Trusted by Our Clients</h2>
//       <p className="testimonials-subtitle">
//         Delivering measurable results across industries.
//       </p>

//       <div className="testimonial-slider">

//         <div
//           ref={trackRef}
//           className={`testimonial-track ${animate ? "animate" : ""}`}
//           style={{
//             transform: `translateX(-${index * MOVE_X}px)`,
//           }}
//         >
//           {slides.map((item, i) => (
//             <div className="testimonial-card" key={i}>
//               <img src={cornerAssent} className="corner-accent" alt="" />

//               <div className="testimonial-content">
//                 <span className="quote">“</span>
//                 <p className="testimonial-text">{item.text}</p>
//               </div>

//               <div className="testimonial-footer">
//                 <img src={item.logo} alt={item.company} />
//                 <div>
//                   <strong>{item.company}</strong>
//                   <span>
//                     {item.name}, {item.location}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="testimonial-dots">
//         {testimonials.map((_, i) => (
//           <span
//             key={i}
//             className={index - 1 === i ? "dot active" : "dot"}
//             onClick={() => setIndex(i + 1)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

const Testimonials = () => {
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [moveX, setMoveX] = useState(0);

  const trackRef = useRef(null);

  const slides = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  /* 👉 CALCULATE CARD WIDTH DYNAMICALLY */
  useEffect(() => {
    const updateMoveX = () => {
      if (!trackRef.current) return;

      const card = trackRef.current.querySelector(".testimonial-card");
      if (!card) return;

      const gap = window.innerWidth <= 768 ? 20 : 40;
      setMoveX(card.offsetWidth + gap);
    };

    updateMoveX();
    window.addEventListener("resize", updateMoveX);

    return () => window.removeEventListener("resize", updateMoveX);
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  /* INFINITE LOOP FIX */
  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(1);
      }, 800);
    }

    if (index === 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(slides.length - 2);
      }, 800);
    }
  }, [index, slides.length]);

  /* RE-ENABLE ANIMATION */
  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Trusted by Our Clients</h2>
      <p className="testimonials-subtitle">
        Delivering measurable results across industries.
      </p>

      <div className="testimonial-slider">
        <div
          ref={trackRef}
          className={`testimonial-track ${animate ? "animate" : ""}`}
          style={{
            transform: `translateX(-${index * moveX}px)`,
          }}
        >
          {slides.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <img src={cornerAssent} className="corner-accent" alt="" />

              <div className="testimonial-content">
                <span className="quote">“</span>
                <p className="testimonial-text">{item.text}</p>
              </div>

              <div className="testimonial-footer">
                <img src={item.logo} alt={item.company} />
                <div>
                  <strong>{item.company}</strong>
                  <span>
                    {item.name}, {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={index - 1 === i ? "dot active" : "dot"}
            onClick={() => setIndex(i + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
