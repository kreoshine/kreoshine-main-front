modules.define('products', ['BEMHTML', 'i-bem-dom'], function(provide, BEMHTML, bemDom) {

provide(bemDom.declBlock(this.name, {
    _getDefaultParams : function() {
        return this.__self._getProductsData()
    },

    onSetMod: {
        js: {
            inited: function() {
                //
                bemDom.replace(
                    this.findChildElem({elem: "menu"}).domElem,
                    BEMHTML.apply(
                        {
                            block: 'menu',
                            content: [
                                this.params.products_data.map( item => (
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'product-button',
                                            productType: item.product_type,
                                            productName: item.product_name,
                                        }
                                    }
                                ))
                            ]
                        })
                )

                // create js-based content
                bemDom.update(
                    this.findChildElem({elem: "details"}).domElem,
                    BEMHTML.apply(this.params.products_data.map( item => (
                        {
                            block: 'product-card',
                            productType: item.product_type,
                            productTitleHtml: item.product_name,
                            productImagesData: item.product_details.images_data,
                            productDescriptionsContent: item.product_details.descriptions_content,
                        }
                    )))
                )
            }
        }
    }
}, {
    _getProductsData: function () {
        return {
            'products_data':
                [
                    {
                        'product_type': 'signboard',
                        'product_name': 'Вывески',
                        'product_details': {
                            'title': 'Вывески',
                            'images_data': [
                                {
                                    'url': '',
                                    'title': 'Вывески',
                                },
                            ],
                            'descriptions_content': [
                                'Lorem the best',
                                'agdsh328',
                            ]
                        }
                    },
                ]
        }},
}));

});
