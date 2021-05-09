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
      };var element = document.getElementById("47baf03f-ff76-4830-ae88-29c07c64641c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '47baf03f-ff76-4830-ae88-29c07c64641c' but no matching script tag was found. ")
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
                  var docs_json = {"1572d558-e06f-42f0-b1e5-92477e1147cc":{"roots":{"references":[{"attributes":{"data_source":{"id":"ff12d0de-fbe0-4122-a03f-e785992dd403","type":"ColumnDataSource"},"glyph":{"id":"d9c752e1-5008-49b2-9361-c10c3f43c514","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"140d2ef6-773b-4d9a-964d-a1939f99e262","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"11028737-d563-46a4-b513-28852aac6c9a","type":"LinearAxis"}],"left":[{"id":"891c54b2-16b0-422a-add3-cb4055cb7b2c","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"e36263eb-9224-4114-a4bb-a0cd590c6776","type":"BoxAnnotation"},{"id":"9aed06a6-34d4-4da7-957e-784976534039","type":"GlyphRenderer"},{"id":"0e31bdbd-336d-4e85-99a8-5ee18b11a75e","type":"GlyphRenderer"},{"id":"94420357-e9b1-47f2-9f3c-f691004e0f5c","type":"GlyphRenderer"},{"id":"839e33c2-8252-4eee-9435-f21f9d7802d0","type":"GlyphRenderer"},{"id":"b2682042-8eec-4fc9-9b4f-1d253d30167e","type":"GlyphRenderer"},{"id":"1267c883-2ec7-4a91-a518-756bfd1967cb","type":"GlyphRenderer"},{"id":"36220d4e-58e1-4e9d-a4e8-17871fff586d","type":"GlyphRenderer"},{"id":"11028737-d563-46a4-b513-28852aac6c9a","type":"LinearAxis"},{"id":"891c54b2-16b0-422a-add3-cb4055cb7b2c","type":"CategoricalAxis"},{"id":"3d4d0211-4354-4dd8-8a1e-e78b25113bdb","type":"ColorBar"}],"right":[{"id":"3d4d0211-4354-4dd8-8a1e-e78b25113bdb","type":"ColorBar"}],"title":{"id":"2ad7ecad-f649-40a6-adcb-cfdf27d3ad5a","type":"Title"},"tool_events":{"id":"7b811fbd-6aa3-4c3a-bdc5-4a60fb7e69d6","type":"ToolEvents"},"toolbar":{"id":"6a3432b5-1898-4c01-a788-58bb4719802a","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"9caa1640-a2cf-4af1-ada2-eb4358d2dab9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"fbece796-b3fb-4818-84b5-aa4e507e5ea5","type":"FactorRange"}},"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"71348dc2-8b61-4bec-9ead-b49f316930de","type":"ColumnDataSource"},"glyph":{"id":"28672e5a-ca9e-429d-b9b5-4752be0919b9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"839e33c2-8252-4eee-9435-f21f9d7802d0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[23],"y":["Tuesday"]}},"id":"6c7fa80f-5062-40bf-afcb-1f2a27bd7f41","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6b8d0506-cd0e-42c7-b8bf-5f821d1711e5","type":"ColumnDataSource"},"glyph":{"id":"eabbd203-033d-46d5-985c-b1bcdbfe493d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bc6d774e-6a0d-40be-890a-3c6607bf9679","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"89d984f9-009a-4024-bd78-940390342dfb","type":"ColumnDataSource"},"glyph":{"id":"e2d21669-0b36-404a-ac8e-e2ecec6f55fa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"90b55c19-c096-4e2d-b836-0dd35602be33","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"2ad7ecad-f649-40a6-adcb-cfdf27d3ad5a","type":"Title"},{"attributes":{},"id":"a2a0df4f-f035-466d-92e1-197cba837d92","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d28cd2e-7ed8-4368-8a0d-8d7e55b3d26e","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"6f55e097-a450-4fe7-9216-5598bee9c987","type":"Panel"},{"id":"aaa49110-e1c2-45b7-9baf-0aa71b9f7a2a","type":"Panel"}]},"id":"4567f273-7cc1-4d50-90d9-a2065222b044","type":"Tabs"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"f9a3632a-c3d2-423e-bdc8-088e4672f9b7","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"},"ticker":{"id":"1a6dadad-a6a4-4050-9aa9-b1805eb9cb1a","type":"CategoricalTicker"}},"id":"2b752e55-e312-463e-9422-91cff371844e","type":"CategoricalAxis"},{"attributes":{},"id":"0ea4a43a-dc3f-40f8-9621-bc61fdc798cc","type":"BasicTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"3858d1fa-b82c-4b46-ae3f-495276a15f43","type":"BasicTickFormatter"},"plot":{"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"},"ticker":{"id":"76010cee-0313-4d98-a536-aa23bc9eb7ae","type":"BasicTicker"}},"id":"11028737-d563-46a4-b513-28852aac6c9a","type":"LinearAxis"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"b003023d-d64e-4827-8cbd-681a13c95923","type":"FactorRange"},{"attributes":{},"id":"79e8d297-b2a7-4cec-8d9f-eb9d6d925343","type":"BasicTickFormatter"},{"attributes":{},"id":"1a6dadad-a6a4-4050-9aa9-b1805eb9cb1a","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"89616e65-7728-45a3-bc73-dd75d00f955f","type":"Title"},{"attributes":{"plot":{"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"}},"id":"320cb87f-e387-44d2-acee-661b6cf57305","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2d21669-0b36-404a-ac8e-e2ecec6f55fa","type":"Rect"},{"attributes":{"overlay":{"id":"e36263eb-9224-4114-a4bb-a0cd590c6776","type":"BoxAnnotation"},"plot":{"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"}},"id":"1cb81c5d-a55e-40c8-b5c5-8ad44802ab00","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"28672e5a-ca9e-429d-b9b5-4752be0919b9","type":"Rect"},{"attributes":{"plot":{"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"}},"id":"92614f8a-5a67-46da-ac49-139916eefe44","type":"WheelZoomTool"},{"attributes":{},"id":"1deb737c-b92a-4715-a645-70b82148f337","type":"BasicTickFormatter"},{"attributes":{},"id":"66e14b42-b8d0-4e63-a903-4a58a87ac027","type":"BasicTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"1dec88fd-a71f-4969-ad73-c9e8506d4671","type":"LinearAxis"}],"left":[{"id":"2b752e55-e312-463e-9422-91cff371844e","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"fd32f63a-2862-486b-a3d5-7fba33686543","type":"BoxAnnotation"},{"id":"140d2ef6-773b-4d9a-964d-a1939f99e262","type":"GlyphRenderer"},{"id":"8c6e5da9-3a30-4fc8-9012-26207e92f0a5","type":"GlyphRenderer"},{"id":"bc6d774e-6a0d-40be-890a-3c6607bf9679","type":"GlyphRenderer"},{"id":"f2f92f35-e2ca-41be-b3e4-aea064572325","type":"GlyphRenderer"},{"id":"d2328574-b936-4ae7-93f3-86d0fa676e9e","type":"GlyphRenderer"},{"id":"90b55c19-c096-4e2d-b836-0dd35602be33","type":"GlyphRenderer"},{"id":"99bc9e0c-1ac1-438d-a4f7-8976b0ea2730","type":"GlyphRenderer"},{"id":"1dec88fd-a71f-4969-ad73-c9e8506d4671","type":"LinearAxis"},{"id":"2b752e55-e312-463e-9422-91cff371844e","type":"CategoricalAxis"},{"id":"b494ec10-ebe6-4fc1-9f86-4a319eea00d9","type":"ColorBar"}],"right":[{"id":"b494ec10-ebe6-4fc1-9f86-4a319eea00d9","type":"ColorBar"}],"title":{"id":"89616e65-7728-45a3-bc73-dd75d00f955f","type":"Title"},"tool_events":{"id":"b7e269c8-3fdf-43b3-af95-c68b2e1e3bdf","type":"ToolEvents"},"toolbar":{"id":"a33d4f65-b55c-414b-9c8a-9c38cdab038b","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"f38fa16c-f0c9-40d6-822f-b03b4ebad081","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b003023d-d64e-4827-8cbd-681a13c95923","type":"FactorRange"}},"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.368421052631579],"x":[11],"y":["Friday"]}},"id":"6b8d0506-cd0e-42c7-b8bf-5f821d1711e5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f2aba7a7-71b8-47ec-8f55-d6b756dddf27","type":"ColumnDataSource"},"glyph":{"id":"01ae79f2-70a4-4048-84ab-5acf58cef4fe","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d2328574-b936-4ae7-93f3-86d0fa676e9e","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"0b703818-d9b9-4d8f-9944-522fc7c994b8","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e681df3a-21c2-4f2b-9265-2dae9cf725ca","type":"Rect"},{"attributes":{"data_source":{"id":"9c0a1f55-afca-4095-bd3d-3d600aad78b3","type":"ColumnDataSource"},"glyph":{"id":"5c97a786-c0de-4b22-913c-4475dee05e30","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"94420357-e9b1-47f2-9f3c-f691004e0f5c","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c97a786-c0de-4b22-913c-4475dee05e30","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"15afc1e6-a070-4b5a-86a1-18f31b9c6a71","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"f38fa16c-f0c9-40d6-822f-b03b4ebad081","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e36263eb-9224-4114-a4bb-a0cd590c6776","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"cc62048f-5cba-47cc-a661-780cc5638fcf","type":"ColumnDataSource"},"glyph":{"id":"df9471d8-aa0f-4b32-ad8a-57295aa86706","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8c6e5da9-3a30-4fc8-9012-26207e92f0a5","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b4c4df6-4040-48ec-b44d-efec87b8a4b6","type":"Rect"},{"attributes":{"plot":{"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"}},"id":"174870a5-9417-41a0-83eb-c208016bae42","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.229166666666668],"x":[22],"y":["Thursday"]}},"id":"fe5a2117-74ff-4d49-b7f1-1ac19b0b3833","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ecab857-08f9-43d3-b7b5-83991db0bc64","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eabbd203-033d-46d5-985c-b1bcdbfe493d","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.368421052631579],"x":[11],"y":["Friday"]}},"id":"9c0a1f55-afca-4095-bd3d-3d600aad78b3","type":"ColumnDataSource"},{"attributes":{},"id":"7b811fbd-6aa3-4c3a-bdc5-4a60fb7e69d6","type":"ToolEvents"},{"attributes":{"data_source":{"id":"70952944-abe5-4176-969b-250a0361d813","type":"ColumnDataSource"},"glyph":{"id":"5d28cd2e-7ed8-4368-8a0d-8d7e55b3d26e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b2682042-8eec-4fc9-9b4f-1d253d30167e","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"fd32f63a-2862-486b-a3d5-7fba33686543","type":"BoxAnnotation"},"plot":{"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"}},"id":"a1ebd56e-30c6-4855-9a6f-c388fd911a44","type":"BoxZoomTool"},{"attributes":{},"id":"f11b97fc-db8d-4d63-93eb-ab0c7e1808a2","type":"CategoricalTicker"},{"attributes":{"color_mapper":{"id":"0b703818-d9b9-4d8f-9944-522fc7c994b8","type":"LinearColorMapper"},"formatter":{"id":"1deb737c-b92a-4715-a645-70b82148f337","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"},"ticker":{"id":"80fbb7cf-cfdb-4d88-8b05-90b46cf5ef0c","type":"BasicTicker"}},"id":"3d4d0211-4354-4dd8-8a1e-e78b25113bdb","type":"ColorBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fd32f63a-2862-486b-a3d5-7fba33686543","type":"BoxAnnotation"},{"attributes":{},"id":"b7e269c8-3fdf-43b3-af95-c68b2e1e3bdf","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.631578947368421,11.979166666666666,12.875,12.942857142857143],"x":[11,22,22,11],"y":["Monday","Monday","Friday","Sunday"]}},"id":"a27aea22-0b94-4f8b-8caf-57f912f8156d","type":"ColumnDataSource"},{"attributes":{},"id":"76010cee-0313-4d98-a536-aa23bc9eb7ae","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[23],"y":["Tuesday"]}},"id":"ff12d0de-fbe0-4122-a03f-e785992dd403","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9c752e1-5008-49b2-9361-c10c3f43c514","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"18f34bdd-1cbb-4c34-b032-690fe74fb98e","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.229166666666668],"x":[22],"y":["Thursday"]}},"id":"cc62048f-5cba-47cc-a661-780cc5638fcf","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b3bcb5d-8411-4fd9-b51b-ff31110de44c","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.631578947368421,11.979166666666666,12.875,12.942857142857143],"x":[11,22,22,11],"y":["Monday","Monday","Friday","Sunday"]}},"id":"71348dc2-8b61-4bec-9ead-b49f316930de","type":"ColumnDataSource"},{"attributes":{},"id":"f9a3632a-c3d2-423e-bdc8-088e4672f9b7","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"dcdcd1e2-d952-402f-825a-8c281bc6704a","type":"ColumnDataSource"},"glyph":{"id":"7fb613df-caf9-4dd5-a730-d3174016bc79","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"99bc9e0c-1ac1-438d-a4f7-8976b0ea2730","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"}},"id":"9ddb0f7f-702b-495b-a324-b9c3f1ea54d1","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"df9471d8-aa0f-4b32-ad8a-57295aa86706","type":"Rect"},{"attributes":{"child":{"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"6f55e097-a450-4fe7-9216-5598bee9c987","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.549019607843137,6.451612903225806,3.953488372093023,3.5714285714285716,6.25,4.75,5.8,5.153846153846154,4.511627906976744],"x":[23,11,22,23,7,7,9,11,23],"y":["Monday","Wednesday","Wednesday","Thursday","Friday","Saturday","Saturday","Saturday","Sunday"]}},"id":"89d984f9-009a-4024-bd78-940390342dfb","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"898dd799-27a5-42a7-9a41-af7b83bcfa30","type":"ColumnDataSource"},"glyph":{"id":"8b3bcb5d-8411-4fd9-b51b-ff31110de44c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"36220d4e-58e1-4e9d-a4e8-17871fff586d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6c7fa80f-5062-40bf-afcb-1f2a27bd7f41","type":"ColumnDataSource"},"glyph":{"id":"1b4c4df6-4040-48ec-b44d-efec87b8a4b6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9aed06a6-34d4-4da7-957e-784976534039","type":"GlyphRenderer"},{"attributes":{},"id":"80fbb7cf-cfdb-4d88-8b05-90b46cf5ef0c","type":"BasicTicker"},{"attributes":{"child":{"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"aaa49110-e1c2-45b7-9baf-0aa71b9f7a2a","type":"Panel"},{"attributes":{"data_source":{"id":"a27aea22-0b94-4f8b-8caf-57f912f8156d","type":"ColumnDataSource"},"glyph":{"id":"15afc1e6-a070-4b5a-86a1-18f31b9c6a71","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f2f92f35-e2ca-41be-b3e4-aea064572325","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"}},"id":"fe29c61d-6652-472c-bc7b-95887e99830f","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.549019607843137,6.451612903225806,3.953488372093023,3.5714285714285716,6.25,4.75,5.8,5.153846153846154,4.511627906976744],"x":[23,11,22,23,7,7,9,11,23],"y":["Monday","Wednesday","Wednesday","Thursday","Friday","Saturday","Saturday","Saturday","Sunday"]}},"id":"ebacc1e9-6a08-441b-9fab-f337f6e5edff","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"}},"id":"9a5b7558-44dd-4727-a276-28cde0dc0899","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,2.2,2.0,0.0,3.090909090909091,1.903225806451613,0.0],"x":[7,7,22,7,23,23,7],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Saturday","Sunday"]}},"id":"dcdcd1e2-d952-402f-825a-8c281bc6704a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"}},"id":"94971bc5-a0c5-4818-9663-ef2bc353ad3c","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"fbece796-b3fb-4818-84b5-aa4e507e5ea5","type":"FactorRange"},{"attributes":{},"id":"f048570f-a476-4a36-8a56-e772dd9fb642","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"fe5a2117-74ff-4d49-b7f1-1ac19b0b3833","type":"ColumnDataSource"},"glyph":{"id":"e681df3a-21c2-4f2b-9265-2dae9cf725ca","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0e31bdbd-336d-4e85-99a8-5ee18b11a75e","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fb613df-caf9-4dd5-a730-d3174016bc79","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.869565217391305,8.333333333333334,7.722222222222222,9.578313253012048,7.857142857142857,8.0],"x":[11,7,11,23,22,22],"y":["Tuesday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"f2aba7a7-71b8-47ec-8f55-d6b756dddf27","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a2a0df4f-f035-466d-92e1-197cba837d92","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"},"ticker":{"id":"f11b97fc-db8d-4d63-93eb-ab0c7e1808a2","type":"CategoricalTicker"}},"id":"891c54b2-16b0-422a-add3-cb4055cb7b2c","type":"CategoricalAxis"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"f048570f-a476-4a36-8a56-e772dd9fb642","type":"BasicTickFormatter"},"plot":{"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"},"ticker":{"id":"66e14b42-b8d0-4e63-a903-4a58a87ac027","type":"BasicTicker"}},"id":"1dec88fd-a71f-4969-ad73-c9e8506d4671","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.869565217391305,8.333333333333334,7.722222222222222,9.578313253012048,7.857142857142857,8.0],"x":[11,7,11,23,22,22],"y":["Tuesday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"70952944-abe5-4176-969b-250a0361d813","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"}},"id":"d9111c31-9744-45f8-a79e-d9e97fee65c6","type":"HelpTool"},{"attributes":{"data_source":{"id":"ebacc1e9-6a08-441b-9fab-f337f6e5edff","type":"ColumnDataSource"},"glyph":{"id":"4ecab857-08f9-43d3-b7b5-83991db0bc64","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1267c883-2ec7-4a91-a518-756bfd1967cb","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"9caa1640-a2cf-4af1-ada2-eb4358d2dab9","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,2.2,2.0,0.0,3.090909090909091,1.903225806451613,0.0],"x":[7,7,22,7,23,23,7],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Saturday","Sunday"]}},"id":"898dd799-27a5-42a7-9a41-af7b83bcfa30","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"01ae79f2-70a4-4048-84ab-5acf58cef4fe","type":"Rect"},{"attributes":{"plot":{"id":"bffc1217-c4b3-48f8-859d-b63430805594","subtype":"Chart","type":"Plot"}},"id":"ab974a37-f9ea-4bff-85ec-2280cfa8dd5f","type":"PanTool"},{"attributes":{"color_mapper":{"id":"18f34bdd-1cbb-4c34-b032-690fe74fb98e","type":"LinearColorMapper"},"formatter":{"id":"79e8d297-b2a7-4cec-8d9f-eb9d6d925343","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"},"ticker":{"id":"0ea4a43a-dc3f-40f8-9621-bc61fdc798cc","type":"BasicTicker"}},"id":"b494ec10-ebe6-4fc1-9f86-4a319eea00d9","type":"ColorBar"},{"attributes":{},"id":"3858d1fa-b82c-4b46-ae3f-495276a15f43","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9ddb0f7f-702b-495b-a324-b9c3f1ea54d1","type":"PanTool"},{"id":"92614f8a-5a67-46da-ac49-139916eefe44","type":"WheelZoomTool"},{"id":"a1ebd56e-30c6-4855-9a6f-c388fd911a44","type":"BoxZoomTool"},{"id":"7de46ac7-2d1e-4934-a57e-db3d50ca9b34","type":"SaveTool"},{"id":"320cb87f-e387-44d2-acee-661b6cf57305","type":"ResetTool"},{"id":"174870a5-9417-41a0-83eb-c208016bae42","type":"HelpTool"}]},"id":"a33d4f65-b55c-414b-9c8a-9c38cdab038b","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ab974a37-f9ea-4bff-85ec-2280cfa8dd5f","type":"PanTool"},{"id":"fe29c61d-6652-472c-bc7b-95887e99830f","type":"WheelZoomTool"},{"id":"1cb81c5d-a55e-40c8-b5c5-8ad44802ab00","type":"BoxZoomTool"},{"id":"9a5b7558-44dd-4727-a276-28cde0dc0899","type":"SaveTool"},{"id":"94971bc5-a0c5-4818-9663-ef2bc353ad3c","type":"ResetTool"},{"id":"d9111c31-9744-45f8-a79e-d9e97fee65c6","type":"HelpTool"}]},"id":"6a3432b5-1898-4c01-a788-58bb4719802a","type":"Toolbar"},{"attributes":{"plot":{"id":"84da0eb3-844b-4563-9ad2-39ab70b7c2ea","subtype":"Chart","type":"Plot"}},"id":"7de46ac7-2d1e-4934-a57e-db3d50ca9b34","type":"SaveTool"}],"root_ids":["4567f273-7cc1-4d50-90d9-a2065222b044"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"1572d558-e06f-42f0-b1e5-92477e1147cc","elementid":"47baf03f-ff76-4830-ae88-29c07c64641c","modelid":"4567f273-7cc1-4d50-90d9-a2065222b044"}];
                  
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