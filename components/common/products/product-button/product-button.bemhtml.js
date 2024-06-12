block('product-button')(

    js()( function () {
        return {'type': this.ctx.productType}
    }),

    // mods()(function() {
    //     return {'type': this.ctx.productType}
    // }),

    tag()('button'),
    content()(function () {
        return this.ctx.productName
    }),
);
