(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("gmaps_3", function(server, options) {
    server._gmaps = {};
    return {
      defs : defs
    };
  });

  var defs = {"!name":"gmaps","google":{"maps":{"MapTypeId":{},"MapTypeControlOptions":{},"MapTypeControlStyle":{},"OverviewMapControlOptions":{},"PanControlOptions":{},"RotateControlOptions":{},"ScaleControlOptions":{},"ScaleControlStyle":{},"StreetViewControlOptions":{},"ZoomControlOptions":{},"ZoomControlStyle":{},"ControlPosition":{},"Data":{"DataOptions":{},"GeoJsonOptions":{},"StyleOptions":{},"StylingFunction":{},"Feature":{},"FeatureOptions":{},"Geometry":{},"Point":{},"MultiPoint":{},"LineString":{},"MultiLineString":{},"LinearRing":{},"Polygon":{},"MultiPolygon":{},"GeometryCollection":{},"MouseEvent":{},"AddFeatureEvent":{},"RemoveFeatureEvent":{},"SetGeometryEvent":{},"SetPropertyEvent":{},"RemovePropertyEvent":{}},"Marker":{},"MarkerOptions":{},"Icon":{},"MarkerShape":{},"Symbol":{},"SymbolPath":{},"Animation":{},"InfoWindow":{},"InfoWindowOptions":{},"Polyline":{},"PolylineOptions":{},"IconSequence":{},"Polygon":{},"PolygonOptions":{},"PolyMouseEvent":{},"Rectangle":{},"RectangleOptions":{},"Circle":{},"CircleOptions":{},"StrokePosition":{},"GroundOverlay":{},"GroundOverlayOptions":{},"OverlayView":{},"MapPanes":{},"MapCanvasProjection":{},"Geocoder":{},"GeocoderRequest":{},"GeocoderComponentRestrictions":{},"GeocoderStatus":{},"GeocoderResult":{},"GeocoderAddressComponent":{},"GeocoderGeometry":{},"GeocoderLocationType":{},"DirectionsRenderer":{},"DirectionsRendererOptions":{},"DirectionsService":{},"DirectionsRequest":{},"TravelMode":{},"UnitSystem":{},"TransitOptions":{},"DirectionsWaypoint":{},"DirectionsStatus":{},"DirectionsResult":{},"DirectionsRoute":{},"DirectionsLeg":{},"DirectionsStep":{},"Distance":{},"Duration":{},"Time":{},"TransitDetails":{},"TransitStop":{},"TransitLine":{},"TransitAgency":{},"TransitVehicle":{},"VehicleType":{},"ElevationService":{},"LocationElevationRequest":{},"PathElevationRequest":{},"ElevationResult":{},"ElevationStatus":{},"MaxZoomService":{},"MaxZoomResult":{},"MaxZoomStatus":{},"DistanceMatrixService":{},"DistanceMatrixRequest":{},"DistanceMatrixResponse":{},"DistanceMatrixResponseRow":{},"DistanceMatrixResponseElement":{},"DistanceMatrixStatus":{},"DistanceMatrixElementStatus":{},"MapType":{},"MapTypeRegistry":{},"Projection":{},"ImageMapType":{},"ImageMapTypeOptions":{},"StyledMapType":{},"StyledMapTypeOptions":{},"MapTypeStyle":{},"MapTypeStyleFeatureType":{},"MapTypeStyleElementType":{},"MapTypeStyler":{},"BicyclingLayer":{},"FusionTablesLayer":{},"FusionTablesLayerOptions":{},"FusionTablesQuery":{},"FusionTablesStyle":{},"FusionTablesHeatmap":{},"FusionTablesMarkerOptions":{},"FusionTablesPolygonOptions":{},"FusionTablesPolylineOptions":{},"FusionTablesMouseEvent":{},"FusionTablesCell":{},"KmlLayer":{},"KmlLayerOptions":{},"KmlLayerMetadata":{},"KmlLayerStatus":{},"KmlMouseEvent":{},"KmlFeatureData":{},"KmlAuthor":{},"TrafficLayer":{},"TransitLayer":{},"StreetViewPanorama":{},"StreetViewPanoramaOptions":{},"StreetViewAddressControlOptions":{},"StreetViewLink":{},"StreetViewPov":{},"StreetViewPanoramaData":{},"StreetViewLocation":{},"StreetViewTileData":{},"StreetViewService":{},"StreetViewStatus":{},"StreetViewCoverageLayer":{},"MapsEventListener":{},"event":{},"MouseEvent":{},"LatLng":{},"LatLngLiteral":{},"LatLngBounds":{},"Point":{},"Size":{},"MVCObject":{},"MVCArray":{},"geometry":{"spherical":{},"poly":{}},"encoding":{},"adsense":{"AdUnitOptions":{},"AdFormat":{}},"AdUnit":{},"panoramio":{"PanoramioLayerOptions":{},"PanoramioFeature":{},"PanoramioMouseEvent":{}},"PanoramioLayer":{},"places":{"AutocompleteOptions":{},"AutocompletePrediction":{},"PredictionTerm":{},"PredictionSubstring":{},"AutocompleteService":{},"AutocompletionRequest":{},"ComponentRestrictions":{},"PlaceAspectRating":{},"PlaceDetailsRequest":{},"PlaceGeometry":{},"PlacePhoto":{},"PhotoOptions":{},"PlaceResult":{},"PlaceReview":{},"PlaceSearchPagination":{},"PlaceSearchRequest":{},"PlacesService":{},"PlacesServiceStatus":{},"QueryAutocompletePrediction":{},"QueryAutocompletionRequest":{},"RadarSearchRequest":{},"RankBy":{},"SearchBox":{},"SearchBoxOptions":{},"TextSearchRequest":{}},"Autocomplete":{},"drawing":{"DrawingManagerOptions":{},"DrawingControlOptions":{},"OverlayCompleteEvent":{},"OverlayType":{}},"DrawingManager":{},"weather":{"WeatherLayer":{},"WeatherLayerOptions":{},"TemperatureUnit":{},"WindSpeedUnit":{},"LabelColor":{},"WeatherMouseEvent":{},"WeatherFeature":{},"WeatherConditions":{},"WeatherForecast":{}},"CloudLayer":{},"visualization":{"MapsEngineLayerOptions":{},"MapsEngineLayerProperties":{},"MapsEngineMouseEvent":{},"MapsEngineStatus":{},"DynamicMapsEngineLayer":{},"DynamicMapsEngineLayerOptions":{},"DynamicMapsEngineMouseEvent":{},"FeatureStyle":{},"HeatmapLayer":{},"HeatmapLayerOptions":{},"WeightedLocation":{}},"MapsEngineLayer":{}},"MapOptions":{}},"maps":{},"Map":{}}

});  
