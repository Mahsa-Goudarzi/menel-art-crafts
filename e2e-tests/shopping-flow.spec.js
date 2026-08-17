// testing
import { test, expect } from "@playwright/test";
// constants
import { PRODUCTS_BODY } from "./contants.js";

const productId = "p1";
const product = PRODUCTS_BODY.products[productId];
const productAmount = 3;
const emptyCart = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

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

test("user can add a product to the cart", async ({ page }) => {
  await page.goto("/products");

  await expect(page.getByTestId(`visit-${productId}`)).toBeVisible();

  await page.getByTestId(`visit-${productId}`).click();

  await expect(
    page.getByRole("heading", { name: product.title }),
  ).toBeVisible();

  const amountInput = page.getByTestId("product-amount");

  await amountInput.fill(`${productAmount}`);

  await page.getByTestId("add-to-cart").click();

  await expect(page.getByRole("link", { name: /Cart/ })).toContainText(
    `${productAmount}`,
  );

  await page.getByRole("link", { name: /Cart/ }).click();

  await expect(page.getByRole("link", { name: product.title })).toBeVisible();

  await expect(page.getByText(`x ${productAmount}`)).toBeVisible();

  await expect(
    page.getByText(`Total Price: $${product.price * productAmount}`),
  ).toBeVisible();
});
