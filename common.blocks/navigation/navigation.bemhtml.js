block('navigation').tag()('nav');
block('navigation').mods()(
    {'theme': true}
);
block('navigation').content()(function() {
  return [
    {
      block: 'link',
      mix: [{block: 'navigation', elem: 'home-box'}],
      url: '/',
      content: {
        block: 'image',
        mix: [{block: 'navigation', elem: 'logo'}],
        url: '/static/images/logo.svg',
      }
    },
    {
        elem: 'box',
        mix: [{block: 'navigation', elem: 'box'}],
        content: {
            block: 'link',
            mix: [{block: 'navigation', elem: 'link'}],
            url: '/about',
            content: 'О НАС',
            mods: {size: 'm'},
        }
    },
    {
        elem: 'box',
        mix: [{block: 'navigation', elem: 'box'}],
        content: {
            block: 'link',
            mix: [{block: 'navigation', elem: 'link'}],
            url: '/products',
            content: 'УСЛУГИ',
            mods: {size: 'm'},
        }
    },
    {
        elem: 'box',
        mix: [{block: 'navigation', elem: 'box'}],
        content: {
            block: 'link',
            mix: [{block: 'navigation', elem: 'link'}],
            url: '/contacts',
            content: 'КОНТАКТЫ',
            mods: {size: 'm'},
        }
    },
  ];
});
