modules.define('products__details', ['BEMHTML', 'i-bem-dom'], function(provide, BEMHTML, bemDom) {

provide(bemDom.declElem('products', 'details', {

    /**
     * Получение деталей продукта по типу
     * @param {String} type Тип продукта
     * @returns {Promise<Object>} Детали продукта
     */
    getProductDetails: async function(type) {
        const productBaseUrl = httpSchema + serverDomain + productEndpoint;
        const response = await fetch(new URL(`?type=${type}`, productBaseUrl));
        // todo: finish me (maybe incorrect URL)
        return await response.json();
    },

    _getDefaultParams : function () {
        return {
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
        };
    },

    _buildProductCardBlock: function (product, productRefName) {
        return {
            block: 'product-card',
            productRefName: productRefName,
            productTitleHtml: product.name,
            productImagesData: product.images_data,
            productDescriptionsContent: product.descriptions_content,
        };
    },

    onSetMod: {
        js: {
            inited: function() {
                // create js-based default content
                const defaultProductContent = this.params  // note: by _getDefaultParams
                bemDom.update(
                    this.domElem,
                    BEMHTML.apply(this._buildProductCardBlock(defaultProductContent))
                );
            }
        },
        type:
            async function(modName, modVal) {
                let productType = modVal
                const productDetails = await this.getProductDetails(productType);
                bemDom.update(
                    this.domElem,
                    BEMHTML.apply(this._buildProductCardBlock(productDetails, productType))
                );
            }
        },
}, {

}));

});
