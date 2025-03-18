import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Contact us' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('testte');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('test');
  await page.getByRole('textbox', { name: 'Email', exact: true }).press('Enter');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('test2@test.com');
  await page.getByRole('textbox', { name: 'Email', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Subject' }).fill('testing');
  await page.getByRole('textbox', { name: 'Subject' }).press('Tab');
  await page.getByRole('textbox', { name: 'Your Message Here' }).fill('playwright');
  await page.locator('input[name="upload_file"]').click();
  await page.locator('input[name="upload_file"]').setInputFiles('/Users/ravishankar/Desktop/Image4.jpeg');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#contact-page').getByText('Success! Your details have')).toBeVisible();
});