var util = require("./util");

exports['test google completion'] = function() {
	util.assertCompletion("goo", {
	    "start":{"line":0,"ch":0},
	    "end":{"line":0,"ch":3},
	    "isProperty":false,
	    "isObjectKey":false,
	    "completions":[{"name":"google","type":"google","origin":"gcharts"}]
	});
}

exports['test google. completion'] = function() {
  util.assertCompletion("google.", {
      "start":{"line":0,"ch":7},
      "end":{"line":0,"ch":7},
      "isProperty":true,
      "isObjectKey":false,
      "completions":[{"name":"visualization","type":"google.visualization","origin":"gcharts"}]
  });
}

exports['test new Data completion'] = function() {
  util.assertCompletion("var data = new google.visualization.Data", {
      "start":{"line":0,"ch":36},
      "end":{"line":0,"ch":40},
      "isProperty":true,
      "isObjectKey":false,
      "completions":[{"name":"DataTable","type":"fn(opt_data?: {}, opt_version?: number) -> google.visualization.DataTable","origin":"gcharts"},
                     {"name":"DataView","type":"google.visualization.DataView","origin":"gcharts"}]
  });
}

exports['test DataTable completion'] = function() {
  util.assertCompletion("var data = new google.visualization.DataTable();data.add", {
      "start":{"line":0,"ch":53},
      "end":{"line":0,"ch":56},
      "isProperty":true,
      "isObjectKey":false,
      "completions":[{"name":"addColumn","type":"fn() -> number","origin":"gcharts"},
                     {"name":"addGradientRange","type":"fn()","origin":"gcharts"},
                     {"name":"addRange","type":"fn()","origin":"gcharts"},
                     {"name":"addRow","type":"fn() -> number","origin":"gcharts"},
                     {"name":"addRows","type":"fn() -> number","origin":"gcharts"}                    ]
  });
}

exports['test DataTable Object literal completion'] = function() {
  util.assertCompletion("var data = new google.visualization.DataTable({", {
      "start":{"line":0,"ch":47},
      "end":{"line":0,"ch":47},
      "isProperty":true,
      "isObjectKey":true,
      "completions":[{"name":"cols","type":"DataTableOptions.cols","origin":"gcharts"},
                     {"name":"rows","type":"DataTableOptions.rows","origin":"gcharts"}]
  });
}

if (module == require.main) require("test").run(exports);