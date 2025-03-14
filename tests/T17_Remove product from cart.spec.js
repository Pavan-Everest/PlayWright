const { test , expect} = require("@playwright/test");

test('test automation Remove product from cart', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('heading', { name: 'AutomationExercise' }).locator('span')).toBeVisible();
    await page.locator('.choose > .nav > li > a').first().click();
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.getByRole('link', { name: ' Cart' }).click();
    await expect(page.getByRole('cell', { name: 'Blue Top Women > Tops' })).toBeVisible();
    await page.getByRole('cell', { name: '' }).locator('a').click();
    await expect(page.getByText('Cart is empty!')).toBeVisible();
});