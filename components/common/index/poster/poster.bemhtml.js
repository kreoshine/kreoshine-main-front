block('poster')(
  addMix()([{ block : 'dosed' }]),
  content()(function() {
    return [
      {
        elem: 'description',
        tag: 'h2',
        content: {html: "<b>Изготовление вывесок в Серпухове</b>"},
      },
      {
        block: 'image',
        alt: '',
        title: 'KreoCity',
        mix: [{block: 'poster', elem: 'image'}],
        url: '/static/images/poster.png',
      },
    ]
  })
);
