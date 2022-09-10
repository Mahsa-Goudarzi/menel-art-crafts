import React from "react";
import ProductList from "../components/Products/ProductList";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <h4 className="text-center mt-5">New Products</h4>
      <ProductList />
    </div>
  );
}
