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
      };var element = document.getElementById("c55451bb-e330-45a9-b7ef-b55553ca3723");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c55451bb-e330-45a9-b7ef-b55553ca3723' but no matching script tag was found. ")
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
                  var docs_json = {"f7315783-a797-465e-a9d2-1567b1dede19":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.0,2.658536585365854,2.4,0.0,1.8636363636363635,0.0,3.3174603174603177],"x":[12,6,0,9,7,9,13],"y":["Wednesday","Thursday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"0f16dc96-debc-43f4-a98c-a56fc7e7a0ff","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f10319f4-97ef-49b4-8f4d-26e522c22894","type":"ColumnDataSource"},"glyph":{"id":"e07dfde0-f8d9-45e5-9c3b-a965c633c9e9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0327a47e-cfd5-4ebe-9da8-3570b25b19da","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4969acd0-99ba-4046-90c5-d62291980784","type":"Rect"},{"attributes":{"data_source":{"id":"fbe081b4-fc2a-4a0d-ae22-3562a31d6e86","type":"ColumnDataSource"},"glyph":{"id":"bc3b43cd-080d-44a9-b70d-10fcfdf4f30c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9e1d9be9-5814-418e-bbbd-048ab8a98607","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"355a1765-4986-41ac-a0b8-5cfaa1e74c1d","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ed5c7b53-aa87-488c-b7b2-e90e56bbea9d","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"24f1b838-6bd4-4479-9f82-f7f0fdcdf5b0","type":"Rect"},{"attributes":{"plot":{"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"}},"id":"9bf77cd7-0a77-4f86-97e0-8bb446922a52","type":"HelpTool"},{"attributes":{"plot":{"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"}},"id":"7730d9d4-afe9-44d7-add0-aceac3310d88","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":23},"id":"7b5a3da8-c64b-465b-9a89-f1c47d54a1a9","type":"Range1d"},{"attributes":{"data_source":{"id":"17af971d-b8e4-4f59-af00-de769f86bd8b","type":"ColumnDataSource"},"glyph":{"id":"24f1b838-6bd4-4479-9f82-f7f0fdcdf5b0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"accef2e8-d07c-4bac-b4be-f75f03f0c413","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"df6ad5fd-9b3d-447f-91fa-6a49177b54bc","type":"BasicTickFormatter"},"plot":{"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"},"ticker":{"id":"d8c6be4f-a1d0-4b3f-a218-5e6cb345a354","type":"BasicTicker"}},"id":"edb0637f-4474-461f-9e6a-f457839b112c","type":"LinearAxis"},{"attributes":{"plot":{"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"}},"id":"d4ce160b-a34f-4a6d-ac98-aa342e7ce552","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"8f5e3057-325e-4c3f-a028-1c3a496a67e3","type":"ColumnDataSource"},"glyph":{"id":"81ad8a44-9360-4c33-a84d-f054e277b8ef","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fd4eb87a-0976-4589-8869-5e2287f4d252","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c7de60ff-65d5-43a2-9335-b0bad600d006","type":"ColumnDataSource"},"glyph":{"id":"8f56930f-8271-4629-8701-b9f54def840e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2ef4a48f-7851-4983-abb3-a44ac3d6d2dc","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"99531802-ba59-4050-ae7f-baa41cb23933","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[13],"y":["Friday"]}},"id":"756f6714-6e65-4426-b18f-07eedf9f9c33","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"65a1d9f1-86c8-4b72-8596-83b92c4cab0b","type":"ColumnDataSource"},"glyph":{"id":"5b0727c7-9fb5-4447-b537-cf68caa5918a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fead2f39-f570-415f-8c45-3b95b64b560a","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e1d29b87-d884-4da4-b0d6-425770be7953","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"},"ticker":{"id":"38dc062b-fb30-43be-9137-5411960cad0a","type":"CategoricalTicker"}},"id":"6e05746a-bca7-4bad-a3c9-2584ce9bbfb4","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[13],"y":["Friday"]}},"id":"35e1a494-44cd-436a-bc46-3d914f2e66a0","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"77afec7b-7411-4bff-80fc-2371a0402e3f","type":"LinearColorMapper"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"07b7d398-51ff-48d6-8b1f-9592e0b4942b","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f4a84bc2-ffef-4d17-8c07-756a44862708","type":"PanTool"},{"id":"7730d9d4-afe9-44d7-add0-aceac3310d88","type":"WheelZoomTool"},{"id":"fa6a2dbf-2eec-4177-9a49-5fc21a68d5e9","type":"BoxZoomTool"},{"id":"b033bc93-ae2e-45a1-b447-e5461c8f0dd3","type":"SaveTool"},{"id":"08f31deb-076d-4491-88b1-3d99e79a6981","type":"ResetTool"},{"id":"9bf77cd7-0a77-4f86-97e0-8bb446922a52","type":"HelpTool"}]},"id":"43f3e73d-58fb-4754-9784-dbabb83366bc","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.65573770491803,17.140350877192983],"x":[7,13],"y":["Thursday","Thursday"]}},"id":"7d1df171-3c76-4250-a3d1-42641f47dd23","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"}},"id":"bc9ab368-8957-472f-9126-76a8e27189a1","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"86e15ad9-09a5-41eb-93bd-0c471bf71c84","type":"FactorRange"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"edb0637f-4474-461f-9e6a-f457839b112c","type":"LinearAxis"}],"left":[{"id":"6e05746a-bca7-4bad-a3c9-2584ce9bbfb4","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ed5c7b53-aa87-488c-b7b2-e90e56bbea9d","type":"BoxAnnotation"},{"id":"6c4bdbd8-3c43-415e-be1d-171a26f6b8c4","type":"GlyphRenderer"},{"id":"12cd66e5-53fd-410b-a2da-89583747d9b1","type":"GlyphRenderer"},{"id":"da9971f0-1492-4076-a883-c7f9ecffa538","type":"GlyphRenderer"},{"id":"9e1d9be9-5814-418e-bbbd-048ab8a98607","type":"GlyphRenderer"},{"id":"fead2f39-f570-415f-8c45-3b95b64b560a","type":"GlyphRenderer"},{"id":"082a23d0-94bd-4d18-b292-5ec70ddbceac","type":"GlyphRenderer"},{"id":"d3eea2cd-1e8c-45cf-a0ac-280d7c013400","type":"GlyphRenderer"},{"id":"0327a47e-cfd5-4ebe-9da8-3570b25b19da","type":"GlyphRenderer"},{"id":"2ef4a48f-7851-4983-abb3-a44ac3d6d2dc","type":"GlyphRenderer"},{"id":"edb0637f-4474-461f-9e6a-f457839b112c","type":"LinearAxis"},{"id":"6e05746a-bca7-4bad-a3c9-2584ce9bbfb4","type":"CategoricalAxis"},{"id":"97db6472-dfaa-43f7-8df7-b77a524847c4","type":"ColorBar"}],"right":[{"id":"97db6472-dfaa-43f7-8df7-b77a524847c4","type":"ColorBar"}],"title":{"id":"bdbe02cd-afc0-4865-8ad0-e964be2f5420","type":"Title"},"tool_events":{"id":"0686088b-76c0-42f7-8787-5cfdf07a06d6","type":"ToolEvents"},"toolbar":{"id":"43f3e73d-58fb-4754-9784-dbabb83366bc","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"355a1765-4986-41ac-a0b8-5cfaa1e74c1d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"86e15ad9-09a5-41eb-93bd-0c471bf71c84","type":"FactorRange"}},"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc3b43cd-080d-44a9-b70d-10fcfdf4f30c","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.517857142857142],"x":[7],"y":["Friday"]}},"id":"b279f7b1-4a39-4b58-bb50-ed90fc561c02","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.621951219512195,4.67741935483871,5.25,4.137931034482759,4.469879518072289,5.526315789473684,6.0,5.296875,4.714285714285714,3.8433734939759034,4.506329113924051,6.30188679245283,4.6,6.125,4.461538461538462,4.413043478260869],"x":[6,7,12,0,6,12,9,13,0,6,6,7,12,13,0,12],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"70c5e8b4-e489-45a4-9c30-31da3316d79c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.121212121212121,11.753846153846155,11.1,10.636363636363637,10.387096774193548,11.91304347826087,11.18840579710145],"x":[0,13,7,0,0,12,6],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Thursday","Sunday"]}},"id":"be6b1606-513b-4fd7-9342-2c44b4b386eb","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c54d3331-91dc-435d-8a0a-5108a5f58db3","type":"ColumnDataSource"},"glyph":{"id":"4969acd0-99ba-4046-90c5-d62291980784","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5c4e7120-4063-49b0-b44f-38a516bf72d7","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"bdbe02cd-afc0-4865-8ad0-e964be2f5420","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.24590163934426,25.0],"x":[7,9],"y":["Wednesday","Thursday"]}},"id":"8848d056-e525-4858-9011-6947b7ffcdf4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"}},"id":"2f881964-cd84-4979-90db-2b979d7545f6","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fde92399-9b25-4a21-a2e9-d2a5ac0405e7","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.621951219512195,4.67741935483871,5.25,4.137931034482759,4.469879518072289,5.526315789473684,6.0,5.296875,4.714285714285714,3.8433734939759034,4.506329113924051,6.30188679245283,4.6,6.125,4.461538461538462,4.413043478260869],"x":[6,7,12,0,6,12,9,13,0,6,6,7,12,13,0,12],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"f10319f4-97ef-49b4-8f4d-26e522c22894","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"}},"id":"f4a84bc2-ffef-4d17-8c07-756a44862708","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"81ad8a44-9360-4c33-a84d-f054e277b8ef","type":"Rect"},{"attributes":{"data_source":{"id":"0f16dc96-debc-43f4-a98c-a56fc7e7a0ff","type":"ColumnDataSource"},"glyph":{"id":"75eda2c9-ddcc-4bd3-ad48-ab6bc7a59c34","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"56a9956f-0165-4119-a15d-e15e8dc1f1d3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.65573770491803,17.140350877192983],"x":[7,13],"y":["Thursday","Thursday"]}},"id":"fbe081b4-fc2a-4a0d-ae22-3562a31d6e86","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"6ab5206b-f479-496a-992e-1cf78076845e","type":"LinearColorMapper"},"formatter":{"id":"ba8cccec-d77f-431e-99d3-ad9f2cbcbb7f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"},"ticker":{"id":"aa640f9c-09ba-4dcc-942b-fdd66b02aea2","type":"BasicTicker"}},"id":"97db6472-dfaa-43f7-8df7-b77a524847c4","type":"ColorBar"},{"attributes":{"data_source":{"id":"35e1a494-44cd-436a-bc46-3d914f2e66a0","type":"ColumnDataSource"},"glyph":{"id":"93458ff1-ec85-48b0-b52a-a0dcad81c64b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6c4bdbd8-3c43-415e-be1d-171a26f6b8c4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"}},"id":"45fd7f15-095f-4930-99fe-418a4bcf76bc","type":"HelpTool"},{"attributes":{"data_source":{"id":"70c5e8b4-e489-45a4-9c30-31da3316d79c","type":"ColumnDataSource"},"glyph":{"id":"011a258f-96f1-437a-baad-6d93e881d9fa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cf91c79f-1cc2-427d-9cf2-f5ad8d0a54b9","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e07dfde0-f8d9-45e5-9c3b-a965c633c9e9","type":"Rect"},{"attributes":{"child":{"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"ae8cd4c5-f08e-4a0c-b51a-2ae60aadd61e","type":"Panel"},{"attributes":{"color_mapper":{"id":"77afec7b-7411-4bff-80fc-2371a0402e3f","type":"LinearColorMapper"},"formatter":{"id":"0c90e433-ca6e-43fd-abab-ef56614d1188","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"},"ticker":{"id":"912a6bfc-d41e-467b-b661-27b5cfa814c8","type":"BasicTicker"}},"id":"daa7a6a3-824f-44b3-8d35-d93f969a4f8c","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.333333333333334],"x":[13],"y":["Tuesday"]}},"id":"65a1d9f1-86c8-4b72-8596-83b92c4cab0b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.333333333333334],"x":[13],"y":["Tuesday"]}},"id":"5f2a6067-c702-42a7-8e8c-d9c41b7e329c","type":"ColumnDataSource"},{"attributes":{},"id":"d8c6be4f-a1d0-4b3f-a218-5e6cb345a354","type":"BasicTicker"},{"attributes":{"plot":{"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"}},"id":"b033bc93-ae2e-45a1-b447-e5461c8f0dd3","type":"SaveTool"},{"attributes":{"child":{"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"77b62b92-19e8-40c8-9b77-ecd3df27ce0f","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"93458ff1-ec85-48b0-b52a-a0dcad81c64b","type":"Rect"},{"attributes":{},"id":"0686088b-76c0-42f7-8787-5cfdf07a06d6","type":"ToolEvents"},{"attributes":{"data_source":{"id":"7d1df171-3c76-4250-a3d1-42641f47dd23","type":"ColumnDataSource"},"glyph":{"id":"fb6339a9-3013-4e9e-b8b7-0ee0cd164c10","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"201de643-ee2b-4df5-9527-c6323d73a985","type":"GlyphRenderer"},{"attributes":{},"id":"0e72d712-b6e6-4a3b-a653-1298d0ec363c","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.675675675675675,9.785714285714286],"x":[6,12],"y":["Wednesday","Friday"]}},"id":"c54d3331-91dc-435d-8a0a-5108a5f58db3","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"77b62b92-19e8-40c8-9b77-ecd3df27ce0f","type":"Panel"},{"id":"ae8cd4c5-f08e-4a0c-b51a-2ae60aadd61e","type":"Panel"}]},"id":"228e8a13-2761-446c-9e05-8f401423e3fe","type":"Tabs"},{"attributes":{},"id":"df6ad5fd-9b3d-447f-91fa-6a49177b54bc","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"2ff84d96-6443-42a2-ab16-064ec592a734","type":"LinearAxis"}],"left":[{"id":"4f6acdd1-fa08-4f9b-b667-81388148b4b3","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"99531802-ba59-4050-ae7f-baa41cb23933","type":"BoxAnnotation"},{"id":"bec3e9ae-5b05-4918-b6f6-322059a8395c","type":"GlyphRenderer"},{"id":"accef2e8-d07c-4bac-b4be-f75f03f0c413","type":"GlyphRenderer"},{"id":"fd4eb87a-0976-4589-8869-5e2287f4d252","type":"GlyphRenderer"},{"id":"201de643-ee2b-4df5-9527-c6323d73a985","type":"GlyphRenderer"},{"id":"66e51dd5-4fa1-4e42-af69-c08f4747e5c0","type":"GlyphRenderer"},{"id":"3975efb9-9731-407b-a5d3-2ef167ad841f","type":"GlyphRenderer"},{"id":"5c4e7120-4063-49b0-b44f-38a516bf72d7","type":"GlyphRenderer"},{"id":"cf91c79f-1cc2-427d-9cf2-f5ad8d0a54b9","type":"GlyphRenderer"},{"id":"56a9956f-0165-4119-a15d-e15e8dc1f1d3","type":"GlyphRenderer"},{"id":"2ff84d96-6443-42a2-ab16-064ec592a734","type":"LinearAxis"},{"id":"4f6acdd1-fa08-4f9b-b667-81388148b4b3","type":"CategoricalAxis"},{"id":"daa7a6a3-824f-44b3-8d35-d93f969a4f8c","type":"ColorBar"}],"right":[{"id":"daa7a6a3-824f-44b3-8d35-d93f969a4f8c","type":"ColorBar"}],"title":{"id":"63d661ec-24be-4ca1-a25b-8ed0eb2d01ab","type":"Title"},"tool_events":{"id":"02d7c6fd-9623-4197-8792-e0519ce57822","type":"ToolEvents"},"toolbar":{"id":"7f27aa9f-8e23-4c72-8ef1-5ebd9247832e","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"7b5a3da8-c64b-465b-9a89-f1c47d54a1a9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"07b7d398-51ff-48d6-8b1f-9592e0b4942b","type":"FactorRange"}},"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"5f2a6067-c702-42a7-8e8c-d9c41b7e329c","type":"ColumnDataSource"},"glyph":{"id":"cf740d89-a766-4a0b-b49d-45e2f29dcdc9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"66e51dd5-4fa1-4e42-af69-c08f4747e5c0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"756f6714-6e65-4426-b18f-07eedf9f9c33","type":"ColumnDataSource"},"glyph":{"id":"fde92399-9b25-4a21-a2e9-d2a5ac0405e7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bec3e9ae-5b05-4918-b6f6-322059a8395c","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"99531802-ba59-4050-ae7f-baa41cb23933","type":"BoxAnnotation"},"plot":{"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"}},"id":"0e793be8-3913-4baf-a4af-478afa084880","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"}},"id":"08f31deb-076d-4491-88b1-3d99e79a6981","type":"ResetTool"},{"attributes":{},"id":"e1d29b87-d884-4da4-b0d6-425770be7953","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"8848d056-e525-4858-9011-6947b7ffcdf4","type":"ColumnDataSource"},"glyph":{"id":"ac165738-1acc-4b0e-830c-943479c1343f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"12cd66e5-53fd-410b-a2da-89583747d9b1","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf740d89-a766-4a0b-b49d-45e2f29dcdc9","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"0e72d712-b6e6-4a3b-a653-1298d0ec363c","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"},"ticker":{"id":"b825139b-b5fd-41c8-a2f5-655eca1898f3","type":"CategoricalTicker"}},"id":"4f6acdd1-fa08-4f9b-b667-81388148b4b3","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4e04cf8-73bf-4e47-9f4e-c60bedcfb224","type":"Rect"},{"attributes":{},"id":"02d7c6fd-9623-4197-8792-e0519ce57822","type":"ToolEvents"},{"attributes":{"data_source":{"id":"be6b1606-513b-4fd7-9342-2c44b4b386eb","type":"ColumnDataSource"},"glyph":{"id":"e942a9c1-5bfa-412d-9d89-c4befd37e2d3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3975efb9-9731-407b-a5d3-2ef167ad841f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.121212121212121,11.753846153846155,11.1,10.636363636363637,10.387096774193548,11.91304347826087,11.18840579710145],"x":[0,13,7,0,0,12,6],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Thursday","Sunday"]}},"id":"da0d9269-d6bb-46e8-948f-ff614f35125c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"}},"id":"7dc5d2ec-156e-425d-ac57-9cae34cad9b5","type":"SaveTool"},{"attributes":{"data_source":{"id":"da0d9269-d6bb-46e8-948f-ff614f35125c","type":"ColumnDataSource"},"glyph":{"id":"54644f9c-079e-4f18-9de6-04c80f7d5ea5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"082a23d0-94bd-4d18-b292-5ec70ddbceac","type":"GlyphRenderer"},{"attributes":{},"id":"912a6bfc-d41e-467b-b661-27b5cfa814c8","type":"BasicTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"ff73154e-aafe-4566-9d93-dcfeca94d2c1","type":"BasicTickFormatter"},"plot":{"id":"f0d5a3bf-5fc6-4b0b-853e-0e3df4ebc15f","subtype":"Chart","type":"Plot"},"ticker":{"id":"23a41524-87b3-497b-99df-da8d8a1d6c2a","type":"BasicTicker"}},"id":"2ff84d96-6443-42a2-ab16-064ec592a734","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e10033c-123b-42a9-836f-4556585d5a8c","type":"Rect"},{"attributes":{},"id":"ba8cccec-d77f-431e-99d3-ad9f2cbcbb7f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.517857142857142],"x":[7],"y":["Friday"]}},"id":"8f5e3057-325e-4c3f-a028-1c3a496a67e3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"21772a8b-2ce5-437f-9f00-5dde4e64a890","type":"ColumnDataSource"},"glyph":{"id":"d4e04cf8-73bf-4e47-9f4e-c60bedcfb224","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d3eea2cd-1e8c-45cf-a0ac-280d7c013400","type":"GlyphRenderer"},{"attributes":{},"id":"0c90e433-ca6e-43fd-abab-ef56614d1188","type":"BasicTickFormatter"},{"attributes":{},"id":"aa640f9c-09ba-4dcc-942b-fdd66b02aea2","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"63d661ec-24be-4ca1-a25b-8ed0eb2d01ab","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.0,2.658536585365854,2.4,0.0,1.8636363636363635,0.0,3.3174603174603177],"x":[12,6,0,9,7,9,13],"y":["Wednesday","Thursday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"c7de60ff-65d5-43a2-9335-b0bad600d006","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"011a258f-96f1-437a-baad-6d93e881d9fa","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"75eda2c9-ddcc-4bd3-ad48-ab6bc7a59c34","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"6ab5206b-f479-496a-992e-1cf78076845e","type":"LinearColorMapper"},{"attributes":{},"id":"b825139b-b5fd-41c8-a2f5-655eca1898f3","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e942a9c1-5bfa-412d-9d89-c4befd37e2d3","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac165738-1acc-4b0e-830c-943479c1343f","type":"Rect"},{"attributes":{"overlay":{"id":"ed5c7b53-aa87-488c-b7b2-e90e56bbea9d","type":"BoxAnnotation"},"plot":{"id":"91033af5-8a14-498a-b510-1f1b52a67243","subtype":"Chart","type":"Plot"}},"id":"fa6a2dbf-2eec-4177-9a49-5fc21a68d5e9","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"54644f9c-079e-4f18-9de6-04c80f7d5ea5","type":"Rect"},{"attributes":{"data_source":{"id":"b279f7b1-4a39-4b58-bb50-ed90fc561c02","type":"ColumnDataSource"},"glyph":{"id":"9e10033c-123b-42a9-836f-4556585d5a8c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"da9971f0-1492-4076-a883-c7f9ecffa538","type":"GlyphRenderer"},{"attributes":{},"id":"38dc062b-fb30-43be-9137-5411960cad0a","type":"CategoricalTicker"},{"attributes":{},"id":"ff73154e-aafe-4566-9d93-dcfeca94d2c1","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2f881964-cd84-4979-90db-2b979d7545f6","type":"PanTool"},{"id":"d4ce160b-a34f-4a6d-ac98-aa342e7ce552","type":"WheelZoomTool"},{"id":"0e793be8-3913-4baf-a4af-478afa084880","type":"BoxZoomTool"},{"id":"7dc5d2ec-156e-425d-ac57-9cae34cad9b5","type":"SaveTool"},{"id":"bc9ab368-8957-472f-9126-76a8e27189a1","type":"ResetTool"},{"id":"45fd7f15-095f-4930-99fe-418a4bcf76bc","type":"HelpTool"}]},"id":"7f27aa9f-8e23-4c72-8ef1-5ebd9247832e","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.675675675675675,9.785714285714286],"x":[6,12],"y":["Wednesday","Friday"]}},"id":"21772a8b-2ce5-437f-9f00-5dde4e64a890","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f56930f-8271-4629-8701-b9f54def840e","type":"Rect"},{"attributes":{},"id":"23a41524-87b3-497b-99df-da8d8a1d6c2a","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb6339a9-3013-4e9e-b8b7-0ee0cd164c10","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b0727c7-9fb5-4447-b537-cf68caa5918a","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.24590163934426,25.0],"x":[7,9],"y":["Wednesday","Thursday"]}},"id":"17af971d-b8e4-4f59-af00-de769f86bd8b","type":"ColumnDataSource"}],"root_ids":["228e8a13-2761-446c-9e05-8f401423e3fe"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"f7315783-a797-465e-a9d2-1567b1dede19","elementid":"c55451bb-e330-45a9-b7ef-b55553ca3723","modelid":"228e8a13-2761-446c-9e05-8f401423e3fe"}];
                  
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