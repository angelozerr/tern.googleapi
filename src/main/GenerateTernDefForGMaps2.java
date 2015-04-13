package main;

import org.xml.sax.InputSource;

import tern.googleapi.GApi;
import tern.googleapi.GApiHelper;
import tern.googleapi.handlers.TernDefGApiHandler;

public class GenerateTernDefForGMaps2 {

	public static void main(String[] args) throws Exception {

		InputSource in = new InputSource(
				GenerateTernDefForGMaps3_17.class
						.getResourceAsStream("api2.html"));

		GApi api = GApiHelper.load(in, "gmaps", "3.17", null);
		GApiHelper.visit(api, new TernDefGApiHandler(System.out));

	}
}
