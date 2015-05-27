var util = require("./util");

exports['test google completion'] = function() {
	util.assertCompletion("goo", {
	    "start":{"line":0,"ch":0},
	    "end":{"line":0,"ch":3},
	    "isProperty":false,
	    "isObjectKey":false,
	    "completions":[{"name":"google","type":"google","origin":"gmaps3.ref"}]
	}, null, 0, "ref");
}

exports['test google. completion'] = function() {
  util.assertCompletion("google.", {
      "start":{"line":0,"ch":7},
      "end":{"line":0,"ch":7},
      "isProperty":true,
      "isObjectKey":false,
      "completions":[{"name":"maps","type":"google.maps","origin":"gmaps3.ref"}]
  }, null, 0, "ref");
}

exports['test new Map completion'] = function() {
  util.assertCompletion("var map = new google.maps.Map", {
      "start":{"line":0,"ch":26},
      "end":{"line":0,"ch":29},
      "isProperty":true,
      "isObjectKey":false,
      "completions":[{"name":"Map","type":"fn(mapDiv: Node, opts?: {}) -> google.maps.Map","origin":"gmaps3.ref"},
                     {"name":"MapTypeControlStyle","type":"google.maps.MapTypeControlStyle","origin":"gmaps3.ref"},
                     {"name":"MapTypeId","type":"google.maps.MapTypeId","origin":"gmaps3.ref"},
                     {"name":"MapTypeRegistry","type":"fn() -> google.maps.MapTypeRegistry","origin":"gmaps3.ref"}]
  }, null, 0, "ref");
}

exports['test Map completion'] = function() {
  util.assertCompletion("var map = new google.maps.Map(document.getElementById('map-canvas'), {});map.", {
      "start":{"line":0,"ch":77},
      "end":{"line":0,"ch":77},
      "isProperty":true,
      "isObjectKey":false,
      "completions":[{"name":"addListener","type":"fn(eventName: string, handler: fn()) -> {}","origin":"gmaps3.ref"},
                     {"name":"bindTo","type":"fn(key: string, target: google.maps.MVCObject, targetKey?: string, noNotify?: bool)","origin":"gmaps3.ref"},
                     {"name":"changed","type":"fn(key: string)","origin":"gmaps3.ref"},
                     {"name":"controls","type":"[google.maps.MVCArray]","origin":"gmaps3.ref"},
                     {"name":"data","type":"google.maps.Data","origin":"gmaps3.ref"},
                     {"name":"fitBounds","type":"fn(bounds: google.maps.LatLngBounds)","origin":"gmaps3.ref"},
                     {"name":"get","type":"fn(key: string)","origin":"gmaps3.ref"},
                     {"name":"getBounds","type":"fn() -> google.maps.LatLngBounds","origin":"gmaps3.ref"},
                     {"name":"getCenter","type":"fn() -> google.maps.LatLng","origin":"gmaps3.ref"},
                     {"name":"getDiv","type":"fn() -> Node","origin":"gmaps3.ref"},
                     {"name":"getHeading","type":"fn() -> number","origin":"gmaps3.ref"},
                     {"name":"getMapTypeId","type":"fn() -> {}","origin":"gmaps3.ref"},
                     {"name":"getProjection","type":"fn() -> Projection","origin":"gmaps3.ref"},
                     {"name":"getStreetView","type":"fn() -> google.maps.StreetViewPanorama","origin":"gmaps3.ref"},
                     {"name":"getTilt","type":"fn() -> number","origin":"gmaps3.ref"},
                     {"name":"getZoom","type":"fn() -> number","origin":"gmaps3.ref"},
                     {"name":"mapTypes","type":"google.maps.MapTypeRegistry","origin":"gmaps3.ref"},
                     {"name":"notify","type":"fn(key: string)","origin":"gmaps3.ref"},
                     {"name":"overlayMapTypes","type":"google.maps.MVCArray","origin":"gmaps3.ref"},
                     {"name":"panBy","type":"fn(x: number, y: number)","origin":"gmaps3.ref"},
                     {"name":"panTo","type":"fn(latLng: google.maps.LatLng)","origin":"gmaps3.ref"},
                     {"name":"panToBounds","type":"fn(latLngBounds: google.maps.LatLngBounds)","origin":"gmaps3.ref"},
                     {"name":"set","type":"fn(key: string, value: ?)","origin":"gmaps3.ref"},
                     {"name":"setCenter","type":"fn(latlng: google.maps.LatLng)","origin":"gmaps3.ref"},
                     {"name":"setHeading","type":"fn(heading: number)","origin":"gmaps3.ref"},
                     {"name":"setMapTypeId","type":"fn(mapTypeId: {})","origin":"gmaps3.ref"},
                     {"name":"setOptions","type":"fn(options: {})","origin":"gmaps3.ref"},
                     {"name":"setStreetView","type":"fn(panorama: google.maps.StreetViewPanorama)","origin":"gmaps3.ref"},
                     {"name":"setTilt","type":"fn(tilt: number)","origin":"gmaps3.ref"},
                     {"name":"setValues","type":"fn(values: ?)","origin":"gmaps3.ref"},
                     {"name":"setZoom","type":"fn(zoom: number)","origin":"gmaps3.ref"},
                     {"name":"unbind","type":"fn(key: string)","origin":"gmaps3.ref"},
                     {"name":"unbindAll","type":"fn()","origin":"gmaps3.ref"}
                    ]
  }, null, 0, "ref");
}

exports['test Map Object literal completion'] = function() {
  util.assertCompletion("var map = new google.maps.Map(mapDiv, {d", {
      "start":{"line":0,"ch":39},
      "end":{"line":0,"ch":40},
      "isProperty":true,
      "isObjectKey":true,
      "completions":[{"name":"disableDefaultUI","type":"bool","origin":"gmaps3.ref"},
                     {"name":"disableDoubleClickZoom","type":"bool","origin":"gmaps3.ref"},
                     {"name":"draggable","type":"bool","origin":"gmaps3.ref"},
                     {"name":"draggableCursor","type":"string","origin":"gmaps3.ref"},
                     {"name":"draggingCursor","type":"string","origin":"gmaps3.ref"}]
  }, null, 0, "ref");
}

if (module == require.main) require("test").run(exports);