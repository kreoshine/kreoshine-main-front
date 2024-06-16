modules.define('products__details', ['BEMHTML', 'i-bem-dom'], function(provide, BEMHTML, bemDom) {

provide(bemDom.declElem('products', 'details', {

    _getDefaultParams : function() {
        return staticProductsData['default'];
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
                            productTitleHtml: this.params.name,
                            productImagesData: this.params.images_data,
                            productDescriptionsContent: this.params.descriptions_content,
                        }
                    )
                );
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
                            productRefName: modVal,
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
