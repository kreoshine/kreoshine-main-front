modules.define('theme-switcher', ['i-bem-dom',], function(provide, bemDom) {


provide(bemDom.declBlock(this.name, {

    _changeTheme: function(val) {
        document.documentElement.style.setProperty(
            '--main-bg-color', `var(--${val}-main-bg-color)`
        );
        document.documentElement.style.setProperty(
            '--side-gradient-main-bg-color', `var(--${val}-side-gradient-main-bg-color)`
        );
        document.documentElement.style.setProperty(
            '--main-text-color', `var(--${val}-main-text-color)`
        );
        document.documentElement.style.setProperty(
            '--extra-bg-color', `var(--${val}-extra-bg-color)`
        );
        document.documentElement.style.setProperty(
            '--extra-border-color', `var(--${val}-extra-border-color)`
        );
        document.documentElement.style.setProperty(
            '--extra-text-color', `var(--${val}-extra-text-color)`
        );
        document.documentElement.style.setProperty(
            '--extra-hovered-text-color', `var(--${val}-extra-hovered-text-color)`
        );
        document.documentElement.style.setProperty(
            '--attent-bg-color', `var(--${val}-attent-bg-color)`
        );
        document.documentElement.style.setProperty(
            '--attent-text-color', `var(--${val}-attent-text-color)`
        );
        // console.log(`applied '${val}' theme`);
    },

    _onClick: function() {
        if(this.hasMod('theme', 'dark')) {
            this.setMod('theme', 'light');
        }
        else {
            this.setMod('theme', 'dark');
        }
    },

    _getDefaultTheme: function() {
        // todo: get from the LocalStorage
        return 'light';
    },

    onSetMod: {
        js: {
            'inited': function() {
                this.setMod('theme', this._getDefaultTheme());
                this._domEvents().on(
                    'click',
                    this._onClick
                );
            }
        },
        theme: {
            'light': function(modName, modVal) {
                this._changeTheme(modVal);

            },
            'dark': function(modName, modVal) {
                this._changeTheme(modVal);
            },
        },
    },

    // lazyInit : true,
    // onInit : function() {
    //     this._domEvents().on(
    //         'click',
    //         this.prototype._onClick);  // в момент клика будет создан экземпляр блока и вызван его метод _onClick
    // },
}));

});
