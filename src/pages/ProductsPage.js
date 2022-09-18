import React from "react";
import Products from "../components/Products/Products";
import { useSelector } from "react-redux";

export default function ProductsPage() {
  const products = useSelector((state) => state.products.products);

  return <Products items={products} />;
}
