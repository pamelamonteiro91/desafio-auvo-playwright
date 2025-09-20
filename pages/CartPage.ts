import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Verifica se o produto está no carrinho
  async isProductInCart(productName: string): Promise<boolean> {
    return await this.page.isVisible(`text=${productName}`);
  }

  // Realiza o checkout
  async checkout() {
    await this.page.click('[data-test="checkout"]');
  }

  // Remove o produto do carrinho
  async removeFromCart(productName: string) {
    const idMap: Record<string, string> = {
      'Sauce Labs Backpack': 'sauce-labs-backpack',
      'Sauce Labs Bike Light': 'sauce-labs-bike-light',
      'Sauce Labs Bolt T-Shirt': 'sauce-labs-bolt-t-shirt',
      'Sauce Labs Fleece Jacket': 'sauce-labs-fleece-jacket',
      'Sauce Labs Onesie': 'sauce-labs-onesie',
      'Test.allTheThings() T-Shirt (Red)': 'test.allthethings()-t-shirt-(red)'
    };

    const id = idMap[productName];
    if (!id) throw new Error(`Produto não mapeado: ${productName}`);

    await this.page.click(`[data-test="remove-${id}"]`);
  }

  // Verifica se o carrinho está vazio
  async isCartEmpty(): Promise<boolean> {
    const items = await this.page.$$('.cart_item');
    return items.length === 0;
  }
}
