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
