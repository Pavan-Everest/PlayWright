import { test, expect } from '@playwright/test';

test('Test Case 21: Add review on product', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('[data-qa="login-email"]').fill('hemilturakhia@gmail.com');
    await page.locator('[data-qa="login-password"]').fill('1234abcd');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('a[href="/products"]').click();
    await expect(page).toHaveURL(/.*\/products/);
    await page.locator('a[href="/product_details/1"]').click();
    await expect(page).toHaveURL(/.*\/product_details/);
    await page.locator('#name').fill('Hemil Turakhia');
    await page.locator('#email').fill('hemilturakhia@gmail.com');
    await page.waitForTimeout(5000); // Waits for 3 seconds
    await page.locator('#review').fill('Very good product');
    await page.locator('#button-review').click();
});
