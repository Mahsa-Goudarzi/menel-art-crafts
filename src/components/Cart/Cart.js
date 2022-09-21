import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="container">
      {cart.map((item) => (
        <div key={item.id}>
          <CartItem item={item} />
        </div>
      ))}
      {totalPrice !== 0 && <div>{`Total Price: ${totalPrice} $`}</div>}
    </div>
  );
}
