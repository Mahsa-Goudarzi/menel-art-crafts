import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import classes from "./CartBadge.module.css";

export default function CartBadge() {
  const badgeRef = useRef(null);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  useEffect(() => {
    if (cartTotalAmount === 0) {
      return;
    }

    const badge = badgeRef.current;

    badge.classList.add(classes.bump);

    const timer = setTimeout(() => {
      badge.classList.remove(classes.bump);
    }, 300);

    return () => {
      clearTimeout(timer);
      badge.classList.remove(classes.bump);
    };
  }, [cartTotalAmount]);

  return (
    <div className={classes.button}>
      <span>Cart</span>
      <div className={classes.badge} ref={badgeRef} data-testid="cart-badge">
        {cartTotalAmount}
      </div>
    </div>
  );
}
