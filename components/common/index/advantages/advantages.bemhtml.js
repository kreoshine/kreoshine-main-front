block('advantages')(
  content()(function() {
    return [
      {
        elem: 'main-title',
        tag: 'span',
        content: "Почему мы:",
      },
      {
        elem: 'inner',
        content: [
          {
            elem: 'item-wrapper',
            content: {
              elem: 'item',
              content: [
                {
                  elem: 'icon-wrapper',
                  content: {
                    block: 'icon',
                    mix: { block: 'advantages', elem: 'icon' },
                    url: '/static/images/icons/advantages/reliability.svg',
                  }
                },
                {
                  elem: 'title',
                  tag: 'h4',
                  content: {
                    html: "<b>7 лет на рынке<br/>наружной и интерьерной<br/>рекламы</b>"
                  },
                },
                {
                  elem: 'description',
                  tag: 'span',
                  content: {
                    html: "Большое количество предпринимателей " +
                      "и крупных компаний доверили нам изготовление рекламной продукции"
                  }
                }
              ]
            }
          },
          {
            elem: 'item-wrapper',
            content: {
              elem: 'item',
              content: [
                {
                  elem: 'icon-wrapper',
                  content: {
                    block: 'icon',
                    mix: {block: 'advantages', elem: 'icon'},
                    url: '/static/images/icons/advantages/customer_focus.svg',
                  }
                },
                {
                  elem: 'title',
                  tag: 'h4',
                  content: {
                    html: "<b>Максимальная<br/>клиентоориентированность</b>"
                  },
                },
                {
                  elem: 'description',
                  tag: 'span',
                  content: {
                    html: "Кроме того, мы выполняем заказы не только своими силами, " +
                      "но и в сотрудничестве с другими специализированными компаниями, " +
                      "что позволяет Вам экономить средства и время"
                  }
                }
              ]
            }
          },
          {
            elem: 'item-wrapper',
            content: {
              elem: 'item',
              content: [
                {
                  elem: 'icon-wrapper',
                  content: {
                    block: 'icon',
                    mix: {block: 'advantages', elem: 'icon'},
                    url: '/static/images/icons/advantages/creativity.svg',
                  }
                },
                {
                  elem: 'title',
                  tag: 'h4',
                  content: {
                    html: "<b>Креативный<br/>подход</b>"
                  },
                },
                {
                  elem: 'description',
                  tag: 'span',
                  content: {
                    html: "Разработаем эффективную и креативную рекламу, " +
                      "с учетом всех ваших желаний."
                  }
                }
              ]
            }
          },
          {
            elem: 'item-wrapper',
            content: {
              elem: 'item',
              content: [
                {
                  elem: 'icon-wrapper',
                  content: {
                    block: 'icon',
                    mix: { block: 'advantages', elem: 'icon' },
                    url: '/static/images/icons/advantages/profit.svg',
                  }
                },
                {
                  elem: 'title',
                  tag: 'h4',
                  content: {
                    html: "<b>С нами выгодно</b>"
                  },
                },
                {
                  elem: 'description',
                  tag: 'span',
                  content: {
                    html: "Мы помогаем вам привлекать больше клиентов"
                  }
                }
              ]
            }
          },
          {
            elem: 'item-wrapper',
            content: {
              elem: 'item',
              content: [
                {
                  elem: 'icon-wrapper',
                  content: {
                    block: 'icon',
                    mix: {block: 'advantages', elem: 'icon'},
                    url: '/static/images/icons/advantages/delivery.svg',
                  }
                },
                {
                  elem: 'title',
                  tag: 'h4',
                  content: {
                    html: "<b>Доставка</b>"
                  },
                },
                {
                  elem: 'description',
                  tag: 'span',
                  content: {
                    html: "Мы доставляем нашу продукцию по всей России"
                  }
                }
              ]
            }
          },
        ]
      },
    ]
  })
);
