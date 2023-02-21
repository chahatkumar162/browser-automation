const puppeteer = require("puppeteer");
let page;
console.log("Before");
const browserOpenpromise =puppeteer.launch({
    headless:false,
    slowMo: true,
    defaultViewport: null,
    args: ["--start-maximized"]
});
browserOpenpromise
    .then(function (broswer) {
            const pagesArrpromise =broswer.pages();//currently opened tabs
            return pagesArrpromise;

    }).then(function (browserPages){
        page =browserPages[0];
        let gotoPromise = page.goto("https://www.google.co.in/");
        return gotoPromise;
    }).then(function (){
        //waiting for the element to appear on the page
        let elementWaitPromise =page.waitForSelector("input[type='text']", {visible:true});
        return elementWaitPromise;
    }).then(function(){
        //console.log("Reached google home page");
        //type any element on that page -> selector
        let keysWillBePromise=page.type("input[type='text']","JavaScript - MDN Web Docs - Mozilla");
        return keysWillBePromise;
    }).then(function (){
        // page.keyboard is used to type special characters
        let enterWillBePressed=page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function(){
        let enterWillBePressed = page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function(){
        let elementWaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {visible: true});
        return elementWaitPromise;
    }).then(function(){
        let keysWillBePromise=page.click("h3.LC20lb.MBeuO.DKV0Md");
        return keysWillBePromise;
    }).catch(function(err){
        console.log(err);
    })
console.log("After");