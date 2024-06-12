'use strict';

var EOL = require('os').EOL;

module.exports = function (entity, naming) {
    return [
        "module.exports = {",
        "    block: 'page',",
        "    title: 'KreoShine | " + entity.block + "',",
        "    favicon: '/static/favicon.ico',",
        "    head: [",
        "        { elem: 'meta', attrs: { name: 'description', content: '' } },",
        "        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },",
        "        { elem: 'css', url: '" + entity.block + ".min.css' }",
        "    ],",
        "    scripts: [{ elem: 'js', url: '" + entity.block + ".min.js' }],",
        "    mods: { theme: 'islands' },",
        "    content: [",
        "        {",
        "            block: 'header',",
        "        }",
        "    ]",
        "};",
        ""
    ].join(EOL);
};
