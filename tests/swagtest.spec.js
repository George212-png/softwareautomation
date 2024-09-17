import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.getByText('Name (A to Z)Name (A to Z)').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
});