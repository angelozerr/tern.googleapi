package main;

import org.xml.sax.InputSource;

import tern.googleapi.GApi;
import tern.googleapi.GApiHelper;
import tern.googleapi.handlers.XMLGApiHandler;

// http://www.openajax.org/member/wiki/IDE_API_Sample_Google_Map
public class GenerateXMLApiForGMaps3_16 {

	public static void main(String[] args) throws Exception {

		/*
		 * InputSource in = new InputSource(
		 * "https://developers.google.com/maps/documentation/javascript/reference"
		 * );
		 */

		InputSource in = new InputSource(
				GenerateTernDefForGMaps3_17.class
						.getResourceAsStream("api3.16.html"));

		GApi api = GApiHelper.load(in, "gmaps", "3.16", null);
		GApiHelper.visit(api, new XMLGApiHandler(System.out));

	}
}
