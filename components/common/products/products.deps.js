({
    // required to update via BEMHTML
    tech: 'js',

    shouldDeps: [
        // lib
        { block: 'menu' },
        {
            block: 'menu',
            elems: ['item']
        }
    ],
    mustDeps: [
        // required to update via BEMHTML
        { block: 'product-card', tech: 'bemhtml' },
        { block: 'product-button', tech: 'bemhtml' },
    ]
})
