({
    block: 'header',
    shouldDeps: [
        // lib
        { block: 'link' },
        { block: 'icon' },
        { block: 'button', mods: { type: 'link'} },

        // common
        { block: 'main-contacts' },
        { block: 'navigation' },
        { block: 'theme-switcher' },

        // design
        { block: 'header', mod: 'theme' },
    ],
})
