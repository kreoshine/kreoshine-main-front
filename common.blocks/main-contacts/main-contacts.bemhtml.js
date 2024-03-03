block('main-contacts')(
  mods()(
    {'theme': true}
  ),
  content()(function() {
    return [
      {
        elem: 'phone',
          content: {
            block: 'link',
            url: 'tel:+79268555282',
            content: '8-(926)-8-555-282',
            mix: [{block: 'main-contacts', elem: 'link'}],
            mods: {size: 'l'},
        },
      },
      {
        elem: 'mail',
          content: {
            block: 'link',
            url: 'mailto:kreoshine@bk.ru',
            content: 'KreoShine@bk.ru',
            mix: [{block: 'main-contacts', elem: 'link'}],
            mods: {size: 'm'},
        },
      },
    ];
  }),
)
