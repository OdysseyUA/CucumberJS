/**
 * Created by Odyssey on 04.05.2016.
 */

function Header (header) {
    header.Discuss = el.element(by.xpath('//a[text()[contains(.,"Discuss")]]')); //by.css('.learn-link'));
    header.Discuss.Blog = el.element(by.xpath('//a[text()[contains(.,"Blog")]]')); //by.css(BLOG_CSS)

    return header;
}


modules.exports = function() {
    return
};