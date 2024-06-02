block('navigation').content()(function() {
  return {
    block: 'menu',
      tag: 'nav',
      mix: { block: 'navigation', elem: 'menu' },
      content: [
        {
          block: 'link',
          mix: [{block: 'navigation', elem: 'link'}],
          url: '/',
          content: 'ГЛАВНАЯ',
          mods: {size: 'm'},
        },
        {
          block: 'link',
          mix: [{block: 'navigation', elem: 'link'}],
          url: '/about',
          content: 'О НАС',
          mods: {size: 'm'},
        },
        {
          block: 'link',
          mix: [{block: 'navigation', elem: 'link'}],
          url: '/products',
          content: 'УСЛУГИ',
          mods: {size: 'm'},
        },
        {
          block: 'link',
          mix: [{block: 'navigation', elem: 'link'}],
          url: '/contacts',
          content: 'КОНТАКТЫ',
          mods: {size: 'm'},
        },
      ]
    }
});
