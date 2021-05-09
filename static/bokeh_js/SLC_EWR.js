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
      };var element = document.getElementById("3d3acd09-4b6e-4b5d-bc7c-630017d51795");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3d3acd09-4b6e-4b5d-bc7c-630017d51795' but no matching script tag was found. ")
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
                  var docs_json = {"a7a2ad73-1a25-4c9f-b966-27ed2585e4ff":{"roots":{"references":[{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e54eac36-e32b-4f33-8cad-44826fac8756","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"},"ticker":{"id":"3b39989a-89af-4454-b8b1-1b8a27411a21","type":"CategoricalTicker"}},"id":"fb5865a0-e373-4cf6-94e3-d69365a76e2d","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"}},"id":"864ce3cb-ba6d-42b7-8655-9ac214423f4c","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"19f4a080-b2e1-4eb6-9f5f-851259375e07","type":"FactorRange"},{"attributes":{},"id":"e6929658-989c-4306-a1c3-1e4888ec80b5","type":"BasicTicker"},{"attributes":{"plot":{"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"}},"id":"ea086760-ba46-4354-a135-1e859a502045","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[17,16,17],"y":["Monday","Tuesday","Tuesday"]}},"id":"a693a2ce-2d70-455e-aeac-5ddc641d265e","type":"ColumnDataSource"},{"attributes":{},"id":"dafce172-b02d-4c2c-aa92-0894b6a9f68a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[17,16,17],"y":["Monday","Tuesday","Tuesday"]}},"id":"9749c3ec-6fa4-4430-a39f-bd1c1e4c9c34","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e7dc43a1-3d3b-4077-8c06-63fa06607d1c","type":"LinearAxis"}],"left":[{"id":"a46e3b02-9798-46eb-ab99-49202694906e","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"353b69af-78a4-4507-8bd9-6b831c410607","type":"BoxAnnotation"},{"id":"f96ecfc2-2ec7-40f3-80e4-8e89a81e4020","type":"GlyphRenderer"},{"id":"083ffea3-9aa3-430e-80c9-04a2307d5d0b","type":"GlyphRenderer"},{"id":"cb14bec0-8e21-46ad-b147-681f07a31724","type":"GlyphRenderer"},{"id":"3e466834-928c-4717-8b9b-5a18d1f57cbc","type":"GlyphRenderer"},{"id":"9ef6a143-94cc-4188-b573-a35a9b6475eb","type":"GlyphRenderer"},{"id":"38d61cbf-1296-4cba-aa8c-217f268935ec","type":"GlyphRenderer"},{"id":"1d87e388-7c74-4e42-8c52-cdd91c7dc7d2","type":"GlyphRenderer"},{"id":"e7dc43a1-3d3b-4077-8c06-63fa06607d1c","type":"LinearAxis"},{"id":"a46e3b02-9798-46eb-ab99-49202694906e","type":"CategoricalAxis"},{"id":"8e6da329-2b22-41ca-a440-7aee53c652a1","type":"ColorBar"}],"right":[{"id":"8e6da329-2b22-41ca-a440-7aee53c652a1","type":"ColorBar"}],"title":{"id":"51b4ada8-db27-4d00-80cc-d9b03ca4d363","type":"Title"},"tool_events":{"id":"3d71586c-f459-4255-9d60-c9130b4059dd","type":"ToolEvents"},"toolbar":{"id":"6976c712-5dc6-46c4-bc15-f0a2baffa3bd","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"4fec7850-3315-4f02-bb76-6f5b99eae461","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"f078d10a-90ed-44ff-8272-f60a4999c5bb","type":"FactorRange"}},"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"end":23},"id":"4fec7850-3315-4f02-bb76-6f5b99eae461","type":"Range1d"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"f91c2e44-2ed7-4eea-96aa-63370b8bcf3c","type":"LinearColorMapper"},{"attributes":{},"id":"3d71586c-f459-4255-9d60-c9130b4059dd","type":"ToolEvents"},{"attributes":{"data_source":{"id":"e4f9ea5a-888b-4e66-b64b-44d2f26f8d31","type":"ColumnDataSource"},"glyph":{"id":"fc573fb0-3bc9-44f9-8c0a-c1fcf58d88e1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1d87e388-7c74-4e42-8c52-cdd91c7dc7d2","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b7336d8-0c08-4122-a3a5-84b3c67b3694","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"08de28d6-d14b-4449-b66d-94e93d9fdbd6","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a67c0f8-d819-473a-b587-2f02002fcbb0","type":"Rect"},{"attributes":{},"id":"e324bfea-00cf-4c7f-8146-a4b5fbafa66d","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"5548be86-8994-4e6a-a85d-a6fc35030a4d","type":"ColumnDataSource"},"glyph":{"id":"3b984caa-056f-49a3-8948-2c57c727979d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"908aa118-4b1b-4f93-91a8-97f4a084deaf","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"573beeaa-ae97-41ca-9b26-cf471c27d6ab","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"df15dde5-dca6-4c8b-9549-0c1193ab020e","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"f078d10a-90ed-44ff-8272-f60a4999c5bb","type":"FactorRange"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f4c0a03a-73bd-452e-afe9-d89e60891992","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f09f5914-142b-459a-beb7-ba0b20a24094","type":"PanTool"},{"id":"0db273d4-ce93-4e75-82e2-e7721f1e6520","type":"WheelZoomTool"},{"id":"796748e2-005f-49c7-a69d-2c77fa10df7a","type":"BoxZoomTool"},{"id":"ea086760-ba46-4354-a135-1e859a502045","type":"SaveTool"},{"id":"864ce3cb-ba6d-42b7-8655-9ac214423f4c","type":"ResetTool"},{"id":"cfed69a4-4a59-4991-b300-c7f06b75fb77","type":"HelpTool"}]},"id":"6976c712-5dc6-46c4-bc15-f0a2baffa3bd","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f50e9d84-5ae4-449c-ac14-bb9f74a5db06","type":"Rect"},{"attributes":{"data_source":{"id":"9749c3ec-6fa4-4430-a39f-bd1c1e4c9c34","type":"ColumnDataSource"},"glyph":{"id":"1a67c0f8-d819-473a-b587-2f02002fcbb0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8dd6fd46-f7e8-46e8-a3ae-1ec958354833","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"}},"id":"cfed69a4-4a59-4991-b300-c7f06b75fb77","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.392857142857142,9.928571428571429,9.166666666666666,6.857142857142857,8.95],"x":[9,10,10,17,10],"y":["Monday","Tuesday","Wednesday","Saturday","Sunday"]}},"id":"5548be86-8994-4e6a-a85d-a6fc35030a4d","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc573fb0-3bc9-44f9-8c0a-c1fcf58d88e1","type":"Rect"},{"attributes":{"data_source":{"id":"a693a2ce-2d70-455e-aeac-5ddc641d265e","type":"ColumnDataSource"},"glyph":{"id":"3e9e46f5-14a1-48cd-bf97-f4e6a3dd8f63","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f96ecfc2-2ec7-40f3-80e4-8e89a81e4020","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e324bfea-00cf-4c7f-8146-a4b5fbafa66d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"},"ticker":{"id":"b98ce9ec-a1b5-41e0-be2f-4008000c431e","type":"CategoricalTicker"}},"id":"a46e3b02-9798-46eb-ab99-49202694906e","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"ee11eb0a-36fe-474b-87ec-535ce31ca4e7","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.83050847457627,18.866666666666667,20.0],"x":[9,10,17],"y":["Tuesday","Thursday","Friday"]}},"id":"2746c9c9-dc95-48ab-bd3f-9fdab150c217","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b984caa-056f-49a3-8948-2c57c727979d","type":"Rect"},{"attributes":{},"id":"6d418ffe-179e-40a8-8d14-a86807e7f216","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d65347a3-caf0-4ab3-a6eb-65f4c2b6e798","type":"Rect"},{"attributes":{"data_source":{"id":"99b38a4a-6e25-4923-8053-13e89eaae102","type":"ColumnDataSource"},"glyph":{"id":"08de28d6-d14b-4449-b66d-94e93d9fdbd6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b0409dd1-4b3e-401c-8321-5da6dbc99a31","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"}},"id":"0db273d4-ce93-4e75-82e2-e7721f1e6520","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"353b69af-78a4-4507-8bd9-6b831c410607","type":"BoxAnnotation"},{"attributes":{},"id":"6c66d98e-9685-4a05-8fa7-057cbae25d80","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"6c66d98e-9685-4a05-8fa7-057cbae25d80","type":"BasicTickFormatter"},"plot":{"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"},"ticker":{"id":"e6929658-989c-4306-a1c3-1e4888ec80b5","type":"BasicTicker"}},"id":"9b17b7f6-e1d9-470c-ab59-2d08085c6c70","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.608695652173912,10.075757575757576,12.75,12.185185185185185,12.175824175824175],"x":[10,9,17,9,10],"y":["Monday","Wednesday","Wednesday","Friday","Friday"]}},"id":"bb3b2dc7-2b84-460e-9628-8ee910810c06","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"988958d1-d8db-4fcc-8ad0-7fd081e1a2ac","type":"BasicTickFormatter"},"plot":{"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"},"ticker":{"id":"f645ed74-4577-4b10-97d6-5a178c9d0f07","type":"BasicTicker"}},"id":"e7dc43a1-3d3b-4077-8c06-63fa06607d1c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.608695652173912,10.075757575757576,12.75,12.185185185185185,12.175824175824175],"x":[10,9,17,9,10],"y":["Monday","Wednesday","Wednesday","Friday","Friday"]}},"id":"40fa3d36-0590-49a1-8a39-add7aeb1a5ce","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a6612bef-765a-40b5-b3b0-8581f38d76b4","type":"ColumnDataSource"},"glyph":{"id":"0b7336d8-0c08-4122-a3a5-84b3c67b3694","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"083ffea3-9aa3-430e-80c9-04a2307d5d0b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"40fa3d36-0590-49a1-8a39-add7aeb1a5ce","type":"ColumnDataSource"},"glyph":{"id":"573beeaa-ae97-41ca-9b26-cf471c27d6ab","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3e466834-928c-4717-8b9b-5a18d1f57cbc","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.392857142857142,9.928571428571429,9.166666666666666,6.857142857142857,8.95],"x":[9,10,10,17,10],"y":["Monday","Tuesday","Wednesday","Saturday","Sunday"]}},"id":"2053ecae-3267-47f2-ade8-384cf1faf738","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"51b4ada8-db27-4d00-80cc-d9b03ca4d363","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.83050847457627,18.866666666666667,20.0],"x":[9,10,17],"y":["Tuesday","Thursday","Friday"]}},"id":"c9aa1346-c958-44c3-831e-9e5217414cde","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"96e4625f-e070-411d-a4bf-682f1c12452c","type":"ColumnDataSource"},"glyph":{"id":"505ad050-537e-45db-9b46-e2856dd79f7a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2cfdb16b-5a7d-494a-afec-4d692b0a7867","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[3.6417910447761193,6.2,5.0],"x":[9,9,17],"y":["Saturday","Sunday","Sunday"]}},"id":"96e4625f-e070-411d-a4bf-682f1c12452c","type":"ColumnDataSource"},{"attributes":{},"id":"3b39989a-89af-4454-b8b1-1b8a27411a21","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"}},"id":"91d8d85f-9837-40e3-bda1-cd09cbd5e5b2","type":"WheelZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"54f1df75-f1b6-48e8-bd97-3ff768e49541","type":"Panel"},{"id":"450e4c48-aa15-4518-8bc8-7ca5e9912919","type":"Panel"}]},"id":"345b32dc-2971-48b7-9dce-9594964649d4","type":"Tabs"},{"attributes":{},"id":"93f1d892-d16c-48df-aa8c-925fd662fa8e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"bb3b2dc7-2b84-460e-9628-8ee910810c06","type":"ColumnDataSource"},"glyph":{"id":"3863d0a1-6796-43a1-aad3-db951a3cf3f6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3091245c-6080-4cf4-9015-546abc58d0b9","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b862dcc-d028-43a0-8e77-fa73b86bc6d1","type":"Rect"},{"attributes":{"child":{"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"450e4c48-aa15-4518-8bc8-7ca5e9912919","type":"Panel"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"fe652a00-edcb-4db3-88bf-c2cd46559d2d","type":"LinearColorMapper"},{"attributes":{},"id":"b98ce9ec-a1b5-41e0-be2f-4008000c431e","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"}},"id":"018bc3a7-fdf5-4cc6-a431-1cab295a3253","type":"SaveTool"},{"attributes":{"plot":{"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"}},"id":"a2ccfe22-df6f-4f87-b6db-986f0517f5dc","type":"HelpTool"},{"attributes":{},"id":"f645ed74-4577-4b10-97d6-5a178c9d0f07","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e9e46f5-14a1-48cd-bf97-f4e6a3dd8f63","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d964ccb6-60e2-43ed-89b7-20465b90441a","type":"PanTool"},{"id":"91d8d85f-9837-40e3-bda1-cd09cbd5e5b2","type":"WheelZoomTool"},{"id":"c6c4871a-86df-4025-b664-f504ac2bad7f","type":"BoxZoomTool"},{"id":"018bc3a7-fdf5-4cc6-a431-1cab295a3253","type":"SaveTool"},{"id":"8a82a28d-753b-408a-b160-98d2fe9d06a4","type":"ResetTool"},{"id":"a2ccfe22-df6f-4f87-b6db-986f0517f5dc","type":"HelpTool"}]},"id":"da700742-28d4-4615-acfb-beabc410136b","type":"Toolbar"},{"attributes":{"plot":{"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"}},"id":"d964ccb6-60e2-43ed-89b7-20465b90441a","type":"PanTool"},{"attributes":{"plot":{"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"}},"id":"f09f5914-142b-459a-beb7-ba0b20a24094","type":"PanTool"},{"attributes":{},"id":"e54eac36-e32b-4f33-8cad-44826fac8756","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"2746c9c9-dc95-48ab-bd3f-9fdab150c217","type":"ColumnDataSource"},"glyph":{"id":"f50e9d84-5ae4-449c-ac14-bb9f74a5db06","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"40e36481-3c6a-413c-b5fd-23d37210e625","type":"GlyphRenderer"},{"attributes":{},"id":"dafdb121-0fa6-41c0-8e8f-f19ac09bc2ec","type":"ToolEvents"},{"attributes":{"data_source":{"id":"6457e676-1070-4750-9ac8-ba2bbeeaa226","type":"ColumnDataSource"},"glyph":{"id":"df15dde5-dca6-4c8b-9549-0c1193ab020e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"38d61cbf-1296-4cba-aa8c-217f268935ec","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"fe652a00-edcb-4db3-88bf-c2cd46559d2d","type":"LinearColorMapper"},"formatter":{"id":"6d418ffe-179e-40a8-8d14-a86807e7f216","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"},"ticker":{"id":"7b5b18a8-24e9-49bf-9a9a-adc7bbb25dcd","type":"BasicTicker"}},"id":"8e6da329-2b22-41ca-a440-7aee53c652a1","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.24561403508772,22.90909090909091],"x":[9,17],"y":["Thursday","Thursday"]}},"id":"99b38a4a-6e25-4923-8053-13e89eaae102","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,1.0,3.238095238095238,0.0,0.0,0.0],"x":[16,16,10,16,16,23],"y":["Monday","Wednesday","Saturday","Saturday","Sunday","Sunday"]}},"id":"5a8537f6-10ec-4151-9db2-6c940aa10467","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[3.6417910447761193,6.2,5.0],"x":[9,9,17],"y":["Saturday","Sunday","Sunday"]}},"id":"6457e676-1070-4750-9ac8-ba2bbeeaa226","type":"ColumnDataSource"},{"attributes":{"child":{"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"54f1df75-f1b6-48e8-bd97-3ff768e49541","type":"Panel"},{"attributes":{"overlay":{"id":"353b69af-78a4-4507-8bd9-6b831c410607","type":"BoxAnnotation"},"plot":{"id":"09abfddb-f443-4acc-a01a-f532d2996139","subtype":"Chart","type":"Plot"}},"id":"796748e2-005f-49c7-a69d-2c77fa10df7a","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3863d0a1-6796-43a1-aad3-db951a3cf3f6","type":"Rect"},{"attributes":{"color_mapper":{"id":"f91c2e44-2ed7-4eea-96aa-63370b8bcf3c","type":"LinearColorMapper"},"formatter":{"id":"93f1d892-d16c-48df-aa8c-925fd662fa8e","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"},"ticker":{"id":"dafce172-b02d-4c2c-aa92-0894b6a9f68a","type":"BasicTicker"}},"id":"03a6f36d-19ea-43e8-be8e-c2fed9f6058d","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"505ad050-537e-45db-9b46-e2856dd79f7a","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9519b926-d93d-45eb-9bff-eefed7c42fa4","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.24561403508772,22.90909090909091],"x":[9,17],"y":["Thursday","Thursday"]}},"id":"a6612bef-765a-40b5-b3b0-8581f38d76b4","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"f4c0a03a-73bd-452e-afe9-d89e60891992","type":"BoxAnnotation"},"plot":{"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"}},"id":"c6c4871a-86df-4025-b664-f504ac2bad7f","type":"BoxZoomTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"9b17b7f6-e1d9-470c-ab59-2d08085c6c70","type":"LinearAxis"}],"left":[{"id":"fb5865a0-e373-4cf6-94e3-d69365a76e2d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"f4c0a03a-73bd-452e-afe9-d89e60891992","type":"BoxAnnotation"},{"id":"8dd6fd46-f7e8-46e8-a3ae-1ec958354833","type":"GlyphRenderer"},{"id":"b0409dd1-4b3e-401c-8321-5da6dbc99a31","type":"GlyphRenderer"},{"id":"40e36481-3c6a-413c-b5fd-23d37210e625","type":"GlyphRenderer"},{"id":"3091245c-6080-4cf4-9015-546abc58d0b9","type":"GlyphRenderer"},{"id":"908aa118-4b1b-4f93-91a8-97f4a084deaf","type":"GlyphRenderer"},{"id":"2cfdb16b-5a7d-494a-afec-4d692b0a7867","type":"GlyphRenderer"},{"id":"76969145-ee66-46a2-8fae-a107be988c14","type":"GlyphRenderer"},{"id":"9b17b7f6-e1d9-470c-ab59-2d08085c6c70","type":"LinearAxis"},{"id":"fb5865a0-e373-4cf6-94e3-d69365a76e2d","type":"CategoricalAxis"},{"id":"03a6f36d-19ea-43e8-be8e-c2fed9f6058d","type":"ColorBar"}],"right":[{"id":"03a6f36d-19ea-43e8-be8e-c2fed9f6058d","type":"ColorBar"}],"title":{"id":"ee11eb0a-36fe-474b-87ec-535ce31ca4e7","type":"Title"},"tool_events":{"id":"dafdb121-0fa6-41c0-8e8f-f19ac09bc2ec","type":"ToolEvents"},"toolbar":{"id":"da700742-28d4-4615-acfb-beabc410136b","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"fb024e0e-acf5-4fa0-a81c-0b7095d4c369","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"19f4a080-b2e1-4eb6-9f5f-851259375e07","type":"FactorRange"}},"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"c9aa1346-c958-44c3-831e-9e5217414cde","type":"ColumnDataSource"},"glyph":{"id":"9519b926-d93d-45eb-9bff-eefed7c42fa4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cb14bec0-8e21-46ad-b147-681f07a31724","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"fb024e0e-acf5-4fa0-a81c-0b7095d4c369","type":"Range1d"},{"attributes":{"data_source":{"id":"5a8537f6-10ec-4151-9db2-6c940aa10467","type":"ColumnDataSource"},"glyph":{"id":"3b862dcc-d028-43a0-8e77-fa73b86bc6d1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"76969145-ee66-46a2-8fae-a107be988c14","type":"GlyphRenderer"},{"attributes":{},"id":"988958d1-d8db-4fcc-8ad0-7fd081e1a2ac","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,1.0,3.238095238095238,0.0,0.0,0.0],"x":[16,16,10,16,16,23],"y":["Monday","Wednesday","Saturday","Saturday","Sunday","Sunday"]}},"id":"e4f9ea5a-888b-4e66-b64b-44d2f26f8d31","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2053ecae-3267-47f2-ade8-384cf1faf738","type":"ColumnDataSource"},"glyph":{"id":"d65347a3-caf0-4ab3-a6eb-65f4c2b6e798","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9ef6a143-94cc-4188-b573-a35a9b6475eb","type":"GlyphRenderer"},{"attributes":{},"id":"7b5b18a8-24e9-49bf-9a9a-adc7bbb25dcd","type":"BasicTicker"},{"attributes":{"plot":{"id":"930388cd-08b7-419f-9cb8-9518bd853f41","subtype":"Chart","type":"Plot"}},"id":"8a82a28d-753b-408a-b160-98d2fe9d06a4","type":"ResetTool"}],"root_ids":["345b32dc-2971-48b7-9dce-9594964649d4"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"a7a2ad73-1a25-4c9f-b966-27ed2585e4ff","elementid":"3d3acd09-4b6e-4b5d-bc7c-630017d51795","modelid":"345b32dc-2971-48b7-9dce-9594964649d4"}];
                  
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