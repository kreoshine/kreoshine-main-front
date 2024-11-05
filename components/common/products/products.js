const httpSchema = 'http://'
const serverDomain = '127.0.0.1:8081'

const productsEndpoint = '/api/products'
const productEndpoint = '/api/product'

modules.define('products', ['i-bem-dom'], function(provide, bemDom) {
    provide(bemDom.declBlock('products', {


    }));
});
