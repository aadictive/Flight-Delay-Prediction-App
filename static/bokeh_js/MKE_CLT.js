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
      };var element = document.getElementById("799d0201-017f-4ebb-9805-5f8da42808c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '799d0201-017f-4ebb-9805-5f8da42808c0' but no matching script tag was found. ")
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
                  var docs_json = {"eeb4721c-0356-409b-83ca-f877d6cfb526":{"roots":{"references":[{"attributes":{"data_source":{"id":"369245a8-dd7e-47be-9ba2-37a905d009d8","type":"ColumnDataSource"},"glyph":{"id":"34757997-9a26-4422-bd12-fec291aaeec8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3eb6f60a-c5ae-4b50-8656-032334b9f2e9","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"84cd8ac6-68f6-4fd0-ab31-b3231969e3e3","type":"BoxAnnotation"},"plot":{"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"}},"id":"693aaba6-7261-4e9f-9f9a-ccc2e9101000","type":"BoxZoomTool"},{"attributes":{"child":{"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"},"title":"YV"},"id":"48dce0e0-fce1-43ce-9679-1e84c36a7bcc","type":"Panel"},{"attributes":{"data_source":{"id":"4a4b879f-ba5c-47ce-87fe-122f2f89912f","type":"ColumnDataSource"},"glyph":{"id":"56a3ad5c-8ab3-4e89-a6d2-af2f5eaa46e3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5eff735f-a5e7-4828-b197-5e44b7b1b43e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(17.6, 20.2]"],"chart_index":[{"POS_ARR_DELAY":"(17.6, 20.2]"}],"values":[19.0],"x":[16],"y":["Sunday"]}},"id":"f29d74d1-e88c-4921-8354-c116fff3c27b","type":"ColumnDataSource"},{"attributes":{},"id":"c4070837-b844-4c79-ab93-f4e45ab8d0ef","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"b3fa91b0-6c8f-40ae-87bc-155a40e86c46","type":"ColumnDataSource"},"glyph":{"id":"139f9086-1789-421e-9ba9-143d00ca4149","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"89d7e63a-d07f-46cb-82af-4ee80540b735","type":"GlyphRenderer"},{"attributes":{},"id":"08121160-1588-4775-811a-4c73d25d5b9b","type":"BasicTicker"},{"attributes":{"plot":{"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"}},"id":"d1a84db0-a8f6-4db2-95c9-9db0a11363c0","type":"HelpTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"cd553745-cfb4-4d73-aff5-081cb65a37f8","type":"FactorRange"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"3a70edda-d623-41b9-be3e-74aa7c4e46ad","type":"Title"},{"attributes":{"data_source":{"id":"f29d74d1-e88c-4921-8354-c116fff3c27b","type":"ColumnDataSource"},"glyph":{"id":"43bedfe1-3737-463a-a281-e51f2abe8747","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5760b997-7e9d-4892-8b4e-a17f0a5140f6","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"5dc596ba-f218-4093-8c43-e1817c3bfe4e","type":"BasicTickFormatter"},"plot":{"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"},"ticker":{"id":"ceb6bb41-71f6-46e2-879a-4bb9e4bc9c04","type":"BasicTicker"}},"id":"80da22f0-196f-46f8-913a-507a48f14514","type":"LinearAxis"},{"attributes":{},"id":"9adc4557-ac5f-4e1c-9360-c3bf57d01ff0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"eb27338b-bd7b-43dd-a2fa-1593c635b8c5","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(14.9, 17.6]"],"chart_index":[{"POS_ARR_DELAY":"(14.9, 17.6]"}],"values":[16.75],"x":[16],"y":["Monday"]}},"id":"25af9c66-ae86-4ee0-ab2d-676a7504127f","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2c8efae8-8ed2-4c62-b1ff-9e59b5e62565","type":"PanTool"},{"id":"d093889b-3360-456e-99e5-b6cca7c8cf36","type":"WheelZoomTool"},{"id":"da127b8c-66bb-45e6-ab01-7b0f836cc564","type":"BoxZoomTool"},{"id":"26830f3a-0352-4c0f-bcdc-19011be6a38e","type":"SaveTool"},{"id":"d7604c09-6590-47d4-b520-e773b5f3f87f","type":"ResetTool"},{"id":"d1a84db0-a8f6-4db2-95c9-9db0a11363c0","type":"HelpTool"}]},"id":"6b5362aa-6e96-4b9b-8839-7472acc2167c","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(22.9, 25.6]","(22.9, 25.6]"],"chart_index":[{"POS_ARR_DELAY":"(22.9, 25.6]"},{"POS_ARR_DELAY":"(22.9, 25.6]"}],"values":[25.583333333333332,24.23076923076923],"x":[16,16],"y":["Tuesday","Saturday"]}},"id":"b3fa91b0-6c8f-40ae-87bc-155a40e86c46","type":"ColumnDataSource"},{"attributes":{},"id":"8a30ce09-41c0-4907-ba01-a4a0a13cc98f","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(17.6, 20.2]"],"chart_index":[{"POS_ARR_DELAY":"(17.6, 20.2]"}],"values":[19.0],"x":[16],"y":["Sunday"]}},"id":"a37326a3-a84b-4366-8ebb-d1642d68ec2a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a37326a3-a84b-4366-8ebb-d1642d68ec2a","type":"ColumnDataSource"},"glyph":{"id":"c79f92fe-0014-43d5-82ff-5cb314a41833","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8abfd446-efcf-4540-9dec-d3e2ff1b7435","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"679836c7-34f3-48a6-a1b7-f7db1b230033","type":"BasicTickFormatter"},"plot":{"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"},"ticker":{"id":"08121160-1588-4775-811a-4c73d25d5b9b","type":"BasicTicker"}},"id":"9c165f59-c683-4049-9b52-0a8d1cdd568f","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(14.9, 17.6]"],"chart_index":[{"POS_ARR_DELAY":"(14.9, 17.6]"}],"values":[16.75],"x":[16],"y":["Monday"]}},"id":"5176cdba-be36-4db0-b835-3573740b7f21","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec5871a4-d108-4a17-8016-bd506c703d05","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"5176cdba-be36-4db0-b835-3573740b7f21","type":"ColumnDataSource"},"glyph":{"id":"748f93de-fd01-4523-bfc6-d03b68586fe0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f00527c6-61fc-43ef-adbd-0ec364fa35c2","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"}},"id":"2c8efae8-8ed2-4c62-b1ff-9e59b5e62565","type":"PanTool"},{"attributes":{"callback":null,"end":23},"id":"b33310c1-6349-4d03-ab3d-b00003e908a8","type":"Range1d"},{"attributes":{"plot":null,"text":"Mesa Airlines "},"id":"328bdb14-f6c6-4ccc-b5a4-79c48358398b","type":"Title"},{"attributes":{"data_source":{"id":"e37f16c4-a686-40a8-8aa1-f645b72c7de1","type":"ColumnDataSource"},"glyph":{"id":"f434abe4-8057-41a5-a510-8557b892f400","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d0892487-ef63-41ef-b9b9-1fec36f3a423","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"}},"id":"491fd922-9684-4235-8a46-a10988d05f06","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(22.9, 25.6]","(22.9, 25.6]"],"chart_index":[{"POS_ARR_DELAY":"(22.9, 25.6]"},{"POS_ARR_DELAY":"(22.9, 25.6]"}],"values":[25.583333333333332,24.23076923076923],"x":[16,16],"y":["Tuesday","Saturday"]}},"id":"369245a8-dd7e-47be-9ba2-37a905d009d8","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"}},"id":"d8f82f9a-9826-478d-861a-095d26a6b4da","type":"WheelZoomTool"},{"attributes":{},"id":"5dc596ba-f218-4093-8c43-e1817c3bfe4e","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"43bedfe1-3737-463a-a281-e51f2abe8747","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c79f92fe-0014-43d5-82ff-5cb314a41833","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4e52ae23-6e30-4698-875e-4c167132be3c","type":"PanTool"},{"id":"d8f82f9a-9826-478d-861a-095d26a6b4da","type":"WheelZoomTool"},{"id":"693aaba6-7261-4e9f-9f9a-ccc2e9101000","type":"BoxZoomTool"},{"id":"4d7d8fbe-aae8-49db-9629-f1c5e416dc7f","type":"SaveTool"},{"id":"b14b7cc9-00b8-4ca3-8fd2-acebe5bb0cb1","type":"ResetTool"},{"id":"491fd922-9684-4235-8a46-a10988d05f06","type":"HelpTool"}]},"id":"43cdbb49-f774-4e64-ad6e-2fca890be7cd","type":"Toolbar"},{"attributes":{},"id":"741486ae-6741-45a0-bbf5-688a4271724d","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"}},"id":"b14b7cc9-00b8-4ca3-8fd2-acebe5bb0cb1","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c405e3c-4d2e-4f00-ae88-fc6b506506c3","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f434abe4-8057-41a5-a510-8557b892f400","type":"Rect"},{"attributes":{"color_mapper":{"id":"9ed04d0d-bb1c-4224-bf81-4fca4f72febf","type":"LinearColorMapper"},"formatter":{"id":"5456eef0-323b-44ac-a3ee-38ae53d05fe3","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"},"ticker":{"id":"e2764e08-be19-462f-a759-dbc29fcff7cf","type":"BasicTicker"}},"id":"d3e34639-2f6f-469d-b748-0cdf03b946e6","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[1.5, 4.2]"],"chart_index":[{"POS_ARR_DELAY":"[1.5, 4.2]"}],"values":[1.5],"x":[16],"y":["Friday"]}},"id":"c01e1933-5b4c-492c-a4fd-1c65731c3072","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"25af9c66-ae86-4ee0-ab2d-676a7504127f","type":"ColumnDataSource"},"glyph":{"id":"2c405e3c-4d2e-4f00-ae88-fc6b506506c3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"06103e97-a78b-4cf6-b524-6c9fc3212fbf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.2, 6.9]"],"chart_index":[{"POS_ARR_DELAY":"(4.2, 6.9]"}],"values":[5.818181818181818],"x":[16],"y":["Thursday"]}},"id":"e37f16c4-a686-40a8-8aa1-f645b72c7de1","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"84cd8ac6-68f6-4fd0-ab31-b3231969e3e3","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"150ad579-4fc9-496e-be43-b5005444b010","type":"ColumnDataSource"},"glyph":{"id":"475b9f40-d869-4e95-9c7f-d4e1601d70d8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bcb1f277-cd06-4a7d-8028-c82707e22ff1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.2, 6.9]"],"chart_index":[{"POS_ARR_DELAY":"(4.2, 6.9]"}],"values":[5.818181818181818],"x":[16],"y":["Thursday"]}},"id":"e70b226f-f602-4c2c-9e00-6a66daa82b6b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.5, 12.2]"],"chart_index":[{"POS_ARR_DELAY":"(9.5, 12.2]"}],"values":[9.666666666666666],"x":[16],"y":["Wednesday"]}},"id":"4abebc09-24bc-4a6e-98fc-94e8af3730f3","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"9d058b2e-2438-4697-8531-36b9a24bba0c","type":"LinearColorMapper"},{"attributes":{},"id":"dc444a4d-0256-459c-b0ee-ee33d38cc39c","type":"ToolEvents"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"9c165f59-c683-4049-9b52-0a8d1cdd568f","type":"LinearAxis"}],"left":[{"id":"7325dbbf-8dae-4479-9a60-0ed5eba9d7a8","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"84cd8ac6-68f6-4fd0-ab31-b3231969e3e3","type":"BoxAnnotation"},{"id":"3eb6f60a-c5ae-4b50-8656-032334b9f2e9","type":"GlyphRenderer"},{"id":"5760b997-7e9d-4892-8b4e-a17f0a5140f6","type":"GlyphRenderer"},{"id":"f00527c6-61fc-43ef-adbd-0ec364fa35c2","type":"GlyphRenderer"},{"id":"5eff735f-a5e7-4828-b197-5e44b7b1b43e","type":"GlyphRenderer"},{"id":"d0892487-ef63-41ef-b9b9-1fec36f3a423","type":"GlyphRenderer"},{"id":"d8d887f3-e9d1-47be-bc02-ad269d60d26d","type":"GlyphRenderer"},{"id":"9c165f59-c683-4049-9b52-0a8d1cdd568f","type":"LinearAxis"},{"id":"7325dbbf-8dae-4479-9a60-0ed5eba9d7a8","type":"CategoricalAxis"},{"id":"d3e34639-2f6f-469d-b748-0cdf03b946e6","type":"ColorBar"}],"right":[{"id":"d3e34639-2f6f-469d-b748-0cdf03b946e6","type":"ColorBar"}],"title":{"id":"328bdb14-f6c6-4ccc-b5a4-79c48358398b","type":"Title"},"tool_events":{"id":"dc444a4d-0256-459c-b0ee-ee33d38cc39c","type":"ToolEvents"},"toolbar":{"id":"43cdbb49-f774-4e64-ad6e-2fca890be7cd","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"eb27338b-bd7b-43dd-a2fa-1593c635b8c5","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b8ad5f08-e9e3-4cbb-b672-008f1b53b653","type":"FactorRange"}},"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"748f93de-fd01-4523-bfc6-d03b68586fe0","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"9ed04d0d-bb1c-4224-bf81-4fca4f72febf","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0bdc43ad-8d69-4ac8-9076-0cfbbd162fd4","type":"Rect"},{"attributes":{"child":{"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"751d704c-252a-44f6-983d-a1d529617c6a","type":"Panel"},{"attributes":{"data_source":{"id":"e70b226f-f602-4c2c-9e00-6a66daa82b6b","type":"ColumnDataSource"},"glyph":{"id":"0bdc43ad-8d69-4ac8-9076-0cfbbd162fd4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bd95fa09-479a-414b-b5fe-840bf2765a43","type":"GlyphRenderer"},{"attributes":{},"id":"ceb6bb41-71f6-46e2-879a-4bb9e4bc9c04","type":"BasicTicker"},{"attributes":{},"id":"e2764e08-be19-462f-a759-dbc29fcff7cf","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"56a3ad5c-8ab3-4e89-a6d2-af2f5eaa46e3","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"34757997-9a26-4422-bd12-fec291aaeec8","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"80da22f0-196f-46f8-913a-507a48f14514","type":"LinearAxis"}],"left":[{"id":"83836bd2-03fa-457a-ae76-5f421cd17b57","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ec5871a4-d108-4a17-8016-bd506c703d05","type":"BoxAnnotation"},{"id":"89d7e63a-d07f-46cb-82af-4ee80540b735","type":"GlyphRenderer"},{"id":"8abfd446-efcf-4540-9dec-d3e2ff1b7435","type":"GlyphRenderer"},{"id":"06103e97-a78b-4cf6-b524-6c9fc3212fbf","type":"GlyphRenderer"},{"id":"263e10a7-f971-4970-a7da-c7c1b5e80073","type":"GlyphRenderer"},{"id":"bd95fa09-479a-414b-b5fe-840bf2765a43","type":"GlyphRenderer"},{"id":"bcb1f277-cd06-4a7d-8028-c82707e22ff1","type":"GlyphRenderer"},{"id":"80da22f0-196f-46f8-913a-507a48f14514","type":"LinearAxis"},{"id":"83836bd2-03fa-457a-ae76-5f421cd17b57","type":"CategoricalAxis"},{"id":"33ca2ab1-de24-4f1b-96b5-b16f86bfc904","type":"ColorBar"}],"right":[{"id":"33ca2ab1-de24-4f1b-96b5-b16f86bfc904","type":"ColorBar"}],"title":{"id":"3a70edda-d623-41b9-be3e-74aa7c4e46ad","type":"Title"},"tool_events":{"id":"8a30ce09-41c0-4907-ba01-a4a0a13cc98f","type":"ToolEvents"},"toolbar":{"id":"6b5362aa-6e96-4b9b-8839-7472acc2167c","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"b33310c1-6349-4d03-ab3d-b00003e908a8","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"cd553745-cfb4-4d73-aff5-081cb65a37f8","type":"FactorRange"}},"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"b8ad5f08-e9e3-4cbb-b672-008f1b53b653","type":"FactorRange"},{"attributes":{"overlay":{"id":"ec5871a4-d108-4a17-8016-bd506c703d05","type":"BoxAnnotation"},"plot":{"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"}},"id":"da127b8c-66bb-45e6-ab01-7b0f836cc564","type":"BoxZoomTool"},{"attributes":{"color_mapper":{"id":"9d058b2e-2438-4697-8531-36b9a24bba0c","type":"LinearColorMapper"},"formatter":{"id":"9adc4557-ac5f-4e1c-9360-c3bf57d01ff0","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"},"ticker":{"id":"a9a0ee9d-db61-424a-bbb1-b16a555c32fa","type":"BasicTicker"}},"id":"33ca2ab1-de24-4f1b-96b5-b16f86bfc904","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"78fdfea0-59a6-4428-8ccc-a209ab0894ad","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"139f9086-1789-421e-9ba9-143d00ca4149","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"741486ae-6741-45a0-bbf5-688a4271724d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"},"ticker":{"id":"c4070837-b844-4c79-ab93-f4e45ab8d0ef","type":"CategoricalTicker"}},"id":"7325dbbf-8dae-4479-9a60-0ed5eba9d7a8","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"}},"id":"d7604c09-6590-47d4-b520-e773b5f3f87f","type":"ResetTool"},{"attributes":{"plot":{"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"}},"id":"d093889b-3360-456e-99e5-b6cca7c8cf36","type":"WheelZoomTool"},{"attributes":{},"id":"679836c7-34f3-48a6-a1b7-f7db1b230033","type":"BasicTickFormatter"},{"attributes":{},"id":"a9a0ee9d-db61-424a-bbb1-b16a555c32fa","type":"BasicTicker"},{"attributes":{"callback":null,"tabs":[{"id":"751d704c-252a-44f6-983d-a1d529617c6a","type":"Panel"},{"id":"48dce0e0-fce1-43ce-9679-1e84c36a7bcc","type":"Panel"}]},"id":"1532cb82-ee78-4908-981f-e30c4ccd0022","type":"Tabs"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"fa4c5893-58fb-4312-bba8-4bdeb88dd736","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"},"ticker":{"id":"d620036c-7dce-41c2-91a0-b899a91a4131","type":"CategoricalTicker"}},"id":"83836bd2-03fa-457a-ae76-5f421cd17b57","type":"CategoricalAxis"},{"attributes":{},"id":"5456eef0-323b-44ac-a3ee-38ae53d05fe3","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[1.5, 4.2]"],"chart_index":[{"POS_ARR_DELAY":"[1.5, 4.2]"}],"values":[1.5],"x":[16],"y":["Friday"]}},"id":"150ad579-4fc9-496e-be43-b5005444b010","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"}},"id":"4d7d8fbe-aae8-49db-9629-f1c5e416dc7f","type":"SaveTool"},{"attributes":{"data_source":{"id":"4abebc09-24bc-4a6e-98fc-94e8af3730f3","type":"ColumnDataSource"},"glyph":{"id":"78fdfea0-59a6-4428-8ccc-a209ab0894ad","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"263e10a7-f971-4970-a7da-c7c1b5e80073","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.5, 12.2]"],"chart_index":[{"POS_ARR_DELAY":"(9.5, 12.2]"}],"values":[9.666666666666666],"x":[16],"y":["Wednesday"]}},"id":"4a4b879f-ba5c-47ce-87fe-122f2f89912f","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"475b9f40-d869-4e95-9c7f-d4e1601d70d8","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bca8c906-494b-4f8e-b9c6-ffc2034d752f","type":"Rect"},{"attributes":{"data_source":{"id":"c01e1933-5b4c-492c-a4fd-1c65731c3072","type":"ColumnDataSource"},"glyph":{"id":"bca8c906-494b-4f8e-b9c6-ffc2034d752f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d8d887f3-e9d1-47be-bc02-ad269d60d26d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"12c42db9-ac7d-4273-8ec4-b7f57e142974","subtype":"Chart","type":"Plot"}},"id":"4e52ae23-6e30-4698-875e-4c167132be3c","type":"PanTool"},{"attributes":{"plot":{"id":"267afdc6-b0b6-46ee-a388-2c301d3fc73e","subtype":"Chart","type":"Plot"}},"id":"26830f3a-0352-4c0f-bcdc-19011be6a38e","type":"SaveTool"},{"attributes":{},"id":"d620036c-7dce-41c2-91a0-b899a91a4131","type":"CategoricalTicker"},{"attributes":{},"id":"fa4c5893-58fb-4312-bba8-4bdeb88dd736","type":"CategoricalTickFormatter"}],"root_ids":["1532cb82-ee78-4908-981f-e30c4ccd0022"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"eeb4721c-0356-409b-83ca-f877d6cfb526","elementid":"799d0201-017f-4ebb-9805-5f8da42808c0","modelid":"1532cb82-ee78-4908-981f-e30c4ccd0022"}];
                  
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