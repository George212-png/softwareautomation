import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('https://x.com/');
  await page.getByTestId('signupButton').click();
  await page.getByLabel('Name').fill('adaramola George');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('adaramolageorge0300@gmail.com');
  await page.getByLabel('Month').selectOption('7');
  await page.getByLabel('Day').selectOption('10');
  await page.getByText('Year2024202320222021202020192018201720162015201420132012201120102009200820072006').click();
  await page.getByLabel('Year').selectOption('2003');
  await page.getByTestId('ocfSignupNextLink').click();
  await page.goto('https://x.com/');
});