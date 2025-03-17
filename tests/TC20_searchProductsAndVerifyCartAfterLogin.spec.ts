import { test, expect } from '@playwright/test';

test('Test Case 20: Search Products and Verify Cart After Login', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('[data-qa="login-email"]').fill('hemilturakhia@gmail.com');
    await page.locator('[data-qa="login-password"]').fill('1234abcd');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('//a[@href="/products"]').click();
    await page.waitForSelector('input[name="search"]', { timeout: 10000 });
    await page.locator('input[name="search"]').fill('T-Shirt');
    // await page.waitForTimeout(3000); // Waits for 3 seconds
    await page.locator('#submit_search').click();
    // await page.waitForTimeout(3000); // Waits for 3 seconds
    const productTitle = await page.locator('.productinfo p').first().textContent();
    expect(productTitle).toContain('T-Shirt');
    await page.locator('.add-to-cart').first().click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    // await page.waitForTimeout(3000); // Waits for 3 seconds
    await page.getByRole('link', { name: ' Cart' }).click();
    // await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.locator('[data-qa="login-email"]')).toBeVisible();
});