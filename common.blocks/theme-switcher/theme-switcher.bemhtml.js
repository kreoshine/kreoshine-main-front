block('theme-switcher')(
  js()(true),
  tag()('button'),
  content()(function() {
    return [
      {
        elem: 'icon-holder',
        content: {
          elem: 'icon-wrapper',
          content: [
            {
              block: 'icon',
              mix: [{block: 'theme-switcher', elem: 'icon'}],
              url: '/static/images/icons/sun.svg'
            },
            {
              block: 'icon',
              mix: [{block: 'theme-switcher', elem: 'icon'}],
              url: '/static/images/icons/moon.svg'
            },
          ]
        }
      },
    ];
  }),
);
