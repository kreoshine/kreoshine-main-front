block('header')(
  tag()('header'),
  content()(function() {
    return [
      {
        block: 'navigation',
      },
      {
        block: 'toolbar',
      },
    ];
  }),
);
