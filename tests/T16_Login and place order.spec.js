const { test , expect} = require("@playwright/test");


test('test automation login and place order', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('heading', { name: 'AutomationExercise' }).locator('span')).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('divya_123@gmail.com');
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('abcd');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('.choose > .nav > li > a').first().click();
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.getByRole('link', { name: ' Cart' }).click();
    await page.getByText('Proceed To Checkout').click();
    await expect(page.getByRole('link', { name: 'Blue Top' })).toBeVisible();
    await expect(page.getByRole('row', { name: 'Total Amount Rs.' }).getByRole('paragraph')).toBeVisible();
    await page.getByRole('link', { name: 'Place Order' }).click();
    await page.locator('input[name="name_on_card"]').click();
    await page.locator('input[name="name_on_card"]').fill('dddd');
    await page.locator('input[name="card_number"]').click();
    await page.locator('input[name="card_number"]').fill('432565437654876');
    await page.getByRole('textbox', { name: 'ex.' }).click();
    await page.getByRole('textbox', { name: 'ex.' }).fill('123');
    await page.getByRole('textbox', { name: 'MM' }).click();
    await page.getByRole('textbox', { name: 'MM' }).fill('12');
    await page.getByRole('textbox', { name: 'YYYY' }).click();
    await page.getByRole('textbox', { name: 'YYYY' }).fill('2028');
    await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
    await page.getByRole('link', { name: 'Continue' }).click();
    await page.getByRole('link', { name: ' Delete Account' }).click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();
    await expect(page.getByRole('heading', { name: 'AutomationExercise' }).locator('span')).toBeVisible();
});
