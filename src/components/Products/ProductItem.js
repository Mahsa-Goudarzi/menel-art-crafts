import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function ProductItem(props) {
  const dispatch = useDispatch();
  const item = props.item;

  function addToCartHandler() {
    dispatch(cartActions.addProduct({ ...item, amount: 1 }));
  }

  return (
    <div className={classes.item}>
      <img src={item.url} alt={item.alt} className="img-fluid" />
      <div className="container">
        <div className="row">
          <Link
            to={`/products/${item.id}`}
            className={`col ${classes.detail} ${classes.button}`}
          >
            Visit
          </Link>
          <button
            className={`col ${classes.cart} ${classes.button}`}
            onClick={addToCartHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
      <h5 className={classes.title}>{item.title}</h5>
      <div className={classes.price}>{`${item.price} $`}</div>
    </div>
  );
}
