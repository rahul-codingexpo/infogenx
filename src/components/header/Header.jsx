// import "./Header.css";
// import logo from "../../assets/images/logo.png";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo">
//           <img src={logo} alt="Infogenx Logo" />
//         </div>

//         <nav className="nav">
//           <a href="#">About us</a>
//           <a href="#">Our Services</a>
//           <a href="#">Technologies</a>
//           <a href="#">Industries</a>
//           <a href="#">Products</a>
//           <a href="#">Portfolio</a>
//           <a href="#">Blog</a>
//           <a href="#">Contact</a>
//         </nav>

//         <button className="quote-btn">Request a Quote</button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Infogenx Logo" />
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#">About us</a>
          <a href="#">Our Services</a>
          <a href="#">Technologies</a>
          <a href="#">Industries</a>
          <a href="#">Products</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        <button className="quote-btn desktop-only">Request a Quote</button>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

export default Header;
