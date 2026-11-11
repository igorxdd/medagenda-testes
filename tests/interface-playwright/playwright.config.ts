import { defineConfig } from '@playwright/test';
import { baseConfig } from '../shared/support/playwright-base';

export default defineConfig({
  ...baseConfig,
  testDir: '.',
  testMatch: '**/*.spec.ts',
  outputDir: '../../reports/interface/results',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/interface/html', open: 'never' }],
    ['junit', { outputFile: 'reports/interface/junit.xml' }]
  ]
});
