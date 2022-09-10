import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.Footer}>
      <div className="container">
        <div className="row">
          <div className="col-md m-5">
            <Link to="/" className={`row ${classes.link}`}>
              Home
            </Link>
            <Link to="/products" className={`row ${classes.link}`}>
              Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
