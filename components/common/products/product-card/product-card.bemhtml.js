block('product-card')(

    addAttrs()(function() {
        return {
            name : this.ctx.productRefName,
        }
    }),

    content()(function () {
        let productImagesData = this.ctx.productImagesData

        function _getDescriptionsElems(productDescriptions) {
            return productDescriptions.map(item => (
                {
                    elem: 'description',
                    tag: 'p',
                    content: item
                }
            ))
        }

        function _getImageBlock(imageData) {
             return {
                block: 'image',
                title: imageData.title,
                mix: {block: 'product-card', elem: 'image'},
                url: imageData.url,
            }
        }

        function _getImageSliderBlock(imagesData) {
            return _getImageBlock(imagesData[0])
            // return {
            //     block: 'slider',
            //     // todo: implement multiple images
            // };
        }

        return [
            {
                elem: 'title',
                tag: 'h3',
                content: {html: this.ctx.productTitleHtml},
            },
            productImagesData.length === 1
                ? _getImageBlock(productImagesData[0])
                : _getImageSliderBlock(productImagesData),
            {
                elem: 'details',
                content: _getDescriptionsElems(this.ctx.productDescriptionsContent)
            },
        ];
    }),
);
