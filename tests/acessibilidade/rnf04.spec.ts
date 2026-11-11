import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { LoginPage } from '../shared/pages/LoginPage';
import { config } from '../shared/support/config';

for (const screen of [
  { name: 'login', path: '/login', heading: 'Entrar', authenticated: false },
  { name: 'agendamento', path: '/consultas/nova', heading: 'Agendar consulta', authenticated: true },
  { name: 'notificacoes', path: '/notificacoes', heading: 'Notificações', authenticated: true },
  { name: 'assistente', path: '/assistente', heading: 'Assistente virtual', authenticated: true }
]) {
  test(`RNF04 - ${screen.name} sem violações automáticas WCAG 2.1 AA`, async ({ page }, testInfo) => {
    const login = new LoginPage(page);
    if (screen.authenticated) {
      await login.open();
      await login.signIn(config.patientEmail, config.patientPassword);
      await login.expectAuthenticated();
    }
    await page.goto(screen.path);
    await expect(page.getByRole('heading', { name: screen.heading, exact: true })).toBeVisible();
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    await testInfo.attach('axe-results', { body: JSON.stringify(results, null, 2), contentType: 'application/json' });
    expect(results.violations).toEqual([]);
  });
}
