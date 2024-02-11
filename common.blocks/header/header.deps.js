({
    block: 'header',
    shouldDeps: [
        // lib
        { block: 'link' },
        { block: 'icon' },
        { block: 'image' },

        // common
        { block: 'main-contacts' },
        { block: 'navigation' },
        { block: 'theme-switcher' },

        // design
        { block: 'header', mod: 'theme' },
    ],
})
