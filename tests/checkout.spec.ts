import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { captureScreenshot } from '../utils/screenshotHelper';

test('deve adicionar produto ao carrinho e iniciar checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await captureScreenshot(page, '01-login-success');

  const productsPage = new ProductsPage(page);
  await productsPage.addToCart('Sauce Labs Backpack');
  await productsPage.goToCart();

  const cartPage = new CartPage(page);
  const produtoNoCarrinho = await cartPage.isProductInCart('Sauce Labs Backpack');
  expect(produtoNoCarrinho).toBe(true);

  await captureScreenshot(page, '02-product-in-cart');

  await cartPage.checkout();
  await expect(page).toHaveURL(/checkout-step-one/);

  await captureScreenshot(page, '03-checkout-start');
});

test('deve finalizar o pedido com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await captureScreenshot(page, '01-login-success');

  const productsPage = new ProductsPage(page);
  await productsPage.addToCart('Sauce Labs Backpack');
  await productsPage.goToCart();

  const cartPage = new CartPage(page);
  await cartPage.checkout();

  await captureScreenshot(page, '02-checkout-cart');

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillForm('Pamela', 'QA', '25600');
  await checkoutPage.finish();

  const pedidoFinalizado = await checkoutPage.isOrderComplete();
  expect(pedidoFinalizado).toBe(true);

  await captureScreenshot(page, '03-order-complete');
});
