import { defineConfig } from '@playwright/test';
import { baseConfig } from '../shared/support/playwright-base';

export default defineConfig({
  ...baseConfig,
  testDir: '.',
  testMatch: '**/*.spec.ts',
  outputDir: '../../reports/a11y/results',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/a11y/html', open: 'never' }],
    ['junit', { outputFile: 'reports/a11y/junit.xml' }]
  ]
});
