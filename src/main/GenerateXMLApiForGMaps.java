package main;

import org.xml.sax.InputSource;

import tern.googleapi.GMapExtractor;
import tern.googleapi.handlers.XMLGApiHandler;

// http://www.openajax.org/member/wiki/IDE_API_Sample_Google_Map
public class GenerateXMLApiForGMaps {

	public static void main(String[] args) throws Exception {

		InputSource in = new InputSource(
				GenerateXMLApiForGMaps.class.getResourceAsStream("api.html"));

		XMLGApiHandler handler = new XMLGApiHandler(System.out);
		GMapExtractor extractor = new GMapExtractor(handler, in);

	}
}
