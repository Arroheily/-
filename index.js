;
(function () {
    var options = {
        color : "#333333"
    },
    var api = {
        config : function (opts) {

            //如果没有传入的参数，直接返回默认参数
            if(!opts) { return options; }

            //有参数传入的时候，通过key将options的值更新为用户的值
            for(var key in opts) {
                options[key] = opts[key];
            }
            
            return this;
        }
    },
    this.pager = api;
})();