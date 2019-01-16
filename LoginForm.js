describe('API Command', function (){

    it ('Login Page', function () {
 
        const assert = require('assert');
 
 
        browser.windowHandleSize({width:1366, height:768});

        browser.url('https://www.anibis.ch/de/login.aspx');
 
        const USERNAME_TXTBX = '#ctl00_phlContent_ctlEmailValidationBox_txtEmail';
        const CONTINUE_BUTTON = '#ctl00_phlContent_ctlEmailValidationBox_lbtContinue';
        const PASSWORD_TXTBX = '#ctl00_phlContent_txtPassword';
        const LOGIN_BUTTON = '#ctl00_phlContent_btnLogin';
        const MON_ANIBIS_ELEMENT = '#ctl00_Header1_ctlHeaderMetaBar_ucMainLinks_hypMyAnibis';
 
        const SEARCH_BUTTON = '#ctl00_Header1_ctlHeaderMetaBar_ucMainLinks_hypSearch';
        const IMMOBILIEN_CATEGORY = './/div[@class="page-segment page-segment-top-categories-list"]//li[3]/a';
        const ZURICH_LOCATION = './/li[@class="category-item has-subcategories is-active"]//li[27]/a';
        const FROM_PRICE = '#ctl00_phlContent_Filter_ctlPriceRange_txtFrom';
        const TO_PRICE = '#ctl00_phlContent_Filter_ctlPriceRange_txtTo';
        const SEARCH_INPUT = '#ctl00_phlContent_ResList_ctlKeywordAutocomplete_divKeyword';
        const SEARCH_BUTTON_2 = '#ctl00_phlContent_ResList_ctlKeywordAutocomplete_btnSearch';
 
        const TOTAL_ITEM_SELECTOR = './/ul[@class="listing-list serp-list clickable-cards"]/li[@class="list-item listing highlight" or @class="list-item listing"]';
 
        browser.waitForVisible(USERNAME_TXTBX);
        $(USERNAME_TXTBX).setValue('buyer.nvg01@gmail.com');
        $(CONTINUE_BUTTON).click();
 
        browser.waitForVisible(PASSWORD_TXTBX);
        $(PASSWORD_TXTBX).setValue('nvg07072012');
        $(LOGIN_BUTTON).click();
 
        let actualText = $(MON_ANIBIS_ELEMENT).getText();
 
        //3
        assert.equal(actualText, 'Mon Anibis');
 
        //4
        browser.waitForVisible(SEARCH_BUTTON, 20000);
        $(SEARCH_BUTTON).click();
 
        browser.waitForVisible(IMMOBILIEN_CATEGORY, 20000);
        $(IMMOBILIEN_CATEGORY).click();
 
        browser.waitForVisible(ZURICH_LOCATION, 20000);
        $(ZURICH_LOCATION).click();
        browser.waitForVisible(FROM_PRICE, 20000);
        $(FROM_PRICE).setValue('1000');
        $(TO_PRICE).setValue('4000');
        $(SEARCH_INPUT).setValue('10km');
        $(SEARCH_BUTTON_2).click();
 
        // //5
        browser.waitForVisible(TOTAL_ITEM_SELECTOR, 20000);
        assert.equal(browser.elements(TOTAL_ITEM_SELECTOR).value.length, 3);
    });
 })