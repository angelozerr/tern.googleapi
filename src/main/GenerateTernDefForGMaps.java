package main;

import org.xml.sax.InputSource;

import tern.googleapi.GMapExtractor;
import tern.googleapi.handlers.TernDefGApiHandler;

public class GenerateTernDefForGMaps {

	public static void main(String[] args) throws Exception {

		InputSource in = new InputSource(
				GenerateTernDefForGMaps.class.getResourceAsStream("api.html"));

		TernDefGApiHandler handler = new TernDefGApiHandler(System.out);
		GMapExtractor extractor = new GMapExtractor(handler, in);
		/*
		 * GMapExtractor extractor = new GMapExtractor( handler, new
		 * InputSource(
		 * "https://developers.google.com/maps/documentation/javascript/reference"
		 * ));
		 */
	}
}
