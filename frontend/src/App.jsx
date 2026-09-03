import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PlatformOverview from "./pages/PlatformOverview";
import ProductCRM from "./pages/ProductCRM";
import Payment1 from "./pages/Payment1";
import Payment2 from "./pages/Payment2";
import InvoicingBilling from "./pages/InvoicingBilling";
import Blog from "./pages/Blog";
import HowToGuide from "./pages/HowToGuide";
import PlatformOverview2 from "./pages/PlatformOverview2";
import FreeTools from "./pages/FreeTools";
import CustomerStories from "./pages/CustomerStories";
import SubDetails from "./pages/SubDetails";
import CreateInvoice from "./components/invoice/CreateInvoice";
import ToolsMain from "./pages/ToolsMain";
import ChecklistExplainer from "./pages/ChecklistExplainer";
import Comparison from "./pages/Comparison";
import CRMAudience from "./pages/CRMAudience";
import AboutUs from "./pages/AboutUs";
import SecurityCompliance from "./pages/SecurityCompliance";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Referral from "./pages/Referral";

function App() {
  return (
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

    </Routes>
  );
}

export default App;
