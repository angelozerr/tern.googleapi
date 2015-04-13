package main;

import org.xml.sax.InputSource;

import tern.googleapi.GApi;
import tern.googleapi.GApiHelper;
import tern.googleapi.handlers.TernDefGApiHandler;

public class GenerateTernDefForGMaps3_18 {

	public static void main(String[] args) throws Exception {

		/*
		 *  InputSource in = new
		 * InputSource(
		 * "https://developers.google.com/maps/documentation/javascript/reference"
		 * );
		 */
	
		InputSource in = new InputSource(
				GenerateTernDefForGMaps3_18.class
						.getResourceAsStream("api3.18.html"));

		GApi api = GApiHelper.load(in, "gmaps", "3.18", null);
		GApiHelper.visit(api, new TernDefGApiHandler(System.out));
	}
}
