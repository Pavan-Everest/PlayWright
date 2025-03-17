import { test, expect } from '@playwright/test';

test('TC9 - Search product', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('jeans');
  await page.getByRole('button', { name: '' }).click();
  await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
});