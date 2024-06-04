({
    block: 'header',
    shouldDeps: [
        // lib
        {
            block: 'dropdown',
            mods: {
                switcher: 'button',
                theme: 'islands',
                // size: 'm'
            }
        },
        { block: 'menu' },
        { block: 'icon' },
        { block: 'button', mods: { type: 'link'} },

        // design
        { block: 'theme-switcher' },
    ],
})
