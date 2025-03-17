import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  //adding products to cart
  await page.locator("//p[text()='Blue Top']/following::a[text()='Add to cart']").first().click()
  await expect(page.getByRole("button", { name: "Continue Shopping" })).toBeVisible();
  await page.getByRole("button", { name: "Continue Shopping" }).click();
  await page.locator("//p[text()='Men Tshirt']/following::a[text()='Add to cart']").first().click()
  await page.getByRole("button", { name: "Continue Shopping" }).click();
  //viewing cart
  await page.getByRole('link', { name: ' Cart' }).click();
  await expect(page.getByText('Shopping Cart')).toBeVisible();
  //proceeding to checkout
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Register / Login' }).click();
  // login
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('pavan@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('changeme');

  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.locator('//a[@href="/payment"]').first().click(); // failing here


  await page.locator('input[name="name_on_card"]').fill('Pavan');
  await page.locator('input[name="card_number"]').fill('1234567890');
  await page.getByRole('textbox', { name: 'ex.' }).fill('311');
  await page.getByRole('textbox', { name: 'MM' }).click();
  await page.getByRole('textbox', { name: 'MM' }).fill('021');
  await page.getByRole('textbox', { name: 'YYYY' }).click();
  await page.getByRole('textbox', { name: 'YYYY' }).fill('9898');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await expect(page.getByText('Order Placed!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
});