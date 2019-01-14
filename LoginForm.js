describe('API Command', function (){

    it ('Login Page', function () {

        const assert = require('assert');

        browser.url('https://www.anibis.ch/de/login.aspx');

        const USERNAME_TXTBX = '#ctl00_phlContent_ctlEmailValidationBox_txtEmail';
        const CONTINUE_BUTTON = '#ctl00_phlContent_ctlEmailValidationBox_lbtContinue';
        const PASSWORD_TXTBX = '#ctl00_phlContent_txtPassword';
        const LOGIN_BUTTON = '#ctl00_phlContent_btnLogin';
        const MON_ANIBIS_ELEMENT = '#ctl00_Header1_ctlHeaderMetaBar_ucMainLinks_hypMyAnibis';

        const SEARCH_BUTTON = '#ctl00_Header1_ctlHeaderMetaBar_ucMainLinks_hypSearch';
        const SEARCH_TXTBX = '#ctl00_phlContent_ctlHeaderSearchFilter_ctlKeywordAutocomplete_divKeyword';
        const SEARCH_ACTION_BUTTON = '#ctl00_phlContent_ctlHeaderSearchFilter_ctlKeywordAutocomplete_btnSearch';

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
        browser.waitForVisible(SEARCH_BUTTON);
        $(SEARCH_BUTTON).click();

        $(SEARCH_TXTBX).setValue('Immobilien category');
        $(SEARCH_ACTION_BUTTON).click();

    });
})
