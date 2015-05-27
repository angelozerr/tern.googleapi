(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("gcharts", function(server, options) {

    return {
      defs : defs
    };
  });
  
  var defs = {
  "!name": "gcharts",
  "!define": {
    
  },
  "google": {
    "visualization": {
      "DataTable": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
      },
      "DataView": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
      },
      "ChartWrapper": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
      },
      "GadgetHelper": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
      },
      "Query": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "QueryResponse": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#QueryResponse"
      }
    }
  },
  "Data": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
  },
  "Formatters": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
  },
  "Query": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
  },
  "Error": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Error"
  },
  "Events": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Events"
  },
  "Standard": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Standard"
  },
  "Assorted": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Assorted"
  }
};
});