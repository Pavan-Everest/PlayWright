const { test , expect} = require("@playwright/test");

test('test automation view and cart brand products', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('heading', { name: 'AutomationExercise' }).locator('span')).toBeVisible();
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page.getByRole('heading', { name: 'Brands' })).toBeVisible();
    await page.getByRole('link', { name: '(6) Polo' }).click();
    await expect(page.getByRole('heading', { name: 'Brand - Polo Products' })).toBeVisible();
    await page.getByRole('link', { name: '(5) H&M' }).click();
    await expect(page.getByRole('heading', { name: 'Brand - H&M Products' })).toBeVisible();
});