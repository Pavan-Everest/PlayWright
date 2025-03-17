import { test, expect } from '@playwright/test';

test('Test Case 22: Add to cart from Recommended items', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('[data-qa="login-email"]').fill('hemilturakhia@gmail.com');
    await page.locator('[data-qa="login-password"]').fill('1234abcd');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('a[href="/logout"]')).toBeVisible();
    await page.locator('h2:has-text("recommended items")').scrollIntoViewIfNeeded();
    // await page.waitForTimeout(2000); // Small delay to ensure elements load
    const recommendedProduct = page.locator('.recommended_items .productinfo').first();
    await recommendedProduct.locator('.add-to-cart').click();
    const successToast = page.locator('.modal-content').filter({ hasText: 'Added' });
    await successToast.waitFor({ state: 'visible', timeout: 5000 });
    await expect(successToast).toContainText('Added');
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    // await page.waitForTimeout(5000); // Waits for 3 seconds
    await page.getByRole('link', { name: ' Cart' }).click();
    const cartProduct = page.locator('.cart_description').first();
    await expect(cartProduct).toBeVisible();
});
