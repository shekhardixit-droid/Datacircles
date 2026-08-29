import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PlatformOverview from "./pages/PlatformOverview";
import ProductCRM from "./pages/ProductCRM";
import Payment1 from "./pages/Payment1";
import Payment2 from "./pages/Payment2";
import  InvoicingBilling from "./pages/InvoicingBilling";
import Blog from "./pages/Blog";
import HowToGuide from "./pages/HowToGuide";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform-overview" element={<PlatformOverview />} />
      <Route path="/product-crm" element={<ProductCRM />} />
       <Route path="/payment1" element={<Payment1/>} />
          <Route path="/payment2" element={<Payment2/>} />
      <Route path="/invoicing-billing" element={<InvoicingBilling />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/how-to-guide" element={<HowToGuide />} />
    </Routes>
  );
}

export default App;