import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { captureScreenshot } from '../utils/screenshotHelper';

test.describe('Login', () => {
  test('deve fazer login com credenciais válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await captureScreenshot(page, '01-login-success');
  });

  test('deve exibir erro com credenciais inválidas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('usuario_invalido', 'senha_errada');

    const erroVisivel = await loginPage.isLoginErrorVisible();
    expect(erroVisivel).toBe(true);

    await captureScreenshot(page, '02-login-error');
  });
});
