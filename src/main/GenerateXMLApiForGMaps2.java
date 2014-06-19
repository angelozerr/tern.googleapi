package main;

import org.xml.sax.InputSource;

import tern.googleapi.GApi;
import tern.googleapi.GApiHelper;
import tern.googleapi.handlers.XMLGApiHandler;

// http://www.openajax.org/member/wiki/IDE_API_Sample_Google_Map
public class GenerateXMLApiForGMaps2 {

	public static void main(String[] args) throws Exception {

		InputSource in = new InputSource(
				GenerateXMLApiForGMaps2.class.getResourceAsStream("api2.html"));

		GApi api = GApiHelper.load(in, "gmaps", "2");
		GApiHelper.visit(api, new XMLGApiHandler(System.out));

	}
}
