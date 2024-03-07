block('toolbar')(
	content()(function() {
		return {
			block: 'dropdown',
			mods: {
					switcher: 'button',
					theme: 'islands',
			},
			switcher: {
				block: 'button',
				mix: { block: 'toolbar', elem: 'button' },
				icon: {
					block: 'icon',
					mix: { block: 'toolbar', elem: 'icon' },
					url: '/static/images/icons/toolbar.svg',
				}
			},
			popup: {
				block: 'menu',
				mix: { block: 'toolbar', elem: 'menu' },
				content: [
					{
						block: 'button',
						mix: { block: 'toolbar', elem: 'icon-wrapper' },
						mods: { type: 'link' },
						url: 'tel:+79268555282',
						icon: {
							block: 'icon',
							mix: { block: 'toolbar', elem: 'icon' },
							url: '/static/images/icons/phone.svg',
						}
					},
					{
						block: 'button',
						mix: { block: 'toolbar', elem: 'icon-wrapper' },
						mods: { type: 'link' },
						url: 'mailto:kreoshine@bk.ru',
						icon: {
							block: 'icon',
							mix: { block: 'toolbar', elem: 'icon' },
							url: '/static/images/icons/mail.svg',
						}
					},
					{
						block: 'theme-switcher',
					},
				]
			}
		}
			// {
			// 	block: 'link',
			// 	mods: {
			// 			pseudo: true,
			// 			theme: 'islands'
			// 	},
			// 	content: 'open islands popup with content interaction'
			// },
			// {
			// 	block: 'popup',
			// 	mods : { theme: 'islands', target : 'anchor', autoclosable: true },
			// 	// directions : ['bottom-left'],

		// ]
	})
);
