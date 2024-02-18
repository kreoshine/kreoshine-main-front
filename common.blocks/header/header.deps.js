({
    block: 'header',
    shouldDeps: [
        // common
        { block: 'main-contacts' },
        { block: 'navigation' },
        { block: 'theme-switcher' },

        // design
        { block: 'header', mod: 'theme' },
    ],
})
