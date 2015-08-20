"use strict";

var markdown = require("markdown").markdown;
var loaderUtils = require("loader-utils");

module.exports = function (md_text) {
    var query = loaderUtils.parseQuery(this.query);

    this.cacheable();

    return markdown.toHTML(md_text, 'Maruku');
};
