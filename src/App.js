import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ApplicationDev from "./pages/Services/ApplicationDev/ApplicationDev";
import Automation from "./pages/Services/Automation/Automation";
import Analytics from "./pages/Services/Analytics/Analytics";
import ITPartner from "./pages/Services/ITPartner/ITPartner";
import CloudAI from "./pages/Services/CloudAI/CloudAI";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services/application-development"
            element={<ApplicationDev />}
          />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/it-partner" element={<ITPartner />} />
          <Route path="/services/cloud-ai" element={<CloudAI />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
