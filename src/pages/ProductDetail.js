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

            <form onSubmit={addToCartHandler}>
              <label htmlFor={selectedProduct.id} className="form-label">
                Amount
              </label>
              <input
                ref={inputAmountRef}
                id={selectedProduct.id}
                type="number"
                min="1"
                step="1"
                defaultValue="1"
                className="form-control w-50"
              />
              <button type="submit" className="btn btn-secondary">
                Add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
