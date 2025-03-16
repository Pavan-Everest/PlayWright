import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('deeks.test+6@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Logged in as deeks')).toBeVisible();
    // await page.getByRole('link', { name: 'Logout' }).click();
    //await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
});