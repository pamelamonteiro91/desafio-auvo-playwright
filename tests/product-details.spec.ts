import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { captureScreenshot } from '../utils/screenshotHelper';

test('deve validar título, preço e descrição do produto', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await captureScreenshot(page, '01-login-success');

  const productsPage = new ProductsPage(page);
  await productsPage.selectProduct('Sauce Labs Backpack');

  const detailsPage = new ProductDetailsPage(page);
  const title = await detailsPage.title();
  const price = await detailsPage.price();
  const description = await detailsPage.description();

  expect(title).toBe('Sauce Labs Backpack');
  expect(price).toMatch(/\$\d+\.\d{2}/);
  expect(description.length).toBeGreaterThan(10);

  await captureScreenshot(page, '02-product-details');
});
