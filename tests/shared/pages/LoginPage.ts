import { expect, type Page } from '@playwright/test';
import { config } from '../support/config';

export class LoginPage {
  constructor(readonly page: Page) {}

  async open() {
    await this.page.goto(`${config.webBaseUrl}/login`);
    await expect(this.page.getByRole('heading', { name: 'Entrar', exact: true })).toBeVisible();
  }

  async signIn(email: string, password: string) {
    await this.page.getByLabel('E-mail', { exact: true }).fill(email);
    await this.page.getByLabel('Senha', { exact: true }).fill(password);
    await this.page.getByRole('button', { name: 'Entrar', exact: true }).click();
  }

  async expectAuthenticated() {
    await expect(this.page.getByRole('button', { name: 'Sair', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: /^Olá,/ })).toBeVisible();
    await expect(this.page).toHaveURL(`${config.webBaseUrl}/`);
  }
}
