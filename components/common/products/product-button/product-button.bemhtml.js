block('product-button')(

    js()(true),

    mods()(function() {
        return {'type': this.ctx.productType}
    }),

    tag()('button'),
    content()(function () {
        return this.ctx.productName
    }),
);
