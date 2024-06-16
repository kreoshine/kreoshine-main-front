modules.define(
    'products__menu',
    ['BEMHTML', 'i-bem-dom', 'product-button'],
    function(provide, BEMHTML, bemDom, ProductButton
) {

provide(bemDom.declElem('products', 'menu', {

    _getDefaultParams : function() {
        return [
            {
                'product_type': 'signboard',
                'product_name': 'Вывески',
            },
            {
                'product_type': 'boxes',
                'product_name': 'короба',
            },
        ]
    },

    onSetMod: {
        js: {
            inited: function() {
                this._renderMenuContent();
                this._initProductRender();
            },
        },
    },

    _initProductRender() {
        // apply product content by anchor value
        const anchorValue = document.URL.split('#')[1];
        if (anchorValue) {
            const productButton = this.findChildBlock({block: ProductButton, modName: 'type', modVal: anchorValue});
            if (productButton) {
                productButton.domElem.click();
            }
        }
    },

    _renderMenuContent() {
        // create js-based content
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
    },
}, {

}));

});
