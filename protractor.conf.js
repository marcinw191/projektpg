// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 20000,
  specs: [
    //'./e2e/**/*.e2e-spec.ts'
    './e2e/galeria-ogloszen.e2e-spec.ts',
    './e2e/logowanie.e2e-spec.ts',
    './e2e/ogloszenie.e2e-spec.ts',
    './e2e/dodaj-ogloszenie.e2e-spec.ts',
    './e2e/profil.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: [
        '--start-maximized'
      ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    browser.manage().window().maximize();
  }
};
