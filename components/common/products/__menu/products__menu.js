modules.define(
    'products__menu',
    ['BEMHTML', 'i-bem-dom', 'product-button'],
    function(provide, BEMHTML, bemDom, ProductButton
) {

provide(bemDom.declElem('products', 'menu', {
    /**
     * Получение списка продуктов
     * @returns {Promise<Array>} Список продуктов
     */
    getProducts: async function() {
        const productsBaseUrl = httpSchema + serverDomain + productsEndpoint;
        const response = await fetch(new URL(productsBaseUrl));
        return await response.json();
    },

    onSetMod: {
        js: {
            inited: async function() {
                try {
                    let productsInfoList = await this.getProducts();
                    this._renderMenuContent(productsInfoList);
                    this._initProductRender();
                } catch (e) {
                    console.error(e);
                    // todo: apply some specific content for page
                }
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

    _renderMenuContent(productsInfo) {
        // create js-based content
        bemDom.update(
            this.domElem,
            BEMHTML.apply(
                [
                    productsInfo.map( product => (
                        {
                            block: 'product-button',
                            productType: product.type,
                            productName: product.name,
                        }
                    ))
                ]

            )
        );
    },
}, {

}));

});
