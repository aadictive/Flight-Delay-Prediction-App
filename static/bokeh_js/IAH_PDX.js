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
      };var element = document.getElementById("896c60b0-8b65-474a-b834-1111baa4562a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '896c60b0-8b65-474a-b834-1111baa4562a' but no matching script tag was found. ")
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
                  var docs_json = {"348972a6-3a16-443c-93f3-f1cd26663f5b":{"roots":{"references":[{"attributes":{},"id":"2c219d98-b97b-43d5-bed6-aa34f46e400e","type":"BasicTicker"},{"attributes":{},"id":"e11680b2-8926-4163-9762-226b6be35ed5","type":"BasicTicker"},{"attributes":{"plot":{"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"}},"id":"9b68287f-1e6a-4b3f-807e-bfd51a14c4b2","type":"ResetTool"},{"attributes":{"plot":{"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"}},"id":"68ac41c8-b8b2-45cb-aa84-7d815ec005ca","type":"HelpTool"},{"attributes":{"data_source":{"id":"c0113846-1866-431e-a374-1d0f35aa2501","type":"ColumnDataSource"},"glyph":{"id":"457f057d-74b5-49f0-8d31-ee56ad0c5143","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e5b04963-288e-47a3-9870-6e0a0a4d7a0d","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"46197641-45b8-4968-9cf1-ab2f06eb65b6","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.840425531914892,16.829268292682926,20.0,17.074626865671643,18.405797101449274],"x":[21,9,20,17,18],"y":["Monday","Tuesday","Thursday","Saturday","Sunday"]}},"id":"1285a5dc-a33b-47fd-a381-b0dfea755402","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"}},"id":"a17f3df5-9e78-4252-bd9d-adaa638224e8","type":"ResetTool"},{"attributes":{"data_source":{"id":"8d7aa596-e745-4643-8a13-6cbdc37aabcd","type":"ColumnDataSource"},"glyph":{"id":"13e8d946-316d-4815-bad5-edf2fcf6d54c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"931542db-3b64-482b-8df8-12741c9d7916","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e29e80e-00a3-468c-a2a7-3892bd10720e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[16.18918918918919,14.197530864197532,15.011627906976743,15.261538461538462,13.560747663551401,14.904761904761905],"x":[18,17,17,18,21,18],"y":["Monday","Tuesday","Wednesday","Wednesday","Thursday","Saturday"]}},"id":"8fbfbcd5-156d-4a03-9cea-3dc0e1b72225","type":"ColumnDataSource"},{"attributes":{},"id":"c21f8b1f-7e2d-400f-b0a6-65655063c8aa","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"ffc333b5-f654-44fd-b510-0d1065f3f0a9","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6430c7ef-60d1-4ccd-8ef0-ce22f8597450","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"91e5397e-5208-42ab-b71b-1732bd499251","type":"Rect"},{"attributes":{"plot":{"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"}},"id":"20cf099b-f732-411b-9f08-2a77abaf1037","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.840425531914892,16.829268292682926,20.0,17.074626865671643,18.405797101449274],"x":[21,9,20,17,18],"y":["Monday","Tuesday","Thursday","Saturday","Sunday"]}},"id":"00e34166-ff28-4ba4-94a4-d4b3767ad399","type":"ColumnDataSource"},{"attributes":{},"id":"4dd6dd67-0dc8-4c0a-85cd-b4581a2b9b70","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9132cb5e-5226-461e-9d7e-b0c403458944","type":"ColumnDataSource"},"glyph":{"id":"4f06a87e-eb33-4ccb-99d5-8ace1937f689","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"97b6c3d1-b245-42f4-93cc-f1f6bf12b556","type":"GlyphRenderer"},{"attributes":{},"id":"3ed873b9-fc77-43fc-95d2-18bf41382216","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.52,1.0,0.0,3.3333333333333335,2.0,1.5,0.0,0.0,2.0],"x":[8,10,12,15,19,11,23,11,20],"y":["Monday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"c0113846-1866-431e-a374-1d0f35aa2501","type":"ColumnDataSource"},{"attributes":{},"id":"0e77f3ec-dc0d-4a08-9fd3-0cd40c45376a","type":"ToolEvents"},{"attributes":{"plot":{"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"}},"id":"372ef77a-c226-4f44-842f-92aa503bfea4","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.238805970149254],"x":[17],"y":["Friday"]}},"id":"8d7aa596-e745-4643-8a13-6cbdc37aabcd","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"c3eaf201-3cc3-4a8a-b1b6-6459bfad8ddb","type":"FactorRange"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"162068b3-109a-4819-8c27-f6358bc93b68","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"}},"id":"58071ea0-e80a-4ab3-a4f2-9984ee37f0d8","type":"WheelZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"cbb84ab5-0296-45b1-ba7a-1d5d3f7ce284","type":"BasicTickFormatter"},"plot":{"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"},"ticker":{"id":"5fd923d8-5a27-4d25-8a8c-bb1adb982d17","type":"BasicTicker"}},"id":"03352f56-f737-4938-a655-ca0673febbb6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f9b61557-2f78-4ecf-b4cd-07b9090d23bf","type":"ColumnDataSource"},"glyph":{"id":"3378fee0-6de0-4c12-a45e-5f0aec8d7bd7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1d865098-0c46-4d98-9390-22615c2223ae","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"13e8d946-316d-4815-bad5-edf2fcf6d54c","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"d96383ea-4eaa-46cf-a0eb-bd74d435f158","type":"LinearAxis"}],"left":[{"id":"6bfed170-4dde-4650-aa14-bd0d41e0d8b1","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"46197641-45b8-4968-9cf1-ab2f06eb65b6","type":"BoxAnnotation"},{"id":"97b6c3d1-b245-42f4-93cc-f1f6bf12b556","type":"GlyphRenderer"},{"id":"e7988fe7-25c6-48a6-8716-a97d87c0c973","type":"GlyphRenderer"},{"id":"dda4c288-061d-4633-9522-6d7ba0570dad","type":"GlyphRenderer"},{"id":"94363e1e-30d5-4895-a41b-4f4d0dc3763a","type":"GlyphRenderer"},{"id":"b8b7b0bf-b722-4612-b5c3-8ca48d8f7aac","type":"GlyphRenderer"},{"id":"98c169f7-7992-42ce-82a1-8adc440c9777","type":"GlyphRenderer"},{"id":"1d865098-0c46-4d98-9390-22615c2223ae","type":"GlyphRenderer"},{"id":"7b930f86-ad04-4eac-94f2-fa115ae885b5","type":"GlyphRenderer"},{"id":"e5b04963-288e-47a3-9870-6e0a0a4d7a0d","type":"GlyphRenderer"},{"id":"d96383ea-4eaa-46cf-a0eb-bd74d435f158","type":"LinearAxis"},{"id":"6bfed170-4dde-4650-aa14-bd0d41e0d8b1","type":"CategoricalAxis"},{"id":"108f8860-2120-409c-b71a-7c3ace39d021","type":"ColorBar"}],"right":[{"id":"108f8860-2120-409c-b71a-7c3ace39d021","type":"ColorBar"}],"title":{"id":"a477b6db-f872-47d4-9e55-8ec0fe587f62","type":"Title"},"tool_events":{"id":"0e77f3ec-dc0d-4a08-9fd3-0cd40c45376a","type":"ToolEvents"},"toolbar":{"id":"b038a417-a63e-4d51-a29a-a81b22ee22b2","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"ffc333b5-f654-44fd-b510-0d1065f3f0a9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"c3eaf201-3cc3-4a8a-b1b6-6459bfad8ddb","type":"FactorRange"}},"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"467fd3ba-2679-4a71-888b-d6f5c19af398","type":"ColumnDataSource"},"glyph":{"id":"95cdb13e-33aa-4aed-94a2-3f34a5440163","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"98c169f7-7992-42ce-82a1-8adc440c9777","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[3.4,4.013888888888889,5.0,5.666666666666667,3.859375,4.061224489795919,5.0],"x":[8,8,14,15,8,8,12],"y":["Tuesday","Wednesday","Wednesday","Thursday","Friday","Saturday","Saturday"]}},"id":"be429537-9696-48a0-8b81-c688536607bc","type":"ColumnDataSource"},{"attributes":{"child":{"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"f786ccd1-9b33-4e93-b98f-d580567446e0","type":"Panel"},{"attributes":{"data_source":{"id":"c5d66b31-b829-4340-a66c-1709bba0721a","type":"ColumnDataSource"},"glyph":{"id":"111f45e1-cb72-4ae0-9d14-0f825533a7bd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"676cc24d-2aac-48a0-8afa-9f86769ee7d2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.333333333333332],"x":[15],"y":["Saturday"]}},"id":"4b84799a-36ea-4441-9022-2e9763ce32e1","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"46197641-45b8-4968-9cf1-ab2f06eb65b6","type":"BoxAnnotation"},"plot":{"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"}},"id":"57b7dc9d-de4e-4514-9866-70f210dee373","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"710e072b-6114-4506-be62-7fc95e400d4a","type":"Rect"},{"attributes":{"plot":{"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"}},"id":"d306a43a-7ff1-48a9-b642-8a995a982db2","type":"WheelZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"756d66ea-710b-4fee-80d5-651babcb4670","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"},"ticker":{"id":"74baf484-3e17-447e-a401-387c7eb845c6","type":"CategoricalTicker"}},"id":"62ff1bd9-de72-4f87-beae-9869ea7ca496","type":"CategoricalAxis"},{"attributes":{},"id":"5fd923d8-5a27-4d25-8a8c-bb1adb982d17","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[3.4,4.013888888888889,5.0,5.666666666666667,3.859375,4.061224489795919,5.0],"x":[8,8,14,15,8,8,12],"y":["Tuesday","Wednesday","Wednesday","Thursday","Friday","Saturday","Saturday"]}},"id":"82297686-0672-4cfb-a22a-bb0371e3e1ec","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"f786ccd1-9b33-4e93-b98f-d580567446e0","type":"Panel"},{"id":"47230599-2fe0-4050-a2c4-e68648b38b6e","type":"Panel"}]},"id":"a4ba8659-2fcd-4e3e-9e73-665a1a7cef59","type":"Tabs"},{"attributes":{"child":{"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"47230599-2fe0-4050-a2c4-e68648b38b6e","type":"Panel"},{"attributes":{},"id":"d6b66bde-d1c4-45b4-b9bb-0ac5008216b2","type":"ToolEvents"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"0959a488-25d9-4784-bee4-3b37ec9b337e","type":"Title"},{"attributes":{"plot":{"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"}},"id":"7860a27a-02bc-43e1-b5db-67d1fba3dfe8","type":"SaveTool"},{"attributes":{"color_mapper":{"id":"c5309700-170c-403d-b4aa-f289f1bbe32f","type":"LinearColorMapper"},"formatter":{"id":"3ed873b9-fc77-43fc-95d2-18bf41382216","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"},"ticker":{"id":"4dd6dd67-0dc8-4c0a-85cd-b4581a2b9b70","type":"BasicTicker"}},"id":"8e71705c-17b3-419a-99bd-9d901ee8d57a","type":"ColorBar"},{"attributes":{},"id":"59ee6ffc-a3a6-43bb-b696-c2093894acd5","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"}},"id":"edf17284-72ad-48fe-9f15-ce5f4b59482f","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f06a87e-eb33-4ccb-99d5-8ace1937f689","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c48cc7b-848c-48ef-af6a-51993358bc0e","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"96f26012-8b26-415a-9737-249d2d9c9fb0","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"59ee6ffc-a3a6-43bb-b696-c2093894acd5","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"},"ticker":{"id":"8210279b-4264-4728-9d71-dc2cd7ece209","type":"CategoricalTicker"}},"id":"6bfed170-4dde-4650-aa14-bd0d41e0d8b1","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c8b651b-004c-4e04-b8ef-8dcb841d4c60","type":"Rect"},{"attributes":{"data_source":{"id":"be429537-9696-48a0-8b81-c688536607bc","type":"ColumnDataSource"},"glyph":{"id":"6430c7ef-60d1-4ccd-8ef0-ce22f8597450","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7b930f86-ad04-4eac-94f2-fa115ae885b5","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"cbc409db-cd06-4341-9553-713ca3a3c0bc","type":"BasicTickFormatter"},"plot":{"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"},"ticker":{"id":"e11680b2-8926-4163-9762-226b6be35ed5","type":"BasicTicker"}},"id":"d96383ea-4eaa-46cf-a0eb-bd74d435f158","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17e2b373-f085-4682-a917-132db6f66ebc","type":"ColumnDataSource"},"glyph":{"id":"100ad482-d117-4ac1-a099-74f7478b9b9d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dda4c288-061d-4633-9522-6d7ba0570dad","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"191be7bc-39eb-438c-81ae-9e91f58c7fc2","type":"ColumnDataSource"},"glyph":{"id":"e0ee8946-82a5-42ef-9fca-9c59de7f4756","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1a3d9fa6-40f2-4a05-9431-7080e939ebff","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3378fee0-6de0-4c12-a45e-5f0aec8d7bd7","type":"Rect"},{"attributes":{"color_mapper":{"id":"162068b3-109a-4819-8c27-f6358bc93b68","type":"LinearColorMapper"},"formatter":{"id":"c21f8b1f-7e2d-400f-b0a6-65655063c8aa","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"f743df4f-4bd6-48f1-8fd5-ecb61d185e95","subtype":"Chart","type":"Plot"},"ticker":{"id":"2c219d98-b97b-43d5-bed6-aa34f46e400e","type":"BasicTicker"}},"id":"108f8860-2120-409c-b71a-7c3ace39d021","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.197368421052632,10.289855072463768,12.929411764705883,12.028571428571428,13.193548387096774,12.432835820895523,11.03921568627451,11.333333333333334,13.022988505747126,12.679245283018869,12.76],"x":[17,18,21,21,17,18,18,19,21,17,21],"y":["Monday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"73ad5178-8e0a-4d18-8a54-bc94969c0b77","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"111f45e1-cb72-4ae0-9d14-0f825533a7bd","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"87375fe4-b410-46d0-8151-e529231494d3","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[16.18918918918919,14.197530864197532,15.011627906976743,15.261538461538462,13.560747663551401,14.904761904761905],"x":[18,17,17,18,21,18],"y":["Monday","Tuesday","Wednesday","Wednesday","Thursday","Saturday"]}},"id":"5d0bc5b0-74a5-44c6-91c5-0a8f6c7580e2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8ea245b9-6f10-481d-ae9e-212c34c11f46","type":"ColumnDataSource"},"glyph":{"id":"96f26012-8b26-415a-9737-249d2d9c9fb0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"724c4ecf-da26-40f3-86a0-3fbff0743c81","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"73ad5178-8e0a-4d18-8a54-bc94969c0b77","type":"ColumnDataSource"},"glyph":{"id":"33ccaab5-455c-4d93-92d6-08da404f2b08","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ce3b54de-8d11-437a-a487-7c07de654051","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"c39ec02b-3497-4a75-b400-e38500795f04","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.52,1.0,0.0,3.3333333333333335,2.0,1.5,0.0,0.0,2.0],"x":[8,10,12,15,19,11,23,11,20],"y":["Monday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"c5d66b31-b829-4340-a66c-1709bba0721a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4b84799a-36ea-4441-9022-2e9763ce32e1","type":"ColumnDataSource"},"glyph":{"id":"9c48cc7b-848c-48ef-af6a-51993358bc0e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e7988fe7-25c6-48a6-8716-a97d87c0c973","type":"GlyphRenderer"},{"attributes":{},"id":"8210279b-4264-4728-9d71-dc2cd7ece209","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"100ad482-d117-4ac1-a099-74f7478b9b9d","type":"Rect"},{"attributes":{"data_source":{"id":"00e34166-ff28-4ba4-94a4-d4b3767ad399","type":"ColumnDataSource"},"glyph":{"id":"8c8b651b-004c-4e04-b8ef-8dcb841d4c60","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"94363e1e-30d5-4895-a41b-4f4d0dc3763a","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"56f6019f-2849-4a8d-a96a-9684dbc64fa8","type":"FactorRange"},{"attributes":{},"id":"74baf484-3e17-447e-a401-387c7eb845c6","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"b6b1ee04-d3ee-4510-9fa6-52e481f992e9","type":"BoxAnnotation"},"plot":{"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"}},"id":"24e7fa1d-53a8-459e-9f03-aaf840048c0c","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"a477b6db-f872-47d4-9e55-8ec0fe587f62","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.556962025316455,8.0,9.21951219512195,7.473684210526316,7.935897435897436,7.5256410256410255,7.2342342342342345,7.230769230769231,9.333333333333334,8.797297297297296],"x":[9,15,9,8,9,9,21,9,8,9],"y":["Monday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"f9b61557-2f78-4ecf-b4cd-07b9090d23bf","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.197368421052632,10.289855072463768,12.929411764705883,12.028571428571428,13.193548387096774,12.432835820895523,11.03921568627451,11.333333333333334,13.022988505747126,12.679245283018869,12.76],"x":[17,18,21,21,17,18,18,19,21,17,21],"y":["Monday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"467fd3ba-2679-4a71-888b-d6f5c19af398","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.556962025316455,8.0,9.21951219512195,7.473684210526316,7.935897435897436,7.5256410256410255,7.2342342342342345,7.230769230769231,9.333333333333334,8.797297297297296],"x":[9,15,9,8,9,9,21,9,8,9],"y":["Monday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"8ea245b9-6f10-481d-ae9e-212c34c11f46","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"03352f56-f737-4938-a655-ca0673febbb6","type":"LinearAxis"}],"left":[{"id":"62ff1bd9-de72-4f87-beae-9869ea7ca496","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"b6b1ee04-d3ee-4510-9fa6-52e481f992e9","type":"BoxAnnotation"},{"id":"e4f6f6c0-4a7f-41b4-8934-c4b81fab5065","type":"GlyphRenderer"},{"id":"1a3d9fa6-40f2-4a05-9431-7080e939ebff","type":"GlyphRenderer"},{"id":"931542db-3b64-482b-8df8-12741c9d7916","type":"GlyphRenderer"},{"id":"e74ed07c-3bed-472c-85b5-cfe798e796cf","type":"GlyphRenderer"},{"id":"982936d4-6c37-413c-978f-e412cff9e722","type":"GlyphRenderer"},{"id":"ce3b54de-8d11-437a-a487-7c07de654051","type":"GlyphRenderer"},{"id":"724c4ecf-da26-40f3-86a0-3fbff0743c81","type":"GlyphRenderer"},{"id":"287a876e-258d-4dc2-a78a-73ed70dcfaf8","type":"GlyphRenderer"},{"id":"676cc24d-2aac-48a0-8afa-9f86769ee7d2","type":"GlyphRenderer"},{"id":"03352f56-f737-4938-a655-ca0673febbb6","type":"LinearAxis"},{"id":"62ff1bd9-de72-4f87-beae-9869ea7ca496","type":"CategoricalAxis"},{"id":"8e71705c-17b3-419a-99bd-9d901ee8d57a","type":"ColorBar"}],"right":[{"id":"8e71705c-17b3-419a-99bd-9d901ee8d57a","type":"ColorBar"}],"title":{"id":"0959a488-25d9-4784-bee4-3b37ec9b337e","type":"Title"},"tool_events":{"id":"d6b66bde-d1c4-45b4-b9bb-0ac5008216b2","type":"ToolEvents"},"toolbar":{"id":"de30ac7a-a77f-41d0-aed8-31e53cb85b50","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"c39ec02b-3497-4a75-b400-e38500795f04","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"56f6019f-2849-4a8d-a96a-9684dbc64fa8","type":"FactorRange"}},"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"33ccaab5-455c-4d93-92d6-08da404f2b08","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.238805970149254],"x":[17],"y":["Friday"]}},"id":"17e2b373-f085-4682-a917-132db6f66ebc","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"edf17284-72ad-48fe-9f15-ce5f4b59482f","type":"PanTool"},{"id":"d306a43a-7ff1-48a9-b642-8a995a982db2","type":"WheelZoomTool"},{"id":"24e7fa1d-53a8-459e-9f03-aaf840048c0c","type":"BoxZoomTool"},{"id":"6e23eb77-6160-4b8a-874d-cacea8368b6e","type":"SaveTool"},{"id":"9b68287f-1e6a-4b3f-807e-bfd51a14c4b2","type":"ResetTool"},{"id":"372ef77a-c226-4f44-842f-92aa503bfea4","type":"HelpTool"}]},"id":"de30ac7a-a77f-41d0-aed8-31e53cb85b50","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2af886ec-a99f-4867-80a0-5afc9bda8754","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,27.0,28.0,30.0],"x":[15,14,15,19,23],"y":["Monday","Tuesday","Wednesday","Thursday","Sunday"]}},"id":"b56b9c67-1661-47ce-b8cd-cd43be579925","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"c5309700-170c-403d-b4aa-f289f1bbe32f","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.333333333333332],"x":[15],"y":["Saturday"]}},"id":"191be7bc-39eb-438c-81ae-9e91f58c7fc2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1285a5dc-a33b-47fd-a381-b0dfea755402","type":"ColumnDataSource"},"glyph":{"id":"2af886ec-a99f-4867-80a0-5afc9bda8754","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e74ed07c-3bed-472c-85b5-cfe798e796cf","type":"GlyphRenderer"},{"attributes":{},"id":"cbb84ab5-0296-45b1-ba7a-1d5d3f7ce284","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"457f057d-74b5-49f0-8d31-ee56ad0c5143","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,27.0,28.0,30.0],"x":[15,14,15,19,23],"y":["Monday","Tuesday","Wednesday","Thursday","Sunday"]}},"id":"9132cb5e-5226-461e-9d7e-b0c403458944","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b56b9c67-1661-47ce-b8cd-cd43be579925","type":"ColumnDataSource"},"glyph":{"id":"710e072b-6114-4506-be62-7fc95e400d4a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e4f6f6c0-4a7f-41b4-8934-c4b81fab5065","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0ee8946-82a5-42ef-9fca-9c59de7f4756","type":"Rect"},{"attributes":{"plot":{"id":"b17df486-acd2-42f4-88d3-81b0fca075d4","subtype":"Chart","type":"Plot"}},"id":"6e23eb77-6160-4b8a-874d-cacea8368b6e","type":"SaveTool"},{"attributes":{},"id":"756d66ea-710b-4fee-80d5-651babcb4670","type":"CategoricalTickFormatter"},{"attributes":{},"id":"cbc409db-cd06-4341-9553-713ca3a3c0bc","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"82297686-0672-4cfb-a22a-bb0371e3e1ec","type":"ColumnDataSource"},"glyph":{"id":"91e5397e-5208-42ab-b71b-1732bd499251","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"287a876e-258d-4dc2-a78a-73ed70dcfaf8","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"20cf099b-f732-411b-9f08-2a77abaf1037","type":"PanTool"},{"id":"58071ea0-e80a-4ab3-a4f2-9984ee37f0d8","type":"WheelZoomTool"},{"id":"57b7dc9d-de4e-4514-9866-70f210dee373","type":"BoxZoomTool"},{"id":"7860a27a-02bc-43e1-b5db-67d1fba3dfe8","type":"SaveTool"},{"id":"a17f3df5-9e78-4252-bd9d-adaa638224e8","type":"ResetTool"},{"id":"68ac41c8-b8b2-45cb-aa84-7d815ec005ca","type":"HelpTool"}]},"id":"b038a417-a63e-4d51-a29a-a81b22ee22b2","type":"Toolbar"},{"attributes":{"data_source":{"id":"5d0bc5b0-74a5-44c6-91c5-0a8f6c7580e2","type":"ColumnDataSource"},"glyph":{"id":"5e29e80e-00a3-468c-a2a7-3892bd10720e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b8b7b0bf-b722-4612-b5c3-8ca48d8f7aac","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b6b1ee04-d3ee-4510-9fa6-52e481f992e9","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"8fbfbcd5-156d-4a03-9cea-3dc0e1b72225","type":"ColumnDataSource"},"glyph":{"id":"87375fe4-b410-46d0-8151-e529231494d3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"982936d4-6c37-413c-978f-e412cff9e722","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"95cdb13e-33aa-4aed-94a2-3f34a5440163","type":"Rect"}],"root_ids":["a4ba8659-2fcd-4e3e-9e73-665a1a7cef59"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"348972a6-3a16-443c-93f3-f1cd26663f5b","elementid":"896c60b0-8b65-474a-b834-1111baa4562a","modelid":"a4ba8659-2fcd-4e3e-9e73-665a1a7cef59"}];
                  
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