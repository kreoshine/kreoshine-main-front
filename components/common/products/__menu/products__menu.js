modules.define(
    'products__menu',
    ['BEMHTML', 'i-bem-dom', 'product-button'],
    function(provide, BEMHTML, bemDom, ProductButton
) {

provide(bemDom.declElem('products', 'menu', {

    _getDefaultParams : function() {
        const menuItemsData = Object.entries(staticProductsData).map(([key, value]) => {
            return {
                'type': key,
                'name': value.name
            };
        });
        // note: 'default' type is the one that is applied when nothing is selected, so it is redundant for menu items
        return menuItemsData.filter(item => item.type !== "default");
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
                            productType: item.type,
                            productName: item.name,
                        }
                    ))
                ]

            )
        );
    },
}, {

}));

});
