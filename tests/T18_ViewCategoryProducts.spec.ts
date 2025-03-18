const { test , expect} = require("@playwright/test");

test('test automation View category products', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('heading', { name: 'AutomationExercise' }).locator('span')).toBeVisible();
    await page.getByRole('link', { name: ' Women' }).click();
    await page.getByRole('link', { name: 'Dress' }).click();
    await expect(page.getByRole('heading', { name: 'Women - Dress Products' })).toBeVisible();
    await page.getByRole('link', { name: ' Men' }).click();
    await page.getByRole('link', { name: 'Tshirts' }).click();
    await expect(page.getByRole('heading', { name: 'Men - Tshirts Products' })).toBeVisible();
});
