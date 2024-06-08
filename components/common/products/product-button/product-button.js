modules.define('product-button', ['i-bem-dom', 'products'], function(provide, bemDom, Products) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited': function() {
                this._domEvents().on('click', this._onClick);
            }
        }
    },

    _onClick: function () {
        const detailsBlock = this.findParentBlock({ block: Products }).findChildElem({ elem: 'details' })
        detailsBlock.setMod('type', this.params.type)
    }
}, {

}));

});
