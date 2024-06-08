block('products')(
    tag()('main'),
    content()(function() {
        return [
            {
                block: 'todo',
                content: [
                    {
                        elem: 'task',
                        title: 'Lean more about BEM',
                        text: 'Visit bem.info to learn more.'
                    },
                    {
                        elem: 'task',
                        title: 'Favorite repositories',
                        text: 'Select 3 the most cool repositiries on BEM and favorite them.'
                    },
                    {
                        elem: 'task',
                        title: 'Tweet friends',
                        text: 'Tweet with #b_ hashtag to all the friends.'
                    },
                    {
                        elem: 'task',
                        title: 'Run a pet project',
                        text: 'Run my first pet BEM project with project-stub.'
                    },
                    {
                        elem: 'task',
                        title: 'JavaScript it',
                        text: 'Follow the JavaScript on BEM tutorial.'
                    },
                    {
                        elem: 'task',
                        title: 'Learn BEMHTML',
                        text: 'Pick up some BEMHTML and code templates.'
                    }
                ]
            },
            {
                block: 'menu',
                mix: [{'block': 'products', 'elem': 'menu'}],
                content: {

                }
            },
            {
                elem: 'card',
            },
        ];
    }),
);
