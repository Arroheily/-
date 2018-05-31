(function() {
    var _options = {
        default_word: "default hello",
        default_pageCount: 10,
        default_pre: "Pre",
    }    
    var _plugin_api = {
        generatePage:function(id, count){
            count = _options.default_pageCount;
            pager_contain(id, count);
        },
        firstFunc: function(str = _options.default_word) {
            alert(str);
            return this;
        },
        secondFunc: function() {
            alert("secondFunc");
            return this;
        },
        pickerPage: function(){
            alert(123)
        }
    }
    var pager_contain = function(id, items){
        var contain = document.getElementById(id);
        for (var i = 0; i <= items; i++) {
            contain.innerHTML  += '<span onclick="PGPlugin.pickerPage()">'+ i +'</span>';
        }
    }

    this.PGPlugin = _plugin_api;

})();