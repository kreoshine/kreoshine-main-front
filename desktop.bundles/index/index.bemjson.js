module.exports = {
    block: 'page',
    title: 'KreoShine',
    favicon: '/static/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'header-layout',
            mods: {'shadow': 'down'},
            tag: 'header',
            content: [
                {
                    elem: 'logo',
                    content: {
                        block: 'link',
                        url: '/',
                        content: {
                            block: 'image',
                            url: '/static/images/logo-mini.svg'
                        }
                    },
                },
                {
                    elem: 'main',
                    content: {
                        block: 'navigation',
                        tag: 'nav',
                        content: [
                            {
                                elem: 'box',
                                mix: [{block: 'navigation', elem: 'box'}],
                                content: {
                                    block: 'link',
                                    mix: [{block: 'navigation', elem: 'link'}],
                                    url: '/about',
                                    content: 'О НАС',
                                    mods: {size: 'm'},
                                }
                            },
                            {
                                elem: 'box',
                                mix: [{block: 'navigation', elem: 'box'}],
                                content: {
                                    block: 'link',
                                    mix: [{block: 'navigation', elem: 'link'}],
                                    url: '/products',
                                    content: 'УСЛУГИ',
                                    mods: {size: 'm'},
                                }
                            },
                            {
                                elem: 'box',
                                mix: [{block: 'navigation', elem: 'box'}],
                                content: {
                                    block: 'link',
                                    mix: [{block: 'navigation', elem: 'link'}],
                                    url: '/contacts',
                                    content: 'КОНТАКТЫ',
                                    mods: {size: 'm'},
                                }
                            },
                        ]
                    }
                },
                {
                    elem: 'third',
                    content: {
                        block: 'contact-info',
                        content: [
                            {
                                elem: 'phone',
                                content: {
                                    block: 'link',
                                    url: 'tel:+79268555282',
                                    content: '8-(926)-8-555-282',
                                    mix: [{block: 'contact-info', elem: 'link'}],
                                    mods: {size: 'l'},
                                },
                            },
                            {
                                elem: 'mail',
                                content: {
                                    block: 'link',
                                    url: 'mailto:kreoshine@bk.ru',
                                    content: 'KreoShine@bk.ru',
                                    mix: [{block: 'contact-info', elem: 'link'}],
                                    mods: {size: 'm'},
                                },
                            },
                        ]
                    }
                }
            ]
        },
        {
            block: 'footer-layout',
            tag: 'footer',
            content: [
                'footer content goes here'
            ]
        }
    ]
};
