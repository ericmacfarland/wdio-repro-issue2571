# wdio-repro-issue251

### Basic set up
1. `git clone git@github.com:ericmacfarland/wdio-repro-issue2571.git`
2. `cd wdio-repro-issue2571`
3. `npm i`

#### Additional configuration for running in SauceLabs
1. `export SAUCE_USERNAME=<your sauce username>`
2. `export SAUCE_ACCESS_KEY=<your access key>`
3. Modify `parentTunnel` and/or `tunnelIdentifier` in `wdio-config/sauce-chrome.js` to match your settings

### Run the repro
In Sauce: `npm run wdio wdio-config/sauce-chrome.js`
Locally: `npm run wdio wdio-config/local-chrome.js`

### Notes
The failure does not appear to occur locally, but examining the wdio log yields the same pattern of a large number of GET commands.

### Highlights
This repro compares the behavior of calling:

`browser.waitForVisible('page section myElement')` ([lines 9-23](wdio-output.log#L9-L23) in wdio-output.log)

with the behavior of calling

`$('page').$('section').$('myElement').waitForVisible()` ([lines 24-2484](wdio-output.log#L24-L2484) in wdio-output.log)


The key difference that I noticed was in how the elements are retrieved.

For the combined selector, the POST returns a [single element](wdio-output.log#L18)

For the chained selector, there are a series of POST commands, where the final one seems to ignore the previous selector calls and loses its specificity, resulting in a [large number](wdio-output.log#L42) of elements being returned.
