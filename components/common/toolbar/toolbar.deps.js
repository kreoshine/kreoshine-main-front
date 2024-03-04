({
    block: 'header',
    shouldDeps: [
        // lib
        { block: 'link' },
        { block: 'icon' },
        { block: 'button', mods: { type: 'link'} },

        // design
        { block: 'theme-switcher' },
        { block: 'header', mod: 'theme' },
    ],
})
