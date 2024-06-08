({
    // required to update via BEMHTML
    tech: 'js',
    shouldDeps: [
        // lib
        {
            block: 'menu',
            mods: {
                theme: 'islands',
                size: 'm',
                mode: 'radio'
            },
            elems: [
                'item'
            ]
        },

        { block: 'product-button', tech: 'bemhtml' },

        { block: 'products' },
    ],
})
