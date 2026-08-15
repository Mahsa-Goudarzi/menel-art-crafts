// testing
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../utils/test-utils";
// component
import ProductItem from "../../../src/components/Products/ProductItem";
// constants
import { PRODUCTS_DATA } from "../../utils/constants";

const product = PRODUCTS_DATA[3];

describe("ProductItem component", () => {
  it("renders the product information", () => {
    render(<ProductItem item={product} />);

    expect(screen.getByRole("img", { name: product.alt })).toBeInTheDocument();

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`${product.price} $`)).toBeInTheDocument();
  });

  it("links to the product detail page", () => {
    render(<ProductItem item={product} />);

    const link = screen.getByRole("link", { name: "Visit" });

    expect(link).toHaveAttribute("href", `/products/${product.id}`);
  });

  it("adds the product to the cart when Add to cart is clicked", async () => {
    // Arrange
    const user = userEvent.setup();

    const { store } = render(<ProductItem item={product} />);

    // Act
    await user.click(screen.getByRole("button", { name: "Add to cart" }));

    // Assert
    const cart = store.getState().cart;

    expect(cart.totalAmount).toBe(1);
    expect(cart.totalPrice).toBe(product.price);
    expect(cart.cart).toHaveLength(1);
    expect(cart.cart[0]).toMatchObject({
      id: product.id,
      title: product.title,
      price: product.price,
      amount: 1,
    });
  });
});
