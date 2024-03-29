import React from "react";
import { NavLink } from "react-router-dom";
import CartBadge from "../Cart/CartBadge";

export default function MainNavigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <h2>Menel</h2>
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
              <CartBadge />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
