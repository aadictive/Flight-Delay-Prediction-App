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
      };var element = document.getElementById("c48e0ca2-88ba-4be3-95ef-37c3a75fcd1f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c48e0ca2-88ba-4be3-95ef-37c3a75fcd1f' but no matching script tag was found. ")
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
                  var docs_json = {"745ff214-fc03-4938-9390-612f442b5a68":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"71cce024-bc83-4c08-a384-816212553403","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eaecb185-2e31-4b56-980c-7053df6f98fd","type":"Rect"},{"attributes":{"plot":{"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"}},"id":"2bb30793-bd36-4508-80de-643c7c054eef","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1bdf4b73-b069-4ff3-9ef3-403c5cee3ff1","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21.2, 24.2]"],"chart_index":[{"POS_ARR_DELAY":"(21.2, 24.2]"}],"values":[21.8],"x":[5],"y":["Wednesday"]}},"id":"90b8893d-03b0-4be1-a221-61cfc8e5657e","type":"ColumnDataSource"},{"attributes":{},"id":"17b0654a-c832-458f-8164-0b96e9b0c012","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24.2, 27.2]"],"chart_index":[{"POS_ARR_DELAY":"(24.2, 27.2]"}],"values":[27.25],"x":[5],"y":["Thursday"]}},"id":"d525fb1f-abae-4449-b0bb-2ae3440830d7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"86ca7f4c-0896-4de0-aab2-941387077f3e","type":"ColumnDataSource"},"glyph":{"id":"d3356ffe-acc2-4331-9f10-dcaa841ac204","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5ee2b649-c584-487f-98b2-7f5768d7e72a","type":"GlyphRenderer"},{"attributes":{},"id":"e9ae921a-acdf-449a-a29c-b266f34c13c6","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3eb17311-dd4a-43c4-8d7c-65e1ae403cb0","type":"ColumnDataSource"},"glyph":{"id":"8a60a827-5fb2-4b05-a2f9-51004e411ed5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"179060a4-3913-4f46-9643-9f279fcacb93","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"}},"id":"17f9221b-c60c-40fc-b60e-c6efa57a0c8f","type":"PanTool"},{"attributes":{"data_source":{"id":"17011f25-80d4-494c-9c48-a264c4d3183b","type":"ColumnDataSource"},"glyph":{"id":"71cce024-bc83-4c08-a384-816212553403","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"db374314-8ab1-4614-9cf8-3c13ca145d00","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"76230099-d08c-412c-aed0-20ecd29caff0","type":"BoxAnnotation"},{"attributes":{"child":{"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"76e70fbb-999c-4a79-975b-564a0b7ddb02","type":"Panel"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"05912b44-96b8-4730-bfb3-989818acc675","type":"FactorRange"},{"attributes":{"data_source":{"id":"6f16432a-81a1-4cb3-a718-137121190add","type":"ColumnDataSource"},"glyph":{"id":"7f3d0873-181a-48cd-9cd5-6e9e1225f9db","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9649c0d-7485-4d87-9f19-3f2129d23e60","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e449247f-02a7-492f-9366-56a4387285b6","type":"Rect"},{"attributes":{"plot":{"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"}},"id":"04b9f116-8bd7-478c-be34-43419e3edbac","type":"ResetTool"},{"attributes":{"plot":{"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"}},"id":"13b76f5c-1700-4ca2-8c9d-bfecb789ad18","type":"SaveTool"},{"attributes":{"plot":{"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"}},"id":"52547526-677a-4cb8-8d0a-39510e9f31ad","type":"SaveTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"0b99c30b-77af-4fa8-ad77-8d63e3b6c75d","type":"BasicTickFormatter"},"plot":{"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"},"ticker":{"id":"13604868-3920-49a3-ab95-8162f7c3370a","type":"BasicTicker"}},"id":"fd743ac6-bde2-446b-9116-92e0af9f95b0","type":"LinearAxis"},{"attributes":{"data_source":{"id":"fe247e99-8183-49c6-9733-98c34355461d","type":"ColumnDataSource"},"glyph":{"id":"1bdf4b73-b069-4ff3-9ef3-403c5cee3ff1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e2ef94b0-3ad9-4892-bf26-a98e5c2595da","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"c220873a-71ba-4097-8489-c2c2066f1466","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15.1, 18.2]"],"chart_index":[{"POS_ARR_DELAY":"(15.1, 18.2]"}],"values":[16.983333333333334],"x":[7],"y":["Friday"]}},"id":"1f7dfa40-cd46-4856-8ddc-95533856af6c","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"08661aba-792d-4ce2-80ca-753507607dcc","type":"Range1d"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"9e23dd28-1056-4393-91b0-a1b596354bd8","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"},"ticker":{"id":"e88849b6-b5f9-4f65-9e49-63ebdf13b8ce","type":"CategoricalTicker"}},"id":"306fe494-c702-47f5-bf11-de8143c8fae9","type":"CategoricalAxis"},{"attributes":{},"id":"408b3d6c-0a27-418e-81ba-46d38953b66d","type":"BasicTickFormatter"},{"attributes":{},"id":"16bf9ce5-d627-48c6-92c4-9de47b98783d","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"17f9221b-c60c-40fc-b60e-c6efa57a0c8f","type":"PanTool"},{"id":"178e5397-732c-4dc2-9270-a8b8b389e7ed","type":"WheelZoomTool"},{"id":"4fcfedd0-3c07-4ed5-a4a6-8d9d532f2c66","type":"BoxZoomTool"},{"id":"13b76f5c-1700-4ca2-8c9d-bfecb789ad18","type":"SaveTool"},{"id":"c9e12ddf-636e-4573-94b6-ae3b9f3da439","type":"ResetTool"},{"id":"2bb30793-bd36-4508-80de-643c7c054eef","type":"HelpTool"}]},"id":"b24cd958-839f-4369-973a-a6785c4d818b","type":"Toolbar"},{"attributes":{"plot":{"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"}},"id":"60bcb469-9aa1-41aa-82a1-0c8af73657fa","type":"PanTool"},{"attributes":{"plot":{"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"}},"id":"178e5397-732c-4dc2-9270-a8b8b389e7ed","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b3dea83-64fc-43e2-92dd-fa2bd6582fbf","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21.2, 24.2]"],"chart_index":[{"POS_ARR_DELAY":"(21.2, 24.2]"}],"values":[21.8],"x":[5],"y":["Wednesday"]}},"id":"c20494a1-533a-4193-a022-eae1c15d7566","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"fd743ac6-bde2-446b-9116-92e0af9f95b0","type":"LinearAxis"}],"left":[{"id":"b80f918b-b796-4f96-8b91-505bb62170b7","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"bd215116-5431-4456-b373-ba124241a7fe","type":"BoxAnnotation"},{"id":"90ac6607-7375-43aa-b76f-0c63d562873b","type":"GlyphRenderer"},{"id":"5d352a8a-b87a-4040-9ddf-a187b602bea4","type":"GlyphRenderer"},{"id":"db374314-8ab1-4614-9cf8-3c13ca145d00","type":"GlyphRenderer"},{"id":"d9649c0d-7485-4d87-9f19-3f2129d23e60","type":"GlyphRenderer"},{"id":"0c4079ae-5cb1-4abf-8f96-1796374ae1f8","type":"GlyphRenderer"},{"id":"e6f49191-e995-490e-a5a1-fbbcc48ffec8","type":"GlyphRenderer"},{"id":"e2ef94b0-3ad9-4892-bf26-a98e5c2595da","type":"GlyphRenderer"},{"id":"fd743ac6-bde2-446b-9116-92e0af9f95b0","type":"LinearAxis"},{"id":"b80f918b-b796-4f96-8b91-505bb62170b7","type":"CategoricalAxis"},{"id":"16b55009-c2b0-4cc0-9608-5b75191f194f","type":"ColorBar"}],"right":[{"id":"16b55009-c2b0-4cc0-9608-5b75191f194f","type":"ColorBar"}],"title":{"id":"6da3b2e9-06d3-4a7a-bb67-e9d206cbb520","type":"Title"},"tool_events":{"id":"4bc0beec-179a-465c-a0a4-61994c3c0728","type":"ToolEvents"},"toolbar":{"id":"f4a3614a-4485-4e64-85cb-596128ace936","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"08661aba-792d-4ce2-80ca-753507607dcc","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"05912b44-96b8-4730-bfb3-989818acc675","type":"FactorRange"}},"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a60a827-5fb2-4b05-a2f9-51004e411ed5","type":"Rect"},{"attributes":{"data_source":{"id":"43db5adf-cfdf-41d5-94ea-ee714b2270ef","type":"ColumnDataSource"},"glyph":{"id":"b44e2a7a-5c81-4b30-8572-ca6570f2bbde","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4f201447-213d-40ef-a7db-bfdb88b84200","type":"GlyphRenderer"},{"attributes":{},"id":"9e23dd28-1056-4393-91b0-a1b596354bd8","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.06, 9.08]","(6.06, 9.08]","(6.06, 9.08]","(6.06, 9.08]","(6.06, 9.08]"],"chart_index":[{"POS_ARR_DELAY":"(6.06, 9.08]"},{"POS_ARR_DELAY":"(6.06, 9.08]"},{"POS_ARR_DELAY":"(6.06, 9.08]"},{"POS_ARR_DELAY":"(6.06, 9.08]"},{"POS_ARR_DELAY":"(6.06, 9.08]"}],"values":[6.254901960784314,7.9,7.285714285714286,7.231884057971015,8.87037037037037],"x":[7,7,7,6,7],"y":["Tuesday","Wednesday","Thursday","Sunday","Sunday"]}},"id":"3eb17311-dd4a-43c4-8d7c-65e1ae403cb0","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"409a9633-5dbf-40e5-a07c-ca0a74f7239b","type":"FactorRange"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"e9ae921a-acdf-449a-a29c-b266f34c13c6","type":"BasicTickFormatter"},"plot":{"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"},"ticker":{"id":"1581cc3d-34a8-4773-b460-3c4e55ee06f7","type":"BasicTicker"}},"id":"f0514204-1597-4fd3-bd13-1fcbe8397de6","type":"LinearAxis"},{"attributes":{},"id":"44214b93-f9b5-4d3f-9d09-2261dfa85e09","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.08, 12.1]"],"chart_index":[{"POS_ARR_DELAY":"(9.08, 12.1]"}],"values":[10.53448275862069],"x":[7],"y":["Saturday"]}},"id":"86ca7f4c-0896-4de0-aab2-941387077f3e","type":"ColumnDataSource"},{"attributes":{},"id":"1581cc3d-34a8-4773-b460-3c4e55ee06f7","type":"BasicTicker"},{"attributes":{"data_source":{"id":"124c7f81-5089-4c75-b95a-a1f52ac8bf09","type":"ColumnDataSource"},"glyph":{"id":"6b3dea83-64fc-43e2-92dd-fa2bd6582fbf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7f407be3-9b0c-4e31-a19b-52a61d562ab7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.08, 12.1]"],"chart_index":[{"POS_ARR_DELAY":"(9.08, 12.1]"}],"values":[10.53448275862069],"x":[7],"y":["Saturday"]}},"id":"6f16432a-81a1-4cb3-a718-137121190add","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b44e2a7a-5c81-4b30-8572-ca6570f2bbde","type":"Rect"},{"attributes":{"data_source":{"id":"d525fb1f-abae-4449-b0bb-2ae3440830d7","type":"ColumnDataSource"},"glyph":{"id":"22d505bf-df23-4534-a089-44535c489e95","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"90ac6607-7375-43aa-b76f-0c63d562873b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c73bbaf3-5ee5-4255-be53-191523e410f9","type":"ColumnDataSource"},"glyph":{"id":"e449247f-02a7-492f-9366-56a4387285b6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0c4079ae-5cb1-4abf-8f96-1796374ae1f8","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"76230099-d08c-412c-aed0-20ecd29caff0","type":"BoxAnnotation"},"plot":{"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"}},"id":"4fcfedd0-3c07-4ed5-a4a6-8d9d532f2c66","type":"BoxZoomTool"},{"attributes":{"color_mapper":{"id":"85a767e6-288d-4420-a6c4-1857e9e87335","type":"LinearColorMapper"},"formatter":{"id":"16bf9ce5-d627-48c6-92c4-9de47b98783d","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"},"ticker":{"id":"45f35961-530b-4178-b2bd-eb28dd7f316d","type":"BasicTicker"}},"id":"16b55009-c2b0-4cc0-9608-5b75191f194f","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"22d505bf-df23-4534-a089-44535c489e95","type":"Rect"},{"attributes":{"plot":{"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"}},"id":"5618cb00-b7f4-4add-82b5-046b1b4f29b0","type":"HelpTool"},{"attributes":{},"id":"4bc0beec-179a-465c-a0a4-61994c3c0728","type":"ToolEvents"},{"attributes":{"color_mapper":{"id":"19036b7b-e8e2-4bf3-8f2e-770c30f57e4f","type":"LinearColorMapper"},"formatter":{"id":"408b3d6c-0a27-418e-81ba-46d38953b66d","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"},"ticker":{"id":"44214b93-f9b5-4d3f-9d09-2261dfa85e09","type":"BasicTicker"}},"id":"1388fe81-caa6-416c-865e-309d32a88924","type":"ColorBar"},{"attributes":{"callback":null,"tabs":[{"id":"76e70fbb-999c-4a79-975b-564a0b7ddb02","type":"Panel"},{"id":"55b60119-159e-4506-b345-9fda8c6dbc0d","type":"Panel"}]},"id":"a9cae1c8-94c4-43d3-ba59-1f02a6cf9000","type":"Tabs"},{"attributes":{"data_source":{"id":"90b8893d-03b0-4be1-a221-61cfc8e5657e","type":"ColumnDataSource"},"glyph":{"id":"318376ce-a7cb-4bd8-b7ba-a86a72c5e290","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5d352a8a-b87a-4040-9ddf-a187b602bea4","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a430aae3-5c52-41d7-a1ad-d4e90ed0748c","type":"ColumnDataSource"},"glyph":{"id":"7ef298f7-0eb9-477e-97a2-2bb6ef9cdf97","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cfa463e6-cc5a-400b-b7ad-05c25c13497b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24.2, 27.2]"],"chart_index":[{"POS_ARR_DELAY":"(24.2, 27.2]"}],"values":[27.25],"x":[5],"y":["Thursday"]}},"id":"124c7f81-5089-4c75-b95a-a1f52ac8bf09","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"60bcb469-9aa1-41aa-82a1-0c8af73657fa","type":"PanTool"},{"id":"67f91c6f-1a5a-432e-8fec-8f3d6dc2fda8","type":"WheelZoomTool"},{"id":"c6b65d59-12e5-4b59-ae2d-a12ae444b0fd","type":"BoxZoomTool"},{"id":"52547526-677a-4cb8-8d0a-39510e9f31ad","type":"SaveTool"},{"id":"04b9f116-8bd7-478c-be34-43419e3edbac","type":"ResetTool"},{"id":"5618cb00-b7f4-4add-82b5-046b1b4f29b0","type":"HelpTool"}]},"id":"f4a3614a-4485-4e64-85cb-596128ace936","type":"Toolbar"},{"attributes":{"child":{"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"55b60119-159e-4506-b345-9fda8c6dbc0d","type":"Panel"},{"attributes":{"overlay":{"id":"bd215116-5431-4456-b373-ba124241a7fe","type":"BoxAnnotation"},"plot":{"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"}},"id":"c6b65d59-12e5-4b59-ae2d-a12ae444b0fd","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.03, 6.06]","(3.03, 6.06]","(3.03, 6.06]","(3.03, 6.06]","(3.03, 6.06]","(3.03, 6.06]"],"chart_index":[{"POS_ARR_DELAY":"(3.03, 6.06]"},{"POS_ARR_DELAY":"(3.03, 6.06]"},{"POS_ARR_DELAY":"(3.03, 6.06]"},{"POS_ARR_DELAY":"(3.03, 6.06]"},{"POS_ARR_DELAY":"(3.03, 6.06]"},{"POS_ARR_DELAY":"(3.03, 6.06]"}],"values":[3.1506849315068495,5.131147540983607,5.610169491525424,4.333333333333333,4.205479452054795,4.987179487179487],"x":[6,7,6,6,6,6],"y":["Monday","Monday","Tuesday","Wednesday","Friday","Saturday"]}},"id":"43db5adf-cfdf-41d5-94ea-ee714b2270ef","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ef298f7-0eb9-477e-97a2-2bb6ef9cdf97","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"ef672ac6-db1c-4cd9-88b4-1b2a0d238b0d","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3356ffe-acc2-4331-9f10-dcaa841ac204","type":"Rect"},{"attributes":{"plot":{"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"}},"id":"c9e12ddf-636e-4573-94b6-ae3b9f3da439","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"318376ce-a7cb-4bd8-b7ba-a86a72c5e290","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.03]","[-0.03, 3.03]","[-0.03, 3.03]","[-0.03, 3.03]","[-0.03, 3.03]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.03]"},{"POS_ARR_DELAY":"[-0.03, 3.03]"},{"POS_ARR_DELAY":"[-0.03, 3.03]"},{"POS_ARR_DELAY":"[-0.03, 3.03]"},{"POS_ARR_DELAY":"[-0.03, 3.03]"}],"values":[0.0,2.75,1.855072463768116,0.0,2.0],"x":[5,5,6,5,5],"y":["Monday","Tuesday","Thursday","Friday","Saturday"]}},"id":"a430aae3-5c52-41d7-a1ad-d4e90ed0748c","type":"ColumnDataSource"},{"attributes":{},"id":"6ceb5722-1dff-4054-a41c-2a1e10ecfe07","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"280f8443-c8bc-4e4f-9316-6290759d93d1","type":"ColumnDataSource"},"glyph":{"id":"a2caf50f-e4d9-450b-93a8-d06092e1700e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e6f49191-e995-490e-a5a1-fbbcc48ffec8","type":"GlyphRenderer"},{"attributes":{},"id":"fc326cbd-dd5c-4740-8db3-ea98cecf0eec","type":"CategoricalTicker"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"85a767e6-288d-4420-a6c4-1857e9e87335","type":"LinearColorMapper"},{"attributes":{},"id":"e88849b6-b5f9-4f65-9e49-63ebdf13b8ce","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"1f7dfa40-cd46-4856-8ddc-95533856af6c","type":"ColumnDataSource"},"glyph":{"id":"01766dcd-14d7-424f-a7f4-235169a71025","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ef21da2e-2292-47a1-909e-bb1a09853223","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bd215116-5431-4456-b373-ba124241a7fe","type":"BoxAnnotation"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"f0514204-1597-4fd3-bd13-1fcbe8397de6","type":"LinearAxis"}],"left":[{"id":"306fe494-c702-47f5-bf11-de8143c8fae9","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"76230099-d08c-412c-aed0-20ecd29caff0","type":"BoxAnnotation"},{"id":"7f407be3-9b0c-4e31-a19b-52a61d562ab7","type":"GlyphRenderer"},{"id":"0f56f93c-67c2-4fa2-ba80-41e5d142c9a2","type":"GlyphRenderer"},{"id":"ef21da2e-2292-47a1-909e-bb1a09853223","type":"GlyphRenderer"},{"id":"5ee2b649-c584-487f-98b2-7f5768d7e72a","type":"GlyphRenderer"},{"id":"179060a4-3913-4f46-9643-9f279fcacb93","type":"GlyphRenderer"},{"id":"4f201447-213d-40ef-a7db-bfdb88b84200","type":"GlyphRenderer"},{"id":"cfa463e6-cc5a-400b-b7ad-05c25c13497b","type":"GlyphRenderer"},{"id":"f0514204-1597-4fd3-bd13-1fcbe8397de6","type":"LinearAxis"},{"id":"306fe494-c702-47f5-bf11-de8143c8fae9","type":"CategoricalAxis"},{"id":"1388fe81-caa6-416c-865e-309d32a88924","type":"ColorBar"}],"right":[{"id":"1388fe81-caa6-416c-865e-309d32a88924","type":"ColorBar"}],"title":{"id":"c220873a-71ba-4097-8489-c2c2066f1466","type":"Title"},"tool_events":{"id":"17b0654a-c832-458f-8164-0b96e9b0c012","type":"ToolEvents"},"toolbar":{"id":"b24cd958-839f-4369-973a-a6785c4d818b","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"ef672ac6-db1c-4cd9-88b4-1b2a0d238b0d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"409a9633-5dbf-40e5-a07c-ca0a74f7239b","type":"FactorRange"}},"id":"190d4e13-1575-4792-bfc3-b4a43070173c","subtype":"Chart","type":"Plot"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"19036b7b-e8e2-4bf3-8f2e-770c30f57e4f","type":"LinearColorMapper"},{"attributes":{},"id":"13604868-3920-49a3-ab95-8162f7c3370a","type":"BasicTicker"},{"attributes":{},"id":"45f35961-530b-4178-b2bd-eb28dd7f316d","type":"BasicTicker"},{"attributes":{},"id":"0b99c30b-77af-4fa8-ad77-8d63e3b6c75d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"}},"id":"67f91c6f-1a5a-432e-8fec-8f3d6dc2fda8","type":"WheelZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"6ceb5722-1dff-4054-a41c-2a1e10ecfe07","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"733ae911-35a7-484b-b067-5347c7e58dec","subtype":"Chart","type":"Plot"},"ticker":{"id":"fc326cbd-dd5c-4740-8db3-ea98cecf0eec","type":"CategoricalTicker"}},"id":"b80f918b-b796-4f96-8b91-505bb62170b7","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.06, 9.08]","(6.06, 9.08]","(6.06, 9.08]","(6.06, 9.08]","(6.06, 9.08]"],"chart_index":[{"POS_ARR_DELAY":"(6.06, 9.08]"},{"POS_ARR_DELAY":"(6.06, 9.08]"},{"POS_ARR_DELAY":"(6.06, 9.08]"},{"POS_ARR_DELAY":"(6.06, 9.08]"},{"POS_ARR_DELAY":"(6.06, 9.08]"}],"values":[6.254901960784314,7.9,7.285714285714286,7.231884057971015,8.87037037037037],"x":[7,7,7,6,7],"y":["Tuesday","Wednesday","Thursday","Sunday","Sunday"]}},"id":"c73bbaf3-5ee5-4255-be53-191523e410f9","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"01766dcd-14d7-424f-a7f4-235169a71025","type":"Rect"},{"attributes":{"data_source":{"id":"c20494a1-533a-4193-a022-eae1c15d7566","type":"ColumnDataSource"},"glyph":{"id":"eaecb185-2e31-4b56-980c-7053df6f98fd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0f56f93c-67c2-4fa2-ba80-41e5d142c9a2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15.1, 18.2]"],"chart_index":[{"POS_ARR_DELAY":"(15.1, 18.2]"}],"values":[16.983333333333334],"x":[7],"y":["Friday"]}},"id":"17011f25-80d4-494c-9c48-a264c4d3183b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.03, 6.06]","(3.03, 6.06]","(3.03, 6.06]","(3.03, 6.06]","(3.03, 6.06]","(3.03, 6.06]"],"chart_index":[{"POS_ARR_DELAY":"(3.03, 6.06]"},{"POS_ARR_DELAY":"(3.03, 6.06]"},{"POS_ARR_DELAY":"(3.03, 6.06]"},{"POS_ARR_DELAY":"(3.03, 6.06]"},{"POS_ARR_DELAY":"(3.03, 6.06]"},{"POS_ARR_DELAY":"(3.03, 6.06]"}],"values":[3.1506849315068495,5.131147540983607,5.610169491525424,4.333333333333333,4.205479452054795,4.987179487179487],"x":[6,7,6,6,6,6],"y":["Monday","Monday","Tuesday","Wednesday","Friday","Saturday"]}},"id":"280f8443-c8bc-4e4f-9316-6290759d93d1","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2caf50f-e4d9-450b-93a8-d06092e1700e","type":"Rect"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"6da3b2e9-06d3-4a7a-bb67-e9d206cbb520","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.03]","[-0.03, 3.03]","[-0.03, 3.03]","[-0.03, 3.03]","[-0.03, 3.03]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.03]"},{"POS_ARR_DELAY":"[-0.03, 3.03]"},{"POS_ARR_DELAY":"[-0.03, 3.03]"},{"POS_ARR_DELAY":"[-0.03, 3.03]"},{"POS_ARR_DELAY":"[-0.03, 3.03]"}],"values":[0.0,2.75,1.855072463768116,0.0,2.0],"x":[5,5,6,5,5],"y":["Monday","Tuesday","Thursday","Friday","Saturday"]}},"id":"fe247e99-8183-49c6-9733-98c34355461d","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f3d0873-181a-48cd-9cd5-6e9e1225f9db","type":"Rect"}],"root_ids":["a9cae1c8-94c4-43d3-ba59-1f02a6cf9000"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"745ff214-fc03-4938-9390-612f442b5a68","elementid":"c48e0ca2-88ba-4be3-95ef-37c3a75fcd1f","modelid":"a9cae1c8-94c4-43d3-ba59-1f02a6cf9000"}];
                  
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