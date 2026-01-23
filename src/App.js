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
import Portfolio from "./pages/Portfolio/Portfolio";
import ApiIntegration from "./pages/Solutions/APIintegration/ApiIntegration";
import DataAnalyticsAI from "./pages/Solutions/DataAnalyticsAI/DataAnalyticsAI";
import DigitalTransformation from "./pages/Solutions/DigitalTransformation/DigitalTransformation";
import IntelligentAutomation from "./pages/Solutions/IntelligentAutomation/IntelligentAutomation";
import ModernApplication from "./pages/Solutions/ModernApplication/ModernApplication";
import MicrosoftSolution from "./pages/Platforms/MicrosoftSolutions/MicrosoftSolution";
import ZohoSolution from "./pages/Platforms/ZohoSolutions/ZohoSolution";
import OdooSolution from "./pages/Platforms/OdooSolutions/OdooSolution";
import Insights from "./pages/Insights/Insights";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/services/application-development"
            element={<AppDevelopment />}
          />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/it-partner" element={<ITPartner />} />
          <Route path="/services/cloud-ai" element={<CloudAI />} />
          <Route
            path="/platforms/microsoft-solutions"
            element={<MicrosoftSolution />}
          />
          <Route path="/platforms/zoho-solutions" element={<ZohoSolution />} />
          <Route path="/platforms/odoo-solutions" element={<OdooSolution />} />
          <Route
            path="/solutions/api-integration"
            element={<ApiIntegration />}
          />
          <Route
            path="/solutions/data-analytics-ai"
            element={<DataAnalyticsAI />}
          />
          <Route
            path="/solutions/digital-transformation"
            element={<DigitalTransformation />}
          />
          <Route
            path="/solutions/intelligent-automation"
            element={<IntelligentAutomation />}
          />
          <Route
            path="/solutions/modern-application"
            element={<ModernApplication />}
          />
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
