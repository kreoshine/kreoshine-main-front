({
    block: 'navigation',
    elem: ['box', 'link'],
    shouldDeps: [
        { block: 'link' },
        { block: 'link', mod: 'size', val: 'm' },

        // design
        { block: 'navigation', mod: 'theme' }
    ]
})
