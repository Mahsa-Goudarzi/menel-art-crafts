// testing
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../utils/test-utils";
// component
import CartItem from "../../../src/components/Cart/CartItem";
// constants
import { PRODUCTS_DATA } from "../../utils/constants";

const item = {
  ...PRODUCTS_DATA[2],
  amount: 3,
};

describe("CartItem", () => {
  it("renders the product information", () => {
    render(<CartItem item={item} />, {
      preloadedState: {
        cart: {
          cart: [{ ...item }],
          totalAmount: item.amount,
          totalPrice: item.price * item.amount,
        },
      },
    });

    expect(screen.getByRole("link", { name: item.title })).toBeInTheDocument();

    expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
    expect(screen.getByText(`x ${item.amount}`)).toBeInTheDocument();
  });

  it("links to the product detail page", () => {
    render(<CartItem item={item} />, {
      preloadedState: {
        cart: {
          cart: [{ ...item }],
          totalAmount: item.amount,
          totalPrice: item.price * item.amount,
        },
      },
    });

    const link = screen.getByRole("link", {
      name: item.title,
    });

    expect(link).toHaveAttribute("href", `/products/${item.id}`);
  });

  it("increases the product quantity when the + button is clicked", async () => {
    const user = userEvent.setup();

    const { store } = render(<CartItem item={item} />, {
      preloadedState: {
        cart: {
          cart: [{ ...item }],
          totalAmount: item.amount,
          totalPrice: item.price * item.amount,
        },
      },
    });

    await user.click(screen.getByRole("button", { name: "+" }));

    const cart = store.getState().cart;

    expect(cart.totalAmount).toBe(item.amount + 1);
    expect(cart.totalPrice).toBe(item.price * (item.amount + 1));
    expect(cart.cart[0].amount).toBe(item.amount + 1);
  });

  it("decreases the product quantity when the - button is clicked", async () => {
    const user = userEvent.setup();

    const { store } = render(<CartItem item={item} />, {
      preloadedState: {
        cart: {
          cart: [{ ...item }],
          totalAmount: item.amount,
          totalPrice: item.price * item.amount,
        },
      },
    });

    await user.click(screen.getByRole("button", { name: "−" }));

    const cart = store.getState().cart;

    expect(cart.totalAmount).toBe(item.amount - 1);
    expect(cart.totalPrice).toBe(item.price * (item.amount - 1));
    expect(cart.cart[0].amount).toBe(item.amount - 1);
  });

  it("removes the product when the remove button is clicked", async () => {
    const user = userEvent.setup();

    const { store } = render(<CartItem item={item} />, {
      preloadedState: {
        cart: {
          cart: [{ ...item }],
          totalAmount: item.amount,
          totalPrice: item.price * item.amount,
        },
      },
    });

    await user.click(screen.getByRole("button", { name: "×" }));

    const cart = store.getState().cart;

    expect(cart.totalAmount).toBe(0);
    expect(cart.totalPrice).toBe(0);
    expect(cart.cart).toHaveLength(0);
  });
});
