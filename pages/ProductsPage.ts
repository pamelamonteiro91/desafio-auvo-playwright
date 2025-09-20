import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart(productName: string) {
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

    await this.page.click(`[data-test="add-to-cart-${id}"]`);
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async selectProduct(productName: string) {
    await this.page.click(`text=${productName}`);
  }

  async getProductNames(): Promise<string[]> {
    return await this.page.$$eval('.inventory_item_name', elements =>
      elements.map(el => el.textContent ?? '')
    );
  }
}