({
    block: 'theme-switcher',
    mustDeps: [
        { block: 'icon' },
        { block: 'button' },
    ],
    shouldDeps: [
        {
            elems: [
                'icon-holder',
                'icon-wrapper',
                'icon',
            ]
        },
        { block: 'theme-switcher', mod: 'theme', val: ['light', 'dark'] },
    ]
})
