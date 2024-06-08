module.exports = {
    block: 'page',
    title: 'KreoShine | Продукты',
    favicon: '/static/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'products.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'products.min.js' }],
    content: [
        {
            block: 'header',
        },
        {
            block: 'products',
        },
    ]
};
