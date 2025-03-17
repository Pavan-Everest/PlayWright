import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await expect(page.getByRole("link", { name: " Products" })).toBeVisible();
  await page.locator('a[href="/products"]').click();
  await page.waitForTimeout(3000);
  await page.locator("//p[text()='Blue Top']/following::a[text()='Add to cart']").first().click()
  await expect(page.getByRole("button", { name: "Continue Shopping" })).toBeVisible();
  await page.getByRole("button", { name: "Continue Shopping" }).click();
  await page.locator("//p[text()='Men Tshirt']/following::a[text()='Add to cart']").first().click()
  await page.getByRole("button", { name: "Continue Shopping" }).click();
  await page.getByRole("link", { name: " Cart" }).click();
  await expect(page.getByRole("link", { name: "Blue Top" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Men Tshirt" })).toBeVisible();
  await page.getByText("Proceed To Checkout").click();
});
