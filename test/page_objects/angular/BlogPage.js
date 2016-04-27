/**
 * Created by Odyssey on 31.01.2016.
 */
'use strict';

var BLOG_PAGE = '.hfeed';


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
                el.Discuss = el.element(by.xpath('//a[text()[contains(.,"Discuss")]]')); //by.css('.learn-link'));
                el.Discuss.Blog = el.element(by.xpath(BLOG_CSS)); //by.css(BLOG_CSS)
                return el;
            }

            function verifyIsOnAng() {
                return page;
            }


            return {
                upLinkPa000nel: new UpLinksPanel(page),
                verifyIsOnAngular: verifyIsOnAng

                //discuss: upLinkPanel.Discuss,
                //blog: upLinkPanel.Discuss.Blog
            }
        }
    }

}());