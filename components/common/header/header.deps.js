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

        // design
        { block: 'theme-switcher' },
        { block: 'header', mod: 'theme' },
    ],
})
