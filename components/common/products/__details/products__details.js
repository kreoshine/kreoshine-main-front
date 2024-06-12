modules.define('products__details', ['BEMHTML', 'i-bem-dom'], function(provide, BEMHTML, bemDom) {

const staticProductsData = {
    'signboard':
        {
            'type': 'signboard',
            'name': 'Вывескa',
            'images_data': [
                {
                    'url': '',
                    'title': 'Вывескa',
                },
            ],
            'descriptions_content': [
                'Вывески это хорошо',
                'от kreoshine!!!!!!!!!!',
            ],
        },

}

provide(bemDom.declElem('products', 'details', {

    _getDefaultParams : function() {
        return {
            'product_name': 'Вывески',
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

    onSetMod: {
        js: {
            inited: function() {
                // create js-based default content
                bemDom.update(
                    this.domElem,
                    BEMHTML.apply(
                        {
                            block: 'product-card',
                            productTitleHtml: this.params.product_name,
                            productImagesData: this.params.images_data,
                            productDescriptionsContent: this.params.descriptions_content,
                        }
                    )
                );
                // this.setMod('type', 'signboard');
            }
        },
        type:
            function(modName, modVal, oldModVal) {
                let details = this.__self._getProductDetails(modVal);
                bemDom.update(
                    this.domElem,
                    BEMHTML.apply(
                        {
                            block: 'product-card',
                            productTitleHtml: details['name'],
                            productImagesData: details['images_data'],
                            productDescriptionsContent: details['descriptions_content'],
                        }
                    )
                );
        }
    },

}, {

    _getProductDetails: function (type) {
        return staticProductsData[type]
    }

}));

});
