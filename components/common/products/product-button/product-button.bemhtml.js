block('product-button')(

    js()( function () {
        return {'type': this.ctx.productType}
    }),

    content()(function () {
        return this.ctx.productName
    }),
);
