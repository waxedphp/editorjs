
;(function ( $, window, document, undefined ) {

    var pluginName = 'editorjs',
        _search = '.waxed-editorjs',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = pluginName;
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.commands == 'object') { 
          for (var i=0; i<rec.commands.length; i++) {
            if (typeof rec.commands[i].cmd == 'string')
            switch(rec.commands[i].cmd) {
              case 'save':
                that.editor.save().then((outputData) => {
                  console.log('Article data: ', outputData)
                }).catch((error) => {
                  console.log('Saving failed: ', error)
                });
              break;
            };//command switch
          };
        };
      },


      this.free = function() {

      },
      
      this.init2=function() {
        console.log('EDITORJS');

        var cfg = {
          holder:that.element,
          theme: 'snow',
          width: '100%',
          tools: {
            header: Header,
            quote: Quote,
            table: Table,
            image: Image
          },
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block']
            ]
          },
          placeholder: 'Compose an epic...'

        };

        that.editor = new EditorJS(cfg);
        inited = true;

      },

      this.init=function() {


        setTimeout(function(){ that.init2(); }, 300);
        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
