import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillForm(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', postalCode);
    await this.page.click('[data-test="continue"]');
  }

  async finish() {
    await this.page.click('[data-test="finish"]');
  }

  async isOrderComplete(): Promise<boolean> {
    return await this.page.isVisible('.complete-header');
  }
}