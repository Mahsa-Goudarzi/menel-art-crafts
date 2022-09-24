import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../store/cart-slice";

export default function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const selectedProduct = products.find((item) => item.id === params.productId);
  const inputAmountRef = useRef();

  function addToCartHandler(event) {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value; // ref.current.value is always a string
    const enteredAmountNumber = +enteredAmount; // Converting string number to number
    dispatch(
      cartActions.addProduct({
        ...selectedProduct,
        amount: enteredAmountNumber,
      })
    );
  }

  if (!selectedProduct) {
    return <p>Product is not found</p>;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row  m-5">
        <div className="col-md-6 m-1">
          <img
            src={selectedProduct.url}
            alt={selectedProduct.alt}
            className="img-fluid border"
          />
        </div>
        <div className="col m-1">
          <h2>{selectedProduct.title}</h2>
          <h3>${selectedProduct.price}</h3>
          <hr />
          <p>{selectedProduct.description}</p>
          <form onSubmit={addToCartHandler} class="row g-3">
            <div class="col-auto">
              <label htmlFor={selectedProduct.id}>Amount:</label>
            </div>
            <div class="col-auto">
              <input
                ref={inputAmountRef}
                id={selectedProduct.id}
                type="number"
                min="1"
                step="1"
                defaultValue="1"
                className="form-control"
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-secondary mb-3">
                Add to cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
