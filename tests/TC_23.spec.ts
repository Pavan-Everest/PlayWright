import { test, expect } from '@playwright/test';

test('Test Case 23: Verify address details in checkout page', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
    await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('Hemil');
    const randomText = Math.floor(Math.random() * 10000);
    const randomEmail = `hemil@${randomText}.com`;
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(randomEmail);
    await page.getByRole('button', { name: 'Signup' }).click();
    await expect(page.getByText('Enter Account Information')).toBeVisible();
    await page.getByRole('radio', { name: 'Mr.' }).check();
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill('1234abcd');
    await page.locator('#days').selectOption('23');
    await page.locator('#months').selectOption('10');
    await page.locator('#years').selectOption('1997');
    await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    await page.getByRole('textbox', { name: 'Last name *' }).click();
    await page.getByRole('textbox', { name: 'Last name *' }).fill('Turakhia');
    await page.getByRole('textbox', { name: 'First name *' }).click();
    await page.getByRole('textbox', { name: 'First name *' }).fill('Hemil');
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Kukatapally');
    await page.getByRole('textbox', { name: 'State *' }).click();
    await page.getByRole('textbox', { name: 'State *' }).fill('telangana');
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('hyderabad');
    await page.locator('#zipcode').click();
    await page.locator('#zipcode').fill('500000');
    await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('1234567890');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.getByText('Account Created!')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();
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
    await page.getByText('Proceed To Checkout').click();
    const billingAddressLocator = page.locator('#address_delivery');
    const billingAddressText = await billingAddressLocator.innerText();
    const formattedBillingAddress = billingAddressText.replace(/\s+/g, ' ').trim();
    expect(formattedBillingAddress).toContain('Hemil Turakhia');
    expect(formattedBillingAddress).toContain('Kukatapally');
    expect(formattedBillingAddress).toContain('hyderabad telangana 500000');
    expect(formattedBillingAddress).toContain('1234567890');
    expect(formattedBillingAddress).toContain('India');
    const shippingAddress = page.locator('#address_invoice')
    const shippingAddressText = await shippingAddress.innerText();
    const formattedShippingAddress = shippingAddressText.replace(/\s+/g, ' ').trim();
    expect(formattedShippingAddress).toContain('Hemil Turakhia');
    expect(formattedShippingAddress).toContain('Kukatapally');
    expect(formattedShippingAddress).toContain('hyderabad telangana 500000');
    expect(formattedShippingAddress).toContain('1234567890');
    expect(formattedShippingAddress).toContain('India');
    await page.getByRole('link', { name: ' Delete Account' }).click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
});
