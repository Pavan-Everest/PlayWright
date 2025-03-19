import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
  await page.locator('.choose > .nav > li > a').first().click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').fill('4');
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await expect(page.getByRole('link', { name: 'View Cart' })).toBeVisible();
  await page.getByRole('link', { name: 'View Cart' }).click();
  const quan = await page.locator('//tr[@id="product-1"]/td[4]/button').textContent();
  console.log(quan);
  expect(quan).toEqual('4');
});

// Add a assertion to verify the quantity of the product in the cart
// add a assertion to verify the page URL
// add 