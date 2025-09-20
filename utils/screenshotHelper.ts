// utils/screenshotHelper.ts
import { Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export async function captureScreenshot(page: Page, name: string) {
  const folderPath = path.resolve('docs/screenshots');
  const filePath = path.join(folderPath, `${name}.png`);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  await page.screenshot({ path: filePath });
  console.log(`📸 Screenshot salva em: ${filePath}`);
}
