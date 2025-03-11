import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('pavan@abc.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('changeme1');
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('changeme');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  await expect(page.getByText('Logged in as Pavan')).toBeVisible();
  await page.locator('.overlay-content > .btn').first().click();
  await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});