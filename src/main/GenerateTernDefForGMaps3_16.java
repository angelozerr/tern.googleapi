package main;

import org.xml.sax.InputSource;

import tern.googleapi.GApi;
import tern.googleapi.GApiHelper;
import tern.googleapi.handlers.TernDefGApiHandler;

public class GenerateTernDefForGMaps3_16 {

	public static void main(String[] args) throws Exception {

		/*
		 * InputSource in = new InputSource(
		 * "https://developers.google.com/maps/documentation/javascript/reference"
		 * );
		 */

		InputSource in = new InputSource(
				GenerateTernDefForGMaps3_17.class
						.getResourceAsStream("api3.16.html"));

		GApi api = GApiHelper.load(in, "gmaps", "3.16");
		GApiHelper.visit(api, new TernDefGApiHandler(System.out));
	}
}
