block('intro')(
  addMix()([{ block : 'dosed' }]),
  content()(function() {
    return [
      {
        block: 'image',
        alt: 'KreoShine',
        title: 'KreoShine',
        mix: [{block: 'intro', elem: 'logo'}],
        url: '/static/images/logo.svg',
      },
      {
        elem: 'name',
        tag: 'h2',
        content: 'KREOSHINE'
      },
      {
        elem: 'description',
        tag: 'h2',
        content: "РЕКЛАМОТВОРЧЕСКАЯ СТУДИЯ"
      },
      {
        elem: 'slogan',
        tag: 'h1',
        content: {html: 'ЛЮБЫЕ&nbspВИДЫ БРЕНДИРОВАНИЯ НАРУЖНОЙ&nbspИ ИНТЕРЬЕРНОЙ РЕКЛАМЫ'}
      },
      {
        block: 'button',
        mix: [{block: 'intro', elem: 'button'}],
        mods: {
          theme: 'islands',
          size: 'm',
          type: 'link'
        },
        url: '#',
        text: 'Выбрать услугу'
      },
    ]
  })
);
