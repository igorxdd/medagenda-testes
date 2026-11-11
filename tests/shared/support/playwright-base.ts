import { devices, type PlaywrightTestConfig } from '@playwright/test';
import { config } from './config';

export const baseConfig: PlaywrightTestConfig = {
  timeout: 30000,
  expect: { timeout: 10000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  forbidOnly: Boolean(process.env.CI),
  use: {
    baseURL: config.webBaseUrl,
    locale: 'pt-BR',
    timezoneId: 'America/Sao_Paulo',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    { name: 'chrome-1280', use: { ...devices['Desktop Chrome'], channel: 'chrome', viewport: { width: 1280, height: 800 } } },
    { name: 'chrome-390', use: { ...devices['Desktop Chrome'], channel: 'chrome', viewport: { width: 390, height: 844 } } },
    { name: 'firefox-1280', use: { ...devices['Desktop Firefox'], viewport: { width: 1280, height: 800 } } },
    { name: 'firefox-390', use: { ...devices['Desktop Firefox'], viewport: { width: 390, height: 844 } } }
  ]
};
