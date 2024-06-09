block('product-button')(

    mods()(function() {
        return {'type': this.ctx.productType}
    }),

    // addMix()({block: 'button'}),

    tag()('button'),
    content()(function () {
        return this.ctx.productName
    }),
);
