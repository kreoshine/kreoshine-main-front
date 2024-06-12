modules.define('product-button', ['BEMHTML', 'i-bem-dom'], function(provide, BEMHTML, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited': function() {
                console.log('asdf')
                this._domEvents().on('click', this._onClick);
            }
        }
    },
    //
    // onSetMod: {
    //     type: function(modName, modVal, oldModVal) {
    //         const productsBlock = this.findParentBlock({block: Products});
    //         console.log(productsBlock)
    //         // bemDom.update(
    //         //     this.domElem,
    //         //     BEMHTML.apply(
    //         //         {
    //         //             block: 'product-card',
    //         //             productTitleHtml: details['name'],
    //         //             productImagesData: details['images_data'],
    //         //             productDescriptionsContent: details['descriptions_content'],
    //         //         }
    //         //     )
    //         // );
    //     }
    // },

    _onClick: function () {
        // const productsBlock = this.findParentBlock({block: Products});
        console.log('clicked')
            // bemDom.update(
            //     this.domElem,
            //     BEMHTML.apply(
            //         {
            //             block: 'product-card',
            //             productTitleHtml: details['name'],
            //             productImagesData: details['images_data'],
            //             productDescriptionsContent: details['descriptions_content'],
            //         }
            //     )
            // );
        // this.setMod('type', '')
    }
}, {

}));

});
