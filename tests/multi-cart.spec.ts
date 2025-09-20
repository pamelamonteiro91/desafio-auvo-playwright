import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { captureScreenshot } from '../utils/screenshotHelper';

const produtos = [
  { nome: 'Sauce Labs Backpack', preco: 29.99 },
  { nome: 'Sauce Labs Bike Light', preco: 9.99 },
  { nome: 'Sauce Labs Bolt T-Shirt', preco: 15.99 }
];

test('deve adicionar múltiplos produtos ao carrinho e validar preço total', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await captureScreenshot(page, '01-login-success');

  const productsPage = new ProductsPage(page);
  for (const produto of produtos) {
    await productsPage.addToCart(produto.nome);
  }

  await captureScreenshot(page, '02-products-added');

  await productsPage.goToCart();

  const cartPage = new CartPage(page);
  for (const produto of produtos) {
    const visivel = await cartPage.isProductInCart(produto.nome);
    expect(visivel).toBe(true);
  }

  await captureScreenshot(page, '03-cart-with-products');

  // Validar o preço total
  const precos = await page.$$eval('.inventory_item_price', elements =>
    elements.map(el => parseFloat(el.textContent?.replace('$', '') || '0'))
  );

  const precoTotal = precos.reduce((acc, val) => acc + val, 0);
  const esperado = produtos.reduce((acc, p) => acc + p.preco, 0);

  expect(precoTotal).toBeCloseTo(esperado, 2);

  await captureScreenshot(page, '04-total-price-validated');
});
