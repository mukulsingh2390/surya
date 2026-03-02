import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";   // ✅ ADD THIS

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Media from "./pages/Media";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

/* ===== Service Pages ===== */
import IndustrialSecurity from "./serv-pg/IndustrialSecurity";
import BankSecurity from "./serv-pg/BankSecurity";
import CorporateSecurity from "./serv-pg/CorporateSecurity";
import BouncersService from "./serv-pg/BouncersService";
import VipEscort from "./serv-pg/VipEscort";
import ResidentialSecurity from "./serv-pg/ResidentialSecurity";

import OfficeHousekeeping from "./serv-pg/OfficeHousekeeping";
import IndustrialHousekeeping from "./serv-pg/IndustrialHousekeeping";
import ResidentialHousekeeping from "./serv-pg/ResidentialHousekeeping";

import ManpowerSupply from "./serv-pg/ManpowerSupply";
import ContractStaffing from "./serv-pg/ContractStaffing";
import OfficeSupport from "./serv-pg/OfficeSupport";

function App() {
  return (
    <Router>
      <ScrollToTop />   {/* ✅ ADD THIS HERE */}

      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />

        {/* ===== Service Detail Pages ===== */}
        <Route path="/serv-pg/industrial-security" element={<IndustrialSecurity />} />
        <Route path="/serv-pg/bank-security" element={<BankSecurity />} />
        <Route path="/serv-pg/corporate-security" element={<CorporateSecurity />} />
        <Route path="/serv-pg/bouncers-service" element={<BouncersService />} />
        <Route path="/serv-pg/vip-escort" element={<VipEscort />} />
        <Route path="/serv-pg/residential-security" element={<ResidentialSecurity />} />

        <Route path="/serv-pg/office-housekeeping" element={<OfficeHousekeeping />} />
        <Route path="/serv-pg/industrial-housekeeping" element={<IndustrialHousekeeping />} />
        <Route path="/serv-pg/residential-housekeeping" element={<ResidentialHousekeeping />} />

        <Route path="/serv-pg/manpower-supply" element={<ManpowerSupply />} />
        <Route path="/serv-pg/contract-staffing" element={<ContractStaffing />} />
        <Route path="/serv-pg/office-support" element={<OfficeSupport />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
