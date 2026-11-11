module.exports = {
  default: {
    paths: ['tests/bdd-cucumber/features/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: ['tests/bdd-cucumber/support.ts', 'tests/bdd-cucumber/steps/**/*.ts'],
    format: ['progress', 'json:reports/bdd/cucumber.json', 'html:reports/bdd/cucumber.html', 'junit:reports/bdd/junit.xml'],
    parallel: 0,
    retry: 0
  }
};
