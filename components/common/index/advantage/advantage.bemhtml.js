block('advantage')(

    content()(function() {
        const ctx = this.ctx;
        return [
            {
                elem: 'icon-wrapper',
                content: {
                    block: 'icon',
                    mix: { block: 'advantage', elem: 'icon' },
                    url: ctx.icon_url,
                }
            },
            {
                elem: 'title',
                tag: 'h4',
                content: {html: ctx.title_html},
            },
            {
                elem: 'description',
                tag: 'span',
                content: {html: ctx.description_html}
            }
        ];
    }),

);
