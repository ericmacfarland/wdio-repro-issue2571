const _ = require('lodash');

const defaults = require('./defaults').config;
const overrides = {
    capabilities: [{
        browserName: 'chrome'
    }],

    seleniumLogs: './logs',
    port: '9515',
    path: '/',

    services: ['selenium-standalone', 'chromedriver']
};
const config = _.defaultsDeep(overrides, defaults);

module.exports = { config };
