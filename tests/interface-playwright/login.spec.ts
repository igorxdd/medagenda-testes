import { test, expect } from '@playwright/test';
import { LoginPage } from '../shared/pages/LoginPage';

test('SMOKE-UI-001 - RF01 apresenta os controles de login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await expect(page.getByLabel('E-mail', { exact: true })).toBeEditable();
  await expect(page.getByLabel('Senha', { exact: true })).toHaveAttribute('type', 'password');
  await expect(page.getByRole('button', { name: 'Entrar', exact: true })).toBeEnabled();
});
