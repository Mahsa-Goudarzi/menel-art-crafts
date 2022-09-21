import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./CartBadge.module.css";

export default function CartBadge() {
  const [cartIsHighlighted, setCartIsHighlighted] = useState(false);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  const badgeClasses = `${classes.badge} ${
    cartIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    setCartIsHighlighted(true);

    const timer = setTimeout(() => {
      setCartIsHighlighted(false);
    }, 300);

    return () => {
      // The clean up function
      clearTimeout(timer);
    };
  }, [cartTotalAmount]);

  return <span className={badgeClasses}>{cartTotalAmount}</span>;
}
