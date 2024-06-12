({
    block: 'navigation',
    elem: ['box', 'link'],
    shouldDeps: [
        // lib
        { block: 'link' },
        { block: 'image' },
        { block: 'link', mod: 'size', val: 'm' },
        {
            block: 'dropdown',
            mods: {
                switcher: 'button',
                theme: 'islands',
            }
        },
    ]
})
