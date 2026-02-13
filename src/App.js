import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import GetinTouch from "./pages/Contact/GetinTouch/GetinTouch";
import GlobalLocations from "./pages/Contact/GlobalLocations/GlobalLocations";
import ImplementationIntegration from "./pages/Services/ImplementationIntegration/ImplementationIntegration";
import ConsultingAdvisory from "./pages/Services/Consulting&Advisory/Consulting&Advisory";
import SupportOptimization from "./pages/Services/SupportOptimization/support-optimization";
import ManagedServices from "./pages/Services/ManagedServices/managed-services";
import WebDevelopment from "./pages/Technologies/WebDev/Webdev";
import MobileAppDevelopment from "./pages/Technologies/MobileApp/MobileApp";
import ArtificialIntelligence from "./pages/Technologies/AI/AI";
import DataEngineering from "./pages/Technologies/DataEngineering/DataEngineering";
import CloudComputing from "./pages/Technologies/CloudComputing/CloudComputing";
import Healthcare from "./pages/Industries/Healthcare/Healthcare";
import Finance from "./pages/Industries/Finance/Finance";
import Retail from "./pages/Industries/Retail/Retail";
import RequestQuote from "./pages/RequestQuote/RequestQuote";
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

import CaseStudies from "./pages/Insights/CaseStudies/CaseStudies";
import IgxStock from "./pages/Products/IGXStock/IgxStock";
import OdooErp from "./pages/Products/OdooErp/OdooErp";
import RetailPos from "./pages/Products/RetailPos/RetailPos";
import CustomerRelation from "./pages/Products/CustomerRelation/CustomerRelation";
import Career from "./pages/Careers/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route
            path="/products/stock-management-system"
            element={<IgxStock />}
          />
          <Route
            path="/products/odoo-erp-management-system"
            element={<OdooErp />}
          />
          <Route
            path="/products/retail-pos-management-system"
            element={<RetailPos />}
          />
          <Route
            path="/products/customer-relationship-management-system"
            element={<CustomerRelation />}
          />
          <Route path="/insights/case-studies" element={<CaseStudies />} />
          <Route path="/contact-us/get-in-touch" element={<GetinTouch />} />
          <Route
            path="/contact-us/global-locations"
            element={<GlobalLocations />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/services/implementation-integration"
            element={<ImplementationIntegration />}
          />
          <Route
            path="/services/managed-services"
            element={<ManagedServices />}
          />
          <Route
            path="/services/consulting-advisory"
            element={<ConsultingAdvisory />}
          />
          <Route
            path="/services/support-optimization"
            element={<SupportOptimization />}
          />
          {/* <Route path="/services/cloud-ai" element={<CloudAI />} /> */}
          <Route path="/platforms/microsoft" element={<MicrosoftSolution />} />
          <Route path="/platforms/zoho" element={<ZohoSolution />} />
          <Route path="/platforms/odoo" element={<OdooSolution />} />
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
            path="/solutions/modern-applications"
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
            path="/technologies/data-engineering"
            element={<DataEngineering />}
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
