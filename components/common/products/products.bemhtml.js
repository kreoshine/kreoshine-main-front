block('products')(
    tag()('main'),

    js()(true),

    content()(function() {

        // let productsData = this.data
            // [
            //     {
            //         'product_type': 'string',
            //         'product_name': 'string',
            //         'product_details': {
            //             'title': 'string',
            //             'image_data': [
            //                 {
            //                     'url': 'string',
            //                     'title': 'string',
            //                 },
            //                 ...
            //             ],
            //             'descriptions_content': [
            //                 'string',
            //                 ...,
            //             ]
            //         }
            //     },
            //     ...
            // ]
        // let productsMenuContext = productsData.map(item => (
        //         {
        //             productType: item.product_type,
        //             productName: item.product_name,
        //         }
        //     ))
        // function _getMenuList(productsMenuContext) {
        //     return productsMenuContext.map(item => (
        //         {
        //             elem: 'item',
        //             mods: {'type': item.productType},
        //             // productType: item.productType,
        //             productName: item.productName,
        //         }
        //     ))
        // }

        // const productCardBlocks = _getProductCardBlocks()

        return [
            {
                elem: 'menu',
                // content:
                //     [
                //         {
                //         elem: 'item',
                //         // mix: {block: 'menu', elem: 'item'},
                //         content: {html: productsData}
                //         // content: _getMenuList(productsMenuContext)
                //         },
                //     ]
                //
            },

            {
                elem: 'details',

            },

        ];
    }),
);
