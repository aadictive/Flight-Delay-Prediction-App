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
      };var element = document.getElementById("72ef05a7-95f0-4531-b738-db15008ef9f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '72ef05a7-95f0-4531-b738-db15008ef9f1' but no matching script tag was found. ")
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
                  var docs_json = {"f98d8ca9-3a68-4b21-b28c-31c47af5886e":{"roots":{"references":[{"attributes":{},"id":"3c8bdf71-9d59-492a-b323-173c5bacfe9f","type":"BasicTickFormatter"},{"attributes":{},"id":"3810d4db-336b-4728-a98d-b3b43a7c9e5f","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.0,5.333333333333333],"x":[19,18],"y":["Wednesday","Friday"]}},"id":"37cc0186-4fd6-48a5-ac6f-a88c3a82bd68","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9ce72abc-6c8c-4279-ac52-ab6a0f8a4389","type":"PanTool"},{"id":"5f100f00-4696-4b7c-8858-3b570daab0d2","type":"WheelZoomTool"},{"id":"ec88ba30-1d0b-4c95-bda5-c590e30d3912","type":"BoxZoomTool"},{"id":"c9cd98bc-c8b1-49ba-b98a-0b32df84daa1","type":"SaveTool"},{"id":"f03855bf-de55-41e1-9df0-30ac8e242953","type":"ResetTool"},{"id":"f4771950-7567-40c3-b573-7b784d2c989f","type":"HelpTool"}]},"id":"6f6dd75a-488e-413c-a7a3-75959e19f628","type":"Toolbar"},{"attributes":{},"id":"8a281a3c-14ca-4288-8ae3-4a5098d5df64","type":"BasicTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"3c8bdf71-9d59-492a-b323-173c5bacfe9f","type":"BasicTickFormatter"},"plot":{"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"},"ticker":{"id":"b031f445-82fb-4111-a19e-1e41b7933b69","type":"BasicTicker"}},"id":"3334dc06-5aee-4c60-aa16-2ca66a964b99","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fe4f8c28-2d61-4e64-a28a-4ed6191c8ae5","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"d68f63b1-de30-439e-b431-dbfd98bb110d","type":"ColumnDataSource"},"glyph":{"id":"560612cf-e53e-4a0d-ad28-14f447b876e1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"99c34c8d-42ea-4ab6-a0a8-4de2d01aace9","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c288b7b7-e98c-4195-9c01-067593a653f4","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.0],"x":[18],"y":["Saturday"]}},"id":"0fbcbf18-557c-45ed-bc80-afb479761890","type":"ColumnDataSource"},{"attributes":{},"id":"b77a77b0-19a1-41e3-9e65-963e43f93eea","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"098bc352-e58e-47cc-a408-10da1565adc9","type":"PanTool"},{"id":"a3f195ad-5207-461c-88de-22f7c54ab3c4","type":"WheelZoomTool"},{"id":"132bed08-ed71-416c-a807-8c9730edcf28","type":"BoxZoomTool"},{"id":"91f15ace-3137-433c-804e-5d0e97d0ea2f","type":"SaveTool"},{"id":"174b5539-c772-4261-af54-7344eaee703e","type":"ResetTool"},{"id":"db9fd8b8-84ac-4d9f-ba18-834fd8c4d569","type":"HelpTool"}]},"id":"6deed521-c336-4924-a462-388bc49e7d74","type":"Toolbar"},{"attributes":{"data_source":{"id":"93418085-cb58-4c2d-8bef-aa6e8390ba55","type":"ColumnDataSource"},"glyph":{"id":"5dfb92ed-76bf-4fa1-9090-b6ddd9788485","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"426c629b-9101-4f29-a467-bc10197169f0","type":"GlyphRenderer"},{"attributes":{},"id":"40176edc-6adb-4578-b071-0be19514a973","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.0],"x":[18],"y":["Saturday"]}},"id":"d68f63b1-de30-439e-b431-dbfd98bb110d","type":"ColumnDataSource"},{"attributes":{},"id":"1f4daa52-b711-4430-802b-834bd8986246","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"0fbcbf18-557c-45ed-bc80-afb479761890","type":"ColumnDataSource"},"glyph":{"id":"f7a1d5b1-9e42-4fab-9647-0066eb7123ea","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b759fe95-ede5-468e-939d-d9f16fe20b17","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"}},"id":"174b5539-c772-4261-af54-7344eaee703e","type":"ResetTool"},{"attributes":{"plot":{"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"}},"id":"9ce72abc-6c8c-4279-ac52-ab6a0f8a4389","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca93e504-24f3-48d5-bae8-19356ebbda35","type":"Rect"},{"attributes":{"child":{"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"8c745834-2d64-4534-ac0f-fe20ae3da9f4","type":"Panel"},{"attributes":{},"id":"4e896aaa-dabe-451d-b070-affd7c0bee48","type":"ToolEvents"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"3abd4cae-285e-4c63-89ce-84f143a1b0ec","type":"LinearAxis"}],"left":[{"id":"91889e19-943e-42de-849e-2f90096bcdd3","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"fe4f8c28-2d61-4e64-a28a-4ed6191c8ae5","type":"BoxAnnotation"},{"id":"e8f5a513-8c95-4d15-911e-89b2ee0249df","type":"GlyphRenderer"},{"id":"c789bf13-c2b8-49a6-ade1-8eb47d0abb68","type":"GlyphRenderer"},{"id":"b759fe95-ede5-468e-939d-d9f16fe20b17","type":"GlyphRenderer"},{"id":"426c629b-9101-4f29-a467-bc10197169f0","type":"GlyphRenderer"},{"id":"0d907b2f-1c8a-4c58-a47e-661f4a2d527d","type":"GlyphRenderer"},{"id":"3abd4cae-285e-4c63-89ce-84f143a1b0ec","type":"LinearAxis"},{"id":"91889e19-943e-42de-849e-2f90096bcdd3","type":"CategoricalAxis"},{"id":"abfb24f5-5073-427e-a5a4-3af7b16a36d7","type":"ColorBar"}],"right":[{"id":"abfb24f5-5073-427e-a5a4-3af7b16a36d7","type":"ColorBar"}],"title":{"id":"28faeadc-1e14-474d-8b64-1827767a445a","type":"Title"},"tool_events":{"id":"269c5341-30e3-41d2-a768-df544c0b234e","type":"ToolEvents"},"toolbar":{"id":"6deed521-c336-4924-a462-388bc49e7d74","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"a1037da7-e8dd-4827-a527-747c38880ebf","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5627584c-37fd-4343-999d-1ca1f908de24","type":"FactorRange"}},"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"96ca2ca0-5c85-48d5-b0e9-6cc54091e2e6","type":"BasicTickFormatter"},"plot":{"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"},"ticker":{"id":"8a281a3c-14ca-4288-8ae3-4a5098d5df64","type":"BasicTicker"}},"id":"3abd4cae-285e-4c63-89ce-84f143a1b0ec","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7a1d5b1-9e42-4fab-9647-0066eb7123ea","type":"Rect"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"fc36d0c6-241c-4753-b4c9-856fb3dbf088","type":"Title"},{"attributes":{"data_source":{"id":"2de0c13f-b7ec-481d-ade8-f2842712097f","type":"ColumnDataSource"},"glyph":{"id":"c288b7b7-e98c-4195-9c01-067593a653f4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0d907b2f-1c8a-4c58-a47e-661f4a2d527d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[16.0],"x":[19],"y":["Sunday"]}},"id":"3c87e3a2-1245-462f-b318-d24ede1a0fa8","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e94eab17-ae7e-4ff7-932a-11301a98b619","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"},"ticker":{"id":"8adbb62c-4410-4253-9960-e177740d25c2","type":"CategoricalTicker"}},"id":"91889e19-943e-42de-849e-2f90096bcdd3","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"}},"id":"098bc352-e58e-47cc-a408-10da1565adc9","type":"PanTool"},{"attributes":{"plot":{"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"}},"id":"91f15ace-3137-433c-804e-5d0e97d0ea2f","type":"SaveTool"},{"attributes":{},"id":"e94eab17-ae7e-4ff7-932a-11301a98b619","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"7a81f79c-f61b-4e44-aff2-47a6bc883db8","type":"ColumnDataSource"},"glyph":{"id":"e3a6ef64-b0d5-4f86-a98c-c97d1f8b8460","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"866cc51d-fb80-4f4c-90f7-29b162517071","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"a1037da7-e8dd-4827-a527-747c38880ebf","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4d525934-9c20-4a9a-b2b1-ce73841308b5","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5dfb92ed-76bf-4fa1-9090-b6ddd9788485","type":"Rect"},{"attributes":{"plot":{"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"}},"id":"c9cd98bc-c8b1-49ba-b98a-0b32df84daa1","type":"SaveTool"},{"attributes":{"data_source":{"id":"37cc0186-4fd6-48a5-ac6f-a88c3a82bd68","type":"ColumnDataSource"},"glyph":{"id":"240e2844-df48-4087-8c0c-11f1038f3fee","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e97125b4-8c3b-45bf-9244-1452734df946","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"}},"id":"f4771950-7567-40c3-b573-7b784d2c989f","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e0e24a9b-8ee4-4599-ad7b-17a0d3546246","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"240e2844-df48-4087-8c0c-11f1038f3fee","type":"Rect"},{"attributes":{},"id":"269c5341-30e3-41d2-a768-df544c0b234e","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"28faeadc-1e14-474d-8b64-1827767a445a","type":"Title"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"aeab51ae-c961-4e52-a287-0e8fddd58746","type":"LinearColorMapper"},{"attributes":{},"id":"b031f445-82fb-4111-a19e-1e41b7933b69","type":"BasicTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"3334dc06-5aee-4c60-aa16-2ca66a964b99","type":"LinearAxis"}],"left":[{"id":"f974d200-2a90-4052-a512-a282e72079ef","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"e0e24a9b-8ee4-4599-ad7b-17a0d3546246","type":"BoxAnnotation"},{"id":"866cc51d-fb80-4f4c-90f7-29b162517071","type":"GlyphRenderer"},{"id":"4b81e3af-d4ea-4b35-9081-fe177fe3fd42","type":"GlyphRenderer"},{"id":"99c34c8d-42ea-4ab6-a0a8-4de2d01aace9","type":"GlyphRenderer"},{"id":"e97125b4-8c3b-45bf-9244-1452734df946","type":"GlyphRenderer"},{"id":"cfa6b895-5818-4aff-8831-c3612cb17cdf","type":"GlyphRenderer"},{"id":"3334dc06-5aee-4c60-aa16-2ca66a964b99","type":"LinearAxis"},{"id":"f974d200-2a90-4052-a512-a282e72079ef","type":"CategoricalAxis"},{"id":"b706e848-67ad-43f7-82f4-825e661d2fdd","type":"ColorBar"}],"right":[{"id":"b706e848-67ad-43f7-82f4-825e661d2fdd","type":"ColorBar"}],"title":{"id":"fc36d0c6-241c-4753-b4c9-856fb3dbf088","type":"Title"},"tool_events":{"id":"4e896aaa-dabe-451d-b070-affd7c0bee48","type":"ToolEvents"},"toolbar":{"id":"6f6dd75a-488e-413c-a7a3-75959e19f628","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"67b33a89-4755-4366-a4f9-20423e897175","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"6fd04476-c6a5-4586-b014-fae9995dcf66","type":"FactorRange"}},"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[18],"y":["Monday"]}},"id":"7a81f79c-f61b-4e44-aff2-47a6bc883db8","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[18],"y":["Monday"]}},"id":"bfcd9018-2b5b-41f4-af95-aaaff7950c36","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"}},"id":"a3f195ad-5207-461c-88de-22f7c54ab3c4","type":"WheelZoomTool"},{"attributes":{"callback":null,"factors":["Monday","Wednesday","Thursday","Friday","Saturday","Sunday","Tuesday"]},"id":"5627584c-37fd-4343-999d-1ca1f908de24","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c34ca03-a87a-4961-a6af-ccab92f39405","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"560612cf-e53e-4a0d-ad28-14f447b876e1","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"67b33a89-4755-4366-a4f9-20423e897175","type":"Range1d"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"26909030-67b7-4b76-a918-ec4c9e10337a","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"}},"id":"db9fd8b8-84ac-4d9f-ba18-834fd8c4d569","type":"HelpTool"},{"attributes":{},"id":"8adbb62c-4410-4253-9960-e177740d25c2","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"}},"id":"f03855bf-de55-41e1-9df0-30ac8e242953","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c5134af-e4cc-4c68-877d-42014fc4e97f","type":"Rect"},{"attributes":{"color_mapper":{"id":"26909030-67b7-4b76-a918-ec4c9e10337a","type":"LinearColorMapper"},"formatter":{"id":"b77a77b0-19a1-41e3-9e65-963e43f93eea","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"},"ticker":{"id":"3810d4db-336b-4728-a98d-b3b43a7c9e5f","type":"BasicTicker"}},"id":"abfb24f5-5073-427e-a5a4-3af7b16a36d7","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[16.0],"x":[19],"y":["Sunday"]}},"id":"25c2e62b-5ea1-4530-b672-961f23c725b8","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"e0e24a9b-8ee4-4599-ad7b-17a0d3546246","type":"BoxAnnotation"},"plot":{"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"}},"id":"ec88ba30-1d0b-4c95-bda5-c590e30d3912","type":"BoxZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e5c534cf-8582-4576-8dd5-4a125ffdb044","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"},"ticker":{"id":"1f4daa52-b711-4430-802b-834bd8986246","type":"CategoricalTicker"}},"id":"f974d200-2a90-4052-a512-a282e72079ef","type":"CategoricalAxis"},{"attributes":{},"id":"e5c534cf-8582-4576-8dd5-4a125ffdb044","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"25c2e62b-5ea1-4530-b672-961f23c725b8","type":"ColumnDataSource"},"glyph":{"id":"6c5134af-e4cc-4c68-877d-42014fc4e97f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c789bf13-c2b8-49a6-ade1-8eb47d0abb68","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e3a6ef64-b0d5-4f86-a98c-c97d1f8b8460","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0],"x":[19,18,20,20],"y":["Monday","Thursday","Saturday","Sunday"]}},"id":"2de0c13f-b7ec-481d-ade8-f2842712097f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a3b3c83f-4ebf-4564-9f6a-0da97e60b636","type":"ColumnDataSource"},"glyph":{"id":"ca93e504-24f3-48d5-bae8-19356ebbda35","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cfa6b895-5818-4aff-8831-c3612cb17cdf","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"fe4f8c28-2d61-4e64-a28a-4ed6191c8ae5","type":"BoxAnnotation"},"plot":{"id":"29212064-61a7-44a8-96c7-363dfce7e40c","subtype":"Chart","type":"Plot"}},"id":"132bed08-ed71-416c-a807-8c9730edcf28","type":"BoxZoomTool"},{"attributes":{"child":{"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"eb409a9e-0c0d-44f2-b096-5d1a207e0f2a","type":"Panel"},{"attributes":{"plot":{"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"}},"id":"5f100f00-4696-4b7c-8858-3b570daab0d2","type":"WheelZoomTool"},{"attributes":{},"id":"96ca2ca0-5c85-48d5-b0e9-6cc54091e2e6","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"bfcd9018-2b5b-41f4-af95-aaaff7950c36","type":"ColumnDataSource"},"glyph":{"id":"4d525934-9c20-4a9a-b2b1-ce73841308b5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e8f5a513-8c95-4d15-911e-89b2ee0249df","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.0,5.333333333333333],"x":[19,18],"y":["Wednesday","Friday"]}},"id":"93418085-cb58-4c2d-8bef-aa6e8390ba55","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"8c745834-2d64-4534-ac0f-fe20ae3da9f4","type":"Panel"},{"id":"eb409a9e-0c0d-44f2-b096-5d1a207e0f2a","type":"Panel"}]},"id":"133bc2ff-2edb-49e3-bfdf-8cb917482384","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0],"x":[19,18,20,20],"y":["Monday","Thursday","Saturday","Sunday"]}},"id":"a3b3c83f-4ebf-4564-9f6a-0da97e60b636","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Wednesday","Thursday","Friday","Saturday","Sunday","Tuesday"]},"id":"6fd04476-c6a5-4586-b014-fae9995dcf66","type":"FactorRange"},{"attributes":{},"id":"bdfd41a2-e873-474a-b696-8a37d3cf64d2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3c87e3a2-1245-462f-b318-d24ede1a0fa8","type":"ColumnDataSource"},"glyph":{"id":"9c34ca03-a87a-4961-a6af-ccab92f39405","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4b81e3af-d4ea-4b35-9081-fe177fe3fd42","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"aeab51ae-c961-4e52-a287-0e8fddd58746","type":"LinearColorMapper"},"formatter":{"id":"bdfd41a2-e873-474a-b696-8a37d3cf64d2","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"a1b749fc-8951-485d-9116-f34e5886aaff","subtype":"Chart","type":"Plot"},"ticker":{"id":"40176edc-6adb-4578-b071-0be19514a973","type":"BasicTicker"}},"id":"b706e848-67ad-43f7-82f4-825e661d2fdd","type":"ColorBar"}],"root_ids":["133bc2ff-2edb-49e3-bfdf-8cb917482384"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"f98d8ca9-3a68-4b21-b28c-31c47af5886e","elementid":"72ef05a7-95f0-4531-b738-db15008ef9f1","modelid":"133bc2ff-2edb-49e3-bfdf-8cb917482384"}];
                  
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