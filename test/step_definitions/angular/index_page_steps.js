var myStepDefinitionsWrapper = function () {

    var Index = require('../../page_objects/angular/IndexPage'),
        cAssert = require('chai').assert,
        page;

    this.Given(/^I'm on Angular site$/, function () {

        return Index.get().then(function (thePage) {
            page = thePage;
            typeof cAssert(page.verifyIsOnAngular(), 'element');
        })

    });


    this.When(/^I click on the (.*) link$/, function (linkName) {
        //page.upLinkPanel.Discuss.click();
        //return page.upLinkPanel.Discuss.Blog.click();

        return page.upLinkPanel.Discuss.click().then(function () {
            if (linkName === 'Blog')
                page.upLinkPanel.Discuss.Blog.click();
        });
    });


    this.Then(/^I move to the linked page$/, function (callback) {
        console.log("----------######-----------");
        //(function () {browser.executeScript('return window.confirm("hey, hey");');}());
        (function () {
            browser.pause();
        }())
    });
};


module.exports = myStepDefinitionsWrapper;