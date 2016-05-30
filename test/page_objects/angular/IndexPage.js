/**
 * Created by Odyssey on 31.01.2016.
 */
'use strict';

var BLOG_CSS = '//a[text()[contains(.,"Blog")]]'; //".dropdown-menu>li>a[href='http://blog.angularjs.org']";


module.exports = (function () {

    return {
        get: function () {
            var self = this;
            return browser.get('', 20000).then(function () {
                return self.page();
            });
        },

        page: function () {
            var page = element(by.css('header + [role=main]')); //here is anchor of the index page (or .AngularJS-large)

            function UpLinksPanel(el) {
                this.Discuss = el.element(by.xpath('//a[text()[contains(.,"Discuss")]]')); //by.css('.learn-link'));
                this.Discuss.Blog = el.element(by.xpath(BLOG_CSS)); //by.css(BLOG_CSS)
                //return el;
            }

            function verifyIsOnAngular() {
                return page;
            }


            return {
                upLinkPanel: new UpLinksPanel(page),
                verifyIsOnAngular: verifyIsOnAngular

                //discuss: upLinkPanel.Discuss,
                //blog: upLinkPanel.Discuss.Blog
            }
        }
    }

}());