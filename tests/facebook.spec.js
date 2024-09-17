import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://web.facebook.com/');
  await page.getByTestId('open-registration-form-button').click();
  await page.getByPlaceholder('First name').fill('George ');
  await page.getByLabel('Surname').click();
  await page.getByLabel('Surname').fill('Adaramola');
  await page.getByLabel('Mobile number or email address').click();
  await page.getByLabel('Mobile number or email address').fill('09031876745');
  await page.getByLabel('New password').click();
  await page.getByLabel('New password').fill('password');
  await page.locator('#day').selectOption({index: 10});
  await page.locator('#month').selectOption({label: 'Jul'});
  await page.locator('#year').selectOption({index: 21});
  await page.locator('span').filter({ hasText: /^Male$/ }).locator('#sex').check();
  await page.getByRole('button', { name: 'Sign Up' }).click();
});