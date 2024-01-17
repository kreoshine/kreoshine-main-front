({
    block: 'header',
    shouldDeps: [
        // lib
        { block: 'link' },

        // common
        { block: 'logo-image' },
        { block: 'main-contacts' },
        { block: 'navigation' },

        // design
        { block: 'header', mod: 'theme' },
    ],
})