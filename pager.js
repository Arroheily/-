(function() {
    var _options = {
        default_word: "default hello",
        default_pageCount: 10,
        default_pre: "Pre",
    }    
    var _plugin_api = {
        generatePage:function(id, count){
            if(count == undefined){
            count = _options.default_pageCount;
        }
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
            // alert(event.target.id)
            var lastPicker = event.target.id;
            this.toggleClass(event.target,"abs-pager-active");

        },

        // 关于class的添加，删除
        hasClass: function(obj, cls){            
            return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },
        addClass: function(obj, cls){
            if (!this.hasClass(obj, cls)) obj.className += " " + cls;
        },
        removeClass: function(obj, cls){
            if (this.hasClass(obj, cls)) {  
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
                obj.className = obj.className.replace(reg, ' ');  
            }                
        },
        toggleClass: function(obj, cls){
            if(this.hasClass(obj,cls)){  
                this.removeClass(obj, cls);  
            }else{  
                this.addClass(obj, cls);  
            }
        }

    }

    var pager_contain = function(id, items){
        var contain = document.getElementById(id);        
        for (var i = 1; i <= items; i++) {
            // contain.innerHTML  += '<span class="abs-pager-btn abs-pager-active" id="abs-pager-btn'+id+'_'+i+'" onclick="PGPlugin.pickerPage()">'+ i +'</span>';
            contain.innerHTML  += pager_html("span",id,"abs-pager-btn abs-pager-active",'onclick="PGPlugin.pickerPage()"',i);
        }
    }
    var pager_html = function(tag, id, classname, callback, content){
        var complete_html = '<'+ tag +' ';
        if(id != null){
            complete_html += 'id="'+id+'" ';
        }
        if(classname != null){
            complete_html += 'class="'+ classname +'" ';
        }
        if(callback != null){
            complete_html += callback;
        }
        complete_html += '>';
        if(content != null){
            complete_html += content;
        }
        complete_html += '</'+ tag +'>';
        return complete_html;
    }

    this.PGPlugin = _plugin_api;

})();