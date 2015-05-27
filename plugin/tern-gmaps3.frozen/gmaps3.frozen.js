(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("gmaps3.frozen", function(server, options) {

    return {
      defs : defs
    };
  });
  
  var defs = {
  "!name": "gmaps3.frozen",
  "!define": {
    "MapOptions": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions",
      "backgroundColor": {
        "!type": "string",
        "!doc": "Color used for the background of the Map div. This color will be visible when tiles have not yet loaded as the user pans. This option can only be set when the map is initialized.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "center": {
        "!type": "+google.maps.LatLng",
        "!doc": "The initial Map center. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "disableDefaultUI": {
        "!type": "bool",
        "!doc": "Enables/disables all default UI. May be overridden individually.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "disableDoubleClickZoom": {
        "!type": "bool",
        "!doc": "Enables/disables zoom and center on double click. Enabled by default.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "draggable": {
        "!type": "bool",
        "!doc": "If false, prevents the map from being dragged. Dragging is enabled by default.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "draggableCursor": {
        "!type": "string",
        "!doc": "The name or url of the cursor to display when mousing over a draggable map. This property uses the css cursor attribute to change the icon. As with the css property, you must specify at least one fallback cursor that is not a URL. For example: draggableCursor: 'url(http://www.example.com/icon.png), auto;'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "draggingCursor": {
        "!type": "string",
        "!doc": "The name or url of the cursor to display when the map is being dragged. This property uses the css cursor attribute to change the icon. As with the css property, you must specify at least one fallback cursor that is not a URL. For example: draggingCursor: 'url(http://www.example.com/icon.png), auto;'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "heading": {
        "!type": "number",
        "!doc": "The heading for aerial imagery in degrees measured clockwise from cardinal direction North. Headings are snapped to the nearest available angle for which imagery is available.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "keyboardShortcuts": {
        "!type": "bool",
        "!doc": "If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are enabled by default.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "mapMaker": {
        "!type": "bool",
        "!doc": "True if Map Maker tiles should be used instead of regular tiles.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "mapTypeControl": {
        "!type": "bool",
        "!doc": "The initial enabled/disabled state of the Map type control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "mapTypeControlOptions": {
        "!type": "+MapTypeControlOptions",
        "!doc": "The initial display options for the Map type control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "mapTypeId": {
        "!type": "+google.maps.MapTypeId",
        "!doc": "The initial Map mapTypeId. Defaults to ROADMAP.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "maxZoom": {
        "!type": "number",
        "!doc": "The maximum zoom level which will be displayed on the map. If omitted, or set to null, the maximum zoom from the current map type is used instead.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "minZoom": {
        "!type": "number",
        "!doc": "The minimum zoom level which will be displayed on the map. If omitted, or set to null, the minimum zoom from the current map type is used instead.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "noClear": {
        "!type": "bool",
        "!doc": "If true, do not clear the contents of the Map div.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "overviewMapControl": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of the Overview Map control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "overviewMapControlOptions": {
        "!type": "+OverviewMapControlOptions",
        "!doc": "The display options for the Overview Map control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "panControl": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of the Pan control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "panControlOptions": {
        "!type": "+PanControlOptions",
        "!doc": "The display options for the Pan control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "rotateControl": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of the Rotate control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "rotateControlOptions": {
        "!type": "+RotateControlOptions",
        "!doc": "The display options for the Rotate control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "scaleControl": {
        "!type": "bool",
        "!doc": "The initial enabled/disabled state of the Scale control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "scaleControlOptions": {
        "!type": "+ScaleControlOptions",
        "!doc": "The initial display options for the Scale control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "scrollwheel": {
        "!type": "bool",
        "!doc": "If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "streetView": {
        "!type": "+google.maps.StreetViewPanorama",
        "!doc": "A StreetViewPanorama to display when the Street View pegman is dropped on the map. If no panorama is specified, a default StreetViewPanorama will be displayed in the map's div when the pegman is dropped.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "streetViewControl": {
        "!type": "bool",
        "!doc": "The initial enabled/disabled state of the Street View Pegman control. This control is part of the default UI, and should be set to false when displaying a map type on which the Street View road overlay should not appear (e.g. a non-Earth map type).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "streetViewControlOptions": {
        "!type": "+StreetViewControlOptions",
        "!doc": "The initial display options for the Street View Pegman control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "styles": {
        "!type": "+Array<MapTypeStyle>",
        "!doc": "Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain modes, these styles will only apply to labels and geometry.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "tilt": {
        "!type": "number",
        "!doc": "Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are 0 and 45. The value 0 causes the map to always use a 0� overhead view regardless of the zoom level and viewport. The value 45 causes the tilt angle to automatically switch to 45 whenever 45� imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45� imagery is not available (this is the default behavior). 45� imagery is only available for SATELLITE and HYBRID map types, within some locations, and at some zoom levels. Note: getTilt returns the current tilt angle, not the value specified by this option. Because getTilt and this option refer to different things, do not bind() the tilt property; doing so may yield unpredictable effects.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "zoom": {
        "!type": "number",
        "!doc": "The initial Map zoom level. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "zoomControl": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of the Zoom control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      },
      "zoomControlOptions": {
        "!type": "+ZoomControlOptions",
        "!doc": "The display options for the Zoom control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapOptions"
      }
    },
    "MapTypeControlOptions": {
      "!doc": "Options for the rendering of the map type control.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeControlOptions",
      "mapTypeIds": {
        "!type": "+Array<MapTypeId>",
        "!doc": "IDs of map types to show in the control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeControlOptions"
      },
      "position": {
        "!type": "+google.maps.ControlPosition",
        "!doc": "Position id. Used to specify the position of the control on the map. The default position is TOP_RIGHT.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeControlOptions"
      },
      "style": {
        "!type": "+google.maps.MapTypeControlStyle",
        "!doc": "Style id. Used to select what style of map type control to display.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeControlOptions"
      }
    },
    "OverviewMapControlOptions": {
      "!doc": "Options for the rendering of the Overview Map control.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverviewMapControlOptions",
      "opened": {
        "!type": "bool",
        "!doc": "Whether the control should display in opened mode or collapsed (minimized) mode. By default, the control is closed.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverviewMapControlOptions"
      }
    },
    "PanControlOptions": {
      "!doc": "Options for the rendering of the pan control.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanControlOptions",
      "position": {
        "!type": "+google.maps.ControlPosition",
        "!doc": "Position id. Used to specify the position of the control on the map. The default position is TOP_LEFT.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanControlOptions"
      }
    },
    "RotateControlOptions": {
      "!doc": "Options for the rendering of the rotate control.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RotateControlOptions",
      "position": {
        "!type": "+google.maps.ControlPosition",
        "!doc": "Position id. Used to specify the position of the control on the map. The default position is TOP_LEFT.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RotateControlOptions"
      }
    },
    "ScaleControlOptions": {
      "!doc": "Options for the rendering of the scale control.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ScaleControlOptions",
      "style": {
        "!type": "+google.maps.ScaleControlStyle",
        "!doc": "Style id. Used to select what style of scale control to display.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ScaleControlOptions"
      }
    },
    "StreetViewControlOptions": {
      "!doc": "Options for the rendering of the Street View pegman control on the map.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewControlOptions",
      "position": {
        "!type": "+google.maps.ControlPosition",
        "!doc": "Position id. Used to specify the position of the control on the map. The default position is embedded within the navigation (zoom and pan) controls. If this position is empty or the same as that specified in the zoomControlOptions or panControlOptions, the Street View control will be displayed as part of the navigation controls. Otherwise, it will be displayed separately.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewControlOptions"
      }
    },
    "ZoomControlOptions": {
      "!doc": "Options for the rendering of the zoom control.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ZoomControlOptions",
      "position": {
        "!type": "+google.maps.ControlPosition",
        "!doc": "Position id. Used to specify the position of the control on the map. The default position is TOP_LEFT.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ZoomControlOptions"
      },
      "style": {
        "!type": "+google.maps.ZoomControlStyle",
        "!doc": "Style id. Used to select what style of zoom control to display.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ZoomControlOptions"
      }
    },
    "DataOptions": {
      "!doc": "DataOptions object used to define the properties that a developer can set on a Data object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DataOptions",
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "Map on which to display the features in the collection.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DataOptions"
      },
      "style": {
        "!type": "+Data.StylingFunction",
        "!doc": "Style for all features in the collection. For more details, see the setStyle() method above.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DataOptions"
      }
    },
    "GeoJsonOptions": {
      "!doc": "Optional parameters for importing GeoJSON.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeoJsonOptions",
      "idPropertyName": {
        "!type": "string",
        "!doc": "The name of the Feature property to use as the feature ID. If not specified, the GeoJSON Feature id will be used.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeoJsonOptions"
      }
    },
    "StyleOptions": {
      "!doc": "These options specify the way a Feature should appear when displayed on a map.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions",
      "clickable": {
        "!type": "bool",
        "!doc": "If true, the marker receives mouse and touch events. Default value is true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "cursor": {
        "!type": "string",
        "!doc": "Mouse cursor to show on hover. Only applies to point geometries.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "fillColor": {
        "!type": "string",
        "!doc": "The fill color. All CSS3 colors are supported except for extended named colors. Only applies to polygon geometries.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "fillOpacity": {
        "!type": "number",
        "!doc": "The fill opacity between 0.0 and 1.0. Only applies to polygon geometries.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "icon": {
        "!type": "string",
        "!doc": "Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url. Only applies to point geometries.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "shape": {
        "!type": "+MarkerShape",
        "!doc": "Defines the image map used for hit detection. Only applies to point geometries.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "strokeColor": {
        "!type": "string",
        "!doc": "The stroke color. All CSS3 colors are supported except for extended named colors. Only applies to line and polygon geometries.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "strokeOpacity": {
        "!type": "number",
        "!doc": "The stroke opacity between 0.0 and 1.0. Only applies to line and polygon geometries.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "strokeWeight": {
        "!type": "number",
        "!doc": "The stroke width in pixels. Only applies to line and polygon geometries.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "title": {
        "!type": "string",
        "!doc": "Rollover text. Only applies to point geometries.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "visible": {
        "!type": "bool",
        "!doc": "Whether the feature is visible. Defaults to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      },
      "zIndex": {
        "!type": "number",
        "!doc": "All features are displayed on the map in order of their zIndex, with higher values displaying in front of features with lower values. Markers are always displayed in front of line-strings and polygons.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyleOptions"
      }
    },
    "FeatureOptions": {
      "!doc": "Optional parameters for creating Data.Feature objects.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureOptions",
      "geometry": {
        "!type": "+Data.Geometry",
        "!doc": "The feature geometry. If none is specified when a feature is constructed, the feature's geometry will be null. If a LatLng object or LatLngLiteral is given, this will be converted to a Data.Point geometry.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureOptions"
      },
      "id": {
        "!type": "number",
        "!doc": "Feature ID is optional. If provided, it can be used to look up the feature in a Data object using the getFeatureById() method. Note that a feature's ID cannot be subsequently changed.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureOptions"
      },
      "properties": {
        "!type": "?",
        "!doc": "The feature properties. This is an arbitrary mapping of property names to values.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureOptions"
      }
    },
    "MouseEvent": {
      "!doc": "This object is returned from various mouse events on the map and overlays, and contains all the fields shown below.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MouseEvent",
      "feature": {
        "!type": "+Data.Feature",
        "!doc": "The feature which generated the mouse event.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MouseEvent"
      },
      "latLng": {
        "!type": "+google.maps.LatLng",
        "!doc": "The latitude/longitude that was below the cursor when the event occurred.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MouseEvent"
      },
      "prototype": {
        "stop": {
          "!type": "fn()",
          "!doc": "Prevents this event from propagating further.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MouseEvent"
        }
      }
    },
    "AddFeatureEvent": {
      "!doc": "The properties of a addfeature event.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AddFeatureEvent",
      "feature": {
        "!type": "+Data.Feature",
        "!doc": "The feature that was added to the FeatureCollection.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AddFeatureEvent"
      }
    },
    "RemoveFeatureEvent": {
      "!doc": "The properties of a removefeature event.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RemoveFeatureEvent",
      "feature": {
        "!type": "+Data.Feature",
        "!doc": "The feature that was removed from the FeatureCollection.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RemoveFeatureEvent"
      }
    },
    "SetGeometryEvent": {
      "!doc": "The properties of a setgeometry event.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SetGeometryEvent",
      "feature": {
        "!type": "+Data.Feature",
        "!doc": "The feature whose geometry was set.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SetGeometryEvent"
      },
      "newGeometry": {
        "!type": "+Data.Geometry",
        "!doc": "The new feature geometry.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SetGeometryEvent"
      },
      "oldGeometry": {
        "!type": "+Data.Geometry",
        "!doc": "The previous feature geometry.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SetGeometryEvent"
      }
    },
    "SetPropertyEvent": {
      "!doc": "The properties of a setproperty event.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SetPropertyEvent",
      "feature": {
        "!type": "+Data.Feature",
        "!doc": "The feature whose property was set.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SetPropertyEvent"
      },
      "name": {
        "!type": "string",
        "!doc": "The property name.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SetPropertyEvent"
      },
      "newValue": {
        "!type": "?",
        "!doc": "The new value.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SetPropertyEvent"
      },
      "oldValue": {
        "!type": "?",
        "!doc": "The previous value. Will be undefined if the property was added.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SetPropertyEvent"
      }
    },
    "RemovePropertyEvent": {
      "!doc": "The properties of a removeproperty event.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RemovePropertyEvent",
      "feature": {
        "!type": "+Data.Feature",
        "!doc": "The feature whose property was removed.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RemovePropertyEvent"
      },
      "name": {
        "!type": "string",
        "!doc": "The property name.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RemovePropertyEvent"
      },
      "oldValue": {
        "!type": "?",
        "!doc": "The previous value.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RemovePropertyEvent"
      }
    },
    "MarkerOptions": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions",
      "anchorPoint": {
        "!type": "+google.maps.Point",
        "!doc": "The offset from the marker's position to the tip of an InfoWindow that has been opened with the marker as anchor.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "animation": {
        "!type": "+google.maps.Animation",
        "!doc": "Which animation to play when marker is added to a map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "attribution": {
        "!type": "+Attribution",
        "!doc": "Contains all the information needed to identify your application as the source of a save. In this context, 'place' means a business, point of interest or geographic location. attribution must be specified with a place in order to enable a save.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "clickable": {
        "!type": "bool",
        "!doc": "If true, the marker receives mouse and touch events. Default value is true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "crossOnDrag": {
        "!type": "bool",
        "!doc": "If false, disables cross that appears beneath the marker when dragging. This option is true by default.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "cursor": {
        "!type": "string",
        "!doc": "Mouse cursor to show on hover",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "draggable": {
        "!type": "bool",
        "!doc": "If true, the marker can be dragged. Default value is false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "icon": {
        "!type": "string",
        "!doc": "Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "Map on which to display Marker.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "opacity": {
        "!type": "number",
        "!doc": "The marker's opacity between 0.0 and 1.0.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "optimized": {
        "!type": "bool",
        "!doc": "Optimization renders many markers as a single static element. Optimized rendering is enabled by default. Disable optimized rendering for animated GIFs or PNGs, or when each marker must be rendered as a separate DOM element (advanced usage only).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "place": {
        "!type": "+Place",
        "!doc": "Place information, used to identify and describe the place associated with this Marker. In this context, 'place' means a business, point of interest or geographic location. To allow a user to save this place, open an info window anchored on this marker. The info window will contain information about the place and an option for the user to save it. Only one of position or place can be specified.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "position": {
        "!type": "+google.maps.LatLng",
        "!doc": "Marker position. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "shape": {
        "!type": "+MarkerShape",
        "!doc": "Image map region definition used for drag/click.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "title": {
        "!type": "string",
        "!doc": "Rollover text",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "visible": {
        "!type": "bool",
        "!doc": "If true, the marker is visible",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      },
      "zIndex": {
        "!type": "number",
        "!doc": "All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values. By default, markers are displayed according to their vertical position on screen, with lower markers appearing in front of markers further up the screen.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerOptions"
      }
    },
    "Icon": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Icon",
      "anchor": {
        "!type": "+google.maps.Point",
        "!doc": "The position at which to anchor an image in correspondence to the location of the marker on the map. By default, the anchor is located along the center point of the bottom of the image.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Icon"
      },
      "origin": {
        "!type": "+google.maps.Point",
        "!doc": "The position of the image within a sprite, if any. By default, the origin is located at the top left corner of the image (0, 0).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Icon"
      },
      "scaledSize": {
        "!type": "+google.maps.Size",
        "!doc": "The size of the entire image after scaling, if any. Use this property to stretch/shrink an image or a sprite.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Icon"
      },
      "size": {
        "!type": "+google.maps.Size",
        "!doc": "The display size of the sprite or image. When using sprites, you must specify the sprite size. If the size is not provided, it will be set when the image loads.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Icon"
      },
      "url": {
        "!type": "string",
        "!doc": "The URL of the image or sprite sheet.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Icon"
      }
    },
    "MarkerShape": {
      "!doc": "This object defines the clickable region of a marker image for browsers other than Internet Explorer. The shape consists of two properties � type and coord � which define the non-transparent region of an image. A MarkerShape object is not required on Internet Explorer since the browser does not fire events on the transparent region of an image by default.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerShape",
      "coords": {
        "!type": "+Array<number>",
        "!doc": "The format of this attribute depends on the value of the type and follows the w3 AREA coords specification found at  http://www.w3.org/TR/REC-html40/struct/objects.html#adef-coords. The coords attribute is an array of integers that specify the pixel position of the shape relative to the top-left corner of the target image. The coordinates depend on the value of type as follows: ��- circle: coords is [x1,y1,r] where x1,y2 are the coordinates of the center of the circle, and r is the radius of the circle. ��- poly: coords is [x1,y1,x2,y2...xn,yn] where each x,y pair contains the coordinates of one vertex of the polygon. ��- rect: coords is [x1,y1,x2,y2] where x1,y1 are the coordinates of the upper-left corner of the rectangle and x2,y2 are the coordinates of the lower-right coordinates of the rectangle.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerShape"
      },
      "type": {
        "!type": "string",
        "!doc": "Describes the shape's type and can be circle, poly or rect.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MarkerShape"
      }
    },
    "Symbol": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Symbol",
      "anchor": {
        "!type": "+google.maps.Point",
        "!doc": "The position of the symbol relative to the marker or polyline. The coordinates of the symbol's path are translated left and up by the anchor's x and y coordinates respectively. By default, a symbol is anchored at (0, 0). The position is expressed in the same coordinate system as the symbol's path.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Symbol"
      },
      "fillColor": {
        "!type": "string",
        "!doc": "The symbol's fill color. All CSS3 colors are supported except for extended named colors. For symbol markers, this defaults to 'black'. For symbols on polylines, this defaults to the stroke color of the corresponding polyline.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Symbol"
      },
      "fillOpacity": {
        "!type": "number",
        "!doc": "The symbol's fill opacity. Defaults to 0.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Symbol"
      },
      "path": {
        "!type": "+google.maps.SymbolPath",
        "!doc": "The symbol's path, which is a built-in symbol path, or a custom path expressed using SVG path notation. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Symbol"
      },
      "rotation": {
        "!type": "number",
        "!doc": "The angle by which to rotate the symbol, expressed clockwise in degrees. Defaults to 0. A symbol in an IconSequence where fixedRotation is false is rotated relative to the angle of the edge on which it lies.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Symbol"
      },
      "scale": {
        "!type": "number",
        "!doc": "The amount by which the symbol is scaled in size. For symbol markers, this defaults to 1; after scaling, the symbol may be of any size. For symbols on a polyline, this defaults to the stroke weight of the polyline; after scaling, the symbol must lie inside a square 22 pixels in size centered at the symbol's anchor.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Symbol"
      },
      "strokeColor": {
        "!type": "string",
        "!doc": "The symbol's stroke color. All CSS3 colors are supported except for extended named colors. For symbol markers, this defaults to 'black'. For symbols on a polyline, this defaults to the stroke color of the polyline.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Symbol"
      },
      "strokeOpacity": {
        "!type": "number",
        "!doc": "The symbol's stroke opacity. For symbol markers, this defaults to 1. For symbols on a polyline, this defaults to the stroke opacity of the polyline.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Symbol"
      },
      "strokeWeight": {
        "!type": "number",
        "!doc": "The symbol's stroke weight. Defaults to the scale of the symbol.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Symbol"
      }
    },
    "InfoWindowOptions": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindowOptions",
      "content": {
        "!type": "string",
        "!doc": "Content to display in the InfoWindow. This can be an HTML element, a plain-text string, or a string containing HTML. The InfoWindow will be sized according to the content. To set an explicit size for the content, set content to be a HTML element with that size.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindowOptions"
      },
      "disableAutoPan": {
        "!type": "bool",
        "!doc": "Disable auto-pan on open. By default, the info window will pan the map so that it is fully visible when it opens.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindowOptions"
      },
      "maxWidth": {
        "!type": "number",
        "!doc": "Maximum width of the infowindow, regardless of content's width. This value is only considered if it is set before a call to open. To change the maximum width when changing content, call close, setOptions, and then open.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindowOptions"
      },
      "pixelOffset": {
        "!type": "+google.maps.Size",
        "!doc": "The offset, in pixels, of the tip of the info window from the point on the map at whose geographical coordinates the info window is anchored. If an InfoWindow is opened with an anchor, the pixelOffset will be calculated from the anchor's anchorPoint property.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindowOptions"
      },
      "position": {
        "!type": "+google.maps.LatLng",
        "!doc": "The LatLng at which to display this InfoWindow. If the InfoWindow is opened with an anchor, the anchor's position will be used instead.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindowOptions"
      },
      "zIndex": {
        "!type": "number",
        "!doc": "All InfoWindows are displayed on the map in order of their zIndex, with higher values displaying in front of InfoWindows with lower values. By default, InfoWindows are displayed according to their latitude, with InfoWindows of lower latitudes appearing in front of InfoWindows at higher latitudes. InfoWindows are always displayed in front of markers.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindowOptions"
      }
    },
    "PolylineOptions": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions",
      "clickable": {
        "!type": "bool",
        "!doc": "Indicates whether this Polyline handles mouse events. Defaults to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "draggable": {
        "!type": "bool",
        "!doc": "If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging. Defaults to false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "editable": {
        "!type": "bool",
        "!doc": "If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. Defaults to false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "geodesic": {
        "!type": "bool",
        "!doc": "When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth. When false, edges of the polygon are rendered as straight lines in screen space. Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions are maintained relative to the surface of the earth. Defaults to false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "icons": {
        "!type": "+Array<IconSequence>",
        "!doc": "The icons to be rendered along the polyline.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "Map on which to display Polyline.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "path": {
        "!type": "+MVCArray<LatLng>",
        "!doc": "The ordered sequence of coordinates of the Polyline. This path may be specified using either a simple array of LatLngs, or an MVCArray of LatLngs. Note that if you pass a simple array, it will be converted to an MVCArray Inserting or removing LatLngs in the MVCArray will automatically update the polyline on the map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "strokeColor": {
        "!type": "string",
        "!doc": "The stroke color. All CSS3 colors are supported except for extended named colors.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "strokeOpacity": {
        "!type": "number",
        "!doc": "The stroke opacity between 0.0 and 1.0.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "strokeWeight": {
        "!type": "number",
        "!doc": "The stroke width in pixels.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "visible": {
        "!type": "bool",
        "!doc": "Whether this polyline is visible on the map. Defaults to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      },
      "zIndex": {
        "!type": "number",
        "!doc": "The zIndex compared to other polys.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolylineOptions"
      }
    },
    "IconSequence": {
      "!doc": "Describes how icons are to be rendered on a line.  If your polyline is geodesic, then the distances specified for both offset and repeat are calculated in meters by default. Setting either offset or repeat to a pixel value will cause the distances to be calculated in pixels on the screen.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#IconSequence",
      "fixedRotation": {
        "!type": "bool",
        "!doc": "If true, each icon in the sequence has the same fixed rotation regardless of the angle of the edge on which it lies. Defaults to false, in which case each icon in the sequence is rotated to align with its edge.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#IconSequence"
      },
      "icon": {
        "!type": "+Symbol",
        "!doc": "The icon to render on the line.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#IconSequence"
      },
      "offset": {
        "!type": "string",
        "!doc": "The distance from the start of the line at which an icon is to be rendered. This distance may be expressed as a percentage of line's length (e.g. '50%') or in pixels (e.g. '50px'). Defaults to '100%'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#IconSequence"
      },
      "repeat": {
        "!type": "string",
        "!doc": "The distance between consecutive icons on the line. This distance may be expressed as a percentage of the line's length (e.g. '50%') or in pixels (e.g. '50px'). To disable repeating of the icon, specify '0'. Defaults to '0'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#IconSequence"
      }
    },
    "PolygonOptions": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions",
      "clickable": {
        "!type": "bool",
        "!doc": "Indicates whether this Polygon handles mouse events. Defaults to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "draggable": {
        "!type": "bool",
        "!doc": "If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging. Defaults to false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "editable": {
        "!type": "bool",
        "!doc": "If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. Defaults to false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "fillColor": {
        "!type": "string",
        "!doc": "The fill color. All CSS3 colors are supported except for extended named colors.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "fillOpacity": {
        "!type": "number",
        "!doc": "The fill opacity between 0.0 and 1.0",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "geodesic": {
        "!type": "bool",
        "!doc": "When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth. When false, edges of the polygon are rendered as straight lines in screen space. Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions are maintained relative to the surface of the earth. Defaults to false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "Map on which to display Polygon.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "paths": {
        "!type": "+MVCArray<MVCArray<LatLng>>",
        "!doc": "The ordered sequence of coordinates that designates a closed loop. Unlike polylines, a polygon may consist of one or more paths. As a result, the paths property may specify one or more arrays of LatLng coordinates. Paths are closed automatically; do not repeat the first vertex of the path as the last vertex. Simple polygons may be defined using a single array of LatLngs. More complex polygons may specify an array of arrays. Any simple arrays are converted into MVCArrays. Inserting or removing LatLngs from the MVCArray will automatically update the polygon on the map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "strokeColor": {
        "!type": "string",
        "!doc": "The stroke color. All CSS3 colors are supported except for extended named colors.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "strokeOpacity": {
        "!type": "number",
        "!doc": "The stroke opacity between 0.0 and 1.0",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "strokePosition": {
        "!type": "+StrokePosition",
        "!doc": "The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "strokeWeight": {
        "!type": "number",
        "!doc": "The stroke width in pixels.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "visible": {
        "!type": "bool",
        "!doc": "Whether this polygon is visible on the map. Defaults to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      },
      "zIndex": {
        "!type": "number",
        "!doc": "The zIndex compared to other polys.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolygonOptions"
      }
    },
    "PolyMouseEvent": {
      "!doc": "This object is returned from mouse events on polylines and polygons.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolyMouseEvent",
      "edge": {
        "!type": "number",
        "!doc": "The index of the edge within the path beneath the cursor when the event occurred, if the event occurred on a mid-point on an editable polygon.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolyMouseEvent"
      },
      "path": {
        "!type": "number",
        "!doc": "The index of the path beneath the cursor when the event occurred, if the event occurred on a vertex and the polygon is editable. Otherwise undefined.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolyMouseEvent"
      },
      "vertex": {
        "!type": "number",
        "!doc": "The index of the vertex beneath the cursor when the event occurred, if the event occurred on a vertex and the polyline or polygon is editable. If the event does not occur on a vertex, the value is undefined.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PolyMouseEvent"
      }
    },
    "RectangleOptions": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions",
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "The bounds.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "clickable": {
        "!type": "bool",
        "!doc": "Indicates whether this Rectangle handles mouse events. Defaults to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "draggable": {
        "!type": "bool",
        "!doc": "If set to true, the user can drag this rectangle over the map. Defaults to false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "editable": {
        "!type": "bool",
        "!doc": "If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge. Defaults to false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "fillColor": {
        "!type": "string",
        "!doc": "The fill color. All CSS3 colors are supported except for extended named colors.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "fillOpacity": {
        "!type": "number",
        "!doc": "The fill opacity between 0.0 and 1.0",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "Map on which to display Rectangle.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "strokeColor": {
        "!type": "string",
        "!doc": "The stroke color. All CSS3 colors are supported except for extended named colors.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "strokeOpacity": {
        "!type": "number",
        "!doc": "The stroke opacity between 0.0 and 1.0",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "strokePosition": {
        "!type": "+StrokePosition",
        "!doc": "The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "strokeWeight": {
        "!type": "number",
        "!doc": "The stroke width in pixels.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "visible": {
        "!type": "bool",
        "!doc": "Whether this rectangle is visible on the map. Defaults to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      },
      "zIndex": {
        "!type": "number",
        "!doc": "The zIndex compared to other polys.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RectangleOptions"
      }
    },
    "CircleOptions": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions",
      "center": {
        "!type": "+google.maps.LatLng",
        "!doc": "The center",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "clickable": {
        "!type": "bool",
        "!doc": "Indicates whether this Circle handles mouse events. Defaults to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "draggable": {
        "!type": "bool",
        "!doc": "If set to true, the user can drag this circle over the map. Defaults to false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "editable": {
        "!type": "bool",
        "!doc": "If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle. Defaults to false.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "fillColor": {
        "!type": "string",
        "!doc": "The fill color. All CSS3 colors are supported except for extended named colors.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "fillOpacity": {
        "!type": "number",
        "!doc": "The fill opacity between 0.0 and 1.0",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "Map on which to display Circle.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "radius": {
        "!type": "number",
        "!doc": "The radius in meters on the Earth's surface",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "strokeColor": {
        "!type": "string",
        "!doc": "The stroke color. All CSS3 colors are supported except for extended named colors.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "strokeOpacity": {
        "!type": "number",
        "!doc": "The stroke opacity between 0.0 and 1.0",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "strokePosition": {
        "!type": "+StrokePosition",
        "!doc": "The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "strokeWeight": {
        "!type": "number",
        "!doc": "The stroke width in pixels.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "visible": {
        "!type": "bool",
        "!doc": "Whether this circle is visible on the map. Defaults to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      },
      "zIndex": {
        "!type": "number",
        "!doc": "The zIndex compared to other polys.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CircleOptions"
      }
    },
    "StrokePosition": {
      "!doc": "The possible positions of the stroke on a polygon.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StrokePosition"
    },
    "GroundOverlayOptions": {
      "!doc": "This object defines the properties that can be set on a GroundOverlay object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlayOptions",
      "clickable": {
        "!type": "bool",
        "!doc": "If true, the ground overlay can receive mouse events.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlayOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "The map on which to display the overlay.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlayOptions"
      },
      "opacity": {
        "!type": "number",
        "!doc": "The opacity of the overlay, expressed as a number between 0 and 1. Optional. Defaults to 1.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlayOptions"
      }
    },
    "MapPanes": {
      "!doc": "This object contains the DOM elements in which overlays are rendered. They are listed below with 'Pane 0' at the bottom and 'Pane 4' at the top.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapPanes",
      "floatPane": {
        "!type": "+Node",
        "!doc": "This pane contains the info window. It is above all map overlays. (Pane 4).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapPanes"
      },
      "mapPane": {
        "!type": "+Node",
        "!doc": "This pane is the lowest pane and is above the tiles. It may not receive DOM events. (Pane 0).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapPanes"
      },
      "markerLayer": {
        "!type": "+Node",
        "!doc": "This pane contains markers. It may not receive DOM events. (Pane 2).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapPanes"
      },
      "overlayLayer": {
        "!type": "+Node",
        "!doc": "This pane contains polylines, polygons, ground overlays and tile layer overlays. It may not receive DOM events. (Pane 1).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapPanes"
      },
      "overlayMouseTarget": {
        "!type": "+Node",
        "!doc": "This pane contains elements that receive DOM events. (Pane 3).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapPanes"
      }
    },
    "MapCanvasProjection": {
      "!doc": "This object is made available to the OverlayView from within the draw method. It is not guaranteed to be initialized until draw is called.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapCanvasProjection",
      "prototype": {
        "fromContainerPixelToLatLng": {
          "!type": "fn(pixel: +google.maps.Point, nowrap?: bool) -> +google.maps.LatLng",
          "!doc": "Computes the geographical coordinates from pixel coordinates in the map's container.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapCanvasProjection"
        },
        "fromDivPixelToLatLng": {
          "!type": "fn(pixel: +google.maps.Point, nowrap?: bool) -> +google.maps.LatLng",
          "!doc": "Computes the geographical coordinates from pixel coordinates in the div that holds the draggable map.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapCanvasProjection"
        },
        "fromLatLngToContainerPixel": {
          "!type": "fn(latLng: +google.maps.LatLng) -> +google.maps.Point",
          "!doc": "Computes the pixel coordinates of the given geographical location in the map's container element.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapCanvasProjection"
        },
        "fromLatLngToDivPixel": {
          "!type": "fn(latLng: +google.maps.LatLng) -> +google.maps.Point",
          "!doc": "Computes the pixel coordinates of the given geographical location in the DOM element that holds the draggable map.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapCanvasProjection"
        },
        "getWorldWidth": {
          "!type": "fn() -> number",
          "!doc": "The width of the world in pixels in the current zoom level. For projections with a heading angle of either 90 or 270 degrees, this corresponds to the pixel span in the Y-axis.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapCanvasProjection"
        }
      }
    },
    "GeocoderRequest": {
      "!doc": "The specification for a geocoding request to be sent to the Geocoder.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderRequest",
      "address": {
        "!type": "string",
        "!doc": "Address. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderRequest"
      },
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "LatLngBounds within which to search. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderRequest"
      },
      "componentRestrictions": {
        "!type": "+GeocoderComponentRestrictions",
        "!doc": "Components are used to restrict results to a specific area. A filter consists of one or more of: route, locality, administrativeArea, postalCode, country. Only the results that match all the filters will be returned. Filter values support the same methods of spelling correction and partial matching as other geocoding requests. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderRequest"
      },
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "LatLng about which to search. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderRequest"
      },
      "region": {
        "!type": "string",
        "!doc": "Country code used to bias the search, specified as a Unicode region subtag / CLDR identifier. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderRequest"
      }
    },
    "GeocoderComponentRestrictions": {
      "!doc": "GeocoderComponentRestrictions represent a set of filters that resolve to a specific area. For details on how this works, see Geocoding Component Filtering.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderComponentRestrictions",
      "administrativeArea": {
        "!type": "string",
        "!doc": "Matches all the administrative_area levels. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderComponentRestrictions"
      },
      "country": {
        "!type": "string",
        "!doc": "Matches a country name or a two letter ISO 3166-1 country code. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderComponentRestrictions"
      },
      "locality": {
        "!type": "string",
        "!doc": "Matches against both locality and sublocality types. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderComponentRestrictions"
      },
      "postalCode": {
        "!type": "string",
        "!doc": "Matches postal_code and postal_code_prefix. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderComponentRestrictions"
      },
      "route": {
        "!type": "string",
        "!doc": "Matches the long or short name of a route. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderComponentRestrictions"
      }
    },
    "GeocoderResult": {
      "!doc": "A single geocoder result retrieved from the geocode server. A geocode request may return multiple result objects. Note that though this result is \"JSON-like,\" it is not strictly JSON, as it indirectly includes a LatLng object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderResult",
      "address_components": {
        "!type": "+Array<GeocoderAddressComponent>",
        "!doc": "An array of GeocoderAddressComponents",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderResult"
      },
      "formatted_address": {
        "!type": "string",
        "!doc": "A string containing the human-readable address of this location.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderResult"
      },
      "geometry": {
        "!type": "+GeocoderGeometry",
        "!doc": "A GeocoderGeometry object",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderResult"
      },
      "partial_match": {
        "!type": "bool",
        "!doc": "Whether the geocoder did not return an exact match for the original request, though it was able to match part of the requested address.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderResult"
      },
      "postcode_localities": {
        "!type": "+Array<string>",
        "!doc": "An array of strings denoting all the localities contained in a postal code. This is only present when the result is a postal code that contains multiple localities.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderResult"
      },
      "types": {
        "!type": "+Array<string>",
        "!doc": "An array of strings denoting the type of the returned geocoded element. For a list of possible strings, refer to the  Address Component Types section of the Developer's Guide.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderResult"
      }
    },
    "GeocoderAddressComponent": {
      "!doc": "A single address component within a GeocoderResult. A full address may consist of multiple address components.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderAddressComponent",
      "long_name": {
        "!type": "string",
        "!doc": "The full text of the address component",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderAddressComponent"
      },
      "short_name": {
        "!type": "string",
        "!doc": "The abbreviated, short text of the given address component",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderAddressComponent"
      },
      "types": {
        "!type": "+Array<string>",
        "!doc": "An array of strings denoting the type of this address component. A list of valid types can be found here",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderAddressComponent"
      }
    },
    "GeocoderGeometry": {
      "!doc": "Geometry information about this GeocoderResult",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderGeometry",
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "The precise bounds of this GeocoderResult, if applicable",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderGeometry"
      },
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The latitude/longitude coordinates of this result",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderGeometry"
      },
      "location_type": {
        "!type": "+google.maps.GeocoderLocationType",
        "!doc": "The type of location returned in location",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderGeometry"
      },
      "viewport": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "The bounds of the recommended viewport for displaying this GeocoderResult",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderGeometry"
      }
    },
    "DirectionsRendererOptions": {
      "!doc": "This object defines the properties that can be set on a DirectionsRenderer object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions",
      "directions": {
        "!type": "+DirectionsResult",
        "!doc": "The directions to display on the map and/or in a <div> panel, retrieved as a DirectionsResult object from DirectionsService.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "draggable": {
        "!type": "bool",
        "!doc": "If true, allows the user to drag and modify the paths of routes rendered by this DirectionsRenderer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "hideRouteList": {
        "!type": "bool",
        "!doc": "This property indicates whether the renderer should provide UI to select amongst alternative routes. By default, this flag is false and a user-selectable list of routes will be shown in the directions' associated panel. To hide that list, set hideRouteList to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "infoWindow": {
        "!type": "+google.maps.InfoWindow",
        "!doc": "The InfoWindow in which to render text information when a marker is clicked. Existing info window content will be overwritten and its position moved. If no info window is specified, the DirectionsRenderer will create and use its own info window. This property will be ignored if suppressInfoWindows is set to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "Map on which to display the directions.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "markerOptions": {
        "!type": "+MarkerOptions",
        "!doc": "Options for the markers. All markers rendered by the DirectionsRenderer will use these options.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "panel": {
        "!type": "+Node",
        "!doc": "The <div> in which to display the directions steps.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "polylineOptions": {
        "!type": "+PolylineOptions",
        "!doc": "Options for the polylines. All polylines rendered by the DirectionsRenderer will use these options.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "preserveViewport": {
        "!type": "bool",
        "!doc": "By default, the input map is centered and zoomed to the bounding box of this set of directions. If this option is set to true, the viewport is left unchanged, unless the map's center and zoom were never set.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "routeIndex": {
        "!type": "number",
        "!doc": "The index of the route within the DirectionsResult object. The default value is 0.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "suppressBicyclingLayer": {
        "!type": "bool",
        "!doc": "Suppress the rendering of the BicyclingLayer when bicycling directions are requested.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "suppressInfoWindows": {
        "!type": "bool",
        "!doc": "Suppress the rendering of info windows.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "suppressMarkers": {
        "!type": "bool",
        "!doc": "Suppress the rendering of markers.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      },
      "suppressPolylines": {
        "!type": "bool",
        "!doc": "Suppress the rendering of polylines.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRendererOptions"
      }
    },
    "DirectionsRequest": {
      "!doc": "A directions query to be sent to the DirectionsService.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest",
      "avoidFerries": {
        "!type": "bool",
        "!doc": "If true, instructs the Directions service to avoid ferries where possible. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "avoidHighways": {
        "!type": "bool",
        "!doc": "If true, instructs the Directions service to avoid highways where possible. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "avoidTolls": {
        "!type": "bool",
        "!doc": "If true, instructs the Directions service to avoid toll roads where possible. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "destination": {
        "!type": "+google.maps.LatLng",
        "!doc": "Location of destination. This can be specified as either a string to be geocoded or a LatLng. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "durationInTraffic": {
        "!type": "bool",
        "!doc": "Whether or not we should provide trip duration based on current traffic conditions. Only available to Maps API for Work customers.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "optimizeWaypoints": {
        "!type": "bool",
        "!doc": "If set to true, the DirectionService will attempt to re-order the supplied intermediate waypoints to minimize overall cost of the route. If waypoints are optimized, inspect DirectionsRoute.waypoint_order in the response to determine the new ordering.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "origin": {
        "!type": "+google.maps.LatLng",
        "!doc": "Location of origin. This can be specified as either a string to be geocoded or a LatLng. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "provideRouteAlternatives": {
        "!type": "bool",
        "!doc": "Whether or not route alternatives should be provided. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "region": {
        "!type": "string",
        "!doc": "Region code used as a bias for geocoding requests. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "transitOptions": {
        "!type": "+TransitOptions",
        "!doc": "Settings that apply only to requests where travelMode is TRANSIT. This object will have no effect for other travel modes.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "travelMode": {
        "!type": "+google.maps.TravelMode",
        "!doc": "Type of routing requested. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "unitSystem": {
        "!type": "+google.maps.UnitSystem",
        "!doc": "Preferred unit system to use when displaying distance. Defaults to the unit system used in the country of origin.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      },
      "waypoints": {
        "!type": "+Array<DirectionsWaypoint>",
        "!doc": "Array of intermediate waypoints. Directions will be calculated from the origin to the destination by way of each waypoint in this array. The maximum allowed waypoints is 8, plus the origin, and destination. Maps API for Business customers are allowed 23 waypoints, plus the origin, and destination. Waypoints are not supported for transit directions. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRequest"
      }
    },
    "TransitOptions": {
      "!doc": "The TransitOptions object to be included in a DirectionsRequest when the travel mode is set to TRANSIT.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitOptions",
      "arrivalTime": {
        "!type": "+Date",
        "!doc": "The desired arrival time for the route, specified as a Date object. The Date object measures time in milliseconds since 1 January 1970. If arrival time is specified, departure time is ignored.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitOptions"
      },
      "departureTime": {
        "!type": "+Date",
        "!doc": "The desired departure time for the route, specified as a Date object. The Date object measures time in milliseconds since 1 January 1970. If neither departure time nor arrival time is specified, the time is assumed to be \"now\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitOptions"
      },
      "modes": {
        "!type": "+Array<TransitMode>",
        "!doc": "One or more preferred modes of transit, such as bus or train. If no preference is given, the API returns the default best route.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitOptions"
      },
      "routingPreference": {
        "!type": "+google.maps.TransitRoutePreference",
        "!doc": "A preference that can bias the choice of transit route, such as less walking. If no preference is given, the API returns the default best route.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitOptions"
      }
    },
    "TransitFare": {
      "!doc": "A fare of a DirectionsRoute  consisting of value and currency.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitFare"
    },
    "DirectionsWaypoint": {
      "!doc": "A DirectionsWaypoint represents a location between origin and destination through which the trip should be routed.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsWaypoint",
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "Waypoint location. Can be an address string or LatLng. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsWaypoint"
      },
      "stopover": {
        "!type": "bool",
        "!doc": "If true, indicates that this waypoint is a stop between the origin and destination. This has the effect of splitting the route into two. This value is true by default. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsWaypoint"
      }
    },
    "DirectionsResult": {
      "!doc": "The directions response retrieved from the directions server. You can render these using a DirectionsRenderer or parse this object and render it yourself. You must display the warnings and copyrights as noted in the Maps API terms of service. Note that though this result is \"JSON-like,\" it is not strictly JSON, as it indirectly includes LatLng objects.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsResult",
      "routes": {
        "!type": "+Array<DirectionsRoute>",
        "!doc": "An array of DirectionsRoutes, each of which contains information about the legs and steps of which it is composed. There will only be one route unless the DirectionsRequest was made with provideRouteAlternatives set to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsResult"
      }
    },
    "DirectionsRoute": {
      "!doc": "A single route containing a set of legs in a DirectionsResult. Note that though this object is \"JSON-like,\" it is not strictly JSON, as it directly and indirectly includes LatLng objects.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRoute",
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "The bounds for this route.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRoute"
      },
      "copyrights": {
        "!type": "string",
        "!doc": "Copyrights text to be displayed for this route.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRoute"
      },
      "fare": {
        "!type": "+TransitFare",
        "!doc": "The total fare for the whole transit trip. Only applicable to transit requests.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRoute"
      },
      "legs": {
        "!type": "+Array<DirectionsLeg>",
        "!doc": "An array of DirectionsLegs, each of which contains information about the steps of which it is composed. There will be one leg for each waypoint or destination specified. So a route with no waypoints will contain one DirectionsLeg and a route with one waypoint will contain two.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRoute"
      },
      "overview_path": {
        "!type": "+Array<LatLng>",
        "!doc": "An array of LatLngs representing the entire course of this route. The path is simplified in order to make it suitable in contexts where a small number of vertices is required (such as Static Maps API URLs).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRoute"
      },
      "overview_polyline": {
        "!type": "string",
        "!doc": "An encoded polyline representation of the route in overview_path. This polyline is an approximate (smoothed) path of the resulting directions.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRoute"
      },
      "warnings": {
        "!type": "+Array<string>",
        "!doc": "Warnings to be displayed when showing these directions.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRoute"
      },
      "waypoint_order": {
        "!type": "+Array<number>",
        "!doc": "If optimizeWaypoints was set to true, this field will contain the re-ordered permutation of the input waypoints. For example, if the input was: ��Origin: Los Angeles ��Waypoints: Dallas, Bangor, Phoenix ��Destination: New York and the optimized output was ordered as follows: ��Origin: Los Angeles ��Waypoints: Phoenix, Dallas, Bangor ��Destination: New York then this field will be an Array containing the values [2, 0, 1]. Note that the numbering of waypoints is zero-based. If any of the input waypoints has stopover set to false, this field will be empty, since route optimization is not available for such queries.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRoute"
      }
    },
    "DirectionsLeg": {
      "!doc": "A single leg consisting of a set of steps in a DirectionsResult. Some fields in the leg may not be returned for all requests. Note that though this result is \"JSON-like,\" it is not strictly JSON, as it directly and indirectly includes LatLng objects.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg",
      "arrival_time": {
        "!type": "+Time",
        "!doc": "An estimated arrival time for this leg. Only applicable for TRANSIT requests.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      },
      "departure_time": {
        "!type": "+Time",
        "!doc": "An estimated departure time for this leg. Only applicable for TRANSIT requests.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      },
      "distance": {
        "!type": "+Distance",
        "!doc": "The total distance covered by this leg. This property may be undefined as the distance may be unknown.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      },
      "duration": {
        "!type": "+Duration",
        "!doc": "The total duration of this leg. This property may be undefined as the duration may be unknown.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      },
      "duration_in_traffic": {
        "!type": "+Duration",
        "!doc": "The total duration of this leg, taking into account current traffic conditions. This property may be undefined as the duration may be unknown. Only available to Maps API for Work customers when durationInTraffic is set to true when making the request.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      },
      "end_address": {
        "!type": "string",
        "!doc": "The address of the destination of this leg.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      },
      "end_location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The DirectionsService calculates directions between locations by using the nearest transportation option (usually a road) at the start and end locations. end_location indicates the actual geocoded destination, which may be different than the end_location of the last step if, for example, the road is not near the destination of this leg.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      },
      "start_address": {
        "!type": "string",
        "!doc": "The address of the origin of this leg.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      },
      "start_location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The DirectionsService calculates directions between locations by using the nearest transportation option (usually a road) at the start and end locations. start_location indicates the actual geocoded origin, which may be different than the start_location of the first step if, for example, the road is not near the origin of this leg.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      },
      "steps": {
        "!type": "+Array<DirectionsStep>",
        "!doc": "An array of DirectionsSteps, each of which contains information about the individual steps in this leg.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      },
      "via_waypoints": {
        "!type": "+Array<LatLng>",
        "!doc": "An array of waypoints along this leg that were not specified in the original request, either as a result of a user dragging the polyline or selecting an alternate route.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsLeg"
      }
    },
    "DirectionsStep": {
      "!doc": "A single DirectionsStep in a DirectionsResult. Some fields may be undefined. Note that though this object is \"JSON-like,\" it is not strictly JSON, as it directly includes LatLng objects.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStep",
      "distance": {
        "!type": "+Distance",
        "!doc": "The distance covered by this step. This property may be undefined as the distance may be unknown.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStep"
      },
      "duration": {
        "!type": "+Duration",
        "!doc": "The typical time required to perform this step in seconds and in text form. This property may be undefined as the duration may be unknown.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStep"
      },
      "end_location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The ending location of this step.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStep"
      },
      "instructions": {
        "!type": "string",
        "!doc": "Instructions for this step.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStep"
      },
      "path": {
        "!type": "+Array<LatLng>",
        "!doc": "A sequence of LatLngs describing the course of this step.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStep"
      },
      "start_location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The starting location of this step.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStep"
      },
      "steps": {
        "!type": "+Array<DirectionsStep>",
        "!doc": "Sub-steps of this step. Specified for non-transit sections of transit routes.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStep"
      },
      "transit": {
        "!type": "+TransitDetails",
        "!doc": "Transit-specific details about this step. This property will be undefined unless the travel mode of this step is TRANSIT.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStep"
      },
      "travel_mode": {
        "!type": "+google.maps.TravelMode",
        "!doc": "The mode of travel used in this step.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStep"
      }
    },
    "Distance": {
      "!doc": "A representation of distance as a numeric value and a display string.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Distance",
      "text": {
        "!type": "string",
        "!doc": "A string representation of the distance value, using the UnitSystem specified in the request.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Distance"
      },
      "value": {
        "!type": "number",
        "!doc": "The distance in meters.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Distance"
      }
    },
    "Duration": {
      "!doc": "A representation of duration as a numeric value and a display string.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Duration",
      "text": {
        "!type": "string",
        "!doc": "A string representation of the duration value.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Duration"
      },
      "value": {
        "!type": "number",
        "!doc": "The duration in seconds.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Duration"
      }
    },
    "Time": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Time",
      "text": {
        "!type": "string",
        "!doc": "A string representing the time's value. The time is displayed in the time zone of the transit stop.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Time"
      },
      "time_zone": {
        "!type": "string",
        "!doc": "The time zone in which this stop lies. The value is the name of the time zone as defined in the IANA Time Zone Database, e.g. \"America/New_York\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Time"
      },
      "value": {
        "!type": "+Date",
        "!doc": "The time of this departure or arrival, specified as a JavaScript Date object.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Time"
      }
    },
    "TransitDetails": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitDetails",
      "arrival_stop": {
        "!type": "+TransitStop",
        "!doc": "The arrival stop of this transit step.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitDetails"
      },
      "arrival_time": {
        "!type": "+Time",
        "!doc": "The arrival time of this step, specified as a Time object.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitDetails"
      },
      "departure_stop": {
        "!type": "+TransitStop",
        "!doc": "The departure stop of this transit step.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitDetails"
      },
      "departure_time": {
        "!type": "+Time",
        "!doc": "The departure time of this step, specified as a Time object.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitDetails"
      },
      "headsign": {
        "!type": "string",
        "!doc": "The direction in which to travel on this line, as it is marked on the vehicle or at the departure stop.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitDetails"
      },
      "headway": {
        "!type": "number",
        "!doc": "The expected number of seconds between equivalent vehicles at this stop.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitDetails"
      },
      "line": {
        "!type": "+TransitLine",
        "!doc": "Details about the transit line used in this step.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitDetails"
      },
      "num_stops": {
        "!type": "number",
        "!doc": "The number of stops on this step. Includes the arrival stop, but not the departure stop.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitDetails"
      }
    },
    "TransitStop": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitStop",
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The location of this stop.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitStop"
      },
      "name": {
        "!type": "string",
        "!doc": "The name of this transit stop.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitStop"
      }
    },
    "TransitLine": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLine",
      "agencies": {
        "!type": "+Array<TransitAgency>",
        "!doc": "The transit agency that operates this transit line.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLine"
      },
      "color": {
        "!type": "string",
        "!doc": "The color commonly used in signage for this transit line, represented as a hex string.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLine"
      },
      "icon": {
        "!type": "string",
        "!doc": "The URL for an icon associated with this line.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLine"
      },
      "name": {
        "!type": "string",
        "!doc": "The full name of this transit line, e.g. \"8 Avenue Local\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLine"
      },
      "short_name": {
        "!type": "string",
        "!doc": "The short name of this transit line, e.g. \"E\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLine"
      },
      "text_color": {
        "!type": "string",
        "!doc": "The text color commonly used in signage for this transit line, represented as a hex string.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLine"
      },
      "url": {
        "!type": "string",
        "!doc": "The agency's URL which is specific to this transit line.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLine"
      },
      "vehicle": {
        "!type": "+TransitVehicle",
        "!doc": "The type of vehicle used, e.g. train or bus.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLine"
      }
    },
    "TransitAgency": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitAgency",
      "name": {
        "!type": "string",
        "!doc": "The name of this transit agency.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitAgency"
      },
      "phone": {
        "!type": "string",
        "!doc": "The transit agency's phone number.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitAgency"
      },
      "url": {
        "!type": "string",
        "!doc": "The transit agency's URL.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitAgency"
      }
    },
    "TransitVehicle": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitVehicle",
      "icon": {
        "!type": "string",
        "!doc": "A URL for an icon that corresponds to the type of vehicle used on this line.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitVehicle"
      },
      "local_icon": {
        "!type": "string",
        "!doc": "A URL for an icon that corresponds to the type of vehicle used in this region instead of the more general icon.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitVehicle"
      },
      "name": {
        "!type": "string",
        "!doc": "A name for this type of TransitVehicle, e.g. \"Train\" or \"Bus\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitVehicle"
      },
      "type": {
        "!type": "+VehicleType",
        "!doc": "The type of vehicle used, e.g. train, bus, or ferry.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitVehicle"
      }
    },
    "VehicleType": {
      "!doc": "Possible values for vehicle types. These values are specifed as strings, i.e. 'BUS' or 'TRAIN'.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#VehicleType"
    },
    "LocationElevationRequest": {
      "!doc": "An elevation request sent by the ElevationService containing the list of discrete coordinates (LatLngs) for which to return elevation data.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LocationElevationRequest",
      "locations": {
        "!type": "+Array<LatLng>",
        "!doc": "The discrete locations for which to retrieve elevations.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LocationElevationRequest"
      }
    },
    "PathElevationRequest": {
      "!doc": "An elevation query sent by the ElevationService containing the path along which to return sampled data. This request defines a continuous path along the earth along which elevation samples should be taken at evenly-spaced distances. All paths from vertex to vertex use segments of the great circle between those two points.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PathElevationRequest",
      "path": {
        "!type": "+Array<LatLng>",
        "!doc": "The path along which to collect elevation values.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PathElevationRequest"
      },
      "samples": {
        "!type": "number",
        "!doc": "Required. The number of equidistant points along the given path for which to retrieve elevation data, including the endpoints. The number of samples must be a value between 2 and 512 inclusive.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PathElevationRequest"
      }
    },
    "ElevationResult": {
      "!doc": "The result of an ElevationService request, consisting of the set of elevation coordinates and their elevation values. Note that a single request may produce multiple ElevationResults.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ElevationResult",
      "elevation": {
        "!type": "number",
        "!doc": "The elevation of this point on Earth, in meters above sea level.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ElevationResult"
      },
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The location of this elevation result.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ElevationResult"
      },
      "resolution": {
        "!type": "number",
        "!doc": "The distance, in meters, between sample points from which the elevation was interpolated. This property will be missing if the resolution is not known. Note that elevation data becomes more coarse (larger resolution values) when multiple points are passed. To obtain the most accurate elevation value for a point, it should be queried independently.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ElevationResult"
      }
    },
    "MaxZoomResult": {
      "!doc": "A MaxZoom result in JSON format retrieved from the MaxZoomService.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MaxZoomResult",
      "status": {
        "!type": "+google.maps.MaxZoomStatus",
        "!doc": "Status of the request.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MaxZoomResult"
      },
      "zoom": {
        "!type": "number",
        "!doc": "The maximum zoom level found at the given LatLng.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MaxZoomResult"
      }
    },
    "DistanceMatrixRequest": {
      "!doc": "A distance matrix query sent by the DistanceMatrixService containing arrays of origin and destination locations, and various options for computing metrics.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest",
      "avoidFerries": {
        "!type": "bool",
        "!doc": "If true, instructs the Distance Matrix service to avoid ferries where possible. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest"
      },
      "avoidHighways": {
        "!type": "bool",
        "!doc": "If true, instructs the Distance Matrix service to avoid highways where possible. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest"
      },
      "avoidTolls": {
        "!type": "bool",
        "!doc": "If true, instructs the Distance Matrix service to avoid toll roads where possible. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest"
      },
      "destinations": {
        "!type": "+Array<LatLng>",
        "!doc": "An array containing destination address strings and/or LatLngs, to which to calculate distance and time. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest"
      },
      "durationInTraffic": {
        "!type": "bool",
        "!doc": "Whether or not we should provide trip durations based on current traffic conditions. Only available to Maps API for Work customers.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest"
      },
      "origins": {
        "!type": "+Array<LatLng>",
        "!doc": "An array containing origin address strings and/or LatLngs, from which to calculate distance and time. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest"
      },
      "region": {
        "!type": "string",
        "!doc": "Region code used as a bias for geocoding requests. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest"
      },
      "transitOptions": {
        "!type": "+TransitOptions",
        "!doc": "Settings that apply only to requests where travelMode is TRANSIT. This object will have no effect for other travel modes.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest"
      },
      "travelMode": {
        "!type": "+google.maps.TravelMode",
        "!doc": "Type of routing requested. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest"
      },
      "unitSystem": {
        "!type": "+google.maps.UnitSystem",
        "!doc": "Preferred unit system to use when displaying distance. Optional; defaults to metric.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixRequest"
      }
    },
    "DistanceMatrixResponse": {
      "!doc": "The response to a DistanceMatrixService request, consisting of the formatted origin and destination addresses, and a sequence of DistanceMatrixResponseRows, one for each corresponding origin address.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponse",
      "destinationAddresses": {
        "!type": "+Array<string>",
        "!doc": "The formatted destination addresses.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponse"
      },
      "originAddresses": {
        "!type": "+Array<string>",
        "!doc": "The formatted origin addresses.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponse"
      },
      "rows": {
        "!type": "+Array<DistanceMatrixResponseRow>",
        "!doc": "The rows of the matrix, corresponding to the origin addresses.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponse"
      }
    },
    "DistanceMatrixResponseRow": {
      "!doc": "A row of the response to a DistanceMatrixService request, consisting of a sequence of DistanceMatrixResponseElements, one for each corresponding destination address.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponseRow",
      "elements": {
        "!type": "+Array<DistanceMatrixResponseElement>",
        "!doc": "The row's elements, corresponding to the destination addresses.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponseRow"
      }
    },
    "DistanceMatrixResponseElement": {
      "!doc": "A single element of a response to a DistanceMatrixService request, which contains the duration and distance from one origin to one destination.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponseElement",
      "distance": {
        "!type": "+Distance",
        "!doc": "The distance for this origin-destination pairing. This property may be undefined as the distance may be unknown.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponseElement"
      },
      "duration": {
        "!type": "+Duration",
        "!doc": "The duration for this origin-destination pairing. This property may be undefined as the duration may be unknown.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponseElement"
      },
      "fare": {
        "!type": "+TransitFare",
        "!doc": "The total fare for this origin-destination pairing. Only applicable to transit requests.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponseElement"
      },
      "status": {
        "!type": "+google.maps.DistanceMatrixElementStatus",
        "!doc": "The status of this particular origin-destination pairing.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixResponseElement"
      }
    },
    "Attribution": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Attribution",
      "iosDeepLinkId": {
        "!type": "string",
        "!doc": "The iOS deep link to associate with this place when a user saves the place. When the user views the place in an iOS app, this URL will serve as the link on the source string. If there is no deep link or the app that handles the deep link is not present, the webURL will be used instead.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Attribution"
      },
      "source": {
        "!type": "string",
        "!doc": "The source (origin) to associate with this place when it is saved by a user. For example, this could be the name of your website or application. The user who saved the place will see this source when they view the place in Google Maps. source is required for an Attribution to be considered valid. If it is not provided an error will be thrown.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Attribution"
      },
      "webUrl": {
        "!type": "string",
        "!doc": "The URL (http or https) of the page to associate with this place when a user saves the place. When the user views the place in a desktop or Android app, this URL will serve as the link on the source string. When the user views the place in an iOS app, and there is no deep link provided or the app that handles the deep link is not present, this URL will serve as the link on the source string.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Attribution"
      }
    },
    "Place": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Place",
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The LatLng of the entity described by this Place. This must be provided for the Place to be considered valid.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Place"
      },
      "placeId": {
        "!type": "string",
        "!doc": "The place ID of the place (such as a business or point of interest). The place ID is a unique identifier of a place in the Google Maps database. Note that the placeId is the most accurate way of identifying a place. If possible, you should specify the placeId rather than a placeQuery. A place ID can be retrieved from any request to the Places API, such as a  TextSearch.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Place"
      },
      "query": {
        "!type": "string",
        "!doc": "A search query describing the place (such as a business or point of interest). An example query would be \"Quay, Upper Level, Overseas Passenger Terminal 5 Hickson Road, The Rocks NSW\". If possible, you should specify the placeId rather than a placeQuery. The API does not guarantee the accuracy of resolving the query string to a place. If both the placeId and placeQuery are provided, an error is thrown.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Place"
      }
    },
    "SaveWidgetOptions": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SaveWidgetOptions",
      "attribution": {
        "!type": "+Attribution",
        "!doc": "Contains all the information needed to identify your application as the source of a save to Google Maps. The SaveWidget will show this information when a user saves the associated Place.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SaveWidgetOptions"
      },
      "place": {
        "!type": "+Place",
        "!doc": "Describes a Place that a user can save from your application to their personalized map. In this context, 'place' means a business, point of interest or geographic location.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SaveWidgetOptions"
      }
    },
    "MapType": {
      "!doc": "This interface defines the map type, and is typically used for custom map types. Immutable.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapType",
      "alt": {
        "!type": "string",
        "!doc": "Alt text to display when this MapType's button is hovered over in the MapTypeControl. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapType"
      },
      "maxZoom": {
        "!type": "number",
        "!doc": "The maximum zoom level for the map when displaying this MapType. Required for base MapTypes, ignored for overlay MapTypes.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapType"
      },
      "minZoom": {
        "!type": "number",
        "!doc": "The minimum zoom level for the map when displaying this MapType. Optional; defaults to 0.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapType"
      },
      "name": {
        "!type": "string",
        "!doc": "Name to display in the MapTypeControl. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapType"
      },
      "projection": {
        "!type": "+Projection",
        "!doc": "The Projection used to render this MapType. Optional; defaults to Mercator.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapType"
      },
      "radius": {
        "!type": "number",
        "!doc": "Radius of the planet for the map, in meters. Optional; defaults to Earth's equatorial radius of 6378137 meters.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapType"
      },
      "tileSize": {
        "!type": "+google.maps.Size",
        "!doc": "The dimensions of each tile. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapType"
      },
      "prototype": {
        "getTile": {
          "!type": "fn(tileCoord: +google.maps.Point, zoom: number, ownerDocument: +Document) -> +Node",
          "!doc": "Returns a tile for the given tile coordinate (x, y) and zoom level. This tile will be appended to the given ownerDocument. Not available for base map types.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapType"
        },
        "releaseTile": {
          "!type": "fn(tile: +Node)",
          "!doc": "Releases the given tile, performing any necessary cleanup. The provided tile will have already been removed from the document. Optional.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapType"
        }
      }
    },
    "Projection": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Projection",
      "prototype": {
        "fromLatLngToPoint": {
          "!type": "fn(latLng: +google.maps.LatLng, point?: +google.maps.Point) -> +google.maps.Point",
          "!doc": "Translates from the LatLng cylinder to the Point plane. This interface specifies a function which implements translation from given LatLng values to world coordinates on the map projection. The Maps API calls this method when it needs to plot locations on screen. Projection objects must implement this method.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Projection"
        },
        "fromPointToLatLng": {
          "!type": "fn(pixel: +google.maps.Point, nowrap?: bool) -> +google.maps.LatLng",
          "!doc": "This interface specifies a function which implements translation from world coordinates on a map projection to LatLng values. The Maps API calls this method when it needs to translate actions on screen to positions on the map. Projection objects must implement this method.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Projection"
        }
      }
    },
    "ImageMapTypeOptions": {
      "!doc": "This class is used to create a MapType that renders image tiles.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapTypeOptions",
      "alt": {
        "!type": "string",
        "!doc": "Alt text to display when this MapType's button is hovered over in the MapTypeControl.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapTypeOptions"
      },
      "maxZoom": {
        "!type": "number",
        "!doc": "The maximum zoom level for the map when displaying this MapType.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapTypeOptions"
      },
      "minZoom": {
        "!type": "number",
        "!doc": "The minimum zoom level for the map when displaying this MapType. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapTypeOptions"
      },
      "name": {
        "!type": "string",
        "!doc": "Name to display in the MapTypeControl.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapTypeOptions"
      },
      "opacity": {
        "!type": "number",
        "!doc": "The opacity to apply to the tiles. The opacity should be specified as a float value between 0 and 1.0, where 0 is fully transparent and 1 is fully opaque.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapTypeOptions"
      },
      "tileSize": {
        "!type": "+google.maps.Size",
        "!doc": "The tile size.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapTypeOptions"
      },
      "prototype": {
        "getTileUrl": {
          "!type": "fn(coordinate: +google.maps.Point, zoom: number) -> string",
          "!doc": "Returns a string (URL) for given tile coordinate (x, y) and zoom level.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapTypeOptions"
        }
      }
    },
    "StyledMapTypeOptions": {
      "!doc": "This class is used to specify options when creating a StyledMapType. These options cannot be changed after the StyledMapType is instantiated.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapTypeOptions",
      "alt": {
        "!type": "string",
        "!doc": "Text to display when this MapType's button is hovered over in the map type control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapTypeOptions"
      },
      "maxZoom": {
        "!type": "number",
        "!doc": "The maximum zoom level for the map when displaying this MapType. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapTypeOptions"
      },
      "minZoom": {
        "!type": "number",
        "!doc": "The minimum zoom level for the map when displaying this MapType. Optional.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapTypeOptions"
      },
      "name": {
        "!type": "string",
        "!doc": "The name to display in the map type control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapTypeOptions"
      }
    },
    "MapTypeStyle": {
      "!doc": "The MapTypeStyle is a collection of selectors and stylers that define how the map should be styled. Selectors specify what map elements should be affected and stylers specify how those elements should be modified.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyle",
      "elementType": {
        "!type": "+MapTypeStyleElementType",
        "!doc": "Selects the element type to which a styler should be applied. An element type distinguishes between the different representations of a feature. Optional; if elementType is not specified, the value is assumed to be 'all'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyle"
      },
      "featureType": {
        "!type": "+MapTypeStyleFeatureType",
        "!doc": "Selects the feature, or group of features, to which a styler should be applied. Optional; if featureType is not specified, the value is assumed to be 'all'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyle"
      },
      "stylers": {
        "!type": "+Array<MapTypeStyler>",
        "!doc": "The style rules to apply to the selectors. The rules are applied to the map's elements in the order they are listed in this array.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyle"
      }
    },
    "MapTypeStyleFeatureType": {
      "!doc": "Possible values for feature types. Specify these values as strings, i.e. 'administrative' or 'poi.park'. Stylers applied to a parent feature type automatically apply to all child feature types. Note however that parent features may include some additional features that are not included in one of their child feature types.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyleFeatureType"
    },
    "MapTypeStyleElementType": {
      "!doc": "Each MapTypeStyleElementType distinguishes between the different representations of a feature.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyleElementType"
    },
    "MapTypeStyler": {
      "!doc": "A styler affects how a map's elements will be styled. Each MapTypeStyler should contain one and only one key. If more than one key is specified in a single MapTypeStyler, all but one will be ignored. For example: var rule = {hue: '#ff0000'}.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyler",
      "color": {
        "!type": "string",
        "!doc": "Sets the color of the feature. Valid values: An RGB hex string, i.e. '#ff0000'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyler"
      },
      "gamma": {
        "!type": "number",
        "!doc": "Modifies the gamma by raising the lightness to the given power. Valid values: Floating point numbers, [0.01, 10], with 1.0 representing no change.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyler"
      },
      "hue": {
        "!type": "string",
        "!doc": "Sets the hue of the feature to match the hue of the color supplied. Note that the saturation and lightness of the feature is conserved, which means that the feature will not match the color supplied exactly. Valid values: An RGB hex string, i.e. '#ff0000'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyler"
      },
      "invert_lightness": {
        "!type": "bool",
        "!doc": "A value of true will invert the lightness of the feature while preserving the hue and saturation.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyler"
      },
      "lightness": {
        "!type": "number",
        "!doc": "Shifts lightness of colors by a percentage of the original value if decreasing and a percentage of the remaining value if increasing. Valid values: [-100, 100].",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyler"
      },
      "saturation": {
        "!type": "number",
        "!doc": "Shifts the saturation of colors by a percentage of the original value if decreasing and a percentage of the remaining value if increasing. Valid values: [-100, 100].",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyler"
      },
      "visibility": {
        "!type": "string",
        "!doc": "Sets the visibility of the feature. Valid values: 'on', 'off' or 'simplifed'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyler"
      },
      "weight": {
        "!type": "number",
        "!doc": "Sets the weight of the feature, in pixels. Valid values: Integers greater than or equal to zero.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeStyler"
      }
    },
    "FusionTablesLayerOptions": {
      "!doc": "This object defines the properties that can be set on a FusionTablesLayer object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayerOptions",
      "clickable": {
        "!type": "bool",
        "!doc": "If true, the layer receives mouse events. Default value is true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayerOptions"
      },
      "heatmap": {
        "!type": "+FusionTablesHeatmap",
        "!doc": "Options which define the appearance of the layer as a heatmap.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayerOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "The map on which to display the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayerOptions"
      },
      "query": {
        "!type": "+FusionTablesQuery",
        "!doc": "Options defining the data to display.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayerOptions"
      },
      "styles": {
        "!type": "+Array<FusionTablesStyle>",
        "!doc": "An array of up to 5 style specifications, which control the appearance of features within the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayerOptions"
      },
      "suppressInfoWindows": {
        "!type": "bool",
        "!doc": "Suppress the rendering of info windows when layer features are clicked.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayerOptions"
      }
    },
    "FusionTablesQuery": {
      "!doc": "Specifies the data to retrieve from a Fusion Tables.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesQuery",
      "from": {
        "!type": "string",
        "!doc": "The ID of the Fusion Tables table to display. This ID can be found in the table's URL, as the value of the dsrcid parameter. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesQuery"
      },
      "limit": {
        "!type": "number",
        "!doc": "Limit on the number of results returned by the query.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesQuery"
      },
      "offset": {
        "!type": "number",
        "!doc": "Offset into the sorted results.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesQuery"
      },
      "orderBy": {
        "!type": "string",
        "!doc": "The method by which to sort the results. Accepts either of:   A column name. The column name may be suffixed with ASC or DESC (e.g. col2 DESC) to specify ascending or descending sort.   An ST_DISTANCE spatial relationship (sort by distance). A column and the coordinate from which to calculate distance must be passed, for example, orderBy: 'ST_DISTANCE(col1, LATLNG(1.2, 3.4))'.  ",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesQuery"
      },
      "select": {
        "!type": "string",
        "!doc": "A column, containing geographic features to be displayed on the map. See  Fusion Tables Setup in the Maps API documentation for information about valid columns.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesQuery"
      },
      "where": {
        "!type": "string",
        "!doc": "The SQL predicate to be applied to the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesQuery"
      }
    },
    "FusionTablesStyle": {
      "!doc": "Controls the appearance of a set of features within a FusionTablesLayer. Features which match the provided SQL predicate will be styled with the supplied options.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesStyle",
      "markerOptions": {
        "!type": "+FusionTablesMarkerOptions",
        "!doc": "Options which control the appearance of point features.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesStyle"
      },
      "polygonOptions": {
        "!type": "+FusionTablesPolygonOptions",
        "!doc": "Options which control the appearance of polygons.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesStyle"
      },
      "polylineOptions": {
        "!type": "+FusionTablesPolylineOptions",
        "!doc": "Options which control the appearance of polylines.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesStyle"
      },
      "where": {
        "!type": "string",
        "!doc": "The SQL predicate to be applied to the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesStyle"
      }
    },
    "FusionTablesHeatmap": {
      "!doc": "Specifies the appearance for a FusionTablesLayer when rendered as a heatmap.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesHeatmap",
      "enabled": {
        "!type": "bool",
        "!doc": "If true, render the layer as a heatmap.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesHeatmap"
      }
    },
    "FusionTablesMarkerOptions": {
      "!doc": "Options which control the appearance of point features in a FusionTablesLayer.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesMarkerOptions",
      "iconName": {
        "!type": "string",
        "!doc": "The name of a Fusion Tables  supported icon",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesMarkerOptions"
      }
    },
    "FusionTablesPolygonOptions": {
      "!doc": "Options which control the appearance of polygons in a FusionTablesLayer.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesPolygonOptions",
      "fillColor": {
        "!type": "string",
        "!doc": "The fill color, defined by a six-digit hexadecimal number in RRGGBB format (e.g. #00AAFF).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesPolygonOptions"
      },
      "fillOpacity": {
        "!type": "number",
        "!doc": "The fill opacity between 0.0 and 1.0.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesPolygonOptions"
      },
      "strokeColor": {
        "!type": "string",
        "!doc": "The fill color, defined by a six-digit hexadecimal number in RRGGBB format (e.g. #00AAFF).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesPolygonOptions"
      },
      "strokeOpacity": {
        "!type": "number",
        "!doc": "The stroke opacity between 0.0 and 1.0.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesPolygonOptions"
      },
      "strokeWeight": {
        "!type": "number",
        "!doc": "The stroke width in pixels, between 0 and 10.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesPolygonOptions"
      }
    },
    "FusionTablesPolylineOptions": {
      "!doc": "Options which control the appearance of polylines in a FusionTablesLayer.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesPolylineOptions",
      "strokeColor": {
        "!type": "string",
        "!doc": "The fill color, defined by a six-digit hexadecimal number in RRGGBB format (e.g. #00AAFF).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesPolylineOptions"
      },
      "strokeOpacity": {
        "!type": "number",
        "!doc": "The stroke opacity between 0.0 and 1.0.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesPolylineOptions"
      },
      "strokeWeight": {
        "!type": "number",
        "!doc": "The stroke width in pixels.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesPolylineOptions"
      }
    },
    "FusionTablesMouseEvent": {
      "!doc": "The properties of a mouse event on a FusionTablesLayer.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesMouseEvent",
      "infoWindowHtml": {
        "!type": "string",
        "!doc": "Pre-rendered HTML content, as placed in the infowindow by the default UI.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesMouseEvent"
      },
      "latLng": {
        "!type": "+google.maps.LatLng",
        "!doc": "The position at which to anchor an infowindow on the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesMouseEvent"
      },
      "pixelOffset": {
        "!type": "+google.maps.Size",
        "!doc": "The offset to apply to an infowindow anchored on the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesMouseEvent"
      },
      "row": {
        "!type": "+Object<FusionTablesCell>",
        "!doc": "A collection of FusionTablesCell objects, indexed by column name, representing the contents of the table row which included the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesMouseEvent"
      }
    },
    "FusionTablesCell": {
      "!doc": "Describes a single cell from a Fusion Tables table.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesCell",
      "columnName": {
        "!type": "string",
        "!doc": "The name of the column in which the cell was located.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesCell"
      },
      "value": {
        "!type": "string",
        "!doc": "The contents of the cell.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesCell"
      }
    },
    "KmlLayerOptions": {
      "!doc": "This object defines the properties that can be set on a KmlLayer object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerOptions",
      "clickable": {
        "!type": "bool",
        "!doc": "If true, the layer receives mouse events. Default value is true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "The map on which to display the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerOptions"
      },
      "preserveViewport": {
        "!type": "bool",
        "!doc": "By default, the input map is centered and zoomed to the bounding box of the contents of the layer. If this option is set to true, the viewport is left unchanged, unless the map's center and zoom were never set.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerOptions"
      },
      "screenOverlays": {
        "!type": "bool",
        "!doc": "Whether to render the screen overlays. Default true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerOptions"
      },
      "suppressInfoWindows": {
        "!type": "bool",
        "!doc": "Suppress the rendering of info windows when layer features are clicked.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerOptions"
      },
      "url": {
        "!type": "string",
        "!doc": "The URL of the KML document to display.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerOptions"
      },
      "zIndex": {
        "!type": "number",
        "!doc": "The z-index of the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerOptions"
      }
    },
    "KmlLayerMetadata": {
      "!doc": "Metadata for a single KML layer, in JSON format.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerMetadata",
      "author": {
        "!type": "+KmlAuthor",
        "!doc": "The layer's <atom:author>, extracted from the layer markup.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerMetadata"
      },
      "description": {
        "!type": "string",
        "!doc": "The layer's <description>, extracted from the layer markup.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerMetadata"
      },
      "hasScreenOverlays": {
        "!type": "bool",
        "!doc": "Whether the layer has any screen overlays.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerMetadata"
      },
      "name": {
        "!type": "string",
        "!doc": "The layer's <name>, extracted from the layer markup.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerMetadata"
      },
      "snippet": {
        "!type": "string",
        "!doc": "The layer's <Snippet>, extracted from the layer markup",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerMetadata"
      }
    },
    "KmlMouseEvent": {
      "!doc": "The properties of a click event on a KML/KMZ or GeoRSS document.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlMouseEvent",
      "featureData": {
        "!type": "+KmlFeatureData",
        "!doc": "A KmlFeatureData object, containing information about the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlMouseEvent"
      },
      "latLng": {
        "!type": "+google.maps.LatLng",
        "!doc": "The position at which to anchor an infowindow on the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlMouseEvent"
      },
      "pixelOffset": {
        "!type": "+google.maps.Size",
        "!doc": "The offset to apply to an infowindow anchored on the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlMouseEvent"
      }
    },
    "KmlFeatureData": {
      "!doc": "Data for a single KML feature in JSON format, returned when a KML feature is clicked. The data contained in this object mirrors that associated with the feature in the KML or GeoRSS markup in which it is declared.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlFeatureData",
      "author": {
        "!type": "+KmlAuthor",
        "!doc": "The feature's <atom:author>, extracted from the layer markup (if specified).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlFeatureData"
      },
      "description": {
        "!type": "string",
        "!doc": "The feature's <description>, extracted from the layer markup.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlFeatureData"
      },
      "id": {
        "!type": "string",
        "!doc": "The feature's <id>, extracted from the layer markup. If no <id> has been specified, a unique ID will be generated for this feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlFeatureData"
      },
      "infoWindowHtml": {
        "!type": "string",
        "!doc": "The feature's balloon styled text, if set.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlFeatureData"
      },
      "name": {
        "!type": "string",
        "!doc": "The feature's <name>, extracted from the layer markup.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlFeatureData"
      },
      "snippet": {
        "!type": "string",
        "!doc": "The feature's <Snippet>, extracted from the layer markup.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlFeatureData"
      }
    },
    "KmlAuthor": {
      "!doc": "Contains details of the author of a KML document or feature.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlAuthor",
      "email": {
        "!type": "string",
        "!doc": "The author's e-mail address, or an empty string if not specified.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlAuthor"
      },
      "name": {
        "!type": "string",
        "!doc": "The author's name, or an empty string if not specified.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlAuthor"
      },
      "uri": {
        "!type": "string",
        "!doc": "The author's home page, or an empty string if not specified.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlAuthor"
      }
    },
    "StreetViewPanoramaOptions": {
      "!doc": "Options defining the properties of a StreetViewPanorama object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions",
      "addressControl": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of the address control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "addressControlOptions": {
        "!type": "+StreetViewAddressControlOptions",
        "!doc": "The display options for the address control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "clickToGo": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of click-to-go.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "disableDefaultUI": {
        "!type": "bool",
        "!doc": "Enables/disables all default UI. May be overridden individually.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "disableDoubleClickZoom": {
        "!type": "bool",
        "!doc": "Enables/disables zoom on double click. Disabled by default.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "enableCloseButton": {
        "!type": "bool",
        "!doc": "If true, the close button is displayed. Disabled by default.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "imageDateControl": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of the imagery acquisition date control. Disabled by default.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "linksControl": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of the links control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "panControl": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of the pan control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "panControlOptions": {
        "!type": "+PanControlOptions",
        "!doc": "The display options for the pan control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "pano": {
        "!type": "string",
        "!doc": "The panorama ID, which should be set when specifying a custom panorama.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "position": {
        "!type": "+google.maps.LatLng",
        "!doc": "The LatLng position of the Street View panorama.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "pov": {
        "!type": "+StreetViewPov",
        "!doc": "The camera orientation, specified as heading and pitch, for the panorama.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "scrollwheel": {
        "!type": "bool",
        "!doc": "If false, disables scrollwheel zooming in Street View. The scrollwheel is enabled by default.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "visible": {
        "!type": "bool",
        "!doc": "If true, the Street View panorama is visible on load.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "zoomControl": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of the zoom control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "zoomControlOptions": {
        "!type": "+ZoomControlOptions",
        "!doc": "The display options for the zoom control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
      },
      "prototype": {
        "panoProvider": {
          "!type": "fn(panoId: string) -> +StreetViewPanoramaData",
          "!doc": "Custom panorama provider, which takes a string pano id and returns an object defining the panorama given that id. This function must be defined to specify custom panorama imagery.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaOptions"
        }
      }
    },
    "StreetViewAddressControlOptions": {
      "!doc": "Options for the rendering of the Street View address control.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewAddressControlOptions",
      "position": {
        "!type": "+google.maps.ControlPosition",
        "!doc": "Position id. This id is used to specify the position of the control on the map. The default position is TOP_LEFT.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewAddressControlOptions"
      }
    },
    "StreetViewLink": {
      "!doc": "A collection of references to adjacent Street View panos.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewLink",
      "description": {
        "!type": "string",
        "!doc": "A localized string describing the link.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewLink"
      },
      "heading": {
        "!type": "number",
        "!doc": "The heading of the link.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewLink"
      },
      "pano": {
        "!type": "string",
        "!doc": "A unique identifier for the panorama. This id is stable within a session but unstable across sessions.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewLink"
      }
    },
    "StreetViewPov": {
      "!doc": "A point of view object which specifies the camera's orientation at the Street View panorama's position. The point of view is defined as heading and pitch.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPov",
      "heading": {
        "!type": "number",
        "!doc": "The camera heading in degrees relative to true north. True north is 0�, east is 90�, south is 180�, west is 270�.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPov"
      },
      "pitch": {
        "!type": "number",
        "!doc": "The camera pitch in degrees, relative to the street view vehicle. Ranges from 90� (directly upwards) to -90� (directly downwards).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPov"
      }
    },
    "StreetViewPanoramaData": {
      "!doc": "The representation of a panorama returned from the provider defined using registerPanoProvider.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaData",
      "copyright": {
        "!type": "string",
        "!doc": "Specifies the copyright text for this panorama.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaData"
      },
      "imageDate": {
        "!type": "string",
        "!doc": "Specifies the year and month in which the imagery in this panorama was acquired. The date string is in the form YYYY-MM.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaData"
      },
      "links": {
        "!type": "+Array<StreetViewLink>",
        "!doc": "Specifies the navigational links to adjacent panoramas.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaData"
      },
      "location": {
        "!type": "+StreetViewLocation",
        "!doc": "Specifies the location meta-data for this panorama.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaData"
      },
      "tiles": {
        "!type": "+StreetViewTileData",
        "!doc": "Specifies the custom tiles for this panorama.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanoramaData"
      }
    },
    "StreetViewLocation": {
      "!doc": "A representation of a location in the Street View panorama.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewLocation",
      "description": {
        "!type": "string",
        "!doc": "A localized string describing the location.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewLocation"
      },
      "latLng": {
        "!type": "+google.maps.LatLng",
        "!doc": "The latlng of the panorama.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewLocation"
      },
      "pano": {
        "!type": "string",
        "!doc": "A unique identifier for the panorama. This is stable within a session but unstable across sessions.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewLocation"
      },
      "shortDescription": {
        "!type": "string",
        "!doc": "Short description of the location.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewLocation"
      }
    },
    "StreetViewTileData": {
      "!doc": "The properties of the tile set used in a Street View panorama.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewTileData",
      "centerHeading": {
        "!type": "number",
        "!doc": "The heading (in degrees) at the center of the panoramic tiles.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewTileData"
      },
      "tileSize": {
        "!type": "+google.maps.Size",
        "!doc": "The size (in pixels) at which tiles will be rendered.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewTileData"
      },
      "worldSize": {
        "!type": "+google.maps.Size",
        "!doc": "The size (in pixels) of the whole panorama's \"world\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewTileData"
      },
      "prototype": {
        "getTileUrl": {
          "!type": "fn(pano: string, tileZoom: number, tileX: number, tileY: number) -> string",
          "!doc": "Gets the tile image URL for the specified tile. pano is the panorama ID of the Street View tile. tileZoom is the zoom level of the tile. tileX is the x-coordinate of the tile. tileY is the y-coordinate of the tile. Returns the URL for the tile image.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewTileData"
        }
      }
    },
    "MapsEventListener": {
      "!doc": "This class is opaque. It has no methods and no constructor. Its instances are returned from addListener(), addDomListener() and are eventually passed back to removeListener().",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEventListener"
    },
    "LatLngLiteral": {
      "!doc": "Object literals are accepted in place of LatLng objects, as a convenience, in many places. These are converted to LatLng objects when the Maps API encounters them.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngLiteral",
      "lat": {
        "!type": "number",
        "!doc": "Latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngLiteral"
      },
      "lng": {
        "!type": "number",
        "!doc": "Longitude in degrees. Values outside the range [-180, 180] will be wrapped so that they fall within the range. For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngLiteral"
      }
    },
    "AdUnitOptions": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions",
      "backgroundColor": {
        "!type": "string",
        "!doc": "The AdUnit's background color. (Optional)",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions"
      },
      "borderColor": {
        "!type": "string",
        "!doc": "The AdUnit's border color. (Optional)",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions"
      },
      "channelNumber": {
        "!type": "string",
        "!doc": "The AdSense For Content channel number for tracking the performance of this AdUnit. It must be stored as a string as it will typically be a large UINT64. (Optional)",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions"
      },
      "format": {
        "!type": "+google.maps.adsense.AdFormat",
        "!doc": "the Format of the AdUnit. See https://google.com/adsense/adformats. (Optional)",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "The map associated with this AdUnit. Ads will be targeted to the location the map's viewport. (Required)",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions"
      },
      "position": {
        "!type": "+google.maps.ControlPosition",
        "!doc": "The position of the AdUnit. If specified, the AdUnit will be displayed at this position. Otherwise, it will not be added to the map. (Optional)",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions"
      },
      "publisherId": {
        "!type": "string",
        "!doc": "Your AdSense for Content publisher ID. Required and must be set at the time of initialization. (Required)",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions"
      },
      "textColor": {
        "!type": "string",
        "!doc": "The AdUnit's text color. (Optional)",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions"
      },
      "titleColor": {
        "!type": "string",
        "!doc": "The AdUnit's title color. (Optional)",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions"
      },
      "urlColor": {
        "!type": "string",
        "!doc": "The AdUnit's URL color. (Optional)",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnitOptions"
      }
    },
    "PanoramioLayerOptions": {
      "!doc": "This object defines the properties that can be set on a PanoramioLayer object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayerOptions",
      "clickable": {
        "!type": "bool",
        "!doc": "If true, the layer receives mouse events. Default value is true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayerOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "The map on which to display the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayerOptions"
      },
      "suppressInfoWindows": {
        "!type": "bool",
        "!doc": "Suppress the rendering of info windows when layer features are clicked.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayerOptions"
      },
      "tag": {
        "!type": "string",
        "!doc": "A panoramio tag used to filter the photos which are displayed. Only photos which have been tagged with the supplied string will be shown.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayerOptions"
      },
      "userId": {
        "!type": "string",
        "!doc": "A Panoramio user ID. If provided, only photos by this user will be displayed on the map. If both a tag and user ID are provided, the tag will take precedence.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayerOptions"
      }
    },
    "PanoramioFeature": {
      "!doc": "Describes a single Panoramio feature.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioFeature",
      "author": {
        "!type": "string",
        "!doc": "The username of the user who uploaded this photo.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioFeature"
      },
      "photoId": {
        "!type": "string",
        "!doc": "The unique identifier for this photo, as used in the Panoramio API (see http://www.panoramio.com/api/widget/api.html).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioFeature"
      },
      "title": {
        "!type": "string",
        "!doc": "The title of the photo.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioFeature"
      },
      "url": {
        "!type": "string",
        "!doc": "The URL of the photo.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioFeature"
      },
      "userId": {
        "!type": "string",
        "!doc": "The unique identifier for the user who uploaded this photo, as used in the Panoramio API (see http://www.panoramio.com/api/widget/api.html).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioFeature"
      }
    },
    "PanoramioMouseEvent": {
      "!doc": "The properties of a mouse event on a PanoramioLayer.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioMouseEvent",
      "featureDetails": {
        "!type": "+PanoramioFeature",
        "!doc": "A PanoramioFeature object containing information about the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioMouseEvent"
      },
      "infoWindowHtml": {
        "!type": "string",
        "!doc": "Pre-rendered HTML content to display within a feature's InfoWindow when clicked.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioMouseEvent"
      },
      "latLng": {
        "!type": "+google.maps.LatLng",
        "!doc": "The position at which to anchor an info window on the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioMouseEvent"
      },
      "pixelOffset": {
        "!type": "+google.maps.Size",
        "!doc": "The offset to apply to an info window anchored on the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioMouseEvent"
      }
    },
    "AutocompleteOptions": {
      "!doc": "The options that can be set on an Autocomplete object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompleteOptions",
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "The area in which to search for places. Results are biased towards, but not restricted to, places contained within these bounds.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompleteOptions"
      },
      "componentRestrictions": {
        "!type": "+ComponentRestrictions",
        "!doc": "The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompleteOptions"
      },
      "types": {
        "!type": "+Array<string>",
        "!doc": "The types of predictions to be returned. Four types are supported: 'establishment' for businesses, 'geocode' for addresses, '(regions)' for administrative regions and  '(cities)' for localities. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the 'geocode' and 'establishment' types, but note that this will have the same effect as specifying no types.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompleteOptions"
      }
    },
    "AutocompletePrediction": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletePrediction",
      "description": {
        "!type": "string",
        "!doc": "This is the unformatted version of the query suggested by the Places service.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletePrediction"
      },
      "matched_substrings": {
        "!type": "+Array<PredictionSubstring>",
        "!doc": "A set of substrings in the place's description that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletePrediction"
      },
      "place_id": {
        "!type": "string",
        "!doc": "A place ID that can be used to retrieve details about this place using the place details service (see  PlacesService.getDetails()).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletePrediction"
      },
      "terms": {
        "!type": "+Array<PredictionTerm>",
        "!doc": "Information about individual terms in the above description, from most to least specific. For example, \"Taco Bell\", \"Willitis\", and \"CA\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletePrediction"
      },
      "types": {
        "!type": "+Array<string>",
        "!doc": "An array of types that the prediction belongs to, for example 'establishment' or 'geocode'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletePrediction"
      }
    },
    "PredictionTerm": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PredictionTerm",
      "offset": {
        "!type": "number",
        "!doc": "The offset, in unicode characters, of the start of this term in the description of the place.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PredictionTerm"
      },
      "value": {
        "!type": "string",
        "!doc": "The value of this term, e.g. \"Taco Bell\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PredictionTerm"
      }
    },
    "PredictionSubstring": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PredictionSubstring",
      "length": {
        "!type": "number",
        "!doc": "The length of the substring.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PredictionSubstring"
      },
      "offset": {
        "!type": "number",
        "!doc": "The offset to the substring's start within the description string.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PredictionSubstring"
      }
    },
    "AutocompletionRequest": {
      "!doc": "An Autocompletion request to be sent to the AutocompleteService.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletionRequest",
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given bounds. Both location and radius will be ignored if bounds is set.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletionRequest"
      },
      "componentRestrictions": {
        "!type": "+ComponentRestrictions",
        "!doc": "The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletionRequest"
      },
      "input": {
        "!type": "string",
        "!doc": "The user entered input string.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletionRequest"
      },
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "Location for prediction biasing. Predictions will be biased towards the given location and radius. Alternatively, bounds can be used.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletionRequest"
      },
      "offset": {
        "!type": "number",
        "!doc": "The character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletionRequest"
      },
      "radius": {
        "!type": "number",
        "!doc": "The radius of the area used for prediction biasing. The radius is specified in meters, and must always be accompanied by a location property. Alternatively, bounds can be used.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletionRequest"
      },
      "types": {
        "!type": "+Array<string>",
        "!doc": "The types of predictions to be returned. Four types are supported: 'establishment' for businesses, 'geocode' for addresses, '(regions)' for administrative regions and  '(cities)' for localities. If nothing is specified, all types are returned.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompletionRequest"
      }
    },
    "ComponentRestrictions": {
      "!doc": "Defines the component restrictions that can be used with the autocomplete service.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ComponentRestrictions",
      "country": {
        "!type": "string",
        "!doc": "Restricts predictions to the specified country (ISO 3166-1 Alpha-2 country code, case insensitive). E.g., us, br, au.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ComponentRestrictions"
      }
    },
    "PlaceAspectRating": {
      "!doc": "Defines information about an aspect of the place that users have reviewed.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceAspectRating",
      "rating": {
        "!type": "number",
        "!doc": "The rating of this aspect. For individual reviews this is an integer from 0 to 3. For aggregated ratings of a place this is an integer from 0 to 30.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceAspectRating"
      },
      "type": {
        "!type": "string",
        "!doc": "The aspect type, e.g. \"food\", \"decor\", \"service\", \"overall\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceAspectRating"
      }
    },
    "PlaceDetailsRequest": {
      "!doc": "A Place details query to be sent to the PlacesService.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceDetailsRequest",
      "placeId": {
        "!type": "string",
        "!doc": "The Place ID of the Place for which details are being requested.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceDetailsRequest"
      }
    },
    "PlaceGeometry": {
      "!doc": "Defines information about the geometry of a Place.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceGeometry",
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The Place's position.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceGeometry"
      },
      "viewport": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "The preferred viewport when displaying this Place on a map. This property will be null if the preferred viewport for the Place is not known.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceGeometry"
      }
    },
    "PlacePhoto": {
      "!doc": "Represents a photo element of a Place.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacePhoto",
      "height": {
        "!type": "number",
        "!doc": "The height of the photo in pixels.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacePhoto"
      },
      "html_attributions": {
        "!type": "+Array<string>",
        "!doc": "Attribution text to be displayed for this photo.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacePhoto"
      },
      "width": {
        "!type": "number",
        "!doc": "The width of the photo in pixels.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacePhoto"
      },
      "prototype": {
        "getUrl": {
          "!type": "fn(opts: +PhotoOptions) -> string",
          "!doc": "Returns the image URL corresponding to the specified options. You must include a PhotoOptions object with at least one of maxWidth or maxHeight specified.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacePhoto"
        }
      }
    },
    "PhotoOptions": {
      "!doc": "Defines photo-requesting options.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PhotoOptions",
      "maxHeight": {
        "!type": "number",
        "!doc": "The maximum height in pixels of the returned image.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PhotoOptions"
      },
      "maxWidth": {
        "!type": "number",
        "!doc": "The maximum width in pixels of the returned image.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PhotoOptions"
      }
    },
    "PlaceResult": {
      "!doc": "Defines information about a Place.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult",
      "address_components": {
        "!type": "+Array<GeocoderAddressComponent>",
        "!doc": "The collection of address components for this Place's location.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "aspects": {
        "!type": "+Array<PlaceAspectRating>",
        "!doc": "The rated aspects of this Place, based on Google and Zagat user reviews. The ratings are on a scale of 0 to 30.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "formatted_address": {
        "!type": "string",
        "!doc": "The Place's full address.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "formatted_phone_number": {
        "!type": "string",
        "!doc": "The Place's phone number, formatted according to the  number's regional convention.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "geometry": {
        "!type": "+PlaceGeometry",
        "!doc": "The Place's geometry-related information.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "html_attributions": {
        "!type": "+Array<string>",
        "!doc": "Attribution text to be displayed for this Place result.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "icon": {
        "!type": "string",
        "!doc": "URL to an image resource that can be used to represent this Place's category.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "international_phone_number": {
        "!type": "string",
        "!doc": "The Place's phone number in international format. International format includes the country code, and is prefixed with the plus (+) sign.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "name": {
        "!type": "string",
        "!doc": "The Place's name. Note: In the case of user entered Places, this is the raw text, as typed by the user. Please exercise caution when using this data, as malicious users may try to use it as a vector for code injection attacks (See  http://en.wikipedia.org/wiki/Code_injection).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "permanently_closed": {
        "!type": "bool",
        "!doc": "A flag indicating whether the Place is permanently closed. If the place is not permanently closed, the flag is not present in search or details responses.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "photos": {
        "!type": "+Array<PlacePhoto>",
        "!doc": "Photos of this Place. The collection will contain up to ten PlacePhoto objects.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "place_id": {
        "!type": "string",
        "!doc": "A unique identifier for a place.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "price_level": {
        "!type": "number",
        "!doc": "The price level of the Place, on a scale of 0 to 4. Price levels are interpreted as follows:   Value Description   0 Free   1 Inexpensive   2 Moderate   3 Expensive   4 Very Expensive  ",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "rating": {
        "!type": "number",
        "!doc": "A rating, between 1.0 to 5.0, based on user reviews of this Place.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "reviews": {
        "!type": "+Array<PlaceReview>",
        "!doc": "A list of reviews of this Place.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "types": {
        "!type": "+Array<string>",
        "!doc": "An array of types for this Place (e.g., [\"political\",� \"locality\"] or [\"restaurant\", \"establishment\"]).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "url": {
        "!type": "string",
        "!doc": "URL of the official Google page for this place. This will be the establishment's Google+ page if the Google+ page exists, otherwise it will be the Google-owned page that contains the best available information about the place.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "vicinity": {
        "!type": "string",
        "!doc": "A fragment of the Place's address for disambiguation (usually street name and locality).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      },
      "website": {
        "!type": "string",
        "!doc": "The authoritative website for this Place, such as a business' homepage.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceResult"
      }
    },
    "PlaceReview": {
      "!doc": "Represents a single review of a place.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceReview",
      "aspects": {
        "!type": "+Array<PlaceAspectRating>",
        "!doc": "The aspects rated by the review. The ratings on a scale of 0 to 3.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceReview"
      },
      "author_name": {
        "!type": "string",
        "!doc": "The name of the reviewer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceReview"
      },
      "author_url": {
        "!type": "string",
        "!doc": "A link to the reviewer's profile. This will be undefined when the reviewer's profile is unavailable.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceReview"
      },
      "language": {
        "!type": "string",
        "!doc": "An IETF language code indicating the language in which this review is written. Note that this code includes only the main language tag without any secondary tag indicating country or region. For example, all the English reviews are tagged as 'en' rather than 'en-AU' or 'en-UK'.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceReview"
      },
      "text": {
        "!type": "string",
        "!doc": "The text of a review.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceReview"
      }
    },
    "PlaceSearchPagination": {
      "!doc": "An object used to fetch additional pages of Places results.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchPagination",
      "hasNextPage": {
        "!type": "bool",
        "!doc": "Indicates if further results are available. true when there is an additional results page.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchPagination"
      },
      "prototype": {
        "nextPage": {
          "!type": "fn()",
          "!doc": "Fetches the next page of results. Uses the same callback function that was provided to the first search request.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchPagination"
        }
      }
    },
    "PlaceSearchRequest": {
      "!doc": "A Place search query to be sent to the PlacesService.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest",
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "The bounds within which to search for Places. Both location and radius will be ignored if bounds is set.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest"
      },
      "keyword": {
        "!type": "string",
        "!doc": "A term to be matched against all available fields, including but not limited to name, type, and address, as well as customer reviews and other third-party content.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest"
      },
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The location around which to search for Places.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest"
      },
      "maxPriceLevel": {
        "!type": "number",
        "!doc": "Restricts results to only those places at the specified price level or lower. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be greater than or equal to minPrice , if specified.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest"
      },
      "minPriceLevel": {
        "!type": "number",
        "!doc": "Restricts results to only those places at the specified price level or higher. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be less than or equal to maxPrice, if specified.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest"
      },
      "name": {
        "!type": "string",
        "!doc": "Restricts the Place search results to Places that include this text in the name.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest"
      },
      "openNow": {
        "!type": "bool",
        "!doc": "Restricts results to only those places that are open right now.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest"
      },
      "radius": {
        "!type": "number",
        "!doc": "The distance from the given location within which to search for Places, in meters. The maximum allowed value is 50?000.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest"
      },
      "rankBy": {
        "!type": "+google.maps.places.RankBy",
        "!doc": "Specifies the ranking method to use when returning results.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest"
      },
      "types": {
        "!type": "+Array<string>",
        "!doc": "Restricts the Place search results to Places with a type matching at least one of the specified types in this array. Valid types are given here.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlaceSearchRequest"
      }
    },
    "QueryAutocompletePrediction": {
      "!doc": "Represents a single Query Autocomplete prediction.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletePrediction",
      "description": {
        "!type": "string",
        "!doc": "This is the unformatted version of the query suggested by the Places service.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletePrediction"
      },
      "matched_substrings": {
        "!type": "+Array<PredictionSubstring>",
        "!doc": "A set of substrings in the place's description that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletePrediction"
      },
      "place_id": {
        "!type": "string",
        "!doc": "Only available if prediction is a place. A place ID that can be used to retrieve details about this place using the place details service (see  PlacesService.getDetails()).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletePrediction"
      },
      "terms": {
        "!type": "+Array<PredictionTerm>",
        "!doc": "Information about individual terms in the above description. Categorical terms come first (e.g., \"restaurant\"). Address terms appear from most to least specific. For example, \"San Francisco\", and \"CA\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletePrediction"
      }
    },
    "QueryAutocompletionRequest": {
      "!doc": "An QueryAutocompletion request to be sent to the QueryAutocompleteService.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletionRequest",
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given bounds. Both location and radius will be ignored if bounds is set.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletionRequest"
      },
      "input": {
        "!type": "string",
        "!doc": "The user entered input string.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletionRequest"
      },
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "Location for prediction biasing. Predictions will be biased towards the given location and radius. Alternatively, bounds can be used.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletionRequest"
      },
      "offset": {
        "!type": "number",
        "!doc": "The character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletionRequest"
      },
      "radius": {
        "!type": "number",
        "!doc": "The radius of the area used for prediction biasing. The radius is specified in meters, and must always be accompanied by a location property. Alternatively, bounds can be used.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#QueryAutocompletionRequest"
      }
    },
    "RadarSearchRequest": {
      "!doc": "A Radar Search request to be sent to the PlacesService.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RadarSearchRequest",
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "Bounds used to bias results when searching for Places (optional). Both location and radius will be ignored if bounds is set. Results will not be restricted to those inside these bounds; but, results inside it will rank higher.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RadarSearchRequest"
      },
      "keyword": {
        "!type": "string",
        "!doc": "A term to be matched against all available fields, including but not limited to name, type, and address, as well as customer reviews and other third-party content.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RadarSearchRequest"
      },
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The center of the area used to bias results when searching for Places.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RadarSearchRequest"
      },
      "name": {
        "!type": "string",
        "!doc": "Restricts results to Places that include this text in the name.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RadarSearchRequest"
      },
      "radius": {
        "!type": "number",
        "!doc": "The radius of the area used to bias results when searching for Places, in meters.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RadarSearchRequest"
      },
      "types": {
        "!type": "+Array<string>",
        "!doc": "Restricts the Place search results to Places with a type matching at least one of the specified types in this array. Valid types are given here.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RadarSearchRequest"
      }
    },
    "SearchBoxOptions": {
      "!doc": "The options that can be set on a SearchBox object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SearchBoxOptions",
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "The area towards which to bias query predictions. Predictions are biased towards, but not restricted to, queries targeting these bounds.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SearchBoxOptions"
      }
    },
    "TextSearchRequest": {
      "!doc": "A text search request to be sent to the PlacesService.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TextSearchRequest",
      "bounds": {
        "!type": "+google.maps.LatLngBounds",
        "!doc": "Bounds used to bias results when searching for Places (optional). Both location and radius will be ignored if bounds is set. Results will not be restricted to those inside these bounds; but, results inside it will rank higher.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TextSearchRequest"
      },
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The center of the area used to bias results when searching for Places.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TextSearchRequest"
      },
      "query": {
        "!type": "string",
        "!doc": "The request's query term. e.g. the name of a place ('Eiffel Tower'), a category followed by the name of a location ('pizza in New York'), or the name of a place followed by a location disambiguator ('Starbucks in Sydney').",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TextSearchRequest"
      },
      "radius": {
        "!type": "number",
        "!doc": "The radius of the area used to bias results when searching for Places, in meters.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TextSearchRequest"
      },
      "types": {
        "!type": "+Array<string>",
        "!doc": "Restricts the Place search results to Places with a type matching at least one of the specified types in this array. Valid types are given here.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TextSearchRequest"
      }
    },
    "DrawingManagerOptions": {
      "!doc": "Options for the drawing manager.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManagerOptions",
      "circleOptions": {
        "!type": "+CircleOptions",
        "!doc": "Options to apply to any new circles created with this DrawingManager. The center and radius properties are ignored, and the map property of a new circle is always set to the DrawingManager's map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManagerOptions"
      },
      "drawingControl": {
        "!type": "bool",
        "!doc": "The enabled/disabled state of the drawing control. Defaults to true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManagerOptions"
      },
      "drawingControlOptions": {
        "!type": "+DrawingControlOptions",
        "!doc": "The display options for the drawing control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManagerOptions"
      },
      "drawingMode": {
        "!type": "+google.maps.drawing.OverlayType",
        "!doc": "The DrawingManager's drawing mode, which defines the type of overlay to be added on the map. Accepted values are MARKER, POLYGON, POLYLINE, RECTANGLE, CIRCLE, or null. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManagerOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "The Map to which the DrawingManager is attached, which is the Map on which the overlays created will be placed.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManagerOptions"
      },
      "markerOptions": {
        "!type": "+MarkerOptions",
        "!doc": "Options to apply to any new markers created with this DrawingManager. The position property is ignored, and the map property of a new marker is always set to the DrawingManager's map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManagerOptions"
      },
      "polygonOptions": {
        "!type": "+PolygonOptions",
        "!doc": "Options to apply to any new polygons created with this DrawingManager. The paths property is ignored, and the map property of a new polygon is always set to the DrawingManager's map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManagerOptions"
      },
      "polylineOptions": {
        "!type": "+PolylineOptions",
        "!doc": "Options to apply to any new polylines created with this DrawingManager. The path property is ignored, and the map property of a new polyline is always set to the DrawingManager's map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManagerOptions"
      },
      "rectangleOptions": {
        "!type": "+RectangleOptions",
        "!doc": "Options to apply to any new rectangles created with this DrawingManager. The bounds property is ignored, and the map property of a new rectangle is always set to the DrawingManager's map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManagerOptions"
      }
    },
    "DrawingControlOptions": {
      "!doc": "Options for the rendering of the drawing control.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingControlOptions",
      "drawingModes": {
        "!type": "+Array<OverlayType>",
        "!doc": "The drawing modes to display in the drawing control, in the order in which they are to be displayed. The hand icon (which corresponds to the null drawing mode) is always available and is not to be specified in this array. Defaults to [MARKER, POLYLINE, RECTANGLE, CIRCLE, POLYGON].",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingControlOptions"
      },
      "position": {
        "!type": "+google.maps.ControlPosition",
        "!doc": "Position id. Used to specify the position of the control on the map. The default position is TOP_LEFT.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingControlOptions"
      }
    },
    "OverlayCompleteEvent": {
      "!doc": "The properties of an overlaycomplete event on a DrawingManager.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayCompleteEvent",
      "overlay": {
        "!type": "+google.maps.Marker",
        "!doc": "The completed overlay.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayCompleteEvent"
      },
      "type": {
        "!type": "+google.maps.drawing.OverlayType",
        "!doc": "The completed overlay's type.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayCompleteEvent"
      }
    },
    "WeatherLayerOptions": {
      "!doc": "This object defines the properties that can be set on a WeatherLayer object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayerOptions",
      "clickable": {
        "!type": "bool",
        "!doc": "If true, the layer receives mouse events. Default value is true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayerOptions"
      },
      "labelColor": {
        "!type": "+google.maps.weather.LabelColor",
        "!doc": "The color of labels on the weather layer. If this is not explicitly set, the label color is chosen automatically depending on the map type.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayerOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "The map on which to display the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayerOptions"
      },
      "suppressInfoWindows": {
        "!type": "bool",
        "!doc": "Suppress the rendering of info windows when weather icons are clicked.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayerOptions"
      },
      "temperatureUnits": {
        "!type": "+google.maps.weather.TemperatureUnit",
        "!doc": "The units to use for temperature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayerOptions"
      },
      "windSpeedUnits": {
        "!type": "+google.maps.weather.WindSpeedUnit",
        "!doc": "The units to use for wind speed.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayerOptions"
      }
    },
    "WeatherMouseEvent": {
      "!doc": "The properties of a mouse event on a WeatherLayer.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherMouseEvent",
      "featureDetails": {
        "!type": "+WeatherFeature",
        "!doc": "A WeatherFeature object containing information about the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherMouseEvent"
      },
      "infoWindowHtml": {
        "!type": "string",
        "!doc": "Pre-rendered HTML content to display within a feature's InfoWindow when clicked.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherMouseEvent"
      },
      "latLng": {
        "!type": "+google.maps.LatLng",
        "!doc": "The position at which to anchor an info window on the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherMouseEvent"
      },
      "pixelOffset": {
        "!type": "+google.maps.Size",
        "!doc": "The offset to apply to an info window anchored on the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherMouseEvent"
      }
    },
    "WeatherFeature": {
      "!doc": "Describes a single Weather feature.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherFeature",
      "current": {
        "!type": "+WeatherConditions",
        "!doc": "The current weather conditions at this location.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherFeature"
      },
      "forecast": {
        "!type": "+Array<WeatherForecast>",
        "!doc": "A forecast of weather conditions over the next four days. The forecast array is always in chronological order.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherFeature"
      },
      "location": {
        "!type": "string",
        "!doc": "The location name of this feature, e.g. \"San Francisco, California\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherFeature"
      },
      "temperatureUnit": {
        "!type": "+google.maps.weather.TemperatureUnit",
        "!doc": "The temperature units being used.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherFeature"
      },
      "windSpeedUnit": {
        "!type": "+google.maps.weather.WindSpeedUnit",
        "!doc": "The wind speed units being used.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherFeature"
      }
    },
    "WeatherConditions": {
      "!doc": "Describes a single weather feature.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherConditions",
      "day": {
        "!type": "string",
        "!doc": "The current day of the week in long form, e.g. \"Monday\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherConditions"
      },
      "description": {
        "!type": "string",
        "!doc": "A description of the conditions, e.g. \"Partly Cloudy\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherConditions"
      },
      "high": {
        "!type": "number",
        "!doc": "The highest temperature reached during the day.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherConditions"
      },
      "humidity": {
        "!type": "number",
        "!doc": "The current humidity, expressed as a percentage.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherConditions"
      },
      "low": {
        "!type": "number",
        "!doc": "The lowest temperature reached during the day.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherConditions"
      },
      "shortDay": {
        "!type": "string",
        "!doc": "The current day of the week in short form, e.g. \"M\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherConditions"
      },
      "temperature": {
        "!type": "number",
        "!doc": "The current temperature, in the specified temperature units.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherConditions"
      },
      "windDirection": {
        "!type": "string",
        "!doc": "The current wind direction.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherConditions"
      },
      "windSpeed": {
        "!type": "number",
        "!doc": "The current wind speed, in the specified wind speed units.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherConditions"
      }
    },
    "WeatherForecast": {
      "!doc": "Describes a single day's weather forecast.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherForecast",
      "day": {
        "!type": "string",
        "!doc": "The day of the week in long form, e.g. \"Monday\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherForecast"
      },
      "description": {
        "!type": "string",
        "!doc": "A description of the conditions, e.g. \"Partly Cloudy\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherForecast"
      },
      "high": {
        "!type": "number",
        "!doc": "The highest temperature reached during the day.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherForecast"
      },
      "low": {
        "!type": "number",
        "!doc": "The lowest temperature reached during the day.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherForecast"
      },
      "shortDay": {
        "!type": "string",
        "!doc": "The day of the week in short form, e.g. \"M\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherForecast"
      }
    },
    "MapsEngineLayerOptions": {
      "!doc": "This object defines the properties that can be set on a MapsEngineLayer object. layerId, or both mapId and layerKey, must be set.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions",
      "accessToken": {
        "!type": "string",
        "!doc": "The authentication token returned by an OAuth 2.0 authentication request.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions"
      },
      "clickable": {
        "!type": "bool",
        "!doc": "If true, the layer receives mouse events. Default value is true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions"
      },
      "fitBounds": {
        "!type": "bool",
        "!doc": "If this option is set to true, the map viewport is centered and zoomed to the bounding box of the contents of the layer. Default value is false. Applies only to KML layers. Note: Be careful when setting this option for other layer types, as it may become effective in the future.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions"
      },
      "layerId": {
        "!type": "string",
        "!doc": "The ID of a single Maps Engine layer to display.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions"
      },
      "layerKey": {
        "!type": "string",
        "!doc": "The key of the layer to display. Maps Engine layer keys are only unique within a single map, and can be changed by map owners.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "The map on which to display the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions"
      },
      "mapId": {
        "!type": "string",
        "!doc": "The ID of the Maps Engine map that contains the layer with the given layerKey.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions"
      },
      "opacity": {
        "!type": "number",
        "!doc": "The opacity of the layer, expressed as a number between 0 and 1. Defaults to 1. Applies only to imagery layers. Note: Be careful of setting this option for other layer types, as it may become effective in the future.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions"
      },
      "suppressInfoWindows": {
        "!type": "bool",
        "!doc": "Suppress the rendering of info windows when layer features are clicked.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions"
      },
      "zIndex": {
        "!type": "number",
        "!doc": "The z-index of the layer. Only applies to Vector and KML layers.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerOptions"
      }
    },
    "MapsEngineLayerProperties": {
      "!doc": "This object defines the properties of a Maps Engine layer.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerProperties",
      "name": {
        "!type": "string",
        "!doc": "The name of the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayerProperties"
      }
    },
    "MapsEngineMouseEvent": {
      "!doc": "The properties of a mouse event on a MapsEngineLayer.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineMouseEvent",
      "featureId": {
        "!type": "string",
        "!doc": "The feature ID, guaranteed to be unique within the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineMouseEvent"
      },
      "infoWindowHtml": {
        "!type": "string",
        "!doc": "Pre-rendered HTML content, as placed in the infowindow by the default UI.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineMouseEvent"
      },
      "latLng": {
        "!type": "+google.maps.LatLng",
        "!doc": "The position at which to anchor an infowindow on the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineMouseEvent"
      },
      "pixelOffset": {
        "!type": "+google.maps.Size",
        "!doc": "The offset to apply to an infowindow anchored on the clicked feature.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineMouseEvent"
      }
    },
    "MapsEngineStatus": {
      "!doc": "The status returned by MapsEngineLayer when a layer has loaded.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineStatus"
    },
    "DynamicMapsEngineLayerOptions": {
      "!doc": "This object defines the properties that can be set on a DynamicMapsEngineLayer object. layerId, or both mapId and layerKey must be set.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayerOptions",
      "accessToken": {
        "!type": "string",
        "!doc": "The authentication token returned by an OAuth 2.0 authentication request.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayerOptions"
      },
      "clickable": {
        "!type": "bool",
        "!doc": "If true, the layer receives mouse events. Default value is true.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayerOptions"
      },
      "layerId": {
        "!type": "string",
        "!doc": "The ID of the Maps Engine layer to display.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayerOptions"
      },
      "layerKey": {
        "!type": "string",
        "!doc": "The key of the layer to display from the specified map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayerOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "The map on which to display the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayerOptions"
      },
      "mapId": {
        "!type": "string",
        "!doc": "The ID of the Maps Engine map that contains the layer with the given layerKey.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayerOptions"
      },
      "opacity": {
        "!type": "number",
        "!doc": "The opacity of the layer, expressed as a number between 0 and 1. Defaults to 1. Applies only to imagery layers. Note: Be careful of setting this option for other layer types, as it may become effective in the future.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayerOptions"
      },
      "suppressInfoWindows": {
        "!type": "bool",
        "!doc": "Suppress the rendering of info windows when layer features are clicked.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayerOptions"
      }
    },
    "DynamicMapsEngineMouseEvent": {
      "!doc": "The properties of a mouse event on a DynamicMapsEngineLayer.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineMouseEvent",
      "featureId": {
        "!type": "string",
        "!doc": "The feature ID, guaranteed to be unique within the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineMouseEvent"
      },
      "latLng": {
        "!type": "+google.maps.LatLng",
        "!doc": "The latitude/longitude that was below the cursor when the event occurred.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineMouseEvent"
      },
      "prototype": {
        "getDetails": {
          "!type": "fn(callback: fn())",
          "!doc": "Takes a callback that will be called with details about the feature that may be used to render an info window.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineMouseEvent"
        }
      }
    },
    "FeatureStyle": {
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle",
      "fillColor": {
        "!type": "string",
        "!doc": "The feature's fill color. All CSS3 colors are supported except for extended named colors.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "fillOpacity": {
        "!type": "string",
        "!doc": "Fill opacity, expressed as a decimal between 0 and 1 inclusive. This property may be set as a number, but it will always be returned as a string.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "iconAnchor": {
        "!type": "string",
        "!doc": "The icon's anchor point is the pixel in the source image that is aligned with the point's geographical location, expressed as a whitespace-separated pair of numbers: x y. Defaults to the center of the icon.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "iconClip": {
        "!type": "string",
        "!doc": "The rectangular region of the icon's image (in image pixel coordinates) to use, as a whitespace-separated 4-tuple of numbers: x y width height. For example, to use a 32x32 icon situated at (0, 64) in a sprite sheet, specify 0 64 32 32.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "iconImage": {
        "!type": "string",
        "!doc": "The image to render at the point. Currently, only url(...) is supported.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "iconOpacity": {
        "!type": "string",
        "!doc": "Icon opacity, expressed as a decimal between 0 and 1 inclusive. This property may be set as a number, but it will always be returned as a string.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "iconSize": {
        "!type": "string",
        "!doc": "Icon size, expressed as a string with two measurements (with pixel or percentage as unit) separated by whitespace.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "strokeColor": {
        "!type": "string",
        "!doc": "The feature's stroke color. All CSS3 colors are supported except for extended named colors.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "strokeOpacity": {
        "!type": "string",
        "!doc": "Stroke opacity, expressed as a decimal between 0 and 1 inclusive. This property may be set as a number, but it will always be returned as a string.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "strokeWidth": {
        "!type": "string",
        "!doc": "Stroke width in pixels. This property may be set as a number, but it will always be returned as a string.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "zIndex": {
        "!type": "string",
        "!doc": "Rendering order. Features with greater zIndex are rendered on top.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
      },
      "prototype": {
        "reset": {
          "!type": "fn(property: string)",
          "!doc": "Resets the given style property to its original value.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
        },
        "resetAll": {
          "!type": "fn()",
          "!doc": "Resets all style properties to their original values.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FeatureStyle"
        }
      }
    },
    "HeatmapLayerOptions": {
      "!doc": "This object defines the properties that can be set on a HeatmapLayer object.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayerOptions",
      "data": {
        "!type": "+MVCArray<LatLng>",
        "!doc": "The data points to display. Required.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayerOptions"
      },
      "dissipating": {
        "!type": "bool",
        "!doc": "Specifies whether heatmaps dissipate on zoom. By default, the radius of influence of a data point is specified by the radius option only. When dissipating is disabled, the radius option is intepreted as a radius at zoom level 0.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayerOptions"
      },
      "gradient": {
        "!type": "+Array<string>",
        "!doc": "The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors are supported except for extended named colors.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayerOptions"
      },
      "map": {
        "!type": "+google.maps.Map",
        "!doc": "The map on which to display the layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayerOptions"
      },
      "maxIntensity": {
        "!type": "number",
        "!doc": "The maximum intensity of the heatmap. By default, heatmap colors are dynamically scaled according to the greatest concentration of points at any particular pixel on the map. This property allows you to specify a fixed maximum.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayerOptions"
      },
      "opacity": {
        "!type": "number",
        "!doc": "The opacity of the heatmap, expressed as a number between 0 and 1. Defaults to 0.6.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayerOptions"
      },
      "radius": {
        "!type": "number",
        "!doc": "The radius of influence for each data point, in pixels.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayerOptions"
      }
    },
    "WeightedLocation": {
      "!doc": "A data point entry for a heatmap. This is a geographical data point with a weight attribute.",
      "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeightedLocation",
      "location": {
        "!type": "+google.maps.LatLng",
        "!doc": "The location of the data point.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeightedLocation"
      },
      "weight": {
        "!type": "number",
        "!doc": "The weighting value of the data point.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeightedLocation"
      }
    }
  },
  "google": {
    "maps": {
      "Map": {
        "!type": "fn(mapDiv: +Node, opts?: +MapOptions) -> +google.maps.Map",
        "!doc": "This class extends\nMVCObject.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "controls": {
            "!type": "+Array<MVCArray<Node>>",
            "!doc": "Additional controls to attach to the map. To add a control to the map, add the control's <div> to the MVCArray corresponding to the ControlPosition where it should be rendered.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "data": {
            "!type": "+google.maps.Data",
            "!doc": "An instance of Data, bound to the map. Add features to this Data object to conveniently display them on this map.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "mapTypes": {
            "!type": "+google.maps.MapTypeRegistry",
            "!doc": "A registry of MapType instances by string ID.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "overlayMapTypes": {
            "!type": "+MVCArray<MapType>",
            "!doc": "Additional map types to overlay.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "fitBounds": {
            "!type": "fn(bounds: +google.maps.LatLngBounds)",
            "!doc": "Sets the viewport to contain the given bounds.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "getBounds": {
            "!type": "fn() -> +google.maps.LatLngBounds",
            "!doc": "Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is null or undefined.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "getCenter": {
            "!type": "fn() -> +google.maps.LatLng",
            "!doc": "Returns the position displayed at the center of the map. Note that this LatLng object is not wrapped. See LatLng for more information.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "getDiv": {
            "!type": "fn() -> +Node",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "getHeading": {
            "!type": "fn() -> number",
            "!doc": "Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "getMapTypeId": {
            "!type": "fn() -> +google.maps.MapTypeId",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "getProjection": {
            "!type": "fn() -> +Projection",
            "!doc": "Returns the current Projection. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to projection_changed and check its value to ensure it is not null.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "getStreetView": {
            "!type": "fn() -> +google.maps.StreetViewPanorama",
            "!doc": "Returns the default StreetViewPanorama bound to the map, which may be a default panorama embedded within the map, or the panorama set using setStreetView(). Changes to the map's streetViewControl will be reflected in the display of such a bound panorama.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "getTilt": {
            "!type": "fn() -> number",
            "!doc": "Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be 0 for imagery taken directly overhead or 45 for 45� imagery. 45� imagery is only available for SATELLITE and HYBRID map types, within some locations, and at some zoom levels. Note: This method does not return the value set by setTilt. See setTilt for details.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "getZoom": {
            "!type": "fn() -> number",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "panBy": {
            "!type": "fn(x: number, y: number)",
            "!doc": "Changes the center of the map by the given distance in pixels. If the distance is less than both the width and height of the map, the transition will be smoothly animated. Note that the map coordinate system increases from west to east (for x values) and north to south (for y values).",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "panTo": {
            "!type": "fn(latLng: +google.maps.LatLng)",
            "!doc": "Changes the center of the map to the given LatLng. If the change is less than both the width and height of the map, the transition will be smoothly animated.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "panToBounds": {
            "!type": "fn(latLngBounds: +google.maps.LatLngBounds)",
            "!doc": "Pans the map by the minimum amount necessary to contain the given LatLngBounds. It makes no guarantee where on the map the bounds will be, except that as much of the bounds as possible will be visible. The bounds will be positioned inside the area bounded by the map type and navigation (pan, zoom, and Street View) controls, if they are present on the map. If the bounds is larger than the map, the map will be shifted to include the northwest corner of the bounds. If the change in the map's position is less than both the width and height of the map, the transition will be smoothly animated.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "setCenter": {
            "!type": "fn(latlng: +google.maps.LatLng)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "setHeading": {
            "!type": "fn(heading: number)",
            "!doc": "Sets the compass heading for aerial imagery measured in degrees from cardinal direction North.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "setMapTypeId": {
            "!type": "fn(mapTypeId: +google.maps.MapTypeId)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "setOptions": {
            "!type": "fn(options: +MapOptions)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "setStreetView": {
            "!type": "fn(panorama: +google.maps.StreetViewPanorama)",
            "!doc": "Binds a StreetViewPanorama to the map. This panorama overrides the default StreetViewPanorama, allowing the map to bind to an external panorama outside of the map. Setting the panorama to null binds the default embedded panorama back to the map.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "setTilt": {
            "!type": "fn(tilt: number)",
            "!doc": "Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are 0 and 45. setTilt(0) causes the map to always use a 0� overhead view regardless of the zoom level and viewport. setTilt(45) causes the tilt angle to automatically switch to 45 whenever 45� imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45� imagery is not available (this is the default behavior). 45� imagery is only available for SATELLITE and HYBRID map types, within some locations, and at some zoom levels. Note: getTilt returns the current tilt angle, not the value set by setTilt. Because getTilt and setTilt refer to different things, do not bind() the tilt property; doing so may yield unpredictable effects.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          },
          "setZoom": {
            "!type": "fn(zoom: number)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Map"
          }
        }
      },
      "MapTypeId": {
        "!doc": "Identifiers for common MapTypes.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeId"
      },
      "MapTypeControlStyle": {
        "!doc": "Identifiers for common MapTypesControls.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeControlStyle"
      },
      "ScaleControlStyle": {
        "!doc": "Identifiers for scale control ids.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ScaleControlStyle"
      },
      "ZoomControlStyle": {
        "!doc": "Identifiers for the zoom control.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ZoomControlStyle"
      },
      "ControlPosition": {
        "!doc": "Identifiers used to specify the placement of controls on the map. Controls are positioned relative to other controls in the same layout position. Controls that are added first are positioned closer to the edge of the map.  ��+----------------+ ��+�TL����TC����TR + ��+�LT����������RT + ��+����������������+ ��+�LC����������RC + ��+����������������+ ��+�LB����������RB + ��+�BL����BC����BR + ��+----------------+  Elements in the top or bottom row flow towards the middle of the row. Elements in the left or right column flow towards the middle of the column.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ControlPosition"
      },
      "Data": {
        "!type": "fn(options?: +Data.DataOptions) -> +google.maps.Data",
        "!doc": "A layer for displaying geospatial data. Points, line-strings and polygons can be displayed.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "add": {
            "!type": "fn(feature: +Data.Feature) -> +Data.Feature",
            "!doc": "Adds a feature to the collection, and returns the added feature.  If the feature has an ID, it will replace any existing feature in the collection with the same ID. If no feature is given, a new feature will be created with null geometry and no properties. If FeatureOptions are given, a new feature will be created with the specified properties.  Note that the IDs 1234 and '1234' are equivalent. Adding a feature with ID 1234 will replace a feature with ID '1234', and vice versa.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "addGeoJson": {
            "!type": "fn(geoJson: ?, options?: +Data.GeoJsonOptions) -> +Array<Data.Feature>",
            "!doc": "Adds GeoJSON features to the collection. Give this method a parsed JSON. The imported features are returned. Throws an exception if the GeoJSON could not be imported.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "contains": {
            "!type": "fn(feature: +Data.Feature) -> bool",
            "!doc": "Checks whether the given feature is in the collection.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "forEach": {
            "!type": "fn(callback: fn())",
            "!doc": "Repeatedly invokes the given function, passing a feature in the collection to the function on each invocation. The order of iteration through the features is undefined.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "getFeatureById": {
            "!type": "fn(id: number) -> +Data.Feature",
            "!doc": "Returns the feature with the given ID, if it exists in the collection. Otherwise returns undefined.  Note that the IDs 1234 and '1234' are equivalent. Either can be used to look up the same feature.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which the features are displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "getStyle": {
            "!type": "fn() -> +Data.StylingFunction",
            "!doc": "Gets the style for all features in the collection.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "loadGeoJson": {
            "!type": "fn(url: string, options?: +Data.GeoJsonOptions, callback?: fn())",
            "!doc": "Loads GeoJSON from a URL, and adds the features to the collection.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "overrideStyle": {
            "!type": "fn(feature: +Data.Feature, style: +Data.StyleOptions)",
            "!doc": "Changes the style of a feature. These changes are applied on top of the style specified by setStyle(). Style properties set to null revert to the value specified via setStyle().",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "remove": {
            "!type": "fn(feature: +Data.Feature)",
            "!doc": "Removes a feature from the collection.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "revertStyle": {
            "!type": "fn(feature?: +Data.Feature)",
            "!doc": "Removes the effect of previous overrideStyle() calls. The style of the given feature reverts to the style specified by setStyle(). If no feature is given, all features have their style reverted.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the features on the specified map. If map is set to null, the features will be removed from the map.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "setStyle": {
            "!type": "fn(style: +Data.StylingFunction)",
            "!doc": "Sets the style for all features in the collection. Styles specified on a per-feature basis via overrideStyle() continue to apply. Pass either an object with the desired style options, or a function that computes the style for each feature. The function will be called every time a feature's properties are updated.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          },
          "toGeoJson": {
            "!type": "fn(callback: fn())",
            "!doc": "Exports the features in the collection to a GeoJSON object.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Data"
          }
        },
        "StylingFunction": {
          "!doc": "A function that computes the appearance of a feature.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StylingFunction"
        },
        "Feature": {
          "!type": "fn(options?: +Data.FeatureOptions) -> +google.maps.Data.Feature",
          "!doc": "A feature has a geometry, an id, and a set of properties.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Feature",
          "prototype": {
            "forEachProperty": {
              "!type": "fn(callback: fn())",
              "!doc": "Repeatedly invokes the given function, passing a property value and name on each invocation. The order of iteration through the properties is undefined.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Feature"
            },
            "getGeometry": {
              "!type": "fn() -> +Data.Geometry",
              "!doc": "Returns the feature's geometry.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Feature"
            },
            "getId": {
              "!type": "fn() -> number",
              "!doc": "Returns the feature ID.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Feature"
            },
            "getProperty": {
              "!type": "fn(name: string) -> ?",
              "!doc": "Returns the value of the requested property, or undefined if the property does not exist.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Feature"
            },
            "removeProperty": {
              "!type": "fn(name: string)",
              "!doc": "Removes the property with the given name.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Feature"
            },
            "setGeometry": {
              "!type": "fn(newGeometry: +Data.Geometry)",
              "!doc": "Sets the feature's geometry.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Feature"
            },
            "setProperty": {
              "!type": "fn(name: string, newValue: ?)",
              "!doc": "Sets the value of the specified property. If newValue is undefined this is equivalent to calling removeProperty.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Feature"
            },
            "toGeoJson": {
              "!type": "fn(callback: fn())",
              "!doc": "Exports the feature to a GeoJSON object.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Feature"
            }
          }
        },
        "Geometry": {
          "!doc": "A superclass for the various geometry objects.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Geometry",
          "prototype": {
            "getType": {
              "!type": "fn() -> string",
              "!doc": "Returns the type of the geometry object. Possibilities are \"Point\", \"MultiPoint\", \"LineString\", \"MultiLineString\", \"LinearRing\", \"Polygon\", \"MultiPolygon\", or \"GeometryCollection\".",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Geometry"
            }
          }
        },
        "Point": {
          "!type": "fn(latLng: +google.maps.LatLng) -> +google.maps.Data.Point",
          "!doc": "A Point geometry contains a single LatLng.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Point",
          "prototype": {
            "!proto": "Data.Geometry.prototype",
            "get": {
              "!type": "fn() -> +google.maps.LatLng",
              "!doc": "Returns the contained LatLng.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Point"
            },
            "getType": {
              "!type": "fn() -> string",
              "!doc": "Returns the string \"Point\".",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Point"
            }
          }
        },
        "MultiPoint": {
          "!type": "fn(elements: +Array<LatLng) -> +google.maps.Data.MultiPoint",
          "!doc": "A MultiPoint geometry contains a number of LatLngs.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiPoint",
          "prototype": {
            "!proto": "Data.Geometry.prototype",
            "getArray": {
              "!type": "fn() -> +Array<LatLng>",
              "!doc": "Returns an array of the contained LatLngs. A new array is returned each time getArray() is called.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiPoint"
            },
            "getAt": {
              "!type": "fn(n: number) -> +google.maps.LatLng",
              "!doc": "Returns the n-th contained LatLng.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiPoint"
            },
            "getLength": {
              "!type": "fn() -> number",
              "!doc": "Returns the number of contained LatLngs.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiPoint"
            },
            "getType": {
              "!type": "fn() -> string",
              "!doc": "Returns the string \"MultiPoint\".",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiPoint"
            }
          }
        },
        "LineString": {
          "!type": "fn(elements: +Array<LatLng) -> +google.maps.Data.LineString",
          "!doc": "A LineString geometry contains a number of LatLngs.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LineString",
          "prototype": {
            "!proto": "Data.Geometry.prototype",
            "getArray": {
              "!type": "fn() -> +Array<LatLng>",
              "!doc": "Returns an array of the contained LatLngs. A new array is returned each time getArray() is called.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LineString"
            },
            "getAt": {
              "!type": "fn(n: number) -> +google.maps.LatLng",
              "!doc": "Returns the n-th contained LatLng.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LineString"
            },
            "getLength": {
              "!type": "fn() -> number",
              "!doc": "Returns the number of contained LatLngs.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LineString"
            },
            "getType": {
              "!type": "fn() -> string",
              "!doc": "Returns the string \"LineString\".",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LineString"
            }
          }
        },
        "MultiLineString": {
          "!type": "fn(elements: +Array<Data.LineString) -> +google.maps.Data.MultiLineString",
          "!doc": "A MultiLineString geometry contains a number of LineStrings.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiLineString",
          "prototype": {
            "!proto": "Data.Geometry.prototype",
            "getArray": {
              "!type": "fn() -> +Array<Data.LineString>",
              "!doc": "Returns an array of the contained Data.LineStrings. A new array is returned each time getArray() is called.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiLineString"
            },
            "getAt": {
              "!type": "fn(n: number) -> +Data.LineString",
              "!doc": "Returns the n-th contained Data.LineString.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiLineString"
            },
            "getLength": {
              "!type": "fn() -> number",
              "!doc": "Returns the number of contained Data.LineStrings.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiLineString"
            },
            "getType": {
              "!type": "fn() -> string",
              "!doc": "Returns the string \"MultiLineString\".",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiLineString"
            }
          }
        },
        "LinearRing": {
          "!type": "fn(elements: +Array<LatLng) -> +google.maps.Data.LinearRing",
          "!doc": "A LinearRing geometry contains a number of LatLngs, representing a closed LineString. There is no need to make the first LatLng equal to the last LatLng. The LinearRing is closed implicitly.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LinearRing",
          "prototype": {
            "!proto": "Data.Geometry.prototype",
            "getArray": {
              "!type": "fn() -> +Array<LatLng>",
              "!doc": "Returns an array of the contained LatLngs. A new array is returned each time getArray() is called.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LinearRing"
            },
            "getAt": {
              "!type": "fn(n: number) -> +google.maps.LatLng",
              "!doc": "Returns the n-th contained LatLng.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LinearRing"
            },
            "getLength": {
              "!type": "fn() -> number",
              "!doc": "Returns the number of contained LatLngs.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LinearRing"
            },
            "getType": {
              "!type": "fn() -> string",
              "!doc": "Returns the string \"LinearRing\".",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LinearRing"
            }
          }
        },
        "Polygon": {
          "!type": "fn(elements: +Array<Data.LinearRing) -> +google.maps.Data.Polygon",
          "!doc": "A Polygon geometry contains a number of Data.LinearRings. The first linear-ring must be the polygon exterior boundary, and subsequent linear-rings must be interior boundaries or \"holes\".",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon",
          "prototype": {
            "!proto": "Data.Geometry.prototype",
            "getArray": {
              "!type": "fn() -> +Array<Data.LinearRing>",
              "!doc": "Returns an array of the contained Data.LinearRings. A new array is returned each time getArray() is called.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
            },
            "getAt": {
              "!type": "fn(n: number) -> +Data.LinearRing",
              "!doc": "Returns the n-th contained Data.LinearRing.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
            },
            "getLength": {
              "!type": "fn() -> number",
              "!doc": "Returns the number of contained Data.LinearRings.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
            },
            "getType": {
              "!type": "fn() -> string",
              "!doc": "Returns the string \"Polygon\".",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
            }
          }
        },
        "MultiPolygon": {
          "!type": "fn(elements: +Array<Data.Polygon) -> +google.maps.Data.MultiPolygon",
          "!doc": "A MultiPolygon geometry contains a number of Data.Polygons.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiPolygon",
          "prototype": {
            "!proto": "Data.Geometry.prototype",
            "getArray": {
              "!type": "fn() -> +Array<Data.Polygon>",
              "!doc": "Returns an array of the contained Data.Polygons. A new array is returned each time getArray() is called.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiPolygon"
            },
            "getAt": {
              "!type": "fn(n: number) -> +Data.Polygon",
              "!doc": "Returns the n-th contained Data.Polygon.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiPolygon"
            },
            "getLength": {
              "!type": "fn() -> number",
              "!doc": "Returns the number of contained Data.Polygons.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiPolygon"
            },
            "getType": {
              "!type": "fn() -> string",
              "!doc": "Returns the string \"MultiPolygon\".",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MultiPolygon"
            }
          }
        },
        "GeometryCollection": {
          "!type": "fn(elements: +Array<Data.Geometry) -> +google.maps.Data.GeometryCollection",
          "!doc": "A GeometryCollection contains a number of geometry objects. Any LatLng or LatLngLiteral objects are automatically converted to Data.Point geometry objects.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeometryCollection",
          "prototype": {
            "!proto": "Data.Geometry.prototype",
            "getArray": {
              "!type": "fn() -> +Array<Data.Geometry>",
              "!doc": "Returns an array of the contained geometry objects. A new array is returned each time getArray() is called.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeometryCollection"
            },
            "getAt": {
              "!type": "fn(n: number) -> +Data.Geometry",
              "!doc": "Returns the n-th contained geometry object.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeometryCollection"
            },
            "getLength": {
              "!type": "fn() -> number",
              "!doc": "Returns the number of contained geometry objects.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeometryCollection"
            },
            "getType": {
              "!type": "fn() -> string",
              "!doc": "Returns the string \"GeometryCollection\".",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeometryCollection"
            }
          }
        }
      },
      "Marker": {
        "!type": "fn(opts?: +MarkerOptions) -> +google.maps.Marker",
        "!doc": "This class extends\nMVCObject.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getAnimation": {
            "!type": "fn() -> +google.maps.Animation",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getAttribution": {
            "!type": "fn() -> +Attribution",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getClickable": {
            "!type": "fn() -> bool",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getCursor": {
            "!type": "fn() -> string",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getDraggable": {
            "!type": "fn() -> bool",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getIcon": {
            "!type": "fn() -> string",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getOpacity": {
            "!type": "fn() -> number",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getPlace": {
            "!type": "fn() -> +Place",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getPosition": {
            "!type": "fn() -> +google.maps.LatLng",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getShape": {
            "!type": "fn() -> +MarkerShape",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getTitle": {
            "!type": "fn() -> string",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getVisible": {
            "!type": "fn() -> bool",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "getZIndex": {
            "!type": "fn() -> number",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setAnimation": {
            "!type": "fn(animation: +google.maps.Animation)",
            "!doc": "Start an animation. Any ongoing animation will be cancelled. Currently supported animations are: BOUNCE, DROP. Passing in null will cause any animation to stop.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setAttribution": {
            "!type": "fn(attribution: +Attribution)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setClickable": {
            "!type": "fn(flag: bool)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setCursor": {
            "!type": "fn(cursor: string)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setDraggable": {
            "!type": "fn(flag: bool)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setIcon": {
            "!type": "fn(icon: string)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the marker on the specified map or panorama. If map is set to null, the marker will be removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setOpacity": {
            "!type": "fn(opacity: number)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setOptions": {
            "!type": "fn(options: +MarkerOptions)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setPlace": {
            "!type": "fn(place: +Place)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setPosition": {
            "!type": "fn(latlng: +google.maps.LatLng)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setShape": {
            "!type": "fn(shape: +MarkerShape)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setTitle": {
            "!type": "fn(title: string)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setVisible": {
            "!type": "fn(visible: bool)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          },
          "setZIndex": {
            "!type": "fn(zIndex: number)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Marker"
          }
        }
      },
      "SymbolPath": {
        "!doc": "Built-in symbol paths.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SymbolPath"
      },
      "Animation": {
        "!doc": "Animations that can be played on a marker. Use the setAnimation method on Marker or the animation option to play an animation.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Animation"
      },
      "InfoWindow": {
        "!type": "fn(opts?: +InfoWindowOptions) -> +google.maps.InfoWindow",
        "!doc": "An overlay that looks like a bubble and is often connected to a marker.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindow",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "close": {
            "!type": "fn()",
            "!doc": "Closes this InfoWindow by removing it from the DOM structure.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindow"
          },
          "getContent": {
            "!type": "fn() -> string",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindow"
          },
          "getPosition": {
            "!type": "fn() -> +google.maps.LatLng",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindow"
          },
          "getZIndex": {
            "!type": "fn() -> number",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindow"
          },
          "open": {
            "!type": "fn(map?: +google.maps.Map, anchor?: +google.maps.MVCObject)",
            "!doc": "Opens this InfoWindow on the given map. Optionally, an InfoWindow can be associated with an anchor. In the core API, the only anchor is the Marker class. However, an anchor can be any MVCObject that exposes a LatLng position property and optionally a Point anchorPoint property for calculating the pixelOffset (see InfoWindowOptions). The anchorPoint is the offset from the anchor's position to the tip of the InfoWindow.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindow"
          },
          "setContent": {
            "!type": "fn(content: string)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindow"
          },
          "setOptions": {
            "!type": "fn(options: +InfoWindowOptions)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindow"
          },
          "setPosition": {
            "!type": "fn(position: +google.maps.LatLng)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindow"
          },
          "setZIndex": {
            "!type": "fn(zIndex: number)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#InfoWindow"
          }
        }
      },
      "Polyline": {
        "!type": "fn(opts?: +PolylineOptions) -> +google.maps.Polyline",
        "!doc": "A polyline is a linear overlay of connected line segments on the map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getDraggable": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this shape can be dragged by the user.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          },
          "getEditable": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this shape can be edited by the user.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          },
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which this shape is attached.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          },
          "getPath": {
            "!type": "fn() -> +MVCArray<LatLng>",
            "!doc": "Retrieves the path.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          },
          "getVisible": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this poly is visible on the map.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          },
          "setDraggable": {
            "!type": "fn(draggable: bool)",
            "!doc": "If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          },
          "setEditable": {
            "!type": "fn(editable: bool)",
            "!doc": "If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders this shape on the specified map. If map is set to null, the shape will be removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          },
          "setOptions": {
            "!type": "fn(options: +PolylineOptions)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          },
          "setPath": {
            "!type": "fn(path: +MVCArray<LatLng>)",
            "!doc": "Sets the path. See PolylineOptions for more details.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          },
          "setVisible": {
            "!type": "fn(visible: bool)",
            "!doc": "Hides this poly if set to false.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polyline"
          }
        }
      },
      "Polygon": {
        "!type": "fn(opts?: +PolygonOptions) -> +google.maps.Polygon",
        "!doc": "A polygon (like a polyline) defines a series of connected coordinates in an ordered sequence; additionally, polygons form a closed loop and define a filled region.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getDraggable": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this shape can be dragged by the user.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "getEditable": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this shape can be edited by the user.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which this shape is attached.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "getPath": {
            "!type": "fn() -> +MVCArray<LatLng>",
            "!doc": "Retrieves the first path.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "getPaths": {
            "!type": "fn() -> +MVCArray<MVCArray<LatLng>>",
            "!doc": "Retrieves the paths for this polygon.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "getVisible": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this poly is visible on the map.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "setDraggable": {
            "!type": "fn(draggable: bool)",
            "!doc": "If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "setEditable": {
            "!type": "fn(editable: bool)",
            "!doc": "If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders this shape on the specified map. If map is set to null, the shape will be removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "setOptions": {
            "!type": "fn(options: +PolygonOptions)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "setPath": {
            "!type": "fn(path: +MVCArray<LatLng>)",
            "!doc": "Sets the first path. See PolygonOptions for more details.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "setPaths": {
            "!type": "fn(paths: +MVCArray<MVCArray<LatLng>>)",
            "!doc": "Sets the path for this polygon.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          },
          "setVisible": {
            "!type": "fn(visible: bool)",
            "!doc": "Hides this poly if set to false.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Polygon"
          }
        }
      },
      "Rectangle": {
        "!type": "fn(opts?: +RectangleOptions) -> +google.maps.Rectangle",
        "!doc": "A rectangle overlay.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getBounds": {
            "!type": "fn() -> +google.maps.LatLngBounds",
            "!doc": "Returns the bounds of this rectangle.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          },
          "getDraggable": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this rectangle can be dragged by the user.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          },
          "getEditable": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this rectangle can be edited by the user.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          },
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which this rectangle is displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          },
          "getVisible": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this rectangle is visible on the map.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          },
          "setBounds": {
            "!type": "fn(bounds: +google.maps.LatLngBounds)",
            "!doc": "Sets the bounds of this rectangle.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          },
          "setDraggable": {
            "!type": "fn(draggable: bool)",
            "!doc": "If set to true, the user can drag this rectangle over the map.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          },
          "setEditable": {
            "!type": "fn(editable: bool)",
            "!doc": "If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the rectangle on the specified map. If map is set to null, the rectangle will be removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          },
          "setOptions": {
            "!type": "fn(options: +RectangleOptions)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          },
          "setVisible": {
            "!type": "fn(visible: bool)",
            "!doc": "Hides this rectangle if set to false.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Rectangle"
          }
        }
      },
      "Circle": {
        "!type": "fn(opts?: +CircleOptions) -> +google.maps.Circle",
        "!doc": "A circle on the Earth's surface; also known as a \"spherical cap\".",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getBounds": {
            "!type": "fn() -> +google.maps.LatLngBounds",
            "!doc": "Gets the LatLngBounds of this Circle.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "getCenter": {
            "!type": "fn() -> +google.maps.LatLng",
            "!doc": "Returns the center of this circle.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "getDraggable": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this circle can be dragged by the user.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "getEditable": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this circle can be edited by the user.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which this circle is displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "getRadius": {
            "!type": "fn() -> number",
            "!doc": "Returns the radius of this circle (in meters).",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "getVisible": {
            "!type": "fn() -> bool",
            "!doc": "Returns whether this circle is visible on the map.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "setCenter": {
            "!type": "fn(center: +google.maps.LatLng)",
            "!doc": "Sets the center of this circle.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "setDraggable": {
            "!type": "fn(draggable: bool)",
            "!doc": "If set to true, the user can drag this circle over the map.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "setEditable": {
            "!type": "fn(editable: bool)",
            "!doc": "If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the circle on the specified map. If map is set to null, the circle will be removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "setOptions": {
            "!type": "fn(options: +CircleOptions)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "setRadius": {
            "!type": "fn(radius: number)",
            "!doc": "Sets the radius of this circle (in meters).",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          },
          "setVisible": {
            "!type": "fn(visible: bool)",
            "!doc": "Hides this circle if set to false.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Circle"
          }
        }
      },
      "GroundOverlay": {
        "!type": "fn(url: string, bounds: +google.maps.LatLngBounds, opts?: +GroundOverlayOptions) -> +google.maps.GroundOverlay",
        "!doc": "A rectangular image overlay on the map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlay",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getBounds": {
            "!type": "fn() -> +google.maps.LatLngBounds",
            "!doc": "Gets the LatLngBounds of this overlay.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlay"
          },
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which this ground overlay is displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlay"
          },
          "getOpacity": {
            "!type": "fn() -> number",
            "!doc": "Returns the opacity of this ground overlay.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlay"
          },
          "getUrl": {
            "!type": "fn() -> string",
            "!doc": "Gets the url of the projected image.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlay"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the ground overlay on the specified map. If map is set to null, the overlay is removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlay"
          },
          "setOpacity": {
            "!type": "fn(opacity: number)",
            "!doc": "Sets the opacity of this ground overlay.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GroundOverlay"
          }
        }
      },
      "OverlayView": {
        "!type": "fn() -> +google.maps.OverlayView",
        "!doc": "You can implement this class if you want to display custom types of overlay objects on the map. Inherit from this class by setting your overlay's prototype: MyOverlay.prototype = new google.maps.OverlayView();. The OverlayView constructor is guaranteed to be an empty function. You must implement three methods: onAdd(), draw(), and onRemove().",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayView",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "draw": {
            "!type": "fn()",
            "!doc": "Implement this method to draw or update the overlay. This method is called after onAdd() and when the position from projection.fromLatLngToPixel() would return a new value for a given LatLng. This can happen on change of zoom, center, or map type. It is not necessarily called on drag or resize.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayView"
          },
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayView"
          },
          "getPanes": {
            "!type": "fn() -> +MapPanes",
            "!doc": "Returns the panes in which this OverlayView can be rendered. The panes are not initialized until onAdd is called by the API.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayView"
          },
          "getProjection": {
            "!type": "fn() -> +MapCanvasProjection",
            "!doc": "Returns the MapCanvasProjection object associated with this OverlayView. The projection is not initialized until onAdd is called by the API.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayView"
          },
          "onAdd": {
            "!type": "fn()",
            "!doc": "Implement this method to initialize the overlay DOM elements. This method is called once after setMap() is called with a valid map. At this point, panes and projection will have been initialized.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayView"
          },
          "onRemove": {
            "!type": "fn()",
            "!doc": "Implement this method to remove your elements from the DOM. This method is called once following a call to setMap(null).",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayView"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Adds the overlay to the map or panorama.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayView"
          }
        }
      },
      "Geocoder": {
        "!type": "fn() -> +google.maps.Geocoder",
        "!doc": "A service for converting between an address and a LatLng.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Geocoder",
        "prototype": {
          "geocode": {
            "!type": "fn(request: +GeocoderRequest, callback: fn())",
            "!doc": "Geocode a request.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Geocoder"
          }
        }
      },
      "GeocoderStatus": {
        "!doc": "The status returned by the Geocoder on the completion of a call to geocode().",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderStatus"
      },
      "GeocoderLocationType": {
        "!doc": "Describes the type of location returned from a geocode.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#GeocoderLocationType"
      },
      "DirectionsRenderer": {
        "!type": "fn(opts?: +DirectionsRendererOptions) -> +google.maps.DirectionsRenderer",
        "!doc": "Renders directions retrieved in the form of a DirectionsResult object retrieved from the DirectionsService.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRenderer",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getDirections": {
            "!type": "fn() -> +DirectionsResult",
            "!doc": "Returns the renderer's current set of directions.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRenderer"
          },
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which the DirectionsResult is rendered.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRenderer"
          },
          "getPanel": {
            "!type": "fn() -> +Node",
            "!doc": "Returns the panel <div> in which the DirectionsResult is rendered.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRenderer"
          },
          "getRouteIndex": {
            "!type": "fn() -> number",
            "!doc": "Returns the current (zero-based) route index in use by this DirectionsRenderer object.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRenderer"
          },
          "setDirections": {
            "!type": "fn(directions: +DirectionsResult)",
            "!doc": "Set the renderer to use the result from the DirectionsService. Setting a valid set of directions in this manner will display the directions on the renderer's designated map and panel.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRenderer"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "This method specifies the map on which directions will be rendered. Pass null to remove the directions from the map.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRenderer"
          },
          "setOptions": {
            "!type": "fn(options: +DirectionsRendererOptions)",
            "!doc": "Change the options settings of this DirectionsRenderer after initialization.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRenderer"
          },
          "setPanel": {
            "!type": "fn(panel: +Node)",
            "!doc": "This method renders the directions in a <div>. Pass null to remove the content from the panel.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRenderer"
          },
          "setRouteIndex": {
            "!type": "fn(routeIndex: number)",
            "!doc": "Set the (zero-based) index of the route in the DirectionsResult object to render. By default, the first route in the array will be rendered.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsRenderer"
          }
        }
      },
      "DirectionsService": {
        "!type": "fn() -> +google.maps.DirectionsService",
        "!doc": "A service for computing directions between two or more places.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsService",
        "prototype": {
          "route": {
            "!type": "fn(request: +DirectionsRequest, callback: fn())",
            "!doc": "Issue a directions search request.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsService"
          }
        }
      },
      "TravelMode": {
        "!doc": "The valid travel modes that can be specified in a DirectionsRequest as well as the travel modes returned in a DirectionsStep.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TravelMode"
      },
      "UnitSystem": {
        "!doc": "The valid unit systems that can be specified in a DirectionsRequest.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#UnitSystem"
      },
      "TransitMode": {
        "!doc": "The valid transit mode e.g. bus that can be specified in a TransitOptions.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitMode"
      },
      "TransitRoutePreference": {
        "!doc": "The valid transit route type that can be specified in a TransitOptions.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitRoutePreference"
      },
      "DirectionsStatus": {
        "!doc": "The status returned by the DirectionsService on the completion of a call to route().",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DirectionsStatus"
      },
      "ElevationService": {
        "!type": "fn() -> +google.maps.ElevationService",
        "!doc": "Defines a service class that talks directly to Google servers for requesting elevation data.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ElevationService",
        "prototype": {
          "getElevationAlongPath": {
            "!type": "fn(request: +PathElevationRequest, callback: fn())",
            "!doc": "Makes an elevation request along a path, where the elevation data are returned as distance-based samples along that path.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ElevationService"
          },
          "getElevationForLocations": {
            "!type": "fn(request: +LocationElevationRequest, callback: fn())",
            "!doc": "Makes an elevation request for a list of discrete locations.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ElevationService"
          }
        }
      },
      "ElevationStatus": {
        "!doc": "The status returned by the ElevationService upon completion of an elevation requerst.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ElevationStatus"
      },
      "MaxZoomService": {
        "!type": "fn() -> +google.maps.MaxZoomService",
        "!doc": "A service for obtaining the highest zoom level at which satellite imagery is available for a given location.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MaxZoomService",
        "prototype": {
          "getMaxZoomAtLatLng": {
            "!type": "fn(latlng: +google.maps.LatLng, callback: fn())",
            "!doc": "Returns the maximum zoom level available at a particular LatLng for the Satellite map type. As this request is asynchronous, you must pass a callback function which will be executed upon completion of the request, being passed a MaxZoomResult.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MaxZoomService"
          }
        }
      },
      "MaxZoomStatus": {
        "!doc": "The status returned by the MaxZoomService on the completion of a call to getMaxZoomAtLatLng().",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MaxZoomStatus"
      },
      "DistanceMatrixService": {
        "!type": "fn() -> +google.maps.DistanceMatrixService",
        "!doc": "A service for computing distances between multiple origins and destinations.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixService",
        "prototype": {
          "getDistanceMatrix": {
            "!type": "fn(request: +DistanceMatrixRequest, callback: fn())",
            "!doc": "Issues a distance matrix request.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixService"
          }
        }
      },
      "DistanceMatrixStatus": {
        "!doc": "The top-level status about the request in general returned by the DistanceMatrixService upon completion of a distance matrix request.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixStatus"
      },
      "DistanceMatrixElementStatus": {
        "!doc": "The element-level status about a particular origin-destination pairing returned by the DistanceMatrixService upon completion of a distance matrix request.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DistanceMatrixElementStatus"
      },
      "SaveWidget": {
        "!type": "fn(container: +Node, opts?: +SaveWidgetOptions) -> +google.maps.SaveWidget",
        "!doc": "A control that users can use to save a place to Google Maps from your website. In this context, 'place' means a business, point of interest or geographic location. The SaveWidget has a fixed height of 22px.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SaveWidget",
        "prototype": {
          "getAttribution": {
            "!type": "fn() -> +Attribution",
            "!doc": "Returns the Attribution associated with this SaveWidget.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SaveWidget"
          },
          "getPlace": {
            "!type": "fn() -> +Place",
            "!doc": "Returns the Place associated with this SaveWidget.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SaveWidget"
          },
          "setAttribution": {
            "!type": "fn(attribution: +Attribution)",
            "!doc": "Sets the Attribution associated with this SaveWidget.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SaveWidget"
          },
          "setOptions": {
            "!type": "fn(opts: +SaveWidgetOptions)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SaveWidget"
          },
          "setPlace": {
            "!type": "fn(place: +Place)",
            "!doc": "Changes the Place associated with this SaveWidget.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SaveWidget"
          }
        }
      },
      "MapTypeRegistry": {
        "!type": "fn() -> +google.maps.MapTypeRegistry",
        "!doc": "This class extends\nMVCObject.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeRegistry",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "set": {
            "!type": "fn(id: string, mapType: +MapType)",
            "!doc": "Sets the registry to associate the passed string identifier with the passed MapType.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapTypeRegistry"
          }
        }
      },
      "ImageMapType": {
        "!type": "fn(opts: +ImageMapTypeOptions) -> +google.maps.ImageMapType",
        "!doc": "This class implements the MapType interface and is provided for rendering image tiles.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "alt": {
            "!type": "string",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          },
          "maxZoom": {
            "!type": "number",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          },
          "minZoom": {
            "!type": "number",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          },
          "name": {
            "!type": "string",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          },
          "projection": {
            "!type": "+Projection",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          },
          "radius": {
            "!type": "number",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          },
          "tileSize": {
            "!type": "+google.maps.Size",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          },
          "getOpacity": {
            "!type": "fn() -> number",
            "!doc": "Returns the opacity level (0 (transparent) to 1.0) of the ImageMapType tiles.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          },
          "getTile": {
            "!type": "fn(tileCoord: +google.maps.Point, zoom: number, ownerDocument: +Document) -> +Node",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          },
          "releaseTile": {
            "!type": "fn(tile: +Node)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          },
          "setOpacity": {
            "!type": "fn(opacity: number)",
            "!doc": "Sets the opacity level (0 (transparent) to 1.0) of the ImageMapType tiles.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#ImageMapType"
          }
        }
      },
      "StyledMapType": {
        "!type": "fn(styles: +Array<MapTypeStyle>, options?: +StyledMapTypeOptions) -> +google.maps.StyledMapType",
        "!doc": "Creates a MapType with a custom style.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapType",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "alt": {
            "!type": "string",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapType"
          },
          "maxZoom": {
            "!type": "number",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapType"
          },
          "minZoom": {
            "!type": "number",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapType"
          },
          "name": {
            "!type": "string",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapType"
          },
          "projection": {
            "!type": "+Projection",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapType"
          },
          "radius": {
            "!type": "number",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapType"
          },
          "tileSize": {
            "!type": "+google.maps.Size",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapType"
          },
          "getTile": {
            "!type": "fn(tileCoord: +google.maps.Point, zoom: number, ownerDocument: +Document) -> +Node",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapType"
          },
          "releaseTile": {
            "!type": "fn(tile: +Node)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StyledMapType"
          }
        }
      },
      "BicyclingLayer": {
        "!type": "fn() -> +google.maps.BicyclingLayer",
        "!doc": "A layer showing bike lanes and paths.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#BicyclingLayer",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which this layer is displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#BicyclingLayer"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the layer on the specified map. If map is set to null, the layer will be removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#BicyclingLayer"
          }
        }
      },
      "FusionTablesLayer": {
        "!type": "fn(options: +FusionTablesLayerOptions) -> +google.maps.FusionTablesLayer",
        "!doc": "A FusionTablesLayer allows you to display data from a Google Fusion Table on a map, as a rendered layer. (See https://developers.google.com/fusiontables/ for more information about Fusion Tables).",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayer",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which this layer is displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayer"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the layer on the specified map. If map is set to null, the layer will be removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayer"
          },
          "setOptions": {
            "!type": "fn(options: +FusionTablesLayerOptions)",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#FusionTablesLayer"
          }
        }
      },
      "KmlLayer": {
        "!type": "fn(opts?: +KmlLayerOptions) -> +google.maps.KmlLayer",
        "!doc": "A KmlLayer adds geographic markup to the map from a KML, KMZ or GeoRSS file that is hosted on a publicly accessible web server. A KmlFeatureData object is provided for each feature when clicked.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayer",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getDefaultViewport": {
            "!type": "fn() -> +google.maps.LatLngBounds",
            "!doc": "Get the default viewport for the layer being displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayer"
          },
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Get the map on which the KML Layer is being rendered.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayer"
          },
          "getMetadata": {
            "!type": "fn() -> +KmlLayerMetadata",
            "!doc": "Get the metadata associated with this layer, as specified in the layer markup.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayer"
          },
          "getStatus": {
            "!type": "fn() -> +google.maps.KmlLayerStatus",
            "!doc": "Get the status of the layer, set once the requested document has loaded.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayer"
          },
          "getUrl": {
            "!type": "fn() -> string",
            "!doc": "Gets the URL of the KML file being displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayer"
          },
          "getZIndex": {
            "!type": "fn() -> number",
            "!doc": "Gets the z-index of the KML Layer.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayer"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the KML Layer on the specified map. If map is set to null, the layer is removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayer"
          },
          "setUrl": {
            "!type": "fn(url: string)",
            "!doc": "Sets the URL of the KML file to display.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayer"
          },
          "setZIndex": {
            "!type": "fn(zIndex: number)",
            "!doc": "Sets the z-index of the KML Layer.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayer"
          }
        }
      },
      "KmlLayerStatus": {
        "!doc": "The status returned by KmlLayer on the completion of loading a document.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#KmlLayerStatus"
      },
      "TrafficLayer": {
        "!type": "fn() -> +google.maps.TrafficLayer",
        "!doc": "A traffic layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TrafficLayer",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which this layer is displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TrafficLayer"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the layer on the specified map. If map is set to null, the layer will be removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TrafficLayer"
          }
        }
      },
      "TransitLayer": {
        "!type": "fn() -> +google.maps.TransitLayer",
        "!doc": "A transit layer.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLayer",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which this layer is displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLayer"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the layer on the specified map. If map is set to null, the layer will be removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TransitLayer"
          }
        }
      },
      "StreetViewPanorama": {
        "!type": "fn(container: +Node, opts?: +StreetViewPanoramaOptions) -> +google.maps.StreetViewPanorama",
        "!doc": "Displays the panorama for a given LatLng or panorama ID. A StreetViewPanorama object provides a Street View \"viewer\" which can be stand-alone within a separate <div> or bound to a Map.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "controls": {
            "!type": "+Array<MVCArray<Node>>",
            "!doc": "Additional controls to attach to the panorama. To add a control to the panorama, add the control's <div> to the MVCArray corresponding to the ControlPosition where it should be rendered.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "getLinks": {
            "!type": "fn() -> +Array<StreetViewLink>",
            "!doc": "Returns the set of navigation links for the Street View panorama.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "getLocation": {
            "!type": "fn() -> +StreetViewLocation",
            "!doc": "Returns the StreetViewLocation of the current panorama.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "getPano": {
            "!type": "fn() -> string",
            "!doc": "Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "getPhotographerPov": {
            "!type": "fn() -> +StreetViewPov",
            "!doc": "Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the pano_changed event.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "getPosition": {
            "!type": "fn() -> +google.maps.LatLng",
            "!doc": "Returns the current LatLng position for the Street View panorama.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "getPov": {
            "!type": "fn() -> +StreetViewPov",
            "!doc": "Returns the current point of view for the Street View panorama.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "getStatus": {
            "!type": "fn() -> +google.maps.StreetViewStatus",
            "!doc": "Returns the status of the panorama on completion of the setPosition() or setPano() request.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "getVisible": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "getZoom": {
            "!type": "fn() -> number",
            "!doc": "Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "registerPanoProvider": {
            "!type": "fn(provider: fn() -> +StreetViewPanoramaData)",
            "!doc": "Set the custom panorama provider called on pano change to load custom panoramas.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "setLinks": {
            "!type": "fn(links: +Array<StreetViewLink>)",
            "!doc": "Sets the set of navigation links for the Street View panorama.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "setOptions": {
            "!type": "fn(options: +StreetViewPanoramaOptions)",
            "!doc": "Sets a collection of key-value pairs.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "setPano": {
            "!type": "fn(pano: string)",
            "!doc": "Sets the current panorama ID for the Street View panorama.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "setPosition": {
            "!type": "fn(latLng: +google.maps.LatLng)",
            "!doc": "Sets the current LatLng position for the Street View panorama.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "setPov": {
            "!type": "fn(pov: +StreetViewPov)",
            "!doc": "Sets the point of view for the Street View panorama.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "setVisible": {
            "!type": "fn(flag: bool)",
            "!doc": "Sets to true to make the panorama visible. If set to false, the panorama will be hidden whether it is embedded in the map or in its own <div>.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          },
          "setZoom": {
            "!type": "fn(zoom: number)",
            "!doc": "Sets the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewPanorama"
          }
        }
      },
      "StreetViewService": {
        "!doc": "A StreetViewService object performs searches for Street View data.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewService",
        "prototype": {
          "getPanoramaById": {
            "!type": "fn(pano: string, callback: fn())",
            "!doc": "Retrieves the data for the given pano id and passes it to the provided callback as a StreetViewPanoramaData object. Pano ids are unique per panorama and stable for the lifetime of a session, but are liable to change between sessions.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewService"
          },
          "getPanoramaByLocation": {
            "!type": "fn(latlng: +google.maps.LatLng, radius: number, callback: fn())",
            "!doc": "Retrieves the StreetViewPanoramaData for a panorama within a given radius of the given LatLng. The StreetViewPanoramaData is passed to the provided callback. If the radius is less than 50 meters, the nearest panorama will be returned.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewService"
          }
        }
      },
      "StreetViewStatus": {
        "!doc": "The status returned by the StreetViewService on completion of a Street View request.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewStatus"
      },
      "StreetViewCoverageLayer": {
        "!type": "fn() -> +google.maps.StreetViewCoverageLayer",
        "!doc": "A layer that illustrates the locations where Street View is available.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewCoverageLayer",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "getMap": {
            "!type": "fn() -> +google.maps.Map",
            "!doc": "Returns the map on which this layer is displayed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewCoverageLayer"
          },
          "setMap": {
            "!type": "fn(map: +google.maps.Map)",
            "!doc": "Renders the layer on the specified map. If the map is set to null, the layer will be removed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#StreetViewCoverageLayer"
          }
        }
      },
      "event": {
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#event",
        "prototype": {
          "addDomListener": {
            "!type": "fn(instance: ?, eventName: string, handler: fn(), capture?: bool) -> +MapsEventListener",
            "!doc": "Cross browser event handler registration. This listener is removed by calling removeListener(handle) for the handle that is returned by this function.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#event"
          },
          "addDomListenerOnce": {
            "!type": "fn(instance: ?, eventName: string, handler: fn(), capture?: bool) -> +MapsEventListener",
            "!doc": "Wrapper around addDomListener that removes the listener after the first event.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#event"
          },
          "addListener": {
            "!type": "fn(instance: ?, eventName: string, handler: fn()) -> +MapsEventListener",
            "!doc": "Adds the given listener function to the given event name for the given object instance. Returns an identifier for this listener that can be used with removeListener().",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#event"
          },
          "addListenerOnce": {
            "!type": "fn(instance: ?, eventName: string, handler: fn()) -> +MapsEventListener",
            "!doc": "Like addListener, but the handler removes itself after handling the first event.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#event"
          },
          "clearInstanceListeners": {
            "!type": "fn(instance: ?)",
            "!doc": "Removes all listeners for all events for the given instance.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#event"
          },
          "clearListeners": {
            "!type": "fn(instance: ?, eventName: string)",
            "!doc": "Removes all listeners for the given event for the given instance.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#event"
          },
          "removeListener": {
            "!type": "fn(listener: +MapsEventListener)",
            "!doc": "Removes the given listener, which should have been returned by addListener above.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#event"
          },
          "trigger": {
            "!type": "fn(instance: ?, eventName: string, var_args: ?)",
            "!doc": "Triggers the given event. All arguments after eventName are passed as arguments to the listeners.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#event"
          }
        }
      },
      "LatLng": {
        "!type": "fn(lat: number, lng: number, noWrap?: bool) -> +google.maps.LatLng",
        "!doc": "A LatLng is a point in geographical coordinates: latitude and longitude.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLng",
        "prototype": {
          "equals": {
            "!type": "fn(other: +google.maps.LatLng) -> bool",
            "!doc": "Comparison function.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLng"
          },
          "lat": {
            "!type": "fn() -> number",
            "!doc": "Returns the latitude in degrees.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLng"
          },
          "lng": {
            "!type": "fn() -> number",
            "!doc": "Returns the longitude in degrees.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLng"
          },
          "toString": {
            "!type": "fn() -> string",
            "!doc": "Converts to string representation.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLng"
          },
          "toUrlValue": {
            "!type": "fn(precision?: number) -> string",
            "!doc": "Returns a string of the form \"lat,lng\" for this LatLng. We round the lat/lng values to 6 decimal places by default.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLng"
          }
        }
      },
      "LatLngBounds": {
        "!type": "fn(sw?: +google.maps.LatLng, ne?: +google.maps.LatLng) -> +google.maps.LatLngBounds",
        "!doc": "A LatLngBounds instance represents a rectangle in geographical coordinates, including one that crosses the 180 degrees longitudinal meridian.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds",
        "prototype": {
          "contains": {
            "!type": "fn(latLng: +google.maps.LatLng) -> bool",
            "!doc": "Returns true if the given lat/lng is in this bounds.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "equals": {
            "!type": "fn(other: +google.maps.LatLngBounds) -> bool",
            "!doc": "Returns true if this bounds approximately equals the given bounds.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "extend": {
            "!type": "fn(point: +google.maps.LatLng) -> +google.maps.LatLngBounds",
            "!doc": "Extends this bounds to contain the given point.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "getCenter": {
            "!type": "fn() -> +google.maps.LatLng",
            "!doc": "Computes the center of this LatLngBounds",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "getNorthEast": {
            "!type": "fn() -> +google.maps.LatLng",
            "!doc": "Returns the north-east corner of this bounds.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "getSouthWest": {
            "!type": "fn() -> +google.maps.LatLng",
            "!doc": "Returns the south-west corner of this bounds.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "intersects": {
            "!type": "fn(other: +google.maps.LatLngBounds) -> bool",
            "!doc": "Returns true if this bounds shares any points with this bounds.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "isEmpty": {
            "!type": "fn() -> bool",
            "!doc": "Returns if the bounds are empty.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "toSpan": {
            "!type": "fn() -> +google.maps.LatLng",
            "!doc": "Converts the given map bounds to a lat/lng span.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "toString": {
            "!type": "fn() -> string",
            "!doc": "Converts to string.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "toUrlValue": {
            "!type": "fn(precision?: number) -> string",
            "!doc": "Returns a string of the form \"lat_lo,lng_lo,lat_hi,lng_hi\" for this bounds, where \"lo\" corresponds to the southwest corner of the bounding box, while \"hi\" corresponds to the northeast corner of that box.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          },
          "union": {
            "!type": "fn(other: +google.maps.LatLngBounds) -> +google.maps.LatLngBounds",
            "!doc": "Extends this bounds to contain the union of this and the given bounds.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LatLngBounds"
          }
        }
      },
      "Point": {
        "!type": "fn(x: number, y: number) -> +google.maps.Point",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Point",
        "prototype": {
          "x": {
            "!type": "number",
            "!doc": "The X coordinate",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Point"
          },
          "y": {
            "!type": "number",
            "!doc": "The Y coordinate",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Point"
          },
          "equals": {
            "!type": "fn(other: +google.maps.Point) -> bool",
            "!doc": "Compares two Points",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Point"
          },
          "toString": {
            "!type": "fn() -> string",
            "!doc": "Returns a string representation of this Point.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Point"
          }
        }
      },
      "Size": {
        "!type": "fn(width: number, height: number, widthUnit?: string, heightUnit?: string) -> +google.maps.Size",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Size",
        "prototype": {
          "height": {
            "!type": "number",
            "!doc": "The height along the y-axis, in pixels.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Size"
          },
          "width": {
            "!type": "number",
            "!doc": "The width along the x-axis, in pixels.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Size"
          },
          "equals": {
            "!type": "fn(other: +google.maps.Size) -> bool",
            "!doc": "Compares two Sizes.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Size"
          },
          "toString": {
            "!type": "fn() -> string",
            "!doc": "Returns a string representation of this Size.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Size"
          }
        }
      },
      "MVCObject": {
        "!type": "fn() -> +google.maps.MVCObject",
        "!doc": "Base class implementing KVO. The MVCObject constructor is guaranteed to be an empty function, and so you may inherit from MVCObject by simply writing MySubclass.prototype = new google.maps.MVCObject();. Unless otherwise noted, this is not true of other classes in the API, and inheriting from other classes in the API is not supported.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCObject",
        "prototype": {
          "addListener": {
            "!type": "fn(eventName: string, handler: fn()) -> +MapsEventListener",
            "!doc": "Adds the given listener function to the given event name. Returns an identifier for this listener that can be used with google.maps.event.removeListener.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCObject"
          },
          "bindTo": {
            "!type": "fn(key: string, target: +google.maps.MVCObject, targetKey?: string, noNotify?: bool)",
            "!doc": "Binds a View to a Model.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCObject"
          },
          "changed": {
            "!type": "fn(key: string)",
            "!doc": "Generic handler for state changes. Override this in derived classes to handle arbitrary state changes.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCObject"
          },
          "get": {
            "!type": "fn(key: string) -> ?",
            "!doc": "Gets a value.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCObject"
          },
          "notify": {
            "!type": "fn(key: string)",
            "!doc": "Notify all observers of a change on this property. This notifies both objects that are bound to the object's property as well as the object that it is bound to.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCObject"
          },
          "set": {
            "!type": "fn(key: string, value: ?)",
            "!doc": "Sets a value.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCObject"
          },
          "setValues": {
            "!type": "fn(values: ?)",
            "!doc": "Sets a collection of key-value pairs.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCObject"
          },
          "unbind": {
            "!type": "fn(key: string)",
            "!doc": "Removes a binding. Unbinding will set the unbound property to the current value. The object will not be notified, as the value has not changed.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCObject"
          },
          "unbindAll": {
            "!type": "fn()",
            "!doc": "Removes all bindings.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCObject"
          }
        }
      },
      "MVCArray": {
        "!type": "fn(array?: +Array) -> +google.maps.MVCArray",
        "!doc": "This class extends\nMVCObject.",
        "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray",
        "prototype": {
          "!proto": "google.maps.MVCObject.prototype",
          "clear": {
            "!type": "fn()",
            "!doc": "Removes all elements from the array.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray"
          },
          "forEach": {
            "!type": "fn(callback: fn())",
            "!doc": "Iterate over each element, calling the provided callback. The callback is called for each element like: callback(element, index).",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray"
          },
          "getArray": {
            "!type": "fn() -> +Array",
            "!doc": "Returns a reference to the underlying Array. Warning: if the Array is mutated, no events will be fired by this object.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray"
          },
          "getAt": {
            "!type": "fn(i: number) -> ?",
            "!doc": "Returns the element at the specified index.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray"
          },
          "getLength": {
            "!type": "fn() -> number",
            "!doc": "Returns the number of elements in this array.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray"
          },
          "insertAt": {
            "!type": "fn(i: number, elem: ?)",
            "!doc": "Inserts an element at the specified index.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray"
          },
          "pop": {
            "!type": "fn() -> ?",
            "!doc": "Removes the last element of the array and returns that element.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray"
          },
          "push": {
            "!type": "fn(elem: ?) -> number",
            "!doc": "Adds one element to the end of the array and returns the new length of the array.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray"
          },
          "removeAt": {
            "!type": "fn(i: number) -> ?",
            "!doc": "Removes an element from the specified index.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray"
          },
          "setAt": {
            "!type": "fn(i: number, elem: ?)",
            "!doc": "Sets an element at the specified index.",
            "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MVCArray"
          }
        }
      },
      "geometry": {
        "encoding": {
          "!doc": "Utilities for polyline encoding and decoding.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#encoding",
          "prototype": {
            "decodePath": {
              "!type": "fn(encodedPath: string) -> +Array<LatLng>",
              "!doc": "Decodes an encoded path string into a sequence of LatLngs.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#encoding"
            },
            "encodePath": {
              "!type": "fn(path: +Array<LatLng>) -> string",
              "!doc": "Encodes a sequence of LatLngs into an encoded path string.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#encoding"
            }
          }
        },
        "spherical": {
          "!doc": "Utility functions for computing geodesic angles, distances and areas. The default radius is Earth's radius of 6378137 meters.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#spherical",
          "prototype": {
            "computeArea": {
              "!type": "fn(path: +Array<LatLng>, radius?: number) -> number",
              "!doc": "Returns the area of a closed path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#spherical"
            },
            "computeDistanceBetween": {
              "!type": "fn(from: +google.maps.LatLng, to: +google.maps.LatLng, radius?: number) -> number",
              "!doc": "Returns the distance between two LatLngs.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#spherical"
            },
            "computeHeading": {
              "!type": "fn(from: +google.maps.LatLng, to: +google.maps.LatLng) -> number",
              "!doc": "Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range [-180,180).",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#spherical"
            },
            "computeLength": {
              "!type": "fn(path: +Array<LatLng>, radius?: number) -> number",
              "!doc": "Returns the length of the given path.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#spherical"
            },
            "computeOffset": {
              "!type": "fn(from: +google.maps.LatLng, distance: number, heading: number, radius?: number) -> +google.maps.LatLng",
              "!doc": "Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north).",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#spherical"
            },
            "computeOffsetOrigin": {
              "!type": "fn(to: +google.maps.LatLng, distance: number, heading: number, radius?: number) -> +google.maps.LatLng",
              "!doc": "Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#spherical"
            },
            "computeSignedArea": {
              "!type": "fn(loop: +Array<LatLng>, radius?: number) -> number",
              "!doc": "Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#spherical"
            },
            "interpolate": {
              "!type": "fn(from: +google.maps.LatLng, to: +google.maps.LatLng, fraction: number) -> +google.maps.LatLng",
              "!doc": "Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#spherical"
            }
          }
        },
        "poly": {
          "!doc": "Utility functions for computations involving polygons and polylines.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#poly",
          "prototype": {
            "containsLocation": {
              "!type": "fn(point: +google.maps.LatLng, polygon: +google.maps.Polygon) -> bool",
              "!doc": "Computes whether the given point lies inside the specified polygon.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#poly"
            },
            "isLocationOnEdge": {
              "!type": "fn(point: +google.maps.LatLng, poly: +google.maps.Polygon, tolerance?: number) -> bool",
              "!doc": "Computes whether the given point lies on or near to a polyline, or the edge of a polygon, within a specified tolerance. Returns true when the difference between the latitude and longitude of the supplied point, and the closest point on the edge, is less than the tolerance. The tolerance defaults to 10-9 degrees.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#poly"
            }
          }
        }
      },
      "adsense": {
        "AdUnit": {
          "!type": "fn(container: +Node, opts: +AdUnitOptions) -> +google.maps.adsense.AdUnit",
          "!doc": "Implements AdSense for Content advertising on an associated map. To use an AdUnit, you must obtain and specify an AdSense for Content publisher ID within the AdUnit's constructor options.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit",
          "prototype": {
            "!proto": "google.maps.MVCObject.prototype",
            "getBackgroundColor": {
              "!type": "fn() -> string",
              "!doc": "Returns the AdUnit's background color.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "getBorderColor": {
              "!type": "fn() -> string",
              "!doc": "Returns the AdUnit's border color.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "getChannelNumber": {
              "!type": "fn() -> string",
              "!doc": "Returns the channel number in use by this AdUnit.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "getContainer": {
              "!type": "fn() -> +Node",
              "!doc": "Returns the containing element of the AdUnit.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "getFormat": {
              "!type": "fn() -> +google.maps.adsense.AdFormat",
              "!doc": "Returns the format in use by this AdUnit.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "getMap": {
              "!type": "fn() -> +google.maps.Map",
              "!doc": "Returns the map to which this AdUnit's ads are targeted.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "getPosition": {
              "!type": "fn() -> +google.maps.ControlPosition",
              "!doc": "Returns the ControlPosition at which this AdUnit is displayed on the map.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "getPublisherId": {
              "!type": "fn() -> string",
              "!doc": "Returns the specified AdSense For Content publisher ID.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "getTextColor": {
              "!type": "fn() -> string",
              "!doc": "Returns the AdUnit's text color.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "getTitleColor": {
              "!type": "fn() -> string",
              "!doc": "Returns the AdUnit's title color.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "getUrlColor": {
              "!type": "fn() -> string",
              "!doc": "Returns the AdUnit's URL color.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "setBackgroundColor": {
              "!type": "fn(backgroundColor: string)",
              "!doc": "Sets the AdUnit's background color.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "setBorderColor": {
              "!type": "fn(borderColor: string)",
              "!doc": "Sets the AdUnit's border color.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "setChannelNumber": {
              "!type": "fn(channelNumber: string)",
              "!doc": "Specifies the channel number for this AdUnit. Channel numbers are optional and can be created for Google AdSense tracking.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "setFormat": {
              "!type": "fn(format: +google.maps.adsense.AdFormat)",
              "!doc": "Specifies the display format for this AdUnit.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "setMap": {
              "!type": "fn(map: +google.maps.Map)",
              "!doc": "Associates this AdUnit with the specified map. Ads will be targeted to the map's viewport. The map must be specified in order to display ads.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "setPosition": {
              "!type": "fn(position: +google.maps.ControlPosition)",
              "!doc": "Sets the ControlPosition at which to display the AdUnit on the map. If the position is set to null, the AdUnit is removed from the map.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "setTextColor": {
              "!type": "fn(textColor: string)",
              "!doc": "Sets the AdUnit's text color.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "setTitleColor": {
              "!type": "fn(titleColor: string)",
              "!doc": "Sets the AdUnit's title color.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            },
            "setUrlColor": {
              "!type": "fn(urlColor: string)",
              "!doc": "Sets the AdUnit's URL color.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdUnit"
            }
          }
        },
        "AdFormat": {
          "!doc": "Identifiers used to specify an AdSense For Content format. See https://google.com/adsense/adformats.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AdFormat"
        }
      },
      "panoramio": {
        "PanoramioLayer": {
          "!type": "fn(opts?: +PanoramioLayerOptions) -> +google.maps.panoramio.PanoramioLayer",
          "!doc": "A PanoramioLayer displays photos from Panoramio as a rendered layer.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayer",
          "prototype": {
            "!proto": "google.maps.MVCObject.prototype",
            "getMap": {
              "!type": "fn() -> +google.maps.Map",
              "!doc": "Returns the map on which this layer is displayed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayer"
            },
            "getTag": {
              "!type": "fn() -> string",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayer"
            },
            "getUserId": {
              "!type": "fn() -> string",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayer"
            },
            "setMap": {
              "!type": "fn(map: +google.maps.Map)",
              "!doc": "Renders the layer on the specified map. If map is set to null, the layer will be removed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayer"
            },
            "setOptions": {
              "!type": "fn(options: +PanoramioLayerOptions)",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayer"
            },
            "setTag": {
              "!type": "fn(tag: string)",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayer"
            },
            "setUserId": {
              "!type": "fn(userId: string)",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PanoramioLayer"
            }
          }
        }
      },
      "places": {
        "Autocomplete": {
          "!type": "fn(inputField: +HTMLInputElement, opts?: +AutocompleteOptions) -> +google.maps.places.Autocomplete",
          "!doc": "A service to provide Place predictions based on a user's text input. It attaches to an input element of type text, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Autocomplete",
          "prototype": {
            "!proto": "google.maps.MVCObject.prototype",
            "getBounds": {
              "!type": "fn() -> +google.maps.LatLngBounds",
              "!doc": "Returns the bounds to which predictions are biased.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Autocomplete"
            },
            "getPlace": {
              "!type": "fn() -> +PlaceResult",
              "!doc": "Returns the details of the Place selected by user if the details were successfully retrieved. Otherwise returns a stub Place object, with the name property set to the current value of the input field.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Autocomplete"
            },
            "setBounds": {
              "!type": "fn(bounds: +google.maps.LatLngBounds)",
              "!doc": "Sets the preferred area within which to return Place results. Results are biased towards, but not restricted to, this area.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Autocomplete"
            },
            "setComponentRestrictions": {
              "!type": "fn(restrictions: +ComponentRestrictions)",
              "!doc": "Sets the component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Autocomplete"
            },
            "setTypes": {
              "!type": "fn(types: +Array<string>)",
              "!doc": "Sets the types of predictions to be returned. Supported types are 'establishment' for businesses and 'geocode' for addresses. If no type is specified, both types will be returned. The setTypes method accepts a single element array.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#Autocomplete"
            }
          }
        },
        "AutocompleteService": {
          "!type": "fn() -> +google.maps.places.AutocompleteService",
          "!doc": "Contains methods related to retrieving Autocomplete predictions.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompleteService",
          "prototype": {
            "getPlacePredictions": {
              "!type": "fn(request: +AutocompletionRequest, callback: fn())",
              "!doc": "Retrieves place autocomplete predictions based on the supplied autocomplete request.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompleteService"
            },
            "getQueryPredictions": {
              "!type": "fn(request: +QueryAutocompletionRequest, callback: fn())",
              "!doc": "Retrieves query autocomplete predictions based on the supplied query autocomplete request.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#AutocompleteService"
            }
          }
        },
        "PlacesService": {
          "!type": "fn(attrContainer: +HTMLDivElement) -> +google.maps.places.PlacesService",
          "!doc": "Contains methods related to searching for Places and retrieving details about a Place.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacesService",
          "prototype": {
            "getDetails": {
              "!type": "fn(request: +PlaceDetailsRequest, callback: fn())",
              "!doc": "Retrieves details about the Place identified by the given placeId.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacesService"
            },
            "nearbySearch": {
              "!type": "fn(request: +PlaceSearchRequest, callback: fn())",
              "!doc": "Retrieves a list of Places in a given area. The PlaceResults passed to the callback are stripped-down versions of a full PlaceResult. A more detailed PlaceResult for each Place can be obtained by sending a Place Details request with the desired Place's placeId value.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacesService"
            },
            "radarSearch": {
              "!type": "fn(request: +RadarSearchRequest, callback: fn())",
              "!doc": "Similar to the nearbySearch function, with the following differences: the search response will include up to 200 Places, identified only by their geographic coordinates and place_id.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacesService"
            },
            "textSearch": {
              "!type": "fn(request: +TextSearchRequest, callback: fn())",
              "!doc": "Similar to the nearbySearch function, with the following differences: it retrieves a list of Places based on the query attribute in the given request object; bounds or location  + radius parameters are optional; and the region, when provided, will not restrict the results to places inside the area, only bias the response towards results near it.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacesService"
            }
          }
        },
        "PlacesServiceStatus": {
          "!doc": "The status returned by the PlacesService on the completion of its searches.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#PlacesServiceStatus"
        },
        "RankBy": {
          "!doc": "Ranking options for a PlaceSearchRequest.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#RankBy"
        },
        "SearchBox": {
          "!type": "fn(inputField: +HTMLInputElement, opts?: +SearchBoxOptions) -> +google.maps.places.SearchBox",
          "!doc": "A service to provide query predictions based on a user's text input. It attaches to an input element of type text, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SearchBox",
          "prototype": {
            "!proto": "google.maps.MVCObject.prototype",
            "getBounds": {
              "!type": "fn() -> +google.maps.LatLngBounds",
              "!doc": "Returns the bounds to which query predictions are biased.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SearchBox"
            },
            "getPlaces": {
              "!type": "fn() -> +Array<PlaceResult>",
              "!doc": "Returns the query selected by the user, or null if no places have been found yet, to be used with places_changed event.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SearchBox"
            },
            "setBounds": {
              "!type": "fn(bounds: +google.maps.LatLngBounds)",
              "!doc": "Sets the region to use for biasing query predictions. Results will only be biased towards this area and not be completely restricted to it.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#SearchBox"
            }
          }
        }
      },
      "drawing": {
        "DrawingManager": {
          "!type": "fn(options?: +DrawingManagerOptions) -> +google.maps.drawing.DrawingManager",
          "!doc": "Allows users to draw markers, polygons, polylines, rectangles, and circles on the map. The DrawingManager's drawing mode defines the type of overlay that will be created by the user. Adds a control to the map, allowing the user to switch drawing mode.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManager",
          "prototype": {
            "!proto": "google.maps.MVCObject.prototype",
            "getDrawingMode": {
              "!type": "fn() -> +google.maps.drawing.OverlayType",
              "!doc": "Returns the DrawingManager's drawing mode.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManager"
            },
            "getMap": {
              "!type": "fn() -> +google.maps.Map",
              "!doc": "Returns the Map to which the DrawingManager is attached, which is the Map on which the overlays created will be placed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManager"
            },
            "setDrawingMode": {
              "!type": "fn(drawingMode: +google.maps.drawing.OverlayType)",
              "!doc": "Changes the DrawingManager's drawing mode, which defines the type of overlay to be added on the map. Accepted values are MARKER, POLYGON, POLYLINE, RECTANGLE, CIRCLE, or null. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManager"
            },
            "setMap": {
              "!type": "fn(map: +google.maps.Map)",
              "!doc": "Attaches the DrawingManager object to the specified Map.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManager"
            },
            "setOptions": {
              "!type": "fn(options: +DrawingManagerOptions)",
              "!doc": "Sets the DrawingManager's options.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DrawingManager"
            }
          }
        },
        "OverlayType": {
          "!doc": "The types of overlay that may be created by the DrawingManager.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#OverlayType"
        }
      },
      "weather": {
        "CloudLayer": {
          "!type": "fn() -> +google.maps.weather.CloudLayer",
          "!doc": "A layer showing cloud imagery.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CloudLayer",
          "prototype": {
            "!proto": "google.maps.MVCObject.prototype",
            "getMap": {
              "!type": "fn() -> +google.maps.Map",
              "!doc": "Returns the map on which this layer is displayed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CloudLayer"
            },
            "setMap": {
              "!type": "fn(map: +google.maps.Map)",
              "!doc": "Renders the layer on the specified map. If map is set to null, the layer will be removed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#CloudLayer"
            }
          }
        },
        "WeatherLayer": {
          "!type": "fn(opts?: +WeatherLayerOptions) -> +google.maps.weather.WeatherLayer",
          "!doc": "A layer that displays weather icons.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayer",
          "prototype": {
            "!proto": "google.maps.MVCObject.prototype",
            "getMap": {
              "!type": "fn() -> +google.maps.Map",
              "!doc": "Returns the map on which this layer is displayed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayer"
            },
            "setMap": {
              "!type": "fn(map: +google.maps.Map)",
              "!doc": "Renders the layer on the specified map. If map is set to null, the layer will be removed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayer"
            },
            "setOptions": {
              "!type": "fn(options: +WeatherLayerOptions)",
              "!doc": "Sets the WeatherLayer's options.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WeatherLayer"
            }
          }
        },
        "TemperatureUnit": {
          "!doc": "The temperature unit displayed by the weather layer.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#TemperatureUnit"
        },
        "WindSpeedUnit": {
          "!doc": "The wind speed unit displayed by the weather layer.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#WindSpeedUnit"
        },
        "LabelColor": {
          "!doc": "The color of the labels displayed on the weather layer.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#LabelColor"
        }
      },
      "visualization": {
        "MapsEngineLayer": {
          "!type": "fn(options: +MapsEngineLayerOptions) -> +google.maps.visualization.MapsEngineLayer",
          "!doc": "A MapsEngineLayer allows you to display data from Google Maps Engine or the Google Earth Gallery.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer",
          "prototype": {
            "!proto": "google.maps.MVCObject.prototype",
            "getLayerId": {
              "!type": "fn() -> string",
              "!doc": "Returns the ID of the Maps Engine layer being displayed, if set.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "getLayerKey": {
              "!type": "fn() -> string",
              "!doc": "Returns the key of the layer to be displayed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "getMap": {
              "!type": "fn() -> +google.maps.Map",
              "!doc": "Returns the map on which this layer is displayed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "getMapId": {
              "!type": "fn() -> string",
              "!doc": "Returns the ID of the Maps Engine map to which the layer belongs.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "getOpacity": {
              "!type": "fn() -> number",
              "!doc": "Returns the opacity of the layer. Applies only to imagery layers.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "getProperties": {
              "!type": "fn() -> +MapsEngineLayerProperties",
              "!doc": "Returns properties of the Maps Engine layer, which are available once the layer has loaded.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "getStatus": {
              "!type": "fn() -> +MapsEngineStatus",
              "!doc": "Returns the status of the layer, which is available once the requested layer has loaded.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "getZIndex": {
              "!type": "fn() -> number",
              "!doc": "Returns the z-index.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "setLayerId": {
              "!type": "fn(layerId: string)",
              "!doc": "Sets the ID of a single Maps Engine layer to display. Changing this value will cause the layer to be redrawn.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "setLayerKey": {
              "!type": "fn(layerKey: string)",
              "!doc": "Sets the key of the layer to be displayed. Maps Engine layer keys are only unique within a single map, and can be changed by map owners. Changing this value will cause the layer to be redrawn.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "setMap": {
              "!type": "fn(map: +google.maps.Map)",
              "!doc": "Renders the layer on the specified map. If map is set to null, the layer will be removed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "setMapId": {
              "!type": "fn(mapId: string)",
              "!doc": "Sets the ID of the Maps Engine map that contains the layer with the given layerKey. Changing this value will cause the layer to be redrawn.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "setOpacity": {
              "!type": "fn(opacity: number)",
              "!doc": "Sets the opacity of the layer, expressed as a number between 0 and 1. Applies only to imagery layers. Note: Be careful of setting this option for other layer types, as it may become effective in the future.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "setOptions": {
              "!type": "fn(options: +MapsEngineLayerOptions)",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            },
            "setZIndex": {
              "!type": "fn(zIndex: number)",
              "!doc": "Sets the z-index. Only applies to Vector and KML layers.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#MapsEngineLayer"
            }
          }
        },
        "DynamicMapsEngineLayer": {
          "!type": "fn(options: +DynamicMapsEngineLayerOptions) -> +google.maps.visualization.DynamicMapsEngineLayer",
          "!doc": "A DynamicMapsEngineLayer allows you to display data from Google Maps Engine or the Google Earth Gallery.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer",
          "prototype": {
            "!proto": "google.maps.MVCObject.prototype",
            "getFeatureStyle": {
              "!type": "fn(featureId: string) -> +FeatureStyle",
              "!doc": "Returns the style for the given feature, with which individual style properties can be retrieved or set.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "getLayerId": {
              "!type": "fn() -> string",
              "!doc": "Returns the ID of the Maps Engine layer being displayed, if set.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "getLayerKey": {
              "!type": "fn() -> string",
              "!doc": "Returns the key of the layer to be displayed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "getMap": {
              "!type": "fn() -> +google.maps.Map",
              "!doc": "Returns the map on which this layer is displayed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "getMapId": {
              "!type": "fn() -> string",
              "!doc": "Returns the ID of the Maps Engine map to which the layer belongs.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "getOpacity": {
              "!type": "fn() -> number",
              "!doc": "Returns the opacity of the layer. Applies only to imagery layers.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "getStatus": {
              "!type": "fn() -> +MapsEngineStatus",
              "!doc": "Returns the status of the layer, set once the requested layer has loaded.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "setLayerId": {
              "!type": "fn(layerId: string)",
              "!doc": "Sets the ID of a single Maps Engine layer to display.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "setLayerKey": {
              "!type": "fn(layerKey: string)",
              "!doc": "Sets the key of the layer to be displayed. Maps Engine Layer Keys are only unique within a single map, and can be changed by map owners. Changing this value will cause the layer to be redrawn.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "setMap": {
              "!type": "fn(map: +google.maps.Map)",
              "!doc": "Renders the layer on the specified map. If map is set to null, the layer will be removed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "setMapId": {
              "!type": "fn(mapId: string)",
              "!doc": "Sets the ID of the Maps Engine map to which the layer belongs. Changing this value will cause the layer to be redrawn.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "setOpacity": {
              "!type": "fn(opacity: number)",
              "!doc": "Sets the opacity of the layer, expressed as a number between 0 and 1. Applies only to imagery layers. Note: Be careful of setting this option for other layer types, as it may become effective in the future.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            },
            "setOptions": {
              "!type": "fn(options: +DynamicMapsEngineLayerOptions)",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#DynamicMapsEngineLayer"
            }
          }
        },
        "HeatmapLayer": {
          "!type": "fn(opts?: +HeatmapLayerOptions) -> +google.maps.visualization.HeatmapLayer",
          "!doc": "A layer that provides a client-side rendered heatmap, depicting the intensity of data at geographical points.",
          "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayer",
          "prototype": {
            "!proto": "google.maps.MVCObject.prototype",
            "getData": {
              "!type": "fn() -> +MVCArray<LatLng",
              "!doc": "Returns the data points currently displayed by this heatmap.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayer"
            },
            "getMap": {
              "!type": "fn() -> +google.maps.Map",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayer"
            },
            "setData": {
              "!type": "fn(data: +MVCArray<LatLng)",
              "!doc": "Sets the data points to be displayed by this heatmap.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayer"
            },
            "setMap": {
              "!type": "fn(map: +google.maps.Map)",
              "!doc": "Renders the heatmap on the specified map. If map is set to null, the heatmap will be removed.",
              "!url": "https://developers.google.com/maps/documentation/javascript/3.19/reference#HeatmapLayer"
            }
          }
        }
      }
    }
  }
};
});