// testing
import { describe, expect, it } from "vitest";
// redux
import cartReducer, { cartActions } from "../../src/store/cart-slice";
// constants
import { initialCartState } from "../../src/store/cart-slice";
import { PRODUCTS_DATA } from "../utils/constants";

describe("cart slice: add products", () => {
  it("adds one/multiple units of one product to an empty cart", () => {
    const numOfAdds = 1;
    const item = { ...PRODUCTS_DATA[4], amount: numOfAdds };

    const action = cartActions.addProduct(item);

    const state = cartReducer(initialCartState, action);

    expect(state.totalAmount).toBe(numOfAdds);
    expect(state.totalPrice).toBe(item.price * numOfAdds);
    expect(state.cart).toHaveLength(1);
    expect(state.cart[0]).toEqual(item);
  });

  it("increases the amount correctly when adding more of an existing product", () => {
    const product = PRODUCTS_DATA[3];
    const initialAmount = 1;
    const numOfAdds = 2;

    const initialState = {
      cart: [
        {
          ...product,
          amount: initialAmount,
        },
      ],
      totalAmount: initialAmount,
      totalPrice: product.price * initialAmount,
    };

    const action = cartActions.addProduct({
      ...product,
      amount: numOfAdds,
    });

    const state = cartReducer(initialState, action);

    expect(state.totalAmount).toBe(initialAmount + numOfAdds);
    expect(state.totalPrice).toBe(product.price * (initialAmount + numOfAdds));
    expect(state.cart).toHaveLength(1);
    expect(state.cart[0].amount).toBe(initialAmount + numOfAdds);
  });

  it("adds two different products to the cart", () => {
    const product1 = PRODUCTS_DATA[0];
    const product2 = PRODUCTS_DATA[1];

    const action1 = cartActions.addProduct({ ...product1, amount: 1 });
    const action2 = cartActions.addProduct({ ...product2, amount: 1 });

    const state = cartReducer(initialCartState, action1);
    const state2 = cartReducer(state, action2);

    expect(state2.totalAmount).toBe(2);
    expect(state2.totalPrice).toBe(product1.price + product2.price);
    expect(state2.cart).toHaveLength(2);
    expect(state2.cart[0]).toEqual({ ...product1, amount: 1 });
    expect(state2.cart[1]).toEqual({ ...product2, amount: 1 });
  });
});

describe("cart slice: remove products", () => {
  it("removes one quantity of an existing product with amount > 1", () => {
    const product1 = PRODUCTS_DATA[1];
    const ptoduct2 = PRODUCTS_DATA[0];
    const initialAmountPro1 = 4;
    const initialAmountPro2 = 1;

    const initialState = {
      cart: [
        {
          ...product1,
          amount: initialAmountPro1,
        },
        {
          ...ptoduct2,
          amount: initialAmountPro2,
        },
      ],
      totalAmount: initialAmountPro1 + initialAmountPro2,
      totalPrice:
        product1.price * initialAmountPro1 + ptoduct2.price * initialAmountPro2,
    };

    const state = cartReducer(
      initialState,
      cartActions.removeProduct({
        id: product1.id,
        price: product1.price,
      }),
    );

    expect(state.totalAmount).toBe(initialAmountPro1 + initialAmountPro2 - 1);
    expect(state.totalPrice).toBe(
      product1.price * (initialAmountPro1 - 1) +
        ptoduct2.price * initialAmountPro2,
    );
    expect(state.cart).toHaveLength(2);
    expect(state.cart[0].amount).toBe(initialAmountPro1 - 1);
  });

  it("removes the product when its amount reaches zero", () => {
    const product = PRODUCTS_DATA[2];

    const initialState = {
      cart: [
        {
          ...product,
          amount: 1,
        },
      ],
      totalAmount: 1,
      totalPrice: product.price,
    };

    const state = cartReducer(
      initialState,
      cartActions.removeProduct({
        id: product.id,
        price: product.price,
      }),
    );

    expect(state.totalAmount).toBe(0);
    expect(state.totalPrice).toBe(0);
    expect(state.cart).toHaveLength(0);
  });

  it("removes all quantities of a product of any amount >= 1", () => {
    const product1 = PRODUCTS_DATA[3];
    const product2 = PRODUCTS_DATA[1];
    const initialAmountPro1 = 10;
    const initialAmountPro2 = 2;

    const initialState = {
      cart: [
        {
          ...product1,
          amount: initialAmountPro1,
        },
        {
          ...product2,
          amount: initialAmountPro2,
        },
      ],
      totalAmount: initialAmountPro1 + initialAmountPro2,
      totalPrice:
        product1.price * initialAmountPro1 + product2.price * initialAmountPro2,
    };

    const state = cartReducer(
      initialState,
      cartActions.removeTotalProduct({
        id: product1.id,
        price: product1.price,
        amount: initialAmountPro1,
      }),
    );

    expect(state.totalAmount).toBe(initialAmountPro2);
    expect(state.totalPrice).toBe(product2.price * initialAmountPro2);
    expect(state.cart).toHaveLength(1);
  });
});

describe("cart slice: set cart", () => {
  it("sets the cart state", () => {
    const product = PRODUCTS_DATA[1];
    const productAmount = 3;

    const cart = {
      cart: [
        {
          ...product,
          amount: productAmount,
        },
      ],
      totalAmount: productAmount,
      totalPrice: product.price * productAmount,
    };

    const state = cartReducer(initialCartState, cartActions.setCart(cart));

    expect(state).toEqual(cart);
  });
});
