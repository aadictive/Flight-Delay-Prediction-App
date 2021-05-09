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
      };var element = document.getElementById("58bc7abd-1caa-469f-9938-27e9c0b042d4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '58bc7abd-1caa-469f-9938-27e9c0b042d4' but no matching script tag was found. ")
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
                  var docs_json = {"15b6af85-03a6-460b-8b74-d0fb02aa2e0d":{"roots":{"references":[{"attributes":{"plot":{"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"}},"id":"019bf46a-abde-45c4-9085-3107c093bf48","type":"HelpTool"},{"attributes":{},"id":"5b2a574a-bedd-4cc0-a046-cb9e6e87e3bf","type":"ToolEvents"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"22db35bd-2922-439f-a5ad-a1e23d6341c4","type":"FactorRange"},{"attributes":{},"id":"4a3891f4-a90c-4cc3-8e69-7a08cf8a54df","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"7dcc34f4-e788-4bc2-a3ab-1400f1527156","type":"ColumnDataSource"},"glyph":{"id":"c8906257-0219-4164-917b-98c38e97b93c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"93395b15-d3de-4911-925b-1d74e44cd714","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2616720e-66da-4b2d-a547-b7049b99a401","type":"ColumnDataSource"},"glyph":{"id":"02a06e30-5336-46b4-a398-0b717627c1eb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"11b3ce07-5dfa-48c4-8724-9b0bca28b68e","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"1430f150-72fb-429b-b005-f069befe9ddf","type":"Range1d"},{"attributes":{},"id":"bea7b2e4-509e-4b89-8982-f742ec7a9de5","type":"BasicTicker"},{"attributes":{},"id":"6bae6f58-2692-47a2-9fbb-008f0c6ae2d4","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"52f29aca-675f-482c-8d06-01423ce8dca9","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.551724137931036,18.77777777777778,17.4],"x":[21,19,19],"y":["Wednesday","Friday","Saturday"]}},"id":"d8086c5d-f660-49ca-a6c6-5e1f0724dc11","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"}},"id":"262197ea-3416-4e19-941c-387857abcd12","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.1,8.333333333333334,7.0],"x":[19,17,18],"y":["Wednesday","Thursday","Thursday"]}},"id":"b7f1464b-66a8-4969-a329-9021a6797d26","type":"ColumnDataSource"},{"attributes":{"child":{"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"},"title":"AA"},"id":"7646231c-b3ee-4290-a0ad-80b8f456bf10","type":"Panel"},{"attributes":{"data_source":{"id":"8aa65af3-c51a-4474-9a09-9ee00e4f0f0a","type":"ColumnDataSource"},"glyph":{"id":"7ed02562-bf9a-43b5-a1e9-1ac5ed0969aa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8ff18aa3-aeab-4989-99a3-8f13b32b6bba","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"}},"id":"3c3737a9-5251-4303-b9af-8b0eaa50fe7e","type":"SaveTool"},{"attributes":{"plot":{"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"}},"id":"82d21d64-4deb-4c6c-b3ca-5231053559ef","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d56dc459-4a11-4ce9-ad65-b5e4421ce124","type":"Rect"},{"attributes":{"child":{"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"d5a5cd70-bc49-419d-884b-9572cede6b1d","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.310344827586206,24.983050847457626],"x":[21,21],"y":["Saturday","Sunday"]}},"id":"58c91abd-15fd-4d80-871c-0115c7c7c4ce","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3f190f09-fd5a-4a9c-ac6b-a1f6d9c6df07","type":"ColumnDataSource"},"glyph":{"id":"52f29aca-675f-482c-8d06-01423ce8dca9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"93c53744-17e1-4e64-a6d1-ea2fae8b46e9","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3d870f95-4b8f-496e-9f0b-7125c2a069de","type":"ColumnDataSource"},"glyph":{"id":"9270b7fe-6a21-4f9b-8233-28a16ffa28f6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c2eeae51-a251-481d-9efe-bbc5dc124cd7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3154ed4d-38d8-48ff-bbdd-71f785185d71","type":"ColumnDataSource"},"glyph":{"id":"4d98a436-278c-4178-8772-d240e0d4c6c5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"46cf4c2b-fe3e-4a11-9360-983b60cc1830","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"0c6872b1-fae8-4a7b-9a48-acfeeb48014d","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"}},"id":"3ead396c-b447-43f0-860e-d65d321a5755","type":"SaveTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"35e80922-6f8e-45ff-86b6-c35f3066efbe","type":"BasicTickFormatter"},"plot":{"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"},"ticker":{"id":"ea489955-57bf-4462-9bb6-c442e4622f19","type":"BasicTicker"}},"id":"badd91d8-1bc8-4960-9173-3bbbfb9bbb19","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.551724137931036,18.77777777777778,17.4],"x":[21,19,19],"y":["Wednesday","Friday","Saturday"]}},"id":"2616720e-66da-4b2d-a547-b7049b99a401","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d3ff9b4f-47dd-48e8-9f3d-fdf3a0930a64","type":"ColumnDataSource"},"glyph":{"id":"fa1a58c9-1fa8-4d0f-a316-ca5fdfab5920","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"64707a47-8fbc-45d1-81f5-e3fbee7d1d86","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8906257-0219-4164-917b-98c38e97b93c","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"41fd4f29-eb53-44b1-986b-2866493134ea","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"}},"id":"78396ffa-eb41-4101-baa1-8af4d3ea4cda","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"893fee2d-13ac-4e18-9018-a22e8c11f60f","type":"Rect"},{"attributes":{"overlay":{"id":"41fd4f29-eb53-44b1-986b-2866493134ea","type":"BoxAnnotation"},"plot":{"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"}},"id":"8f9dca00-2f8d-4e90-a0b5-47bc5ac55b23","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ed02562-bf9a-43b5-a1e9-1ac5ed0969aa","type":"Rect"},{"attributes":{"data_source":{"id":"8bcea2b7-7704-48ce-9091-15b0a90c1075","type":"ColumnDataSource"},"glyph":{"id":"cdab6a64-6724-4f8f-b802-1a8fb07770f2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"63a74a6f-6b16-4e84-8075-6ad08133072f","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4746521a-e834-4db8-9ac1-c3044b564fb2","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,3.0,1.5,2.111111111111111,2.0,2.0,0.6],"x":[17,18,17,19,17,18,19],"y":["Tuesday","Tuesday","Wednesday","Thursday","Saturday","Sunday","Sunday"]}},"id":"8bcea2b7-7704-48ce-9091-15b0a90c1075","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0db562b3-25a9-4314-97b6-4c22a66ec6d3","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.826086956521738,13.65,16.25],"x":[21,21,18],"y":["Monday","Thursday","Friday"]}},"id":"0526099e-1b51-4b90-b9af-34f15e435396","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"ddfcda9b-0b7f-4df3-b0b3-53eab1349854","type":"LinearColorMapper"},"formatter":{"id":"b1b5ff38-64b6-49cc-8d6c-92a85772355f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"},"ticker":{"id":"315ded5e-dacc-4b73-a25e-fe5dea9be682","type":"BasicTicker"}},"id":"c670518b-6606-4d4b-888d-c879dc9be35a","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"02a06e30-5336-46b4-a398-0b717627c1eb","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"262197ea-3416-4e19-941c-387857abcd12","type":"PanTool"},{"id":"6dd9bff7-2faf-4a08-b76d-50fedddb1c52","type":"WheelZoomTool"},{"id":"e065a925-afd5-44ba-9833-ff36d6aeb613","type":"BoxZoomTool"},{"id":"3ead396c-b447-43f0-860e-d65d321a5755","type":"SaveTool"},{"id":"fe8382e8-c0a4-4a8c-8c8d-3e72df830031","type":"ResetTool"},{"id":"78396ffa-eb41-4101-baa1-8af4d3ea4cda","type":"HelpTool"}]},"id":"b75ffdfa-316a-43a9-841b-82968c6cf9d1","type":"Toolbar"},{"attributes":{},"id":"315ded5e-dacc-4b73-a25e-fe5dea9be682","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.333333333333332],"x":[17],"y":["Sunday"]}},"id":"8aa65af3-c51a-4474-9a09-9ee00e4f0f0a","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdab6a64-6724-4f8f-b802-1a8fb07770f2","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"149cde3c-c28d-4d5e-bacb-051cb3e91ae0","type":"Title"},{"attributes":{},"id":"ea489955-57bf-4462-9bb6-c442e4622f19","type":"BasicTicker"},{"attributes":{"callback":null,"end":23},"id":"5ef2566e-8a3d-480b-8691-0c062ca6d643","type":"Range1d"},{"attributes":{},"id":"b1b5ff38-64b6-49cc-8d6c-92a85772355f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"c6792fe5-5df9-416d-b385-198f10bb2316","type":"ColumnDataSource"},"glyph":{"id":"5e0bdc9a-c7d1-4287-8117-a94479ddb953","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"452ae05f-8eae-4fc0-aca7-a98d70071e2b","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"290d3995-db2a-4499-b482-cb89ba795392","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[17,18,21],"y":["Monday","Wednesday","Friday"]}},"id":"d3ff9b4f-47dd-48e8-9f3d-fdf3a0930a64","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0526099e-1b51-4b90-b9af-34f15e435396","type":"ColumnDataSource"},"glyph":{"id":"893fee2d-13ac-4e18-9018-a22e8c11f60f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"25734114-3cf1-42a9-95bc-89c12a44fb1b","type":"GlyphRenderer"},{"attributes":{},"id":"9c2e1dd5-b159-4f10-8b58-1d4ba068b5fe","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b3c4974-a6ad-46f8-956a-9949ad0bfb0b","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"d5a5cd70-bc49-419d-884b-9572cede6b1d","type":"Panel"},{"id":"7646231c-b3ee-4290-a0ad-80b8f456bf10","type":"Panel"}]},"id":"eed41390-7fcf-44cc-b940-68b57bce4f4d","type":"Tabs"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aeb86b61-4ced-4af2-979b-0994e5d9892e","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"82d21d64-4deb-4c6c-b3ca-5231053559ef","type":"PanTool"},{"id":"ea2f39b5-5a88-453a-a0a4-f578bdaa67e7","type":"WheelZoomTool"},{"id":"8f9dca00-2f8d-4e90-a0b5-47bc5ac55b23","type":"BoxZoomTool"},{"id":"3c3737a9-5251-4303-b9af-8b0eaa50fe7e","type":"SaveTool"},{"id":"a2c2b533-b3e4-413f-b323-84c14eaac93f","type":"ResetTool"},{"id":"019bf46a-abde-45c4-9085-3107c093bf48","type":"HelpTool"}]},"id":"f875346e-07a6-4224-96cb-5458b5d81618","type":"Toolbar"},{"attributes":{"plot":{"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"}},"id":"fe8382e8-c0a4-4a8c-8c8d-3e72df830031","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.333333333333332],"x":[17],"y":["Sunday"]}},"id":"3154ed4d-38d8-48ff-bbdd-71f785185d71","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.666666666666667,5.8,5.25,4.0,3.75],"x":[18,19,21,17,18],"y":["Monday","Monday","Tuesday","Friday","Saturday"]}},"id":"2e91b89b-1a41-42f5-b970-7eedb6f16aa1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b4f91593-d152-49ee-aa08-54b7df532225","type":"ColumnDataSource"},"glyph":{"id":"5b3c4974-a6ad-46f8-956a-9949ad0bfb0b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"60edb84b-8e4d-486c-b30a-366a8bf3aa9c","type":"GlyphRenderer"},{"attributes":{},"id":"5c64c8de-b371-4428-927b-dff088e185ba","type":"ToolEvents"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"d168921a-3e3b-4c36-acbc-b19345a60e70","type":"BasicTickFormatter"},"plot":{"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"},"ticker":{"id":"6bae6f58-2692-47a2-9fbb-008f0c6ae2d4","type":"BasicTicker"}},"id":"1fb7ccb5-059a-480e-9521-9aa8564090d8","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.666666666666667,5.8,5.25,4.0,3.75],"x":[18,19,21,17,18],"y":["Monday","Monday","Tuesday","Friday","Saturday"]}},"id":"c6792fe5-5df9-416d-b385-198f10bb2316","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"46085d9d-3b55-484a-b33d-b4a0e35a24d7","type":"Rect"},{"attributes":{},"id":"ddc85fa0-4a9e-4616-9cd0-8dbf16fbaa7e","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b02f7d7-1eb6-4ffa-a967-82994a4814e5","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.777777777777779],"x":[19],"y":["Tuesday"]}},"id":"cbf271b7-b665-4128-a622-4567c5434ca2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c74284e6-3594-472b-bf6d-9e3b65eb2213","type":"ColumnDataSource"},"glyph":{"id":"0d5908a0-40ed-4aa7-9381-3c18076c855c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"67bb8fa3-1754-4165-8538-bbfae635d23e","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"aeb86b61-4ced-4af2-979b-0994e5d9892e","type":"BoxAnnotation"},"plot":{"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"}},"id":"e065a925-afd5-44ba-9833-ff36d6aeb613","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.777777777777779],"x":[19],"y":["Tuesday"]}},"id":"ef966336-931d-4b80-8ba1-aacbf2ca4f5b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,3.0,1.5,2.111111111111111,2.0,2.0,0.6],"x":[17,18,17,19,17,18,19],"y":["Tuesday","Tuesday","Wednesday","Thursday","Saturday","Sunday","Sunday"]}},"id":"7dcc34f4-e788-4bc2-a3ab-1400f1527156","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[17,18,21],"y":["Monday","Wednesday","Friday"]}},"id":"b4f91593-d152-49ee-aa08-54b7df532225","type":"ColumnDataSource"},{"attributes":{},"id":"bddab0bb-6cef-4908-a035-8cc490a14758","type":"CategoricalTickFormatter"},{"attributes":{},"id":"dd66acaf-6e15-41b9-9dd4-f9f66e8febfc","type":"CategoricalTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"1fb7ccb5-059a-480e-9521-9aa8564090d8","type":"LinearAxis"}],"left":[{"id":"01d93dc4-e900-4392-aba2-9043ba143c43","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"41fd4f29-eb53-44b1-986b-2866493134ea","type":"BoxAnnotation"},{"id":"64707a47-8fbc-45d1-81f5-e3fbee7d1d86","type":"GlyphRenderer"},{"id":"c2eeae51-a251-481d-9efe-bbc5dc124cd7","type":"GlyphRenderer"},{"id":"8ff18aa3-aeab-4989-99a3-8f13b32b6bba","type":"GlyphRenderer"},{"id":"11b3ce07-5dfa-48c4-8724-9b0bca28b68e","type":"GlyphRenderer"},{"id":"25734114-3cf1-42a9-95bc-89c12a44fb1b","type":"GlyphRenderer"},{"id":"203e1553-4367-4b7e-bb09-687eec541bfd","type":"GlyphRenderer"},{"id":"aad6a8a1-8098-43fe-aa60-402d5b40fab9","type":"GlyphRenderer"},{"id":"452ae05f-8eae-4fc0-aca7-a98d70071e2b","type":"GlyphRenderer"},{"id":"63a74a6f-6b16-4e84-8075-6ad08133072f","type":"GlyphRenderer"},{"id":"1fb7ccb5-059a-480e-9521-9aa8564090d8","type":"LinearAxis"},{"id":"01d93dc4-e900-4392-aba2-9043ba143c43","type":"CategoricalAxis"},{"id":"ddca69d8-e24d-4b7f-b351-f456e4d46fd9","type":"ColorBar"}],"right":[{"id":"ddca69d8-e24d-4b7f-b351-f456e4d46fd9","type":"ColorBar"}],"title":{"id":"f5d18963-839f-4580-895a-7aa9548d8624","type":"Title"},"tool_events":{"id":"5c64c8de-b371-4428-927b-dff088e185ba","type":"ToolEvents"},"toolbar":{"id":"f875346e-07a6-4224-96cb-5458b5d81618","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"5ef2566e-8a3d-480b-8691-0c062ca6d643","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"22db35bd-2922-439f-a5ad-a1e23d6341c4","type":"FactorRange"}},"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"badd91d8-1bc8-4960-9173-3bbbfb9bbb19","type":"LinearAxis"}],"left":[{"id":"77a9f74f-2d47-4c34-bb31-b7fc9d5af662","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"aeb86b61-4ced-4af2-979b-0994e5d9892e","type":"BoxAnnotation"},{"id":"60edb84b-8e4d-486c-b30a-366a8bf3aa9c","type":"GlyphRenderer"},{"id":"49fe4248-4aec-448f-9d7a-e349b2fd38d0","type":"GlyphRenderer"},{"id":"46cf4c2b-fe3e-4a11-9360-983b60cc1830","type":"GlyphRenderer"},{"id":"a36a82a1-4d0e-4ee4-a461-a4806afecda7","type":"GlyphRenderer"},{"id":"93c53744-17e1-4e64-a6d1-ea2fae8b46e9","type":"GlyphRenderer"},{"id":"1260b6e8-924b-423f-82b1-d793fa98fa90","type":"GlyphRenderer"},{"id":"67bb8fa3-1754-4165-8538-bbfae635d23e","type":"GlyphRenderer"},{"id":"13d71411-fe5a-45bd-8a82-f7a4993d24cf","type":"GlyphRenderer"},{"id":"93395b15-d3de-4911-925b-1d74e44cd714","type":"GlyphRenderer"},{"id":"badd91d8-1bc8-4960-9173-3bbbfb9bbb19","type":"LinearAxis"},{"id":"77a9f74f-2d47-4c34-bb31-b7fc9d5af662","type":"CategoricalAxis"},{"id":"c670518b-6606-4d4b-888d-c879dc9be35a","type":"ColorBar"}],"right":[{"id":"c670518b-6606-4d4b-888d-c879dc9be35a","type":"ColorBar"}],"title":{"id":"149cde3c-c28d-4d5e-bacb-051cb3e91ae0","type":"Title"},"tool_events":{"id":"5b2a574a-bedd-4cc0-a046-cb9e6e87e3bf","type":"ToolEvents"},"toolbar":{"id":"b75ffdfa-316a-43a9-841b-82968c6cf9d1","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"1430f150-72fb-429b-b005-f069befe9ddf","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"290d3995-db2a-4499-b482-cb89ba795392","type":"FactorRange"}},"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"d8086c5d-f660-49ca-a6c6-5e1f0724dc11","type":"ColumnDataSource"},"glyph":{"id":"4746521a-e834-4db8-9ac1-c3044b564fb2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a36a82a1-4d0e-4ee4-a461-a4806afecda7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b7f1464b-66a8-4969-a329-9021a6797d26","type":"ColumnDataSource"},"glyph":{"id":"46085d9d-3b55-484a-b33d-b4a0e35a24d7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aad6a8a1-8098-43fe-aa60-402d5b40fab9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"}},"id":"ea2f39b5-5a88-453a-a0a4-f578bdaa67e7","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"58c91abd-15fd-4d80-871c-0115c7c7c4ce","type":"ColumnDataSource"},"glyph":{"id":"d56dc459-4a11-4ce9-ad65-b5e4421ce124","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"49fe4248-4aec-448f-9d7a-e349b2fd38d0","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"ddfcda9b-0b7f-4df3-b0b3-53eab1349854","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.826086956521738,13.65,16.25],"x":[21,21,18],"y":["Monday","Thursday","Friday"]}},"id":"3f190f09-fd5a-4a9c-ac6b-a1f6d9c6df07","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"0c6872b1-fae8-4a7b-9a48-acfeeb48014d","type":"LinearColorMapper"},"formatter":{"id":"9c2e1dd5-b159-4f10-8b58-1d4ba068b5fe","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"},"ticker":{"id":"bea7b2e4-509e-4b89-8982-f742ec7a9de5","type":"BasicTicker"}},"id":"ddca69d8-e24d-4b7f-b351-f456e4d46fd9","type":"ColorBar"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"bddab0bb-6cef-4908-a035-8cc490a14758","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"},"ticker":{"id":"4a3891f4-a90c-4cc3-8e69-7a08cf8a54df","type":"CategoricalTicker"}},"id":"77a9f74f-2d47-4c34-bb31-b7fc9d5af662","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4d98a436-278c-4178-8772-d240e0d4c6c5","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e0bdc9a-c7d1-4287-8117-a94479ddb953","type":"Rect"},{"attributes":{"data_source":{"id":"ef966336-931d-4b80-8ba1-aacbf2ca4f5b","type":"ColumnDataSource"},"glyph":{"id":"0db562b3-25a9-4314-97b6-4c22a66ec6d3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1260b6e8-924b-423f-82b1-d793fa98fa90","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"cbf271b7-b665-4128-a622-4567c5434ca2","type":"ColumnDataSource"},"glyph":{"id":"f8cff79a-4831-4078-8bb4-b5ca5641fd48","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"203e1553-4367-4b7e-bb09-687eec541bfd","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"}},"id":"a2c2b533-b3e4-413f-b323-84c14eaac93f","type":"ResetTool"},{"attributes":{},"id":"35e80922-6f8e-45ff-86b6-c35f3066efbe","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"American Airlines "},"id":"f5d18963-839f-4580-895a-7aa9548d8624","type":"Title"},{"attributes":{"data_source":{"id":"2e91b89b-1a41-42f5-b970-7eedb6f16aa1","type":"ColumnDataSource"},"glyph":{"id":"8b02f7d7-1eb6-4ffa-a967-82994a4814e5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"13d71411-fe5a-45bd-8a82-f7a4993d24cf","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa1a58c9-1fa8-4d0f-a316-ca5fdfab5920","type":"Rect"},{"attributes":{},"id":"d168921a-3e3b-4c36-acbc-b19345a60e70","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ea66cd07-a1ca-4ec3-b386-e89d9f695726","subtype":"Chart","type":"Plot"}},"id":"6dd9bff7-2faf-4a08-b76d-50fedddb1c52","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.310344827586206,24.983050847457626],"x":[21,21],"y":["Saturday","Sunday"]}},"id":"3d870f95-4b8f-496e-9f0b-7125c2a069de","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"dd66acaf-6e15-41b9-9dd4-f9f66e8febfc","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"129cda6b-f5f9-4fc3-a808-f3471b080038","subtype":"Chart","type":"Plot"},"ticker":{"id":"ddc85fa0-4a9e-4616-9cd0-8dbf16fbaa7e","type":"CategoricalTicker"}},"id":"01d93dc4-e900-4392-aba2-9043ba143c43","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.1,8.333333333333334,7.0],"x":[19,17,18],"y":["Wednesday","Thursday","Thursday"]}},"id":"c74284e6-3594-472b-bf6d-9e3b65eb2213","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8cff79a-4831-4078-8bb4-b5ca5641fd48","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9270b7fe-6a21-4f9b-8233-28a16ffa28f6","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d5908a0-40ed-4aa7-9381-3c18076c855c","type":"Rect"}],"root_ids":["eed41390-7fcf-44cc-b940-68b57bce4f4d"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"15b6af85-03a6-460b-8b74-d0fb02aa2e0d","elementid":"58bc7abd-1caa-469f-9938-27e9c0b042d4","modelid":"eed41390-7fcf-44cc-b940-68b57bce4f4d"}];
                  
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