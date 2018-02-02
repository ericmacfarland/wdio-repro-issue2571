const _ = require('lodash');

const defaults = require('./defaults').config;
const overrides = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        browserVersion: 'latest',
        parentTunnel: '',
        tunnelIdentifier: '',
        screenResolution: '1280x1024'
    }],

    services: ['sauce']
};
const config = _.defaultsDeep(overrides, defaults);

module.exports = { config };
