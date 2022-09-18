import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const products = useSelector((state) => state.products.products);
  const selectedProduct = products.find((item) => item.id === params.productId);

  if (!selectedProduct) {
    return <p>Product is not found</p>;
  }

  return (
    <div className="container m-5">
      <h2>{selectedProduct.title}</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img
              src={selectedProduct.url}
              alt={selectedProduct.alt}
              className="img-fluid border shadow"
            />
          </div>
          <div className="col">
            <p>{selectedProduct.description}</p>
            <p>{selectedProduct.price} $</p>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
