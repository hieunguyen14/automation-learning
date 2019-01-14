describe('API Command', function () {

    const JS_ALERT = '[onclick="jsConfirm()"]';
    const RESULT = '#result';
 
    it('Get result in case clicking on OK', function () {
 
        // Open Page
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
 
        // Click on Alert
        $(JS_ALERT).click();
        browser.alertAccept();
 
        // Get result text
        browser.waitForVisible(RESULT);
 
        let result = $(RESULT).getText();
        //let result = browser.getText(RESULT);
 
        console.log('Click on OK result', result);
 
    })
    it('Get result in case clicking on Cancel', function () {
 
    })
 })