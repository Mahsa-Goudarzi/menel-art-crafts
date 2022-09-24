import React from "react";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
import classes from "./Products.module.css";

export default function Products(props) {
  const products = useSelector((state) => state.products.products);

  return (
    <React.Fragment>
      <span className="d-none d-md-block">
        <img
          alt=""
          src="https://passion.jwsuperthemes.com/wp-content/uploads/2016/08/slider-1passion.jpg"
          className={classes.image}
        />
        <h1 className={classes.hero}>Products</h1>
      </span>
      <ProductList items={products} loadingData={props.loadingData} />
    </React.Fragment>
  );
}
