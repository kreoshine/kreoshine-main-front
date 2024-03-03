({
    block: 'header',
    shouldDeps: [
        // lib
        { block: 'link' },

        // common
        { block: 'logo-image' },
        { block: 'main-contacts' },
        { block: 'navigation' },
        { block: 'theme-switcher' },

        // design
        { block: 'header', mod: 'theme' },
    ],
})