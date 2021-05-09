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
      };var element = document.getElementById("395e7512-4c8d-48f4-84e3-7968918f1d50");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '395e7512-4c8d-48f4-84e3-7968918f1d50' but no matching script tag was found. ")
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
                  var docs_json = {"78fdd561-8d6c-4c2a-a0e5-7292e31a956e":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea230316-30a3-406d-804c-cb6e2937d846","type":"Rect"},{"attributes":{},"id":"7760f80e-e66c-480c-8937-32ab2fee210e","type":"BasicTicker"},{"attributes":{},"id":"1150d986-6fda-4ac7-a66d-9241e8191fe5","type":"ToolEvents"},{"attributes":{"plot":{"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"}},"id":"feab8e96-d273-41db-bb68-16d066a34eca","type":"SaveTool"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"90bccd0c-ecf4-4d7e-ac04-a7835620a802","type":"Title"},{"attributes":{"plot":{"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"}},"id":"45baa37c-4ecd-4ef4-9477-b73307afb30a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"}},"id":"f0b11b94-985c-4294-a89c-9264982f1e34","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a6e0f997-b443-4755-8193-e9cdbd8c97a1","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"0c03dd68-5215-4a5d-bb3d-0fbafb8d2372","type":"FactorRange"},{"attributes":{"data_source":{"id":"b02530ed-ecd2-487e-af68-dbef15d9b128","type":"ColumnDataSource"},"glyph":{"id":"b90b80ac-d408-4996-912f-108a11aaa4a1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"abb68ce7-a79c-44b1-a04e-93645728fccc","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"9a4eca43-5928-47bb-aada-a507c0cb04fc","type":"BasicTickFormatter"},"plot":{"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"},"ticker":{"id":"a1133f54-625c-4cef-885d-03a68f811308","type":"BasicTicker"}},"id":"15248aff-4e04-46e0-8139-f65c1a4dd366","type":"LinearAxis"},{"attributes":{"data_source":{"id":"57ddfd5c-cb8f-4294-a2c0-a6605ecec90f","type":"ColumnDataSource"},"glyph":{"id":"6140aa1d-cf01-497b-bba5-447d8d0ca7b0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6862cba5-6eff-4d57-8ce0-6b142ea0c0fe","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"941cfad0-666b-4b91-a208-aa81059a2d78","type":"LinearAxis"}],"left":[{"id":"4383160c-7af7-49e2-93fb-87193faee284","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"feeb1949-76fb-4fe7-bf7a-4ca3f90142a8","type":"BoxAnnotation"},{"id":"378a6712-7421-4ea8-999c-41740fa98d7f","type":"GlyphRenderer"},{"id":"fdae872b-509a-4e28-a324-504994669b2d","type":"GlyphRenderer"},{"id":"6376ba19-e551-4430-a9b4-a818f93774d6","type":"GlyphRenderer"},{"id":"c3374ab6-f507-483a-bbb0-5392a02c58e2","type":"GlyphRenderer"},{"id":"dbe3268d-ba89-4f4b-9864-9a1daf56157d","type":"GlyphRenderer"},{"id":"64a84f8e-7d58-475d-ab12-8f0d2aa46b7c","type":"GlyphRenderer"},{"id":"d82d7bef-f32c-4fca-9f11-61da52d2ca6d","type":"GlyphRenderer"},{"id":"941cfad0-666b-4b91-a208-aa81059a2d78","type":"LinearAxis"},{"id":"4383160c-7af7-49e2-93fb-87193faee284","type":"CategoricalAxis"},{"id":"7cae1863-a3d1-4be7-b7ba-1fe3e09f4877","type":"ColorBar"}],"right":[{"id":"7cae1863-a3d1-4be7-b7ba-1fe3e09f4877","type":"ColorBar"}],"title":{"id":"7deb27b5-9bb8-40a6-a108-4b48bfd7ff33","type":"Title"},"tool_events":{"id":"37e1498a-0f2e-4dcd-93e3-620acea888bc","type":"ToolEvents"},"toolbar":{"id":"729a4329-eaa6-4b6c-9ead-997aa83bf0a1","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"05875f20-5719-40e5-8c5c-0ad7887d6e81","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1445956a-691a-4dbf-b7bc-11cd9f258068","type":"FactorRange"}},"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"feeb1949-76fb-4fe7-bf7a-4ca3f90142a8","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f4568326-079e-4724-885f-8e79b6d83365","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6140aa1d-cf01-497b-bba5-447d8d0ca7b0","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f72d4314-ed24-4d93-9e9f-ea32054f2624","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.634146341463415,10.25,12.2],"x":[14,9,17],"y":["Monday","Tuesday","Thursday"]}},"id":"f88b8dce-8ff4-4337-a87f-042107cfaeb0","type":"ColumnDataSource"},{"attributes":{},"id":"86448268-261e-4443-94fd-5fc9d3f32e64","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"7220eaac-9251-4e5e-9ad3-5bdc4c894b6b","type":"ColumnDataSource"},"glyph":{"id":"b9deff15-7a52-414c-b27c-378bd1130550","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"64a84f8e-7d58-475d-ab12-8f0d2aa46b7c","type":"GlyphRenderer"},{"attributes":{},"id":"37e1498a-0f2e-4dcd-93e3-620acea888bc","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.08333333333333333,0.0,0.0,0.0,0.0,0.0,0.6666666666666666,0.0,1.4444444444444444,0.0,0.0,0.625,0.0,2.4,3.2142857142857144,2.75],"x":[10,12,13,10,12,17,9,12,12,13,9,13,7,10,12,14,9],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday"]}},"id":"3125ba85-f708-4fc4-a389-aeef0967cdcf","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"08784e46-afbc-47e6-8cd0-1c756399d487","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c03a4ce9-a99d-4099-bfb7-27ad47d7dc12","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"},"ticker":{"id":"86448268-261e-4443-94fd-5fc9d3f32e64","type":"CategoricalTicker"}},"id":"4383160c-7af7-49e2-93fb-87193faee284","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f0b11b94-985c-4294-a89c-9264982f1e34","type":"PanTool"},{"id":"7e1eb3cd-4dd7-4490-9b4f-b9f628c0fef4","type":"WheelZoomTool"},{"id":"53dfc3e4-192a-49bd-8819-02ce8cdcc81a","type":"BoxZoomTool"},{"id":"feab8e96-d273-41db-bb68-16d066a34eca","type":"SaveTool"},{"id":"4e0ba877-f191-41fa-85af-81707d51cfe3","type":"ResetTool"},{"id":"4df521c3-af98-46fe-966a-ede7637bbe11","type":"HelpTool"}]},"id":"729a4329-eaa6-4b6c-9ead-997aa83bf0a1","type":"Toolbar"},{"attributes":{},"id":"a1133f54-625c-4cef-885d-03a68f811308","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2dc8fcac-1d61-486e-93b4-7e5d358e6ff5","type":"ColumnDataSource"},"glyph":{"id":"c3bf11df-12fd-4db5-a179-0db566fbafdf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7e0db37a-771f-410f-bf6d-1e204173b3f7","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"95028a14-c827-48cd-8645-cd99311cdca8","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":23},"id":"62f8c2b8-a66a-46dc-bad4-1fe5d515effd","type":"Range1d"},{"attributes":{"overlay":{"id":"feeb1949-76fb-4fe7-bf7a-4ca3f90142a8","type":"BoxAnnotation"},"plot":{"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"}},"id":"53dfc3e4-192a-49bd-8819-02ce8cdcc81a","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":23},"id":"05875f20-5719-40e5-8c5c-0ad7887d6e81","type":"Range1d"},{"attributes":{"plot":{"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"}},"id":"092961ba-66fa-4b72-bbb6-26b2627287c5","type":"HelpTool"},{"attributes":{"data_source":{"id":"b9053dcc-5d09-46be-8bf3-fd112e148d8a","type":"ColumnDataSource"},"glyph":{"id":"cd6acd0f-2ae9-4e2f-94a2-6632744e5277","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"be8fb97e-87dc-4434-893c-bb47f0164834","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"95028a14-c827-48cd-8645-cd99311cdca8","type":"LinearColorMapper"},"formatter":{"id":"c3e8c42b-5a8a-45fb-acc5-45d49149a502","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"},"ticker":{"id":"63e35a02-f6bb-43bb-aa1f-0bee86fbe141","type":"BasicTicker"}},"id":"7cae1863-a3d1-4be7-b7ba-1fe3e09f4877","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[6.888888888888889,7.666666666666667,8.0,9.083333333333334],"x":[13,12,17,12],"y":["Wednesday","Friday","Friday","Sunday"]}},"id":"eb8fb0a1-707f-4850-916f-880bf0ecd436","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"87ef332f-7760-40a3-a01e-ce1b96a214f4","type":"BasicTickFormatter"},"plot":{"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"},"ticker":{"id":"3f38ebf2-01ea-4823-8dc8-9907a23df7f6","type":"BasicTicker"}},"id":"941cfad0-666b-4b91-a208-aa81059a2d78","type":"LinearAxis"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"1445956a-691a-4dbf-b7bc-11cd9f258068","type":"FactorRange"},{"attributes":{},"id":"63e35a02-f6bb-43bb-aa1f-0bee86fbe141","type":"BasicTicker"},{"attributes":{"overlay":{"id":"43610f31-515f-4361-9663-7c0413bad023","type":"BoxAnnotation"},"plot":{"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"}},"id":"1bdade60-f699-4612-a579-ae007df42001","type":"BoxZoomTool"},{"attributes":{},"id":"3e304d28-1c1d-4f0a-a828-bf74b900b497","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"fd8af485-4455-4f95-9374-dfd7448e50b7","type":"ColumnDataSource"},"glyph":{"id":"71b60ed6-71d4-4b4e-b259-07c9737cd6c6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c3374ab6-f507-483a-bbb0-5392a02c58e2","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"7deb27b5-9bb8-40a6-a108-4b48bfd7ff33","type":"Title"},{"attributes":{"child":{"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"5418b3fa-a54b-487f-aa7a-11b14e0067a0","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.0,17.697674418604652,17.5,18.71794871794872],"x":[9,14,14,14],"y":["Monday","Wednesday","Friday","Sunday"]}},"id":"d2e7f5ff-6c2e-4153-8043-78ad54f6d539","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9440e4c7-2114-44ba-b7c8-dbd246e926bf","type":"ColumnDataSource"},"glyph":{"id":"f72d4314-ed24-4d93-9e9f-ea32054f2624","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"15cda282-7072-4ff5-9f0c-fee40d6feba4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.318181818181817],"x":[14],"y":["Thursday"]}},"id":"6ec99804-f72d-4cdc-b140-aceee47f59e9","type":"ColumnDataSource"},{"attributes":{"child":{"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"bd869efc-b970-4947-a96b-853b51e9b76e","type":"Panel"},{"attributes":{"data_source":{"id":"3125ba85-f708-4fc4-a389-aeef0967cdcf","type":"ColumnDataSource"},"glyph":{"id":"1aa34f58-6a3b-43f1-ba70-58732c6ac53e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d82d7bef-f32c-4fca-9f11-61da52d2ca6d","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd6acd0f-2ae9-4e2f-94a2-6632744e5277","type":"Rect"},{"attributes":{"plot":{"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"}},"id":"73678e1f-7c08-4a1c-977d-9214ec6f2a0c","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"012ea676-1fb8-47c6-b692-6b60fc59ed4f","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"15248aff-4e04-46e0-8139-f65c1a4dd366","type":"LinearAxis"}],"left":[{"id":"d7fca0f0-6293-41de-b2c8-aa0312cabe0b","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"43610f31-515f-4361-9663-7c0413bad023","type":"BoxAnnotation"},{"id":"15cda282-7072-4ff5-9f0c-fee40d6feba4","type":"GlyphRenderer"},{"id":"6862cba5-6eff-4d57-8ce0-6b142ea0c0fe","type":"GlyphRenderer"},{"id":"be8fb97e-87dc-4434-893c-bb47f0164834","type":"GlyphRenderer"},{"id":"87709e82-71c9-4c51-80e9-b56a4c4b8f95","type":"GlyphRenderer"},{"id":"7e0db37a-771f-410f-bf6d-1e204173b3f7","type":"GlyphRenderer"},{"id":"49504ef6-6698-4224-8555-a5d1a7d93059","type":"GlyphRenderer"},{"id":"abb68ce7-a79c-44b1-a04e-93645728fccc","type":"GlyphRenderer"},{"id":"15248aff-4e04-46e0-8139-f65c1a4dd366","type":"LinearAxis"},{"id":"d7fca0f0-6293-41de-b2c8-aa0312cabe0b","type":"CategoricalAxis"},{"id":"6fdd0a58-62bf-4edb-8c83-4c29a22e9414","type":"ColorBar"}],"right":[{"id":"6fdd0a58-62bf-4edb-8c83-4c29a22e9414","type":"ColorBar"}],"title":{"id":"90bccd0c-ecf4-4d7e-ac04-a7835620a802","type":"Title"},"tool_events":{"id":"1150d986-6fda-4ac7-a66d-9241e8191fe5","type":"ToolEvents"},"toolbar":{"id":"2277f73e-f87f-43c7-83f6-f4d05fa31d38","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"62f8c2b8-a66a-46dc-bad4-1fe5d515effd","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"0c03dd68-5215-4a5d-bb3d-0fbafb8d2372","type":"FactorRange"}},"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9deff15-7a52-414c-b27c-378bd1130550","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[27.38095238095238,30.0,30.0,30.0,30.0],"x":[14,10,17,10,13],"y":["Tuesday","Wednesday","Wednesday","Sunday","Sunday"]}},"id":"9440e4c7-2114-44ba-b7c8-dbd246e926bf","type":"ColumnDataSource"},{"attributes":{},"id":"9a4eca43-5928-47bb-aada-a507c0cb04fc","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.08333333333333333,0.0,0.0,0.0,0.0,0.0,0.6666666666666666,0.0,1.4444444444444444,0.0,0.0,0.625,0.0,2.4,3.2142857142857144,2.75],"x":[10,12,13,10,12,17,9,12,12,13,9,13,7,10,12,14,9],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday"]}},"id":"b02530ed-ecd2-487e-af68-dbef15d9b128","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"}},"id":"4e0ba877-f191-41fa-85af-81707d51cfe3","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"71b60ed6-71d4-4b4e-b259-07c9737cd6c6","type":"Rect"},{"attributes":{"plot":{"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"}},"id":"4df521c3-af98-46fe-966a-ede7637bbe11","type":"HelpTool"},{"attributes":{"plot":{"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"}},"id":"b7daf79d-349f-43bf-a384-46318ff483fe","type":"ResetTool"},{"attributes":{"data_source":{"id":"eb8fb0a1-707f-4850-916f-880bf0ecd436","type":"ColumnDataSource"},"glyph":{"id":"f4568326-079e-4724-885f-8e79b6d83365","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dbe3268d-ba89-4f4b-9864-9a1daf56157d","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"741809e3-b1b2-403c-a97d-4171e947b7d2","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.4,5.333333333333333,6.0,6.411764705882353,4.0,6.6],"x":[17,13,9,13,15,17],"y":["Monday","Tuesday","Thursday","Saturday","Sunday","Sunday"]}},"id":"7220eaac-9251-4e5e-9ad3-5bdc4c894b6b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f88b8dce-8ff4-4337-a87f-042107cfaeb0","type":"ColumnDataSource"},"glyph":{"id":"a6e0f997-b443-4755-8193-e9cdbd8c97a1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"87709e82-71c9-4c51-80e9-b56a4c4b8f95","type":"GlyphRenderer"},{"attributes":{},"id":"7e0c76ec-e929-4f59-903c-a60c614cc832","type":"CategoricalTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"43610f31-515f-4361-9663-7c0413bad023","type":"BoxAnnotation"},{"attributes":{},"id":"87ef332f-7760-40a3-a01e-ce1b96a214f4","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"73678e1f-7c08-4a1c-977d-9214ec6f2a0c","type":"PanTool"},{"id":"45baa37c-4ecd-4ef4-9477-b73307afb30a","type":"WheelZoomTool"},{"id":"1bdade60-f699-4612-a579-ae007df42001","type":"BoxZoomTool"},{"id":"a3613192-bef5-42f2-8fb3-146e5e0a0440","type":"SaveTool"},{"id":"b7daf79d-349f-43bf-a384-46318ff483fe","type":"ResetTool"},{"id":"092961ba-66fa-4b72-bbb6-26b2627287c5","type":"HelpTool"}]},"id":"2277f73e-f87f-43c7-83f6-f4d05fa31d38","type":"Toolbar"},{"attributes":{"plot":{"id":"98c7e489-617f-472c-a972-4aa19c014728","subtype":"Chart","type":"Plot"}},"id":"7e1eb3cd-4dd7-4490-9b4f-b9f628c0fef4","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2dcf72a-5638-49b3-9f9e-18d306c27d15","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"5418b3fa-a54b-487f-aa7a-11b14e0067a0","type":"Panel"},{"id":"bd869efc-b970-4947-a96b-853b51e9b76e","type":"Panel"}]},"id":"79842125-449a-46d9-915a-40294d71e9a1","type":"Tabs"},{"attributes":{"data_source":{"id":"d2e7f5ff-6c2e-4153-8043-78ad54f6d539","type":"ColumnDataSource"},"glyph":{"id":"012ea676-1fb8-47c6-b692-6b60fc59ed4f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6376ba19-e551-4430-a9b4-a818f93774d6","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3bf11df-12fd-4db5-a179-0db566fbafdf","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[6.888888888888889,7.666666666666667,8.0,9.083333333333334],"x":[13,12,17,12],"y":["Wednesday","Friday","Friday","Sunday"]}},"id":"2dc8fcac-1d61-486e-93b4-7e5d358e6ff5","type":"ColumnDataSource"},{"attributes":{},"id":"c03a4ce9-a99d-4099-bfb7-27ad47d7dc12","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"6ec99804-f72d-4cdc-b140-aceee47f59e9","type":"ColumnDataSource"},"glyph":{"id":"08784e46-afbc-47e6-8cd0-1c756399d487","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fdae872b-509a-4e28-a324-504994669b2d","type":"GlyphRenderer"},{"attributes":{},"id":"3f38ebf2-01ea-4823-8dc8-9907a23df7f6","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1aa34f58-6a3b-43f1-ba70-58732c6ac53e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.318181818181817],"x":[14],"y":["Thursday"]}},"id":"57ddfd5c-cb8f-4294-a2c0-a6605ecec90f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"}},"id":"a3613192-bef5-42f2-8fb3-146e5e0a0440","type":"SaveTool"},{"attributes":{"data_source":{"id":"b3171e55-01f5-4879-aaf4-66b883b52521","type":"ColumnDataSource"},"glyph":{"id":"e2dcf72a-5638-49b3-9f9e-18d306c27d15","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"378a6712-7421-4ea8-999c-41740fa98d7f","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"741809e3-b1b2-403c-a97d-4171e947b7d2","type":"LinearColorMapper"},"formatter":{"id":"3e304d28-1c1d-4f0a-a828-bf74b900b497","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"},"ticker":{"id":"7760f80e-e66c-480c-8937-32ab2fee210e","type":"BasicTicker"}},"id":"6fdd0a58-62bf-4edb-8c83-4c29a22e9414","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.0,17.697674418604652,17.5,18.71794871794872],"x":[9,14,14,14],"y":["Monday","Wednesday","Friday","Sunday"]}},"id":"b9053dcc-5d09-46be-8bf3-fd112e148d8a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.4,5.333333333333333,6.0,6.411764705882353,4.0,6.6],"x":[17,13,9,13,15,17],"y":["Monday","Tuesday","Thursday","Saturday","Sunday","Sunday"]}},"id":"0eeb1e5e-5235-4587-a340-4e4a5ee6032c","type":"ColumnDataSource"},{"attributes":{},"id":"cc2edff5-357a-4ce0-b496-fbb262f592b4","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"0eeb1e5e-5235-4587-a340-4e4a5ee6032c","type":"ColumnDataSource"},"glyph":{"id":"ea230316-30a3-406d-804c-cb6e2937d846","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"49504ef6-6698-4224-8555-a5d1a7d93059","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b90b80ac-d408-4996-912f-108a11aaa4a1","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[27.38095238095238,30.0,30.0,30.0,30.0],"x":[14,10,17,10,13],"y":["Tuesday","Wednesday","Wednesday","Sunday","Sunday"]}},"id":"b3171e55-01f5-4879-aaf4-66b883b52521","type":"ColumnDataSource"},{"attributes":{},"id":"c3e8c42b-5a8a-45fb-acc5-45d49149a502","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.634146341463415,10.25,12.2],"x":[14,9,17],"y":["Monday","Tuesday","Thursday"]}},"id":"fd8af485-4455-4f95-9374-dfd7448e50b7","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"cc2edff5-357a-4ce0-b496-fbb262f592b4","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"28635a64-b261-46a3-9e0d-edd9bdba0089","subtype":"Chart","type":"Plot"},"ticker":{"id":"7e0c76ec-e929-4f59-903c-a60c614cc832","type":"CategoricalTicker"}},"id":"d7fca0f0-6293-41de-b2c8-aa0312cabe0b","type":"CategoricalAxis"}],"root_ids":["79842125-449a-46d9-915a-40294d71e9a1"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"78fdd561-8d6c-4c2a-a0e5-7292e31a956e","elementid":"395e7512-4c8d-48f4-84e3-7968918f1d50","modelid":"79842125-449a-46d9-915a-40294d71e9a1"}];
                  
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