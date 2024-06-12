({
    shouldDeps: [
        {
            block: 'products',
            elems: [
                'menu',
                'details',
            ]
        },

        // not exact 'products' depends, but should be provided as well for 'js-init'
        { block: 'product-button' },
        { block: 'product-card' },
    ],
})
