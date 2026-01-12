import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import AppDevelopment from "./pages/Services/AppDevelopment/ApplicationDev";
import Automation from "./pages/Services/Automation/Automation";
import Analytics from "./pages/Services/Analytics/Analytics";
import ITPartner from "./pages/Services/ITPartner/ITPartner";
import CloudAI from "./pages/Services/CloudAI/CloudAI";
import WebDevelopment from "./pages/Technologies/WebDev/Webdev";
import MobileAppDevelopment from "./pages/Technologies/MobileApp/MobileApp";
import ArtificialIntelligence from "./pages/Technologies/AI/AI";
import CloudComputing from "./pages/Technologies/CloudComputing/CloudComputing";
import Healthcare from "./pages/Industries/Healthcare/Healthcare";
import Finance from "./pages/Industries/Finance/Finance";
import Retail from "./pages/Industries/Retail/Retail";
import ECommerce from "./pages/Industries/ECommerce/ECommerce";
import Manufacturing from "./pages/Industries/Manufacturing/Manufacturing";
import Transport from "./pages/Industries/Transport/Transport";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/services/application-development"
            element={<AppDevelopment />}
          />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/it-partner" element={<ITPartner />} />
          <Route path="/services/cloud-ai" element={<CloudAI />} />
          <Route
            path="/technologies/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/technologies/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route
            path="/technologies/artificial-intelligence"
            element={<ArtificialIntelligence />}
          />
          <Route
            path="/technologies/cloud-computing"
            element={<CloudComputing />}
          />
          <Route
            path="/industries/healthcare-solutions"
            element={<Healthcare />}
          />
          <Route path="/industries/finance-solutions" element={<Finance />} />
          <Route path="/industries/retail-solutions" element={<Retail />} />
          <Route
            path="/industries/e-commerce-solutions"
            element={<ECommerce />}
          />
          <Route
            path="/industries/manufacturing-solutions"
            element={<Manufacturing />}
          />
          <Route
            path="/industries/transport-logistics"
            element={<Transport />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
