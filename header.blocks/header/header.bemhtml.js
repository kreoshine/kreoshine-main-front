block('header')(
  tag()('header'),
  content()(function() {
    return [
      {
        block: 'link',
        mix: [{block: 'header', elem: 'home-link'}],
        url: '/',
        content: {
          block: 'logo-image',
          mods: {'size': 's'}
        }
      },
      {
        block: 'navigation',
      },
      {
        block: 'main-contacts',
      },
    ];
  }),
  addMix()({ elem : 'layout' }),
);
