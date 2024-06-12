modules.define('products', ['i-bem-dom'], function(provide, bemDom) {

// Note: this module should be defined for bem-DOM to make possible getting this block
provide(bemDom.declBlock(this.name, {}))
});
