describe ('API Command', function () {

    const JS_ALERT = '[onclick="jsConfirm()"]';

  it ('Alert Accept', function () {

    browser.url('https://the-internet.herokuapp.com/javascript_alerts');
    browser.waitForVisible(JS_ALERT, 2000);

    $(JS_ALERT).click();
    browser.alertAccept();

    browser.pause(2000);

  })


  it ('Alert Dismiss', function () {
    $(JS_ALERT).click();
    browser.alertDismiss();

    browser.pause(2000);

  })

  it ('Alert get text', function () {
 
    //I am a JS Confirm
    $(JS_ALERT).click();
    let alertContent = browser.alertText();

    console.log('Alert Content:', alertContent);
  })

})