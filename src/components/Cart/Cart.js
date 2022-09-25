import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  if (cart.length === 0) {
    return (
      <div className={classes["empty-cart"]}>
        <p>No items in your cart yet! </p>
        <p>
          Wanna go to the <Link to={`/products`}>shop</Link>?
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      {cart.map((item) => (
        <div key={item.id}>
          <CartItem item={item} />
        </div>
      ))}
      {totalPrice !== 0 && <h4>{`Total Price: $${totalPrice}`}</h4>}
    </div>
  );
}
