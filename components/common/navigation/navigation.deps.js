({
    block: 'navigation',
    elem: ['box', 'link'],
    shouldDeps: [
        { block: 'link' },
        { block: 'image' },
        { block: 'link', mod: 'size', val: 'm' },

        // design
        { block: 'navigation', mod: 'theme' }
    ]
})
