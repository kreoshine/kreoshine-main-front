block('toolbar')(
	content()(function() {
		return [
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
		];
	})
);
