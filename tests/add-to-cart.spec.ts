import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { captureScreenshot } from '../utils/screenshotHelper';

test('deve adicionar produto ao carrinho e verificar se está presente', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Validação de login bem-sucedido
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await captureScreenshot(page, '01-login-success');

  const productsPage = new ProductsPage(page);
  await productsPage.addToCart('Sauce Labs Backpack');
  await productsPage.goToCart();

  const cartPage = new CartPage(page);
  const produtoNoCarrinho = await cartPage.isProductInCart('Sauce Labs Backpack');
  expect(produtoNoCarrinho).toBe(true);

  await captureScreenshot(page, '02-product-in-cart');
});
