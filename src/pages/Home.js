import React from "react";
import { useSelector } from "react-redux";
import ProductList from "../components/Products/ProductList";
import Slider from "../components/Slider/Slider";

export default function Home() {
  const products = useSelector((state) => state.products);
  const newProducts = products.filter((item) => item.isNew === true);

  return (
    <div>
      <Slider />
      <h4 className="text-center mt-5">New Products</h4>
      <ProductList items={newProducts} />
    </div>
  );
}
