import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.konga.com/');

   // Expects page to have a heading with the name of KONGA.
   await expect(page.getByRole('link', { name: 'Smiling face of Konga logo.' })).toBeVisible();

   await page.getByRole('searchbox', { name: 'Search for products, brands' }).click();
   await page.getByRole('searchbox', { name: 'Search for products, brands' }).fill('Nike Sneakers ');
   await page.getByRole('button', { name: 'Search' }).click();
   await page.getByRole('link', { name: 'Gucci Nike Sneakers ₦' }).click();
   await page.locator('div').filter({ hasText: /^Add To CartSave For Later$/ }).getByRole('button').click();
   await page.getByRole('link', { name: 'Continue to Checkout' }).click();


  
});



 



