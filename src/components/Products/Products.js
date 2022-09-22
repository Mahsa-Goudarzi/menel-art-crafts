import React from "react";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.products.products);

  return (
    <React.Fragment>
      <h1>Products</h1>
      <ProductList items={products} />
    </React.Fragment>
  );
}
