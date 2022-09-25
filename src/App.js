import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import useHttp from "./hooks/use-http";
import { cartActions } from "./store/cart-slice";
import { productsActions } from "./store/products-slice";

import MainNavigation from "./components/Layout/MainNavigation";
import Footer from "./components/Layout/Footer";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { sendRequest: fetchCart } = useHttp();
  const { sendRequest: sendCart } = useHttp();
  const { sendRequest: fetchProducts } = useHttp();

  useEffect(() => {
    function setProductsData(data) {
      const items = [];
      if (data.products) {
        for (const key in data.products) {
          items.push({ id: key, ...data.products[key] });
        }
      }
      dispatch(productsActions.setProducts(items));
      dispatch(productsActions.handleProductsLoading(false));
    }

    fetchProducts(
      {
        url: "https://menel-shopping-website-default-rtdb.firebaseio.com/products.json",
      },
      setProductsData
    );
  }, [dispatch, fetchProducts]);

  useEffect(() => {
    function setCartData(data) {
      if (!data.cart) {
        dispatch(
          cartActions.setCart({ cart: [], totalAmount: 0, totalPrice: 0 })
        );
      } else {
        dispatch(cartActions.setCart(data));
      }
    }
    fetchCart(
      {
        url: "https://menel-shopping-website-default-rtdb.firebaseio.com/cart.json",
      },
      setCartData
    );
  }, [dispatch, fetchCart]);

  useEffect(() => {
    sendCart({
      url: "https://menel-shopping-website-default-rtdb.firebaseio.com/cart.json",
      method: "PUT",
      body: cart,
    });
  }, [cart, sendCart]);

  return (
    <div>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
