block('header')(
  tag()('header'),
  mods()(
    {'theme': true}
  ),
  content()(function() {
    return [
      {
        block: 'navigation',
      },
      {
        elem: 'bar',
        content: [
          {
            block: 'button',
            mix: { block: 'header', elem: 'icon-wrapper' },
            mods: { type: 'link' },
            url: 'tel:+79268555282',
            icon: {
              block: 'icon',
              mix: { block: 'header', elem: 'icon' },
              url: '/static/images/icons/phone.svg',
            }
          },
          {
            block: 'button',
            mix: { block: 'header', elem: 'icon-wrapper' },
            mods: { type: 'link' },
            url: 'mailto:kreoshine@bk.ru',
            icon: {
              block: 'icon',
              mix: { block: 'header', elem: 'icon' },
              url: '/static/images/icons/mail.svg',
            }
          },
          {
              block: 'theme-switcher',
          },
        ]
      },
    ];
  }),
);
