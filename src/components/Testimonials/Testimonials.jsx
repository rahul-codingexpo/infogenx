// import { useState } from "react";
// import "./Testimonials.css";
// import riteWheelzLogo from "../../assets/images/rite-wheelz.png";
// import cheramiLogo from "../../assets/images/cherami.png";
// import cornerAssent from "../../assets/images/corner-accent.png";
// const testimonials = [
//   {
//     text: "Infogenx is superior in keeping up their promises. Good in delivering the services on time frame. I am gratified with my Ecommerce project, done with Infogenx people. Thanks!!",
//     company: "Rite Wheelz",
//     name: "Rite Wheelz",
//     location: "Australia",
//     logo: riteWheelzLogo,
//   },

//   {
//     text: "It makes us feel happy every time we click over it. And because the website is designed to be flexible, I can update it super easily whenever we want. Thank you Infogenx.",
//     company: "Cherami",
//     name: "Leon Leslie",
//     location: "Australia",
//     logo: cheramiLogo,
//   },
//   {
//     text: "Infogenx is superior in keeping up their promises. Good in delivering the services on time frame. I am gratified with my Ecommerce project, done with Infogenx people. Thanks!!",
//     company: "Rite Wheelz",
//     name: "Rite Wheelz",
//     location: "Australia",
//     logo: riteWheelzLogo,
//   },
// ];

// const Testimonials = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="testimonials-section">
//       <h2 className="testimonials-title">Trusted by Our Clients</h2>
//       <p className="testimonials-subtitle">
//         Delivering measurable results across industries.
//       </p>

//       <div className="testimonial-slider">
//         <div
//           className="testimonial-track"
//           style={{ transform: `translateX(-${active * 480}px)` }}
//         >
//           {testimonials.map((item, index) => (
//             <div className="testimonial-card" key={index}>
//               <img
//                 src={cornerAssent}
//                 alt="corner accent"
//                 className="corner-accent"
//               />

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
//         {testimonials.map((_, index) => (
//           <span
//             key={index}
//             className={active === index ? "dot active" : "dot"}
//             onClick={() => setActive(index)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import { useEffect, useState, useRef } from "react";
import "./Testimonials.css";
import riteWheelzLogo from "../../assets/images/rite-wheelz.png";
import cheramiLogo from "../../assets/images/cherami.png";
import cornerAssent from "../../assets/images/corner-accent.png";

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

const Testimonials = () => {
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const trackRef = useRef(null);

  // 👇 create clones
  const slides = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const CARD_WIDTH = 450;
  const GAP = 40;
  const MOVE_X = CARD_WIDTH + GAP;

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  /* HANDLE INFINITE JUMP */
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
        setIndex(slides.length - 1);
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
        {/* <div
          ref={trackRef}
          className={`testimonial-track ${animate ? "animate" : ""}`}
          style={{ transform: `translateX(-${index * 50}%)` }}
        > */}

        <div
          ref={trackRef}
          className={`testimonial-track ${animate ? "animate" : ""}`}
          style={{
            transform: `translateX(-${index * MOVE_X}px)`,
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
