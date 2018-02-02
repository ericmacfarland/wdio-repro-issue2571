const config = {
    specs: ['./tests/**/*.spec.js'],

    sync: true,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 99999999,
        require: ['babel-register']
    },
    bail: 0,
    screenshotPath: './errorShots/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 15000,
    connectionRetryCount: 3,
    baseUrl: 'http://webdriver.io/',

    reporters: ['spec'],
    logLevel: 'verbose',
    coloredLogs: true,
    deprecationWarnings: true
};

module.exports = { config };
