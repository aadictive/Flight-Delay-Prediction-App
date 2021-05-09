document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("87881e41-d7dc-45f3-a22a-ea700e73cc05");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87881e41-d7dc-45f3-a22a-ea700e73cc05' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"d63003e5-9b95-4b98-9ab8-c9ab21972798":{"roots":{"references":[{"attributes":{},"id":"2ffd9976-5a57-4d2d-988d-d5edf387f4ca","type":"BasicTickFormatter"},{"attributes":{"child":{"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"ed0ffeb8-e5b2-4788-9ab3-74a0fee8fae9","type":"Panel"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"99baa2e1-48b3-4555-ac80-90ffc1c52521","type":"LinearAxis"}],"left":[{"id":"7957390f-e54b-4300-a61c-4dd7bdbf7240","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"e5e08d09-604e-4b04-a0ed-3cd77b4810ec","type":"BoxAnnotation"},{"id":"e497111b-5554-4b12-b94e-db400d685ec5","type":"GlyphRenderer"},{"id":"b2b573c9-695b-4af8-9ad2-bf35539d4766","type":"GlyphRenderer"},{"id":"83434982-0eda-4366-9bc3-368df3d67bb6","type":"GlyphRenderer"},{"id":"8b919105-a84b-496c-b3c7-5180a0245fe8","type":"GlyphRenderer"},{"id":"66494d75-0db4-4de0-ae8c-98e04f677f54","type":"GlyphRenderer"},{"id":"bfaaeabd-afd1-47de-9feb-9522933ca8f0","type":"GlyphRenderer"},{"id":"892cd6e4-f70a-4b33-9da4-79d66519553b","type":"GlyphRenderer"},{"id":"99baa2e1-48b3-4555-ac80-90ffc1c52521","type":"LinearAxis"},{"id":"7957390f-e54b-4300-a61c-4dd7bdbf7240","type":"CategoricalAxis"},{"id":"ade88b3c-cf2d-41e5-b5dd-7bb3573554c3","type":"ColorBar"}],"right":[{"id":"ade88b3c-cf2d-41e5-b5dd-7bb3573554c3","type":"ColorBar"}],"title":{"id":"dcba956a-1709-47c4-8a42-05c3f0a49a94","type":"Title"},"tool_events":{"id":"a94e5e07-392e-4b06-8477-7de2cf82653a","type":"ToolEvents"},"toolbar":{"id":"9a8ff336-a8b6-4b32-8e2a-b7b5ddab098d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"a700fe8d-14f7-4598-85f9-661f9fd579fa","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"28469503-9a41-42b1-9174-ce9b53fc2aba","type":"FactorRange"}},"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"f923cbc0-9010-4e8e-87ba-e27662e2cd8d","type":"BasicTickFormatter"},"plot":{"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"},"ticker":{"id":"4daf4430-c744-4ac0-a73f-1758000353bf","type":"BasicTicker"}},"id":"5f4b1a05-1e66-444b-9849-aa99fe5b2559","type":"LinearAxis"},{"attributes":{"plot":{"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"}},"id":"b6a567db-ac44-4c4d-8cfb-7f053b321412","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"5f4b1a05-1e66-444b-9849-aa99fe5b2559","type":"LinearAxis"}],"left":[{"id":"70c1c0f8-5ded-481e-9357-d3505c8a8dd6","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"a49494ee-5777-436c-a5a2-cd301dfe1e38","type":"BoxAnnotation"},{"id":"3ba23769-1b03-4c9d-8f9a-b35a9da3d07e","type":"GlyphRenderer"},{"id":"f4d6e5b6-c73b-4d96-88bc-8a245bcc80dc","type":"GlyphRenderer"},{"id":"02e0a2a2-71dc-4f30-9bc4-b30f631649c2","type":"GlyphRenderer"},{"id":"c2cae766-cbdb-4f5b-94e1-d858ae661f0c","type":"GlyphRenderer"},{"id":"601d120a-f29a-4a9a-a636-821ad15356b9","type":"GlyphRenderer"},{"id":"ffba8a90-5f0d-41dc-8f98-551eb8414dcb","type":"GlyphRenderer"},{"id":"6d7cf9c4-4f9f-4e72-a3e9-e6e76a0c6f91","type":"GlyphRenderer"},{"id":"5f4b1a05-1e66-444b-9849-aa99fe5b2559","type":"LinearAxis"},{"id":"70c1c0f8-5ded-481e-9357-d3505c8a8dd6","type":"CategoricalAxis"},{"id":"311f0f0e-a8e2-4979-b773-e0cc82a245d7","type":"ColorBar"}],"right":[{"id":"311f0f0e-a8e2-4979-b773-e0cc82a245d7","type":"ColorBar"}],"title":{"id":"c6503de8-7b17-46e4-994b-f9c1a80015d6","type":"Title"},"tool_events":{"id":"a9d5d69f-9bd7-425e-baee-54fd7b136ac2","type":"ToolEvents"},"toolbar":{"id":"6d787f49-c122-48a7-9fa0-eba3e8d2a309","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"9088dcb1-e701-400f-b887-6e98fc4d21d9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"e266b2ea-800f-4236-8008-c197aad78db0","type":"FactorRange"}},"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.0],"x":[23],"y":["Friday"]}},"id":"d91d543e-07a4-4540-beda-44c60c9dc8fb","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"}},"id":"8b3b86ea-78ec-4f85-8294-d9cfb6459099","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a3d270c-e1f0-435d-b8c0-f66c8b9c7d0b","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5f58f79-6b6a-4ca4-b65c-935d4fda2e53","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2311b6ba-1dce-481c-a6ab-ab050a5ef88b","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.0],"x":[23],"y":["Friday"]}},"id":"f6a3bfd8-78ea-4d5e-9c60-a04669d6b465","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.2,2.263157894736842,3.0,1.6153846153846154,0.7777777777777778,2.28,0.0,3.0555555555555554,2.135135135135135,1.5416666666666667,2.1818181818181817,0.0,0.6842105263157895,2.4,0.0,1.9534883720930232,0.5238095238095238,0.0,0.5185185185185185],"x":[5,6,8,22,5,7,8,23,6,7,23,0,5,6,11,6,7,0,5],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"5079d431-6b25-4430-bb8c-1e6b55c934c9","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"2ffd9976-5a57-4d2d-988d-d5edf387f4ca","type":"BasicTickFormatter"},"plot":{"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"},"ticker":{"id":"834861dd-7e50-4240-bc6a-a9235399419d","type":"BasicTicker"}},"id":"99baa2e1-48b3-4555-ac80-90ffc1c52521","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.81081081081081,7.5813953488372094,9.263157894736842,7.333333333333333,10.0,7.714285714285714,7.764705882352941,8.263157894736842,6.961538461538462],"x":[6,21,6,8,8,21,5,7,22],"y":["Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"b165c872-3ce4-4ff4-9a93-1d637557a2aa","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c303fa24-b44f-4ac5-912b-baf0518f271a","type":"ColumnDataSource"},"glyph":{"id":"25f751fc-9cf0-4e1a-bd9c-edda54f80d50","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e497111b-5554-4b12-b94e-db400d685ec5","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"c6503de8-7b17-46e4-994b-f9c1a80015d6","type":"Title"},{"attributes":{"data_source":{"id":"5198dba0-062d-4737-b13e-fbb011082365","type":"ColumnDataSource"},"glyph":{"id":"54911c70-3870-4fe5-9b5e-d3295f9f5c7c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bfaaeabd-afd1-47de-9feb-9522933ca8f0","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"60003dcd-91f1-43d1-a60a-8d0c466d9b7c","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0e163e6f-3d03-499a-9195-e1cf9daa4ee8","type":"Rect"},{"attributes":{"data_source":{"id":"699658ca-9e45-42c5-b532-9d2c6e10ab95","type":"ColumnDataSource"},"glyph":{"id":"a221f40b-2b63-4058-b597-25ba6edc0fe4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"66494d75-0db4-4de0-ae8c-98e04f677f54","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"}},"id":"0a0929ea-6d54-4e15-bc5e-52dd599d98a8","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"25f751fc-9cf0-4e1a-bd9c-edda54f80d50","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[23,7,23],"y":["Monday","Thursday","Saturday"]}},"id":"c303fa24-b44f-4ac5-912b-baf0518f271a","type":"ColumnDataSource"},{"attributes":{"child":{"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"56204fe5-1509-4fd8-a13a-365243b9648b","type":"Panel"},{"attributes":{},"id":"46cda367-e56a-47ff-b159-78593a729edf","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"39c95489-6003-44d7-bf05-3100ad0c0226","type":"ColumnDataSource"},"glyph":{"id":"0e163e6f-3d03-499a-9195-e1cf9daa4ee8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"02e0a2a2-71dc-4f30-9bc4-b30f631649c2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.681818181818182,3.8181818181818183,4.911111111111111,3.8333333333333335,5.666666666666667,4.295454545454546,6.6,4.571428571428571,4.983870967741935,4.837837837837838,3.4444444444444446,6.666666666666667],"x":[7,21,22,5,8,22,5,23,22,22,6,23],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"5198dba0-062d-4737-b13e-fbb011082365","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a438708-00d9-4863-bd5b-6de38daac916","type":"Rect"},{"attributes":{"plot":{"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"}},"id":"5c42c485-fc4f-4ce6-a764-6ab67ee2d064","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d8ee0d24-aa8b-4e4f-80f9-9ef56b7b8d17","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"54911c70-3870-4fe5-9b5e-d3295f9f5c7c","type":"Rect"},{"attributes":{},"id":"f923cbc0-9010-4e8e-87ba-e27662e2cd8d","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a49494ee-5777-436c-a5a2-cd301dfe1e38","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"71c510e6-1fb5-49a7-9511-34f4db3f826e","type":"ColumnDataSource"},"glyph":{"id":"b48c1b63-2d57-4b58-a70d-66c1d760e790","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c2cae766-cbdb-4f5b-94e1-d858ae661f0c","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"dcba956a-1709-47c4-8a42-05c3f0a49a94","type":"Title"},{"attributes":{"data_source":{"id":"5079d431-6b25-4430-bb8c-1e6b55c934c9","type":"ColumnDataSource"},"glyph":{"id":"c3bb608f-ca19-4896-8add-fbcbdb57fc98","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6d7cf9c4-4f9f-4e72-a3e9-e6e76a0c6f91","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"}},"id":"d753196f-9abd-48ce-9885-65d3404afed5","type":"HelpTool"},{"attributes":{"data_source":{"id":"49596d98-6450-4947-b287-5e5a84a18711","type":"ColumnDataSource"},"glyph":{"id":"c6dd07fe-5a98-4683-bfb8-90d9c1e3eec9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3ba23769-1b03-4c9d-8f9a-b35a9da3d07e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d91d543e-07a4-4540-beda-44c60c9dc8fb","type":"ColumnDataSource"},"glyph":{"id":"03a38cde-0473-4718-894e-0fdcb4590b01","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f4d6e5b6-c73b-4d96-88bc-8a245bcc80dc","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.2,2.263157894736842,3.0,1.6153846153846154,0.7777777777777778,2.28,0.0,3.0555555555555554,2.135135135135135,1.5416666666666667,2.1818181818181817,0.0,0.6842105263157895,2.4,0.0,1.9534883720930232,0.5238095238095238,0.0,0.5185185185185185],"x":[5,6,8,22,5,7,8,23,6,7,23,0,5,6,11,6,7,0,5],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"7d0fc476-60c4-445a-bac2-6f245b15985a","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c6dd07fe-5a98-4683-bfb8-90d9c1e3eec9","type":"Rect"},{"attributes":{"overlay":{"id":"e5e08d09-604e-4b04-a0ed-3cd77b4810ec","type":"BoxAnnotation"},"plot":{"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"}},"id":"935c6fee-0e57-4050-8abb-4b96f0a0db10","type":"BoxZoomTool"},{"attributes":{},"id":"d8368e62-b400-419e-ae05-45272b49b532","type":"BasicTickFormatter"},{"attributes":{},"id":"0f3db67e-54ad-4ade-bc13-0c0c2eaeffa1","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"22b97725-7027-4275-bb15-6678aa908342","type":"ColumnDataSource"},"glyph":{"id":"d8ee0d24-aa8b-4e4f-80f9-9ef56b7b8d17","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ffba8a90-5f0d-41dc-8f98-551eb8414dcb","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f6a3bfd8-78ea-4d5e-9c60-a04669d6b465","type":"ColumnDataSource"},"glyph":{"id":"7a3d270c-e1f0-435d-b8c0-f66c8b9c7d0b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b2b573c9-695b-4af8-9ad2-bf35539d4766","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.81081081081081,7.5813953488372094,9.263157894736842,7.333333333333333,10.0,7.714285714285714,7.764705882352941,8.263157894736842,6.961538461538462],"x":[6,21,6,8,8,21,5,7,22],"y":["Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"699658ca-9e45-42c5-b532-9d2c6e10ab95","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7d0fc476-60c4-445a-bac2-6f245b15985a","type":"ColumnDataSource"},"glyph":{"id":"60003dcd-91f1-43d1-a60a-8d0c466d9b7c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"892cd6e4-f70a-4b33-9da4-79d66519553b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"}},"id":"6d4f926d-a029-42f0-98fd-718e7e372e72","type":"ResetTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5d17c09c-39c7-47d8-8d14-a60c3b458e8e","type":"LinearColorMapper"},{"attributes":{},"id":"8347e5a7-d295-45f3-a300-e0acffbe47d2","type":"CategoricalTicker"},{"attributes":{},"id":"e2138c8c-ceee-4095-817b-59318b2c9a24","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e2138c8c-ceee-4095-817b-59318b2c9a24","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"},"ticker":{"id":"ff052a5d-ab52-41f0-a49c-0afffa3cd7cf","type":"CategoricalTicker"}},"id":"7957390f-e54b-4300-a61c-4dd7bdbf7240","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"}},"id":"6983dec9-3cc5-4b42-b2b7-36d100c8396a","type":"HelpTool"},{"attributes":{"plot":{"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"}},"id":"e9a6f557-78dd-4388-a4b5-715ad6bf344d","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"e266b2ea-800f-4236-8008-c197aad78db0","type":"FactorRange"},{"attributes":{},"id":"834861dd-7e50-4240-bc6a-a9235399419d","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b48c1b63-2d57-4b58-a70d-66c1d760e790","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.73913043478261],"x":[7],"y":["Friday"]}},"id":"9106fc4b-a806-4512-bccb-4d2aa9e5951e","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"5d17c09c-39c7-47d8-8d14-a60c3b458e8e","type":"LinearColorMapper"},"formatter":{"id":"0f3db67e-54ad-4ade-bc13-0c0c2eaeffa1","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"},"ticker":{"id":"96ce868a-c5d7-4b20-b607-201ca0c29d7b","type":"BasicTicker"}},"id":"ade88b3c-cf2d-41e5-b5dd-7bb3573554c3","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.681818181818182,3.8181818181818183,4.911111111111111,3.8333333333333335,5.666666666666667,4.295454545454546,6.6,4.571428571428571,4.983870967741935,4.837837837837838,3.4444444444444446,6.666666666666667],"x":[7,21,22,5,8,22,5,23,22,22,6,23],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"22b97725-7027-4275-bb15-6678aa908342","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.76086956521739,11.136363636363637,12.510204081632653,11.304347826086957,11.456521739130435],"x":[21,21,22,21,21],"y":["Monday","Thursday","Thursday","Saturday","Sunday"]}},"id":"fccc3a89-ddd7-4ea6-a4d2-3b0503b5ad81","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fccc3a89-ddd7-4ea6-a4d2-3b0503b5ad81","type":"ColumnDataSource"},"glyph":{"id":"2311b6ba-1dce-481c-a6ab-ab050a5ef88b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8b919105-a84b-496c-b3c7-5180a0245fe8","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"9088dcb1-e701-400f-b887-6e98fc4d21d9","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5c42c485-fc4f-4ce6-a764-6ab67ee2d064","type":"PanTool"},{"id":"0a0929ea-6d54-4e15-bc5e-52dd599d98a8","type":"WheelZoomTool"},{"id":"feaebf0e-61e6-48e9-becd-4e56f251d60d","type":"BoxZoomTool"},{"id":"8b3b86ea-78ec-4f85-8294-d9cfb6459099","type":"SaveTool"},{"id":"e9a6f557-78dd-4388-a4b5-715ad6bf344d","type":"ResetTool"},{"id":"d753196f-9abd-48ce-9885-65d3404afed5","type":"HelpTool"}]},"id":"6d787f49-c122-48a7-9fa0-eba3e8d2a309","type":"Toolbar"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"46cda367-e56a-47ff-b159-78593a729edf","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"},"ticker":{"id":"8347e5a7-d295-45f3-a300-e0acffbe47d2","type":"CategoricalTicker"}},"id":"70c1c0f8-5ded-481e-9357-d3505c8a8dd6","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a221f40b-2b63-4058-b597-25ba6edc0fe4","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"28469503-9a41-42b1-9174-ce9b53fc2aba","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"03a38cde-0473-4718-894e-0fdcb4590b01","type":"Rect"},{"attributes":{"plot":{"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"}},"id":"d9f65220-9148-4bee-ab22-91b45eefa90b","type":"SaveTool"},{"attributes":{"data_source":{"id":"b165c872-3ce4-4ff4-9a93-1d637557a2aa","type":"ColumnDataSource"},"glyph":{"id":"4a438708-00d9-4863-bd5b-6de38daac916","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"601d120a-f29a-4a9a-a636-821ad15356b9","type":"GlyphRenderer"},{"attributes":{},"id":"4daf4430-c744-4ac0-a73f-1758000353bf","type":"BasicTicker"},{"attributes":{},"id":"a94e5e07-392e-4b06-8477-7de2cf82653a","type":"ToolEvents"},{"attributes":{},"id":"ff052a5d-ab52-41f0-a49c-0afffa3cd7cf","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.76086956521739,11.136363636363637,12.510204081632653,11.304347826086957,11.456521739130435],"x":[21,21,22,21,21],"y":["Monday","Thursday","Thursday","Saturday","Sunday"]}},"id":"71c510e6-1fb5-49a7-9511-34f4db3f826e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"9b782b2a-8a9d-488d-b359-9a6f62a30cdd","subtype":"Chart","type":"Plot"}},"id":"01bfe656-6aa7-4de8-95e8-81a83d6474df","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[23,7,23],"y":["Monday","Thursday","Saturday"]}},"id":"49596d98-6450-4947-b287-5e5a84a18711","type":"ColumnDataSource"},{"attributes":{},"id":"64fe791a-ad45-43b4-93b1-576a8a566d60","type":"BasicTicker"},{"attributes":{},"id":"a9d5d69f-9bd7-425e-baee-54fd7b136ac2","type":"ToolEvents"},{"attributes":{"color_mapper":{"id":"0cc5c630-ab4c-42c4-a62e-57846b8b87e8","type":"LinearColorMapper"},"formatter":{"id":"d8368e62-b400-419e-ae05-45272b49b532","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"},"ticker":{"id":"64fe791a-ad45-43b4-93b1-576a8a566d60","type":"BasicTicker"}},"id":"311f0f0e-a8e2-4979-b773-e0cc82a245d7","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.73913043478261],"x":[7],"y":["Friday"]}},"id":"39c95489-6003-44d7-bf05-3100ad0c0226","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"a49494ee-5777-436c-a5a2-cd301dfe1e38","type":"BoxAnnotation"},"plot":{"id":"6137916c-b15e-486b-9bad-d00a2acfa849","subtype":"Chart","type":"Plot"}},"id":"feaebf0e-61e6-48e9-becd-4e56f251d60d","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e5e08d09-604e-4b04-a0ed-3cd77b4810ec","type":"BoxAnnotation"},{"attributes":{},"id":"96ce868a-c5d7-4b20-b607-201ca0c29d7b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9106fc4b-a806-4512-bccb-4d2aa9e5951e","type":"ColumnDataSource"},"glyph":{"id":"e5f58f79-6b6a-4ca4-b65c-935d4fda2e53","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"83434982-0eda-4366-9bc3-368df3d67bb6","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"56204fe5-1509-4fd8-a13a-365243b9648b","type":"Panel"},{"id":"ed0ffeb8-e5b2-4788-9ab3-74a0fee8fae9","type":"Panel"}]},"id":"471dca80-41e0-44cb-8bde-f59f3c19a716","type":"Tabs"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b6a567db-ac44-4c4d-8cfb-7f053b321412","type":"PanTool"},{"id":"01bfe656-6aa7-4de8-95e8-81a83d6474df","type":"WheelZoomTool"},{"id":"935c6fee-0e57-4050-8abb-4b96f0a0db10","type":"BoxZoomTool"},{"id":"d9f65220-9148-4bee-ab22-91b45eefa90b","type":"SaveTool"},{"id":"6d4f926d-a029-42f0-98fd-718e7e372e72","type":"ResetTool"},{"id":"6983dec9-3cc5-4b42-b2b7-36d100c8396a","type":"HelpTool"}]},"id":"9a8ff336-a8b6-4b32-8e2a-b7b5ddab098d","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"a700fe8d-14f7-4598-85f9-661f9fd579fa","type":"Range1d"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"0cc5c630-ab4c-42c4-a62e-57846b8b87e8","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3bb608f-ca19-4896-8add-fbcbdb57fc98","type":"Rect"}],"root_ids":["471dca80-41e0-44cb-8bde-f59f3c19a716"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"d63003e5-9b95-4b98-9ab8-c9ab21972798","elementid":"87881e41-d7dc-45f3-a22a-ea700e73cc05","modelid":"471dca80-41e0-44cb-8bde-f59f3c19a716"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});