// testing
import { render } from "@testing-library/react";

// redux and store
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import cartReducer from "../../src/store/cart-slice";

function customRender(ui, { preloadedState, ...options } = {}) {
  const testStore = configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState,
  });

  function Wrapper({ children }) {
    return (
      <Provider store={testStore}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  }

  return {
    store: testStore,
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
}

export * from "@testing-library/react";
export { customRender as render };
