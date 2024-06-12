({
    // required to update via BEMHTML
    tech: 'js',
    shouldDeps: [
        // lib
        { block: 'menu' },
        // { block: 'menu', elems: ['item'] }

    ],
    mustDeps: [
        // required to update via BEMHTML
        // { block: 'contorl-btn', tech: 'js' },
        { block: 'product-button', tech: 'bemhtml' },
    ]
})
