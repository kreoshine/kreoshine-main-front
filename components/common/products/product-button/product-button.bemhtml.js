block('product-button')(

    js()( function () {
        return {'type': this.ctx.productType}
    }),

    tag()('a'),

    addAttrs()(function() {
        return {
            role : 'link',
            href: '#'.concat( this.ctx.productType),
        }
    }),

    mods()( function () {
        return {'type': this.ctx.productType}
    }),

    content()(function () {
        return this.ctx.productName
    }),
);
