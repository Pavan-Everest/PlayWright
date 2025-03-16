import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('deeks.test+6@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('button', { name: 'Login' }).click();
});