"use strict";

var fs = require("fs"), path = require("path"), tern = require("tern"), assert = require('assert');
require("../../plugin/tern-gmaps3.ref/gmaps3.ref.js");
require("../../plugin/tern-gmaps3.exp/gmaps3.exp.js");

var projectDir = path.resolve(__dirname, "../..");
var resolve = function(pth) {
	return path.resolve(projectDir, pth);
};
var browser = JSON.parse(fs
		.readFileSync(resolve("node_modules/tern/defs/browser.json")), "utf8");
var ecma5 = JSON.parse(fs
		.readFileSync(resolve("node_modules/tern/defs/ecma5.json")), "utf8");
       
var allDefs = {
	browser : browser,
	ecma5 : ecma5
};

var defaultQueryOptions = {
  types: true,
  docs: false,
  urls: false,
  origins: true
}

function createServer(defs, options, version) {
	var plugins = {};
	if (options) plugins['gmaps3.' + version] = options; else plugins['gmaps3.' + version] = {};
	var server = new tern.Server({
		plugins : plugins,
		defs : defs
	});
	return server;
}

exports.assertCompletion = function(text, expected, name, substraction, version) {
	var defs = [];
	var defNames = ["ecma5", "browser"]; 
	if (defNames) {
		for (var i = 0; i < defNames.length; i++) {
			var def = allDefs[defNames[i]];
			defs.push(def);
		}
	}
	var queryOptions = defaultQueryOptions;
	if (!substraction) substraction = 0; 
	var server = createServer(defs, {}, version);
	server.addFile("test1.js", text);
	server.request({
		query : {
			type: "completions",
			file: "test1.js",
			end: text.length - substraction,
			types: queryOptions.types,
			docs: queryOptions.docs,
			urls: queryOptions.urls,
			origins: queryOptions.origins,
			caseInsensitive: true,
			lineCharPositions: true,
			expandWordForward: false,
			guess: false			
		}
	}, function(err, resp) {
		if (err)
			throw err;
		var actualMessages = resp.messages;
		var expectedMessages = expected.messages;

		if(name) {
          var actualItem = {};
          var completions = resp["completions"];
          if (completions) {
                  completions.forEach(function(item) {
                    if (item['name'] === name) actualItem = item;
                  });
          }
          assert.equal(JSON.stringify(actualItem), JSON.stringify(expected));                           
        } else {
          assert.equal(JSON.stringify(resp), JSON.stringify(expected)); 
        }
	});
}