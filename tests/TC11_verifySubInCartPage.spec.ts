import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
  await page.getByRole('link', { name: ' Cart' }).click();
  await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Your email address' }).click();
  await page.getByRole('textbox', { name: 'Your email address' }).fill('pavan@abc.com');
  await page.getByRole('button', { name: '' }).click();
  await expect(page.locator('div').filter({ hasText: 'Subscription Get the most' }).nth(3)).toBeVisible();
});