block('navigation').content()(function() {
  return {
    block: 'dropdown',
    mods: {
        switcher: 'button',
        theme: 'islands',
    },
    switcher: {
      block: 'button',
      mix: { block: 'navigation', elem: 'button' },
      icon: {
        block: 'icon',
        mix: { block: 'toolbar', elem: 'icon' },
        url: '/static/images/icons/navigation.svg',
      }
    },
    popup: {
      block: 'menu',
      tag: 'nav',
      mix: { block: 'navigation', elem: 'menu' },
      content: [
        {
          block: 'link',
          mix: [
            {block: 'navigation', elem: 'link'},
            {block: 'navigation', elem: 'home-link'},
          ],
          url: '/',
          content: {
            block: 'image',
            alt: 'Главная',
            title: 'Главная',
            mix: [{block: 'navigation', elem: 'logo'}],
            url: '/static/images/logo.svg',
          }
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
  };
});
