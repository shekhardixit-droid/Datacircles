import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PlatformOverview from "./pages/PlatformOverview";
import ProductCRM from "./pages/ProductCRM";
import Payment1 from "./pages/Payment1";
import Payment2 from "./pages/Payment2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform-overview" element={<PlatformOverview />} />
      <Route path="/product-crm" element={<ProductCRM />} />
       <Route path="/payment1" element={<Payment1/>} />
          <Route path="/payment2" element={<Payment2/>} />
    </Routes>
  );
}

export default App;