import { test, expect } from '@playwright/test';

test('TC8 - Verify all Products and product detail page ', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
  await page.locator('.choose > .nav > li > a').first().click();
  await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
  await expect(page.getByText('Category: Women > Tops')).toBeVisible();
  await expect(page.getByText('Rs.')).toBeVisible();
  await expect(page.getByText('Availability:')).toBeVisible();
  await expect(page.getByText('Condition:')).toBeVisible();
  await expect(page.getByText('Brand:')).toBeVisible();
});