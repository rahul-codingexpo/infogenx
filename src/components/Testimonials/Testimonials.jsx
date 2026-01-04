import { useState } from "react";
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
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Trusted by Our Clients</h2>
      <p className="testimonials-subtitle">
        Delivering measurable results across industries.
      </p>

      <div className="testimonial-slider">
        <div
          className="testimonial-track"
          style={{ transform: `translateX(-${active * 360}px)` }}
        >
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <img
                src={cornerAssent}
                alt="corner accent"
                className="corner-accent"
              />

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

              {/* <div className="corner-accent" /> */}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={active === index ? "dot active" : "dot"}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
