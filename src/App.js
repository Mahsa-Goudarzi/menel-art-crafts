import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/Layout/MainNavigation";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Layout/Footer";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
