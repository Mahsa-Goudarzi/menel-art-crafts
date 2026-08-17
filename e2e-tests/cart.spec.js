// testing
import { test, expect } from "@playwright/test";
// constants
import { PRODUCTS_BODY, emptyCart } from "./contants.js";

const productId = "p3";
const product = PRODUCTS_BODY.products[productId];

test.beforeEach(async ({ page }) => {
  await page.route(
    "**/menel-shopping-website-default-rtdb.firebaseio.com/products.json",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(PRODUCTS_BODY),
      });
    },
  );

  await page.route(
    "**/menel-shopping-website-default-rtdb.firebaseio.com/cart.json",
    async (route) => {
      if (route.request().method() === "GET") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify(emptyCart),
        });
        return;
      }

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({}),
      });
    },
  );
});

test("user can increase, decrease, and remove a product from the cart", async ({
  page,
}) => {
  await page.goto("/products");

  await expect(page.getByTestId(`add-to-cart-${productId}`)).toBeVisible();

  await page.getByTestId(`add-to-cart-${productId}`).click();

  await page.getByRole("link", { name: /Cart/ }).click();

  const cartItem = page.getByRole("listitem");

  await expect(cartItem).toContainText(product.title);
  await expect(cartItem).toContainText("x 1");

  // Increase quantity
  await cartItem.getByRole("button", { name: "+" }).click();

  await expect(cartItem).toContainText("x 2");

  // Decrease quantity
  await cartItem.getByRole("button", { name: "−" }).click();

  await expect(cartItem).toContainText("x 1");

  // Remove the product completely
  await cartItem.getByRole("button", { name: "×" }).click();

  await expect(page.getByText("No items in your cart yet!")).toBeVisible();
});
