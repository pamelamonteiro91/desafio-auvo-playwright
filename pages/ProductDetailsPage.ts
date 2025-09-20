import { Page } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async title(): Promise<string> {
    return await this.page.textContent('.inventory_details_name');
  }

  async price(): Promise<string> {
    return await this.page.textContent('.inventory_details_price');
  }

  async description(): Promise<string> {
    return await this.page.textContent('.inventory_details_desc');
  }
}