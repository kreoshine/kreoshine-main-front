modules.define('products', ['i-bem-dom'], function(provide, bemDom) {

// Note: this module should be defined for bem-DOM to make possible getting this block via BEMHTML
provide(bemDom.declBlock(this.name, {}))
});

// temporally solution
const staticProductsData = {
    'default':
        {
            'name': 'KreoShine',
            'images_data': [
                    {
                        'url': '/static/images/logo.svg',
                        'title': 'KreoShine',
                    },
                ],
            'descriptions_content': [
                'Lorem the best',
                'agdsh328',
            ]
        },
    'signboard':
        {
            'name': 'Вывескa',
            'images_data': [
                {
                    'url': '/static/images/products/img.png',
                    'title': 'Вывескa',
                },
            ],
            'descriptions_content': [
                'Вывески это хорошо',
                'от kreoshine!!!!!!!!!!',
            ],
        },
    'boxes':
        {
            'name': 'Короба',
            'images_data': [
                {
                    'url': '/static/images/products/img2.png',
                    'title': 'Вывескa',
                },
            ],
            'descriptions_content': [
                'Короба это ещё лучше',
                'от kreoshine!!!!!!!!!!',
            ],
        },

}
