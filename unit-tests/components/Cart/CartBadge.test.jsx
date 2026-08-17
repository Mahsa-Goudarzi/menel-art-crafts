// testing
import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import { render, screen, act } from "../../utils/test-utils";
// component
import CartBadge from "../../../src/components/Cart/CartBadge";
// redux
import { cartActions } from "../../../src/store/cart-slice";
// constants
import { PRODUCTS_DATA } from "../../utils/constants";

const item1 = { ...PRODUCTS_DATA[1], amount: 3 };
const item2 = { ...PRODUCTS_DATA[3], amount: 2 };

describe("cart badge", () => {
  it("renders the current cart amount", () => {
    render(<CartBadge />, {
      preloadedState: {
        cart: {
          cart: [{ ...item1, ...item2 }],
          totalAmount: item1.amount + item2.amount,
          totalPrice: item1.amount * item1.price + item2.amount * item2.price,
        },
      },
    });

    expect(screen.getByText(item1.amount + item2.amount)).toBeInTheDocument();
  });
});

describe("cart badge: bump animation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("bumps when a product is added to the empty cart", () => {
    const { store } = render(<CartBadge />, {
      preloadedState: {
        cart: {
          cart: [],
          totalAmount: 0,
          totalPrice: 0,
        },
      },
    });

    const badge = screen.getByTestId("cart-badge");

    expect(badge.className).not.toMatch(/bump/);

    act(() => {
      store.dispatch(
        cartActions.addProduct({
          ...item1,
        }),
      );
    });

    expect(badge.className).toMatch(/bump/);
  });

  it("bump is removed after 300ms of product addition in cart", () => {
    const { store } = render(<CartBadge />, {
      preloadedState: {
        cart: {
          cart: [],
          totalAmount: 0,
          totalPrice: 0,
        },
      },
    });

    const badge = screen.getByTestId("cart-badge");

    act(() => {
      store.dispatch(
        cartActions.addProduct({
          ...item1,
        }),
      );
    });

    expect(badge.className).toMatch(/bump/);

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(badge.className).not.toMatch(/bump/);
  });

  it("bump is still there before 300ms is passed", () => {
    const { store } = render(<CartBadge />, {
      preloadedState: {
        cart: {
          cart: [],
          totalAmount: 0,
          totalPrice: 0,
        },
      },
    });

    const badge = screen.getByTestId("cart-badge");

    act(() => {
      store.dispatch(
        cartActions.addProduct({
          ...item1,
        }),
      );
    });

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(badge.className).toMatch(/bump/);
  });

  it("bumps when one product with amount > 1 is removed from the cart and bump is removed after 300ms", () => {
    const item = { ...PRODUCTS_DATA[4], amount: 3 };

    const { store } = render(<CartBadge />, {
      preloadedState: {
        cart: {
          cart: [{ ...item }],
          totalAmount: item.amount,
          totalPrice: item.price * item.amount,
        },
      },
    });

    const badge = screen.getByTestId("cart-badge");

    act(() => {
      store.dispatch(cartActions.removeProduct(item));
    });

    expect(badge.className).toMatch(/bump/);

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(badge.className).not.toMatch(/bump/);
  });

  it("does not bump when the cart gets empty", () => {
    const { store } = render(<CartBadge />, {
      preloadedState: {
        cart: {
          cart: [{ ...item1 }],
          totalAmount: item1.amount,
          totalPrice: item1.price * item1.amount,
        },
      },
    });

    const badge = screen.getByTestId("cart-badge");

    act(() => {
      store.dispatch(cartActions.removeTotalProduct(item1));
    });
    expect(badge.className).not.toMatch(/bump/);
  });
});
