modules.define('products__menu', ['BEMHTML', 'i-bem-dom'], function(provide, BEMHTML, bemDom) {

provide(bemDom.declElem('products', 'menu', {

    _getDefaultParams : function() {
        return [
            {
                'product_type': 'signboard',
                'product_name': 'Вывески',
            },
        ]
    },

    onSetMod: {
        js: {
            inited: function() {
                // create js-based default content
                bemDom.update(
                    this.domElem,
                    BEMHTML.apply(
                        [
                            this.params.map( item => (
                                {
                                    block: 'product-button',
                                    productType: item.product_type,
                                    productName: item.product_name,
                                }
                            ))
                        ]

                    )
                );

            }
        },
    }
}, {

}));

});
