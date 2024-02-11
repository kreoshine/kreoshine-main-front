block('header')(
  tag()('header'),
  mods()(
    {'theme': true}
  ),
  content()(function() {
    return [
      {
        block: 'link',
        mix: [{block: 'header', elem: 'home-link'}],
        url: '/',
        content: {
          block: 'image',
          mix: [{block: 'header', elem: 'logo'}],
          url: '/static/images/logo.svg',
        }
      },
      {
        block: 'navigation',
        mods: {'theme': true}
      },
      {
        block: 'main-contacts',
      },
      {
          elem: 'bar',
          content: [
              {
                  block: 'theme-switcher',
              },
          ]
      },
    ];
  }),
);
