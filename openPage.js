

describe('API Command', function () {

    it('Open Page API', function() {

        //Buoc 1: Mo page https:..google.com
        browser.url('https://www.google.com');  

        //Buoc 2: Input "Ryan is good trainer" search field
        const SEARCH_TXTBX = '#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input';
        browser.waitForVisible(SEARCH_TXTBX, 3000)
        $(SEARCH_TXTBX).setValue('Ryan Huynh');
        browser.pause(2000);
    });
});