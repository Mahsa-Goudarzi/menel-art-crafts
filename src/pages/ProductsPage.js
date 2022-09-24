import React from "react";
import Products from "../components/Products/Products";

export default function ProductsPage(props) {
  return <Products loadingData={props.loadingData} />;
}
