const selectorChain = [
    '#main-content',
    '.entry-content',
    '.et_pb_row_1',
    '.et_pb_text',
    'div:nth-child(1)'
];
const combinedSelector = selectorChain.join(' ');

describe('repro page', () => {
    before(() => {
        browser.url('https://www.ultimateqa.com/complicated-page/');
    });

    it('reproduce the issue', () => {
        // Use the combined selector
        console.log('>>> combined .waitForVisible()');
        browser.waitForVisible(combinedSelector);
        const combinedSelectorIsVisible = browser.isVisible(combinedSelector);
        console.log(`Visible using combined selector: ${combinedSelectorIsVisible}`);
        console.log('<<< combined .waitForVisible()');

        // Use the chained selector
        console.log('>>> chained .waitForVisible()');
        $(selectorChain[0]) // #main-content
            .$(selectorChain[1]) // #main-content .entry-content
            .$(selectorChain[2]) // #main-content .entry-content .et_pb_row_1
            .$(selectorChain[3]) // #main-content .entry-content .et_pb_row_1 .et_pb_text
            .$(selectorChain[4]) // #main-content .entry-content .et_pb_row_1 .et_pb_text div:nth-child(1)
            .waitForVisible();
        const chainedSelectorIsVisible = $(selectorChain[0])
            .$(selectorChain[1])
            .$(selectorChain[2])
            .$(selectorChain[3])
            .$(selectorChain[4]).getText();
        console.log(`Visible using chained selector: : ${chainedSelectorIsVisible}`);
        console.log('<<< chained .waitForVisible()');
    });
});
