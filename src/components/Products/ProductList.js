import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  const items = props.items;
  const isLoading = useSelector((state) => state.products.productsAreLoading);
  return (
    <div className="container">
      {isLoading && <p className="text-center">Fetching Data</p>}
      {items.length === 0 && !isLoading && (
        <p className="text-center">No items here yet. Come back later!</p>
      )}

      {!isLoading && items.length !== 0 && (
        <div className="row">
          {items.map((item) => {
            return (
              <div key={item.id} className="col-sm-6 col-lg-3">
                <ProductItem item={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
