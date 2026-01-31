import "./TechSlider.css";
import aws from "../../../assets/images/aws.png";
import laravel from "../../../assets/images/laravel.png";
import codeigniter from "../../../assets/images/codeigniter.png";
import tableau from "../../../assets/images/tableau.png";
import python from "../../../assets/images/python.png";
import node from "../../../assets/images/node.png";
import angular from "../../../assets/images/angular.png";
import react from "../../../assets/images/react.png";
import powerbi from "../../../assets/images/powerbi.png";
import ml from "../../../assets/images/ml.png";
import flutter from "../../../assets/images/flutter.png";
import sql from "../../../assets/images/sql.png";
import wordpress from "../../../assets/images/wordpress.png";
import shopify from "../../../assets/images/shopify.png";
import spark from "../../../assets/images/spark.png";
import php from "../../../assets/images/php.png";

const logos = [
  aws,
  laravel,
  python,
  node,
  angular,
  react,
  powerbi,
  ml,
  flutter,
  sql,
  wordpress,
  shopify,
  spark,
  php,
  codeigniter,
  tableau,
];

const TechSlider = () => {
  return (
    <section className="tech-slider-section">
      <div className="tech-slider">
        <div className="tech-track">
          {logos.map((logo, index) => (
            <div className="tech-card" key={index}>
              <img src={logo} alt="technology" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
