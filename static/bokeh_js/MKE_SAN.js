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
      };var element = document.getElementById("ef9023d8-f60a-4f7b-a3cf-51645923c53b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ef9023d8-f60a-4f7b-a3cf-51645923c53b' but no matching script tag was found. ")
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
                  var docs_json = {"3a7ec026-21e8-4ddf-bbeb-d854148ab9ab":{"roots":{"references":[{"attributes":{"color_mapper":{"id":"f3cf249a-ead5-4f8b-9291-f2e4eac419fa","type":"LinearColorMapper"},"formatter":{"id":"0d9ba7c5-9d42-416e-b5d1-00c56bd7020b","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"},"ticker":{"id":"6ec2256a-8f79-4b01-8942-816f972efc72","type":"BasicTicker"}},"id":"8e6287e0-4250-48dd-8439-f1e4ca1c8a7b","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9, 10.1]"],"chart_index":[{"POS_ARR_DELAY":"(9, 10.1]"}],"values":[10.095238095238095],"x":[12],"y":["Saturday"]}},"id":"ddfafb3e-064c-44ff-82b2-b246cd776af5","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"15899f04-24eb-40b5-9df3-6101cec9e000","type":"FactorRange"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"9162cb12-f670-4f49-b520-277a0927f8b0","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"},"ticker":{"id":"7ffc9b53-6e04-45de-b2f0-42a013544e6a","type":"CategoricalTicker"}},"id":"64d3c846-0e53-492a-a62f-f1c8a85357fe","type":"CategoricalAxis"},{"attributes":{},"id":"dfe310de-0315-4261-b27d-2a2c22a003e6","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7e6a0c9f-4c91-4bff-a421-e884c107cea2","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"}},"id":"b70c6e46-1aa0-4add-85a3-60fc65ccbc11","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8119924f-a94c-45e3-8452-e3d939802a8b","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"92389b0a-56a2-46a9-a790-7a3c81cd53b9","type":"Rect"},{"attributes":{},"id":"79373a35-ebaf-4866-a236-c343545a9e52","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9, 10.1]"],"chart_index":[{"POS_ARR_DELAY":"(9, 10.1]"}],"values":[10.095238095238095],"x":[12],"y":["Saturday"]}},"id":"f1b0f6e7-966f-4e60-a27e-bda37fe5ebb6","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"3afb028f-e8f8-49de-a592-a118d5b5a92b","type":"LinearColorMapper"},"formatter":{"id":"44f614d2-4ef7-414d-8633-4190ba527a14","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"},"ticker":{"id":"812c01a1-9307-49d1-93bd-97f47a321a71","type":"BasicTicker"}},"id":"278a5588-a79a-449e-b3f6-cbb9b08fd443","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(2.2, 3.4]"],"chart_index":[{"POS_ARR_DELAY":"(2.2, 3.4]"}],"values":[3.0],"x":[16],"y":["Thursday"]}},"id":"f47e4e1b-26f9-4f92-bf8d-4247e18d1615","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"}},"id":"3d6db71c-fd8b-4880-a4c0-c9a444eafd04","type":"PanTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"f3cf249a-ead5-4f8b-9291-f2e4eac419fa","type":"LinearColorMapper"},{"attributes":{"callback":null,"tabs":[{"id":"76198b90-cff9-46ef-ba27-39789d18dbdc","type":"Panel"},{"id":"dd73c7ee-3bfa-43e5-8db9-b592d73a5ddf","type":"Panel"}]},"id":"871e2338-d8b7-4393-9855-1dc9b20d32aa","type":"Tabs"},{"attributes":{},"id":"7ffc9b53-6e04-45de-b2f0-42a013544e6a","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"ee7086f9-4bbf-4970-84a5-8608c48fb0e6","type":"ColumnDataSource"},"glyph":{"id":"a20860ad-56eb-4419-9a94-5400b467e6b3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9a285fd6-e7f8-468d-8024-374b2612853d","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"0a60b951-7171-44ce-a598-840c84411d70","type":"Range1d"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"4843614f-d2e3-4b7f-ab97-1a980dbb543a","type":"Title"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"dfe310de-0315-4261-b27d-2a2c22a003e6","type":"BasicTickFormatter"},"plot":{"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"},"ticker":{"id":"57354fe2-c391-4520-9b56-af706ff1dbd8","type":"BasicTicker"}},"id":"52e56e6c-2b42-4a14-8ae1-eedd1c4701fc","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"acd12c0b-9d18-4e5c-a656-c56e0b7f642f","type":"Rect"},{"attributes":{},"id":"8e2a868e-cf6b-4f3e-8a19-187d6c16e25f","type":"BasicTickFormatter"},{"attributes":{},"id":"44f614d2-4ef7-414d-8633-4190ba527a14","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac2a8da7-0601-4015-ac6d-d8bed5618552","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(1.1, 2.2]"],"chart_index":[{"POS_ARR_DELAY":"(1.1, 2.2]"}],"values":[1.25],"x":[16],"y":["Wednesday"]}},"id":"ee7086f9-4bbf-4970-84a5-8608c48fb0e6","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f1b0f6e7-966f-4e60-a27e-bda37fe5ebb6","type":"ColumnDataSource"},"glyph":{"id":"0033c947-3ef9-4dfe-845b-50dd79ff8d8e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ac1820f7-aec5-4c71-97eb-8278f43b3dc3","type":"GlyphRenderer"},{"attributes":{},"id":"7f48f73c-f19a-432a-8efb-cf281e703ddb","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4dc2b891-8459-4b8d-b472-8dffbeb70ab9","type":"PanTool"},{"id":"db4d1a54-3ca9-450d-bd56-2ae79d497826","type":"WheelZoomTool"},{"id":"2b845314-2abf-4c75-8c8b-913634d63a69","type":"BoxZoomTool"},{"id":"789e03d0-5880-4a18-b675-d6c31eaf9c39","type":"SaveTool"},{"id":"4effd891-044e-4dbb-883a-da0664549797","type":"ResetTool"},{"id":"4449caca-64da-4abd-a0a6-6d80d8ee329f","type":"HelpTool"}]},"id":"96493aac-b6c5-4963-8ae3-8ebe04d05745","type":"Toolbar"},{"attributes":{"data_source":{"id":"181f387f-f72b-406c-8f4d-a5e3fd4f83d7","type":"ColumnDataSource"},"glyph":{"id":"ac2a8da7-0601-4015-ac6d-d8bed5618552","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1567c762-bc1f-4dba-ac51-ad8e8b312eae","type":"GlyphRenderer"},{"attributes":{},"id":"9162cb12-f670-4f49-b520-277a0927f8b0","type":"CategoricalTickFormatter"},{"attributes":{},"id":"6ec2256a-8f79-4b01-8942-816f972efc72","type":"BasicTicker"},{"attributes":{"plot":{"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"}},"id":"db4d1a54-3ca9-450d-bd56-2ae79d497826","type":"WheelZoomTool"},{"attributes":{"child":{"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"dd73c7ee-3bfa-43e5-8db9-b592d73a5ddf","type":"Panel"},{"attributes":{"callback":null,"end":23},"id":"50ef9bd5-0e77-40ce-8894-fa28e030741f","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3d6db71c-fd8b-4880-a4c0-c9a444eafd04","type":"PanTool"},{"id":"6b25863c-1cff-49a5-a78e-f5ad04ef0124","type":"WheelZoomTool"},{"id":"eacd616a-35bb-4a35-87f6-ab733b975a02","type":"BoxZoomTool"},{"id":"f4df785d-4456-4d96-b876-fddc667f2070","type":"SaveTool"},{"id":"b70c6e46-1aa0-4add-85a3-60fc65ccbc11","type":"ResetTool"},{"id":"21f992cd-a434-4953-acb7-b15c3f00069f","type":"HelpTool"}]},"id":"d9ce1b65-ae69-4473-b097-3f9e9523607a","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]"],"chart_index":[{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"}],"values":[0.0,0.0,0.0,1.0,0.0],"x":[16,16,16,13,16],"y":["Monday","Tuesday","Friday","Saturday","Sunday"]}},"id":"181f387f-f72b-406c-8f4d-a5e3fd4f83d7","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"17d1334f-bc4e-4437-b9b9-60d2bd389a63","type":"Rect"},{"attributes":{},"id":"0d9ba7c5-9d42-416e-b5d1-00c56bd7020b","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"9f49511e-7579-466c-be51-8fbc62d59cbf","type":"LinearAxis"}],"left":[{"id":"64d3c846-0e53-492a-a62f-f1c8a85357fe","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ac453bdb-13b8-4b7a-9b0d-548c98a6038b","type":"BoxAnnotation"},{"id":"ac1820f7-aec5-4c71-97eb-8278f43b3dc3","type":"GlyphRenderer"},{"id":"0ed4b97e-db3d-42ba-a613-2bed71cb54ff","type":"GlyphRenderer"},{"id":"42344c69-1579-4d83-94fe-0ee7a1bb8c74","type":"GlyphRenderer"},{"id":"1567c762-bc1f-4dba-ac51-ad8e8b312eae","type":"GlyphRenderer"},{"id":"9f49511e-7579-466c-be51-8fbc62d59cbf","type":"LinearAxis"},{"id":"64d3c846-0e53-492a-a62f-f1c8a85357fe","type":"CategoricalAxis"},{"id":"8e6287e0-4250-48dd-8439-f1e4ca1c8a7b","type":"ColorBar"}],"right":[{"id":"8e6287e0-4250-48dd-8439-f1e4ca1c8a7b","type":"ColorBar"}],"title":{"id":"4843614f-d2e3-4b7f-ab97-1a980dbb543a","type":"Title"},"tool_events":{"id":"7f48f73c-f19a-432a-8efb-cf281e703ddb","type":"ToolEvents"},"toolbar":{"id":"d9ce1b65-ae69-4473-b097-3f9e9523607a","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"50ef9bd5-0e77-40ce-8894-fa28e030741f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"15899f04-24eb-40b5-9df3-6101cec9e000","type":"FactorRange"}},"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"aa2b62fe-ab23-4d93-bec0-e8a3be3a6245","type":"ColumnDataSource"},"glyph":{"id":"17d1334f-bc4e-4437-b9b9-60d2bd389a63","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7f90ce65-31ef-4e6c-ae64-34f9d5fdde5f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]","[-0.01, 1.1]"],"chart_index":[{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"},{"POS_ARR_DELAY":"[-0.01, 1.1]"}],"values":[0.0,0.0,0.0,1.0,0.0],"x":[16,16,16,13,16],"y":["Monday","Tuesday","Friday","Saturday","Sunday"]}},"id":"aa2b62fe-ab23-4d93-bec0-e8a3be3a6245","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ac453bdb-13b8-4b7a-9b0d-548c98a6038b","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"ddfafb3e-064c-44ff-82b2-b246cd776af5","type":"ColumnDataSource"},"glyph":{"id":"92389b0a-56a2-46a9-a790-7a3c81cd53b9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4ab06c9f-5ac0-4b50-abae-44e42919d885","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"52e56e6c-2b42-4a14-8ae1-eedd1c4701fc","type":"LinearAxis"}],"left":[{"id":"c0b53625-d300-4c44-b090-0f9cd3a7e1e0","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"7e6a0c9f-4c91-4bff-a421-e884c107cea2","type":"BoxAnnotation"},{"id":"4ab06c9f-5ac0-4b50-abae-44e42919d885","type":"GlyphRenderer"},{"id":"e7b2d35d-ddd7-492f-bd6b-0be552806633","type":"GlyphRenderer"},{"id":"9a285fd6-e7f8-468d-8024-374b2612853d","type":"GlyphRenderer"},{"id":"7f90ce65-31ef-4e6c-ae64-34f9d5fdde5f","type":"GlyphRenderer"},{"id":"52e56e6c-2b42-4a14-8ae1-eedd1c4701fc","type":"LinearAxis"},{"id":"c0b53625-d300-4c44-b090-0f9cd3a7e1e0","type":"CategoricalAxis"},{"id":"278a5588-a79a-449e-b3f6-cbb9b08fd443","type":"ColorBar"}],"right":[{"id":"278a5588-a79a-449e-b3f6-cbb9b08fd443","type":"ColorBar"}],"title":{"id":"bf4c8572-4390-4c69-a767-299f5612e678","type":"Title"},"tool_events":{"id":"79373a35-ebaf-4866-a236-c343545a9e52","type":"ToolEvents"},"toolbar":{"id":"96493aac-b6c5-4963-8ae3-8ebe04d05745","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"0a60b951-7171-44ce-a598-840c84411d70","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"da7f9ecd-d3af-4b6b-90a4-c75fc1e09f65","type":"FactorRange"}},"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"},{"attributes":{"child":{"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"76198b90-cff9-46ef-ba27-39789d18dbdc","type":"Panel"},{"attributes":{"plot":{"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"}},"id":"4449caca-64da-4abd-a0a6-6d80d8ee329f","type":"HelpTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"3afb028f-e8f8-49de-a592-a118d5b5a92b","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"}},"id":"4effd891-044e-4dbb-883a-da0664549797","type":"ResetTool"},{"attributes":{"data_source":{"id":"f47e4e1b-26f9-4f92-bf8d-4247e18d1615","type":"ColumnDataSource"},"glyph":{"id":"acd12c0b-9d18-4e5c-a656-c56e0b7f642f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0ed4b97e-db3d-42ba-a613-2bed71cb54ff","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"}},"id":"4dc2b891-8459-4b8d-b472-8dffbeb70ab9","type":"PanTool"},{"attributes":{},"id":"d9c6a4bc-aa6d-4b35-b367-ce610d50b117","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0033c947-3ef9-4dfe-845b-50dd79ff8d8e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(2.2, 3.4]"],"chart_index":[{"POS_ARR_DELAY":"(2.2, 3.4]"}],"values":[3.0],"x":[16],"y":["Thursday"]}},"id":"96a5e83d-9af1-4f6a-ad7f-b7690f3bd0b1","type":"ColumnDataSource"},{"attributes":{},"id":"812c01a1-9307-49d1-93bd-97f47a321a71","type":"BasicTicker"},{"attributes":{"overlay":{"id":"ac453bdb-13b8-4b7a-9b0d-548c98a6038b","type":"BoxAnnotation"},"plot":{"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"}},"id":"eacd616a-35bb-4a35-87f6-ab733b975a02","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"}},"id":"789e03d0-5880-4a18-b675-d6c31eaf9c39","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(1.1, 2.2]"],"chart_index":[{"POS_ARR_DELAY":"(1.1, 2.2]"}],"values":[1.25],"x":[16],"y":["Wednesday"]}},"id":"58b7afe2-7079-48bf-bc81-5f75f31c7ae1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"58b7afe2-7079-48bf-bc81-5f75f31c7ae1","type":"ColumnDataSource"},"glyph":{"id":"774e2ec3-bcc9-4262-8b98-f0b1e8144183","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"42344c69-1579-4d83-94fe-0ee7a1bb8c74","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"7e6a0c9f-4c91-4bff-a421-e884c107cea2","type":"BoxAnnotation"},"plot":{"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"}},"id":"2b845314-2abf-4c75-8c8b-913634d63a69","type":"BoxZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"8e2a868e-cf6b-4f3e-8a19-187d6c16e25f","type":"BasicTickFormatter"},"plot":{"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"},"ticker":{"id":"d9c6a4bc-aa6d-4b35-b367-ce610d50b117","type":"BasicTicker"}},"id":"9f49511e-7579-466c-be51-8fbc62d59cbf","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a20860ad-56eb-4419-9a94-5400b467e6b3","type":"Rect"},{"attributes":{"plot":{"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"}},"id":"21f992cd-a434-4953-acb7-b15c3f00069f","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"774e2ec3-bcc9-4262-8b98-f0b1e8144183","type":"Rect"},{"attributes":{},"id":"57354fe2-c391-4520-9b56-af706ff1dbd8","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"da7f9ecd-d3af-4b6b-90a4-c75fc1e09f65","type":"FactorRange"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"6c87b014-e4a2-42d5-899c-17b311d768f2","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a8f248f2-9bac-43ca-aa88-5f2b7e0ee2c6","subtype":"Chart","type":"Plot"},"ticker":{"id":"4bbc4151-6040-4735-acb8-1c2628083138","type":"CategoricalTicker"}},"id":"c0b53625-d300-4c44-b090-0f9cd3a7e1e0","type":"CategoricalAxis"},{"attributes":{},"id":"4bbc4151-6040-4735-acb8-1c2628083138","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"}},"id":"6b25863c-1cff-49a5-a78e-f5ad04ef0124","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"59fca537-84e0-4f46-9722-002c17646db8","subtype":"Chart","type":"Plot"}},"id":"f4df785d-4456-4d96-b876-fddc667f2070","type":"SaveTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"bf4c8572-4390-4c69-a767-299f5612e678","type":"Title"},{"attributes":{"data_source":{"id":"96a5e83d-9af1-4f6a-ad7f-b7690f3bd0b1","type":"ColumnDataSource"},"glyph":{"id":"8119924f-a94c-45e3-8452-e3d939802a8b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e7b2d35d-ddd7-492f-bd6b-0be552806633","type":"GlyphRenderer"},{"attributes":{},"id":"6c87b014-e4a2-42d5-899c-17b311d768f2","type":"CategoricalTickFormatter"}],"root_ids":["871e2338-d8b7-4393-9855-1dc9b20d32aa"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"3a7ec026-21e8-4ddf-bbeb-d854148ab9ab","elementid":"ef9023d8-f60a-4f7b-a3cf-51645923c53b","modelid":"871e2338-d8b7-4393-9855-1dc9b20d32aa"}];
                  
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