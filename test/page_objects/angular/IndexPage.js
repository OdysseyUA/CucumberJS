/**
 * Created by Odyssey on 31.01.2016.
 */
'use strict';

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
            
            function verifyIsOnAngular() {
                return page;
            }


            return {
                verifyIsOnAngular: verifyIsOnAngular

                //discuss: upLinkPanel.Discuss,
                //blog: upLinkPanel.Discuss.Blog
            }
        }
    }

}());