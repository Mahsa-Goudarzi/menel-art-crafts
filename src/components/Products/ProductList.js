import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  return (
    <div className="container">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-lg-3">
              <ProductItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
