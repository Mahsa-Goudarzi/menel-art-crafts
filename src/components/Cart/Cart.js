import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  return cart.map((item) => item.title);
}
