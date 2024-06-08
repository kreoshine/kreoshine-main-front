block('advantages')(
  content()(function() {
    return [
      {
        elem: 'title',
        tag: 'span',
        content: "Почему мы:",
      },
      {
        elem: 'inner',
        content: [
          {
            elem: 'item-wrapper',
            content: {
                block: 'advantage',
                icon_url: '/static/images/icons/advantages/reliability.svg',
                title_html: "<b>7 лет на рынке<br/>наружной и интерьерной<br/>рекламы</b>",
                description_html: "Большое количество предпринимателей " +
                    "и крупных компаний доверили нам изготовление рекламной продукции",
            }
          },
          {
            elem: 'item-wrapper',
            content: {
                block: 'advantage',
                icon_url: '/static/images/icons/advantages/customer_focus.svg',
                title_html: "<b>Максимальная<br/>клиентоориентированность</b>",
                description_html: "Кроме того, мы выполняем заказы не только своими силами, " +
                    "но и в сотрудничестве с другими специализированными компаниями, " +
                    "что позволяет Вам экономить средства и время",
            }
          },
          {
            elem: 'item-wrapper',
            content: {
                block: 'advantage',
                icon_url: '/static/images/icons/advantages/creativity.svg',
                title_html: "<b>Креативный<br/>подход</b>",
                description_html: "Разработаем эффективную и креативную рекламу, " +
                    "с учетом всех ваших желаний.",
            },
          },
          {
            elem: 'item-wrapper',
            content: {
                block: 'advantage',
                icon_url: '/static/images/icons/advantages/profit.svg',
                title_html: "<b>С нами выгодно</b>",
                description_html: "Мы помогаем вам привлекать больше клиентов",
            }
          },
          {
            elem: 'item-wrapper',
            content: {
                block: 'advantage',
                icon_url: '/static/images/icons/advantages/delivery.svg',
                title_html: "<b>Доставка</b>",
                description_html: "Мы доставляем нашу продукцию по всей России",
            }
          },
        ]
      },
    ]
  })
);
