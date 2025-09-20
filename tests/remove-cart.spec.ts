import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { captureScreenshot } from '../utils/screenshotHelper';

const produtos = [
  'Sauce Labs Backpack',
  'Sauce Labs Bike Light',
  'Sauce Labs Bolt T-Shirt'
];

test('deve remover todos os produtos do carrinho e validar que está vazio', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const productsPage = new ProductsPage(page);
  for (const produto of produtos) {
    await productsPage.addToCart(produto);
  }

  await captureScreenshot(page, '01-products-added');

  await productsPage.goToCart();

  const cartPage = new CartPage(page);
  for (const produto of produtos) {
    const visivel = await cartPage.isProductInCart(produto);
    expect(visivel).toBe(true);
    await cartPage.removeFromCart(produto);
  }

  const vazio = await cartPage.isCartEmpty();
  expect(vazio).toBe(true);

  // Captura visual do carrinho vazio
  await captureScreenshot(page, '02-cart-empty');
});
