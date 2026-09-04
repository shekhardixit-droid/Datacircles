import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import Home from "./pages/Home";
import PlatformOverview from "./pages/PlatformOverview";
import ProductCRM from "./pages/ProductCRM";
import Payment1 from "./pages/Payment1";
import Payment2 from "./pages/Payment2";
import InvoicingBilling from "./pages/InvoicingBilling";
import Blog from "./pages/resources/Blog";
import HowToGuide from "./pages/resources/HowToGuide";
import PlatformOverview2 from "./pages/PlatformOverview2";
import FreeTools from "./pages/resources/FreeTools";
import CustomerStories from "./pages/resources/CustomerStories";
import SubDetails from "./pages/resources/SubDetails";
import CreateInvoice from "./components/invoice/CreateInvoice";
import ToolsMain from "./pages/resources/ToolsMain";
import ChecklistExplainer from "./pages/resources/ChecklistExplainer";
import Comparison from "./pages/resources/Comparison";
import CRMAudience from "./pages/resources/CRMAudience";
import AboutUs from "./pages/company/AboutUs";
import SecurityCompliance from "./pages/company/SecurityCompliance";
import Careers from "./pages/company/Careers";
import ContactUs from "./pages/company/ContactUs";
import Referral from "./pages/company/Referral";
import SolutionMain from "./pages/solutions/SolutionMain";
import CreativeMarketing from "./pages/solutions/CreativeMarketing";
import Pricing from "./pages/Pricing";
import TermsOfService from "./pages/Legal/Terms&Conditions";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import SecurityCompliancePage from "./pages/Legal/Security&compliances";



function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform-overview" element={<PlatformOverview />} />
      <Route path="/product-crm" element={<ProductCRM />} />
      <Route path="/payment1" element={<Payment1 />} />
      <Route path="/payment2" element={<Payment2 />} />
      <Route path="/invoicing-billing" element={<InvoicingBilling />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/how-to-guide" element={<HowToGuide />} />
      <Route path="/platform-overview2" element={<PlatformOverview2 />} />
      <Route path="/freetools" element={<FreeTools />} />
      <Route path="/customer-stories" element={<CustomerStories />} />
      <Route path="/sub-details" element={<SubDetails />} />
      <Route path="/invoice-preview" element={<CreateInvoice />} />
      <Route path="/toolsmain" element={<ToolsMain />} />
      <Route path="/checklist" element={<ChecklistExplainer />} />
      <Route path="/comparison" element={<Comparison />} />
      <Route path="/crm-for-audience" element={<CRMAudience/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/security&compliance" element={<SecurityCompliance/>} />
      <Route path="/careers" element={<Careers/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/referral" element={<Referral/>} />
      <Route path="/solutions" element={<SolutionMain/>} />
      <Route path="/creative&marketing" element={<CreativeMarketing/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/security-compliance" element={<SecurityCompliancePage />} />



    </Routes>
    </>
  );
}

export default App;
