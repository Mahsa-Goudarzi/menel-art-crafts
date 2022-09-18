import React from "react";
import ProductList from "./ProductList";

export default function Products(props) {
  return (
    <React.Fragment>
      <h1>Products</h1>
      <ProductList items={props.items} />
    </React.Fragment>
  );
}
