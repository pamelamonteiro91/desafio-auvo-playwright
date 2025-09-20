import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { captureScreenshot } from '../utils/screenshotHelper';

test('deve listar os produtos após login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await captureScreenshot(page, '01-login-success');

  const productsPage = new ProductsPage(page);
  const productNames = await productsPage.getProductNames();

  expect(productNames.length).toBeGreaterThan(0);
  expect(productNames).toContain('Sauce Labs Backpack');

  await captureScreenshot(page, '02-products-list');
});
