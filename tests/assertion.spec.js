import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://web.facebook.com/');

  
  await expect(page).toHaveTitle(/Facebook/);
});