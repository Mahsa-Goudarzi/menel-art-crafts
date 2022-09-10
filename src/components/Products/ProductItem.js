import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

export default function ProductItem(props) {
  const item = props.item;
  return (
    <div className={classes.item}>
      <img src={item.url} alt={item.alt} className="img-fluid" />
      <div className="container">
        <div className="row">
          <Link
            to={`/products/${item.id}`}
            className={`col ${classes.detail} ${classes.button}`}
          >
            Visit{" "}
          </Link>
          <div className={`col ${classes.cart} ${classes.button}`}>
            Add to cart{" "}
          </div>
        </div>
      </div>
      <h5 className={classes.title}>{item.title}</h5>
      <div className={classes.price}>{`${item.price} $`}</div>
    </div>
  );
}
