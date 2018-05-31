(function() {
    var _options = {
        default_word: "default hello"
    }

    var _plugin_api = {
        firstFunc: function(str = _options.default_word) {
            alert(str);
            return this;
        },
        secondFunc: function() {
            alert("secondFunc");
            return this;
        }
    }

    this.CJPlugin = _plugin_api;

})();