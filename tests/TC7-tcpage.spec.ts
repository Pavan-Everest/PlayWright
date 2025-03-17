import { test, expect } from '@playwright/test';

test('TC7 - Verify test cases page', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  await page.getByRole('link', { name: ' Test Cases' }).dblclick();
  await expect(page.locator('b')).toBeVisible();
});