import { After, Before, Status, World, setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { chromium, type Browser, type BrowserContext, type Page } from '@playwright/test';
import { LoginPage } from '../shared/pages/LoginPage';

export class MedAgendaWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  login!: LoginPage;
}

setWorldConstructor(MedAgendaWorld);
setDefaultTimeout(30000);

Before(async function (this: MedAgendaWorld) {
  this.browser = await chromium.launch({ channel: 'chrome' });
  this.context = await this.browser.newContext({ locale: 'pt-BR', timezoneId: 'America/Sao_Paulo' });
  this.page = await this.context.newPage();
  this.login = new LoginPage(this.page);
});

After(async function (this: MedAgendaWorld, { result }) {
  try {
    if (result?.status === Status.FAILED && this.page && !this.page.isClosed()) {
      await this.attach(await this.page.screenshot(), 'image/png');
    }
  } finally {
    await this.context?.close();
    await this.browser?.close();
  }
});
