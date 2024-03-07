({
    block: 'header',
    shouldDeps: [
        // lib
        {
            block: 'link',
            mods: {
                pseudo: true,
                theme: 'island',
            }
        },
        {
            block: 'dropdown',
            mods: {
                switcher: 'button',
                theme: 'islands',
                // size: 'm'
            }
        },
        {
            block: 'popup',
            mods: {
                theme: 'islands',
                target: 'anchor',
                autoclosable: true
            }
        },
        { block: 'menu' },
        { block: 'icon' },
        { block: 'button', mods: { type: 'link'} },

        // design
        { block: 'theme-switcher' },
    ],
})
