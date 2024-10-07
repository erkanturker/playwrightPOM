import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://comattfrontend.onrender.com/');
  await page.goto('https://comattfrontend.onrender.com/login');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('admin');
  await page.getByPlaceholder('Enter username').press('Tab');
  await page.getByPlaceholder('Enter password').fill('12345');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Teachers' })).toBeVisible();
  await expect(page.locator('#root')).toContainText('Teachers4');
  

  await expect(page.locator('#root')).toContainText('Teachers4');
});