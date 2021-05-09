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
      };var element = document.getElementById("545b9f0c-1a8d-4a9e-aa7e-c131202541b6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '545b9f0c-1a8d-4a9e-aa7e-c131202541b6' but no matching script tag was found. ")
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
                  var docs_json = {"a99fd986-aa2e-47cc-b1fe-3076db9c2a2d":{"roots":{"references":[{"attributes":{"data_source":{"id":"e05608d4-e83a-422d-923a-7bc439bd453f","type":"ColumnDataSource"},"glyph":{"id":"168081a2-e54d-4ee1-ad53-709bd3ebc652","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f35cd7c8-f02e-4bc1-850e-ec5b56fa93d9","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7bdcea93-9e98-46cd-b28c-f764d51cf09e","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"e9910076-cef3-4182-92d4-cfdd560e0998","type":"ColumnDataSource"},"glyph":{"id":"6407d208-99df-4f97-9052-4500cba42f34","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9ee61f3-e487-4836-be52-44683654a8fa","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"35596fcf-6d60-40b5-a5a1-ddbeeeba466b","type":"ColumnDataSource"},"glyph":{"id":"ddf26972-4279-452f-8fcb-b034fe1c4d60","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a6c2d89b-15a2-489f-ab07-b8ede9faa644","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8728f7b3-f06d-42a7-89e9-25899d54e3a8","type":"ColumnDataSource"},"glyph":{"id":"505810b1-f065-48b6-9658-1bc4a23c5e52","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"df608bc8-c227-4ef6-8ed0-d385b49c0ae3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.2,22.08695652173913,22.4,21.416666666666668],"x":[20,21,20,22],"y":["Tuesday","Tuesday","Thursday","Friday"]}},"id":"5592b1b4-1aa8-428e-9609-026a6ccbd8ce","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0],"x":[20,21,20,21],"y":["Monday","Friday","Sunday","Sunday"]}},"id":"2e147ee9-35e9-422e-88b9-6c7c7c629ae1","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"7bdcea93-9e98-46cd-b28c-f764d51cf09e","type":"BoxAnnotation"},"plot":{"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"}},"id":"eee3bb92-00c7-4f73-a971-65f7c1e26615","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"}},"id":"274e883e-9870-427e-8676-0b646ceebf22","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa369e75-c8df-4b2d-9968-3e9f19d29402","type":"Rect"},{"attributes":{"plot":{"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"}},"id":"b5e14209-231c-4b1f-8596-7c7786d4ef19","type":"PanTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"f86b90fb-7145-4576-a1b5-77e59ff1924c","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.568627450980392,11.416666666666666,10.726415094339623,11.2,11.923076923076923],"x":[23,22,23,20,22],"y":["Monday","Tuesday","Thursday","Saturday","Saturday"]}},"id":"187e2f02-321e-4660-8c79-439e5cd39ffd","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"e2f77628-e06a-42c3-bc64-b14165327cde","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"}},"id":"db761c99-7505-4dcb-be73-cc1f3d19a562","type":"SaveTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"be27ddea-c689-4129-a86d-84f066f5acf2","type":"LinearAxis"}],"left":[{"id":"3cbc8d4a-3dce-4dfe-b286-0b52f37403fa","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"7bdcea93-9e98-46cd-b28c-f764d51cf09e","type":"BoxAnnotation"},{"id":"39fe8f5f-f852-4ecc-86b1-d98f67bd3e33","type":"GlyphRenderer"},{"id":"d9ee61f3-e487-4836-be52-44683654a8fa","type":"GlyphRenderer"},{"id":"65e0c0d0-9870-432c-b545-873ed87706c0","type":"GlyphRenderer"},{"id":"dd5a2954-8e8b-41a0-8261-8239bab5a71b","type":"GlyphRenderer"},{"id":"941e063e-abb7-429c-a523-12f4b8a2d2d9","type":"GlyphRenderer"},{"id":"a5d3f416-7f3a-4d4a-baef-fa55e3337bf0","type":"GlyphRenderer"},{"id":"53a77311-5670-4d92-ab0f-a2628a11b553","type":"GlyphRenderer"},{"id":"042d8620-82fd-4956-8f03-c325904218d1","type":"GlyphRenderer"},{"id":"c13d902a-1027-42d3-9294-3f60fc628bda","type":"GlyphRenderer"},{"id":"be27ddea-c689-4129-a86d-84f066f5acf2","type":"LinearAxis"},{"id":"3cbc8d4a-3dce-4dfe-b286-0b52f37403fa","type":"CategoricalAxis"},{"id":"94aa8dae-83bd-44a2-8271-58a6e19fca9f","type":"ColorBar"}],"right":[{"id":"94aa8dae-83bd-44a2-8271-58a6e19fca9f","type":"ColorBar"}],"title":{"id":"f86b90fb-7145-4576-a1b5-77e59ff1924c","type":"Title"},"tool_events":{"id":"1fc4a7fd-d6b3-4027-8225-4ef58c727150","type":"ToolEvents"},"toolbar":{"id":"12897a9f-e977-44c0-b926-75691a0e9249","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"a5463cef-bf4b-4cce-b6a8-2323c12af773","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"3e314bf9-3995-40e6-86fb-73928739ff21","type":"FactorRange"}},"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"1b8c78ca-49f3-4838-9050-dd3dcc4842bd","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":23},"id":"77570354-b4cb-4b11-a86b-1674c4f996d6","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6407d208-99df-4f97-9052-4500cba42f34","type":"Rect"},{"attributes":{},"id":"d8c41c37-aef4-4673-b1a6-96f786abcc8a","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.625],"x":[21],"y":["Thursday"]}},"id":"e9910076-cef3-4182-92d4-cfdd560e0998","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[3.25,2.0,2.25,0.3333333333333333,0.0,0.5],"x":[1,20,22,1,1,1],"y":["Monday","Wednesday","Wednesday","Thursday","Saturday","Sunday"]}},"id":"d65cb5c8-c4ba-4ff8-a8e1-516384ded7ab","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"785eb1ff-4d75-4d6c-a1de-047a242231b9","type":"BasicTickFormatter"},"plot":{"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"},"ticker":{"id":"966053df-b324-48a2-b5b4-00a75030f5ce","type":"BasicTicker"}},"id":"03c7705e-0ac0-42f4-b116-74cb8b4494d9","type":"LinearAxis"},{"attributes":{"data_source":{"id":"33548631-44df-4400-97a4-2adf53d2812b","type":"ColumnDataSource"},"glyph":{"id":"2b33be90-24be-4980-b066-33acd2d98be1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"774fc625-87b6-4809-a3a0-465296c57dd6","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"fa12daf0-80a1-4657-b68e-2f2934110271","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"},"ticker":{"id":"699ef89b-9555-4f97-91bb-3fc5c6f0d74a","type":"CategoricalTicker"}},"id":"3cbc8d4a-3dce-4dfe-b286-0b52f37403fa","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"641a1309-d017-41a5-9044-7586d7d505bb","type":"PanTool"},{"id":"64c77e48-503b-46dd-b93b-56f1ce4c800e","type":"WheelZoomTool"},{"id":"f1ebde1e-7132-4fbd-9ae7-7885d51ae881","type":"BoxZoomTool"},{"id":"db761c99-7505-4dcb-be73-cc1f3d19a562","type":"SaveTool"},{"id":"ce307486-63db-42cf-8f5c-b398e74dfa30","type":"ResetTool"},{"id":"70c87576-02a1-4125-a9cb-3757a558e068","type":"HelpTool"}]},"id":"ceb95fcf-5018-4114-b3d1-7fdf182db5f8","type":"Toolbar"},{"attributes":{},"id":"f1d5fff2-8df2-4b8e-8aa2-411f35cfb6ce","type":"BasicTicker"},{"attributes":{"data_source":{"id":"fa17b83b-604e-4ac5-ab18-17de014368a4","type":"ColumnDataSource"},"glyph":{"id":"2329bb73-ccd3-43d7-a96e-c07b0e2d5a27","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c13d902a-1027-42d3-9294-3f60fc628bda","type":"GlyphRenderer"},{"attributes":{"child":{"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"69e64167-0c54-4796-8f7e-5de858a8c647","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.28,15.166666666666666,14.088235294117647,15.875],"x":[21,22,23,22],"y":["Monday","Monday","Wednesday","Sunday"]}},"id":"8728f7b3-f06d-42a7-89e9-25899d54e3a8","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4699afc-f5cf-4c03-97a5-2bef2efb76dc","type":"Rect"},{"attributes":{"color_mapper":{"id":"1b8c78ca-49f3-4838-9050-dd3dcc4842bd","type":"LinearColorMapper"},"formatter":{"id":"39edf40f-11ab-4546-b961-bcbf51c856ac","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"},"ticker":{"id":"a93f733a-6230-428d-9fa7-5a2ebccf7885","type":"BasicTicker"}},"id":"927a1faa-aaa3-4e0f-978a-6e961e2aacf1","type":"ColorBar"},{"attributes":{},"id":"39edf40f-11ab-4546-b961-bcbf51c856ac","type":"BasicTickFormatter"},{"attributes":{"color_mapper":{"id":"e2f77628-e06a-42c3-bc64-b14165327cde","type":"LinearColorMapper"},"formatter":{"id":"bc45a4db-1b1e-4b46-857c-8676c516aa03","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"},"ticker":{"id":"f1d5fff2-8df2-4b8e-8aa2-411f35cfb6ce","type":"BasicTicker"}},"id":"94aa8dae-83bd-44a2-8271-58a6e19fca9f","type":"ColorBar"},{"attributes":{"data_source":{"id":"187e2f02-321e-4660-8c79-439e5cd39ffd","type":"ColumnDataSource"},"glyph":{"id":"95498e19-3b49-4ea4-abd3-57609bc91f8d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a5d3f416-7f3a-4d4a-baef-fa55e3337bf0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e175ca34-0ce5-4e18-a81d-0360b2964c2f","type":"ColumnDataSource"},"glyph":{"id":"34b18906-390a-4301-a66d-f56c8e24c50c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"39b81c82-7030-438e-a7e7-848de84ccdff","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"}},"id":"ccea7630-a9df-4d54-af64-d21e72219fb7","type":"ResetTool"},{"attributes":{"callback":null,"end":23},"id":"a5463cef-bf4b-4cce-b6a8-2323c12af773","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.5],"x":[1],"y":["Tuesday"]}},"id":"c7cf0328-e924-42eb-82c8-8c02cccd89ae","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.568627450980392,11.416666666666666,10.726415094339623,11.2,11.923076923076923],"x":[23,22,23,20,22],"y":["Monday","Tuesday","Thursday","Saturday","Saturday"]}},"id":"f5a19eea-dc2f-43da-bfd7-f5a198c048da","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"cc0056c2-1714-4889-adfb-8ab8c3e850d6","type":"ColumnDataSource"},"glyph":{"id":"1aa267ea-3f92-4a80-904b-abc285957646","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"941e063e-abb7-429c-a523-12f4b8a2d2d9","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"3da8bcf7-01d5-4d73-bb63-ad3417929aeb","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"},"ticker":{"id":"d8c41c37-aef4-4673-b1a6-96f786abcc8a","type":"CategoricalTicker"}},"id":"a069fd82-4926-4926-8795-d093c4726d99","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.5],"x":[1],"y":["Tuesday"]}},"id":"45678252-e58e-4eb7-9156-e627a128cf2f","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"American Airlines "},"id":"ed010a2c-6411-4cad-a711-7e1823c67a1b","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3df21126-0195-4e5f-a728-24704f42fde5","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3bab1519-5908-480d-9efc-f15f97a012f5","type":"Rect"},{"attributes":{},"id":"966053df-b324-48a2-b5b4-00a75030f5ce","type":"BasicTicker"},{"attributes":{},"id":"5a45805b-9583-4edc-932e-757a1ccd7530","type":"ToolEvents"},{"attributes":{},"id":"bc45a4db-1b1e-4b46-857c-8676c516aa03","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.808988764044944,3.5,6.2,6.583333333333333],"x":[23,1,20,21],"y":["Tuesday","Friday","Friday","Saturday"]}},"id":"e05608d4-e83a-422d-923a-7bc439bd453f","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"34b18906-390a-4301-a66d-f56c8e24c50c","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[3.25,2.0,2.25,0.3333333333333333,0.0,0.5],"x":[1,20,22,1,1,1],"y":["Monday","Wednesday","Wednesday","Thursday","Saturday","Sunday"]}},"id":"fa17b83b-604e-4ac5-ab18-17de014368a4","type":"ColumnDataSource"},{"attributes":{},"id":"fa12daf0-80a1-4657-b68e-2f2934110271","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"}},"id":"64c77e48-503b-46dd-b93b-56f1ce4c800e","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"2e147ee9-35e9-422e-88b9-6c7c7c629ae1","type":"ColumnDataSource"},"glyph":{"id":"3bab1519-5908-480d-9efc-f15f97a012f5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"39fe8f5f-f852-4ecc-86b1-d98f67bd3e33","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"31b743a9-a91a-4514-9921-04d2363b36da","type":"BoxAnnotation"},"plot":{"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"}},"id":"f1ebde1e-7132-4fbd-9ae7-7885d51ae881","type":"BoxZoomTool"},{"attributes":{},"id":"699ef89b-9555-4f97-91bb-3fc5c6f0d74a","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"98e94716-b06f-496a-9383-d948a0f1d723","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b33be90-24be-4980-b066-33acd2d98be1","type":"Rect"},{"attributes":{"data_source":{"id":"d65cb5c8-c4ba-4ff8-a8e1-516384ded7ab","type":"ColumnDataSource"},"glyph":{"id":"f82c0501-1edc-45a4-afc9-e5ad3d6b32ae","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d484e054-a72c-4418-95f3-d5f3ffa113ed","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c7cf0328-e924-42eb-82c8-8c02cccd89ae","type":"ColumnDataSource"},"glyph":{"id":"aa369e75-c8df-4b2d-9968-3e9f19d29402","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dd5a2954-8e8b-41a0-8261-8239bab5a71b","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5e14209-231c-4b1f-8596-7c7786d4ef19","type":"PanTool"},{"id":"274e883e-9870-427e-8676-0b646ceebf22","type":"WheelZoomTool"},{"id":"eee3bb92-00c7-4f73-a971-65f7c1e26615","type":"BoxZoomTool"},{"id":"b4de4b35-43a6-4cb2-8481-8311cdd6c6bb","type":"SaveTool"},{"id":"ccea7630-a9df-4d54-af64-d21e72219fb7","type":"ResetTool"},{"id":"5830e281-3e04-432e-9b9f-829e47421257","type":"HelpTool"}]},"id":"12897a9f-e977-44c0-b926-75691a0e9249","type":"Toolbar"},{"attributes":{},"id":"cfc4d1a2-01a3-43a9-b6da-5bfb0e4e69bb","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"3e314bf9-3995-40e6-86fb-73928739ff21","type":"FactorRange"},{"attributes":{"plot":{"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"}},"id":"ce307486-63db-42cf-8f5c-b398e74dfa30","type":"ResetTool"},{"attributes":{"data_source":{"id":"5592b1b4-1aa8-428e-9609-026a6ccbd8ce","type":"ColumnDataSource"},"glyph":{"id":"f38b416d-1d18-466c-be00-a55b9f642976","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"65e0c0d0-9870-432c-b545-873ed87706c0","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"505810b1-f065-48b6-9658-1bc4a23c5e52","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa5e4ef3-b457-4995-9124-c5ac06be8ce4","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"168081a2-e54d-4ee1-ad53-709bd3ebc652","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ddf26972-4279-452f-8fcb-b034fe1c4d60","type":"Rect"},{"attributes":{"plot":{"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"}},"id":"b4de4b35-43a6-4cb2-8481-8311cdd6c6bb","type":"SaveTool"},{"attributes":{},"id":"a93f733a-6230-428d-9fa7-5a2ebccf7885","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.0,8.0,7.173913043478261,7.221153846153846,9.893203883495145,8.19811320754717],"x":[1,21,22,23,23,23],"y":["Wednesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},"id":"33548631-44df-4400-97a4-2adf53d2812b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.625],"x":[21],"y":["Thursday"]}},"id":"35596fcf-6d60-40b5-a5a1-ddbeeeba466b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"}},"id":"70c87576-02a1-4125-a9cb-3757a558e068","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.808988764044944,3.5,6.2,6.583333333333333],"x":[23,1,20,21],"y":["Tuesday","Friday","Friday","Saturday"]}},"id":"d24c5554-6690-45a0-bea3-643c75dcb1da","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"45678252-e58e-4eb7-9156-e627a128cf2f","type":"ColumnDataSource"},"glyph":{"id":"a4699afc-f5cf-4c03-97a5-2bef2efb76dc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c1747f0c-dab1-446c-93a2-60b44ae76e8e","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"03c7705e-0ac0-42f4-b116-74cb8b4494d9","type":"LinearAxis"}],"left":[{"id":"a069fd82-4926-4926-8795-d093c4726d99","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"31b743a9-a91a-4514-9921-04d2363b36da","type":"BoxAnnotation"},{"id":"5072ad8b-f966-439a-b400-41a207d5da8d","type":"GlyphRenderer"},{"id":"a6c2d89b-15a2-489f-ab07-b8ede9faa644","type":"GlyphRenderer"},{"id":"39b81c82-7030-438e-a7e7-848de84ccdff","type":"GlyphRenderer"},{"id":"c1747f0c-dab1-446c-93a2-60b44ae76e8e","type":"GlyphRenderer"},{"id":"df608bc8-c227-4ef6-8ed0-d385b49c0ae3","type":"GlyphRenderer"},{"id":"7deb7513-9b97-4b94-8776-51939deec20a","type":"GlyphRenderer"},{"id":"774fc625-87b6-4809-a3a0-465296c57dd6","type":"GlyphRenderer"},{"id":"f35cd7c8-f02e-4bc1-850e-ec5b56fa93d9","type":"GlyphRenderer"},{"id":"d484e054-a72c-4418-95f3-d5f3ffa113ed","type":"GlyphRenderer"},{"id":"03c7705e-0ac0-42f4-b116-74cb8b4494d9","type":"LinearAxis"},{"id":"a069fd82-4926-4926-8795-d093c4726d99","type":"CategoricalAxis"},{"id":"927a1faa-aaa3-4e0f-978a-6e961e2aacf1","type":"ColorBar"}],"right":[{"id":"927a1faa-aaa3-4e0f-978a-6e961e2aacf1","type":"ColorBar"}],"title":{"id":"ed010a2c-6411-4cad-a711-7e1823c67a1b","type":"Title"},"tool_events":{"id":"5a45805b-9583-4edc-932e-757a1ccd7530","type":"ToolEvents"},"toolbar":{"id":"ceb95fcf-5018-4114-b3d1-7fdf182db5f8","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"77570354-b4cb-4b11-a86b-1674c4f996d6","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"f40b6231-b1fc-40e6-b21f-705a0b6f35d0","type":"FactorRange"}},"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"f40b6231-b1fc-40e6-b21f-705a0b6f35d0","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1aa267ea-3f92-4a80-904b-abc285957646","type":"Rect"},{"attributes":{"data_source":{"id":"d24c5554-6690-45a0-bea3-643c75dcb1da","type":"ColumnDataSource"},"glyph":{"id":"3df21126-0195-4e5f-a728-24704f42fde5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"042d8620-82fd-4956-8f03-c325904218d1","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"2799446f-9b15-4c08-ba70-a78f235a3805","type":"BasicTickFormatter"},"plot":{"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"},"ticker":{"id":"cfc4d1a2-01a3-43a9-b6da-5bfb0e4e69bb","type":"BasicTicker"}},"id":"be27ddea-c689-4129-a86d-84f066f5acf2","type":"LinearAxis"},{"attributes":{"child":{"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"},"title":"AA"},"id":"610f96e6-c31d-414b-ba2d-9d7e19a185cf","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.0,8.0,7.173913043478261,7.221153846153846,9.893203883495145,8.19811320754717],"x":[1,21,22,23,23,23],"y":["Wednesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},"id":"3e3f970f-4127-432d-bec1-d068ee37e159","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bcdc2652-6082-4c5e-9965-a115516ba93a","subtype":"Chart","type":"Plot"}},"id":"5830e281-3e04-432e-9b9f-829e47421257","type":"HelpTool"},{"attributes":{"plot":{"id":"bdc75949-1cd5-4565-a21b-77f22393da73","subtype":"Chart","type":"Plot"}},"id":"641a1309-d017-41a5-9044-7586d7d505bb","type":"PanTool"},{"attributes":{},"id":"785eb1ff-4d75-4d6c-a1de-047a242231b9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f5a19eea-dc2f-43da-bfd7-f5a198c048da","type":"ColumnDataSource"},"glyph":{"id":"ccd351e6-766e-40a6-ba95-24c7d6325427","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7deb7513-9b97-4b94-8776-51939deec20a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0],"x":[20,21,20,21],"y":["Monday","Friday","Sunday","Sunday"]}},"id":"f8aedbdd-0cc6-423d-9442-a0e4784bd3e5","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ccd351e6-766e-40a6-ba95-24c7d6325427","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f38b416d-1d18-466c-be00-a55b9f642976","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"95498e19-3b49-4ea4-abd3-57609bc91f8d","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.28,15.166666666666666,14.088235294117647,15.875],"x":[21,22,23,22],"y":["Monday","Monday","Wednesday","Sunday"]}},"id":"cc0056c2-1714-4889-adfb-8ab8c3e850d6","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.2,22.08695652173913,22.4,21.416666666666668],"x":[20,21,20,22],"y":["Tuesday","Tuesday","Thursday","Friday"]}},"id":"e175ca34-0ce5-4e18-a81d-0360b2964c2f","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f82c0501-1edc-45a4-afc9-e5ad3d6b32ae","type":"Rect"},{"attributes":{"data_source":{"id":"3e3f970f-4127-432d-bec1-d068ee37e159","type":"ColumnDataSource"},"glyph":{"id":"fa5e4ef3-b457-4995-9124-c5ac06be8ce4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"53a77311-5670-4d92-ab0f-a2628a11b553","type":"GlyphRenderer"},{"attributes":{},"id":"2799446f-9b15-4c08-ba70-a78f235a3805","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2329bb73-ccd3-43d7-a96e-c07b0e2d5a27","type":"Rect"},{"attributes":{},"id":"1fc4a7fd-d6b3-4027-8225-4ef58c727150","type":"ToolEvents"},{"attributes":{"callback":null,"tabs":[{"id":"69e64167-0c54-4796-8f7e-5de858a8c647","type":"Panel"},{"id":"610f96e6-c31d-414b-ba2d-9d7e19a185cf","type":"Panel"}]},"id":"b6b0f6cc-f9c1-44c3-b46d-4df8389eae1d","type":"Tabs"},{"attributes":{},"id":"3da8bcf7-01d5-4d73-bb63-ad3417929aeb","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"31b743a9-a91a-4514-9921-04d2363b36da","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"f8aedbdd-0cc6-423d-9442-a0e4784bd3e5","type":"ColumnDataSource"},"glyph":{"id":"98e94716-b06f-496a-9383-d948a0f1d723","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5072ad8b-f966-439a-b400-41a207d5da8d","type":"GlyphRenderer"}],"root_ids":["b6b0f6cc-f9c1-44c3-b46d-4df8389eae1d"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"a99fd986-aa2e-47cc-b1fe-3076db9c2a2d","elementid":"545b9f0c-1a8d-4a9e-aa7e-c131202541b6","modelid":"b6b0f6cc-f9c1-44c3-b46d-4df8389eae1d"}];
                  
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