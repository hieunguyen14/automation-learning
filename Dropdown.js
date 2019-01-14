
describe ('API Command', function () {

    const DROPDOWN_MENU = '#dropdown';

it ('Select by visible Text', function () {
    browser.url('https://the-internet.herokuapp.com/dropdown');

    //Option 1
    browser.waitForVisible(DROPDOWN_MENU, 1000);
    $(DROPDOWN_MENU).selectByVisibleText('Option 1');
    browser.pause(2000);
})

it ('Select by value Text', function () { 
    $(DROPDOWN_MENU).selectByValue('2');
    browser.pause(2000);
})

it ('Select by index', function (){
    $(DROPDOWN_MENU).selectByIndex('1');
    browser.pause(2000);
})

});