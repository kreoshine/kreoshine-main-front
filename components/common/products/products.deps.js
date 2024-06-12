({
    shouldDeps: [
        {
            block: 'products',
            elems: [
                'menu',
                'details',
            ]
        },

        // not exact 'products', but should be provided as well
        { block: 'product-button' },
        { block: 'product-card' },
    ],
})
