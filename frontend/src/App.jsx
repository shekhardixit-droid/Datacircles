import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PlatformOverview from "./pages/PlatformOverview";
import ProductCRM from "./pages/ProductCRM";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform-overview" element={<PlatformOverview />} />
      <Route path="/product-crm" element={<ProductCRM />} />
    </Routes>
  );
}

export default App;