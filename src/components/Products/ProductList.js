import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  const items = props.items;
  const isLoading = props.loadingData.isLoading;
  const error = props.loadingData.error;
  return (
    <div className="container">
      {isLoading && <p>Fetching Data</p>}
      {error && <p>Error Fetching Data</p>}

      {!isLoading && !error && items && (
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
