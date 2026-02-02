import "./Careers.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
const Career = () => {
  return (
    <div>
      <Header />
      <div className="career-page">
        <h1>Careers at Infogenx</h1>
        <p>Explore exciting career opportunities with Infogenx.</p>

        <p>There are no open positions at the moment.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
