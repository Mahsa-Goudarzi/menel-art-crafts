import React from "react";
import { Link } from "react-router-dom";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const item = props.item;
  const price = `${item.price} $`;

  function addItemHandler() {
    dispatch(cartActions.addProduct({ ...item, amount: 1 }));
  }

  function removeItemHandler() {
    dispatch(cartActions.removeProduct(item));
  }

  return (
    <li className={classes["cart-item"]}>
      <div>
        <Link to={`/products/${item.id}`} className={classes.title}>
          {item.title}
        </Link>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
}
