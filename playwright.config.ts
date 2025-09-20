import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: true,
    screenshot: 'only-on-failure', // Captura screenshot em caso de falha
    video: 'retain-on-failure',    // Grava vídeo apenas se o teste falhar
    trace: 'on-first-retry',       // Gera trace na primeira repetição
    baseURL: 'https://www.saucedemo.com',
  },
});