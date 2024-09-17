import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://web.facebook.com/');
  await page.getByTestId('open-registration-form-button').click();
  await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('George');
  await page.getByPlaceholder('First name').press('ArrowRight');
  await page.getByLabel('Surname').click();
  await page.getByLabel('Surname').fill('Adaramola');
  await page.getByLabel('Mobile number or email address').click();
  await page.getByLabel('Mobile number or email address').fill('09031876745');
  await page.getByLabel('New password').click();
  await page.getByLabel('New password').fill('george');
  await page.getByLabel('Day').selectOption('10');
  await page.getByLabel('Month').selectOption('7');
  await page.getByLabel('Year').selectOption('2003');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('button', { name: 'Sign Up' }).click();
});