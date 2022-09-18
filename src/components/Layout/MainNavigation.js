import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  const totalCartAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <p>Logo</p>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link ">
              Home
            </NavLink>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
            <NavLink to="/cart" className="nav-link ">
              Cart {totalCartAmount}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
