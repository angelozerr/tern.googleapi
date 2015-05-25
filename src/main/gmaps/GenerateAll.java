package main.gmaps;

import java.io.IOException;

import main.GeneratorTernPluginHelper;

import org.xml.sax.SAXException;

public class GenerateAll {

	public static void main(String[] args) throws IOException, SAXException {
		// https://developers.google.com/maps/documentation/javascript/3.exp/reference
		// => 3.exp (3.20)
		GeneratorTernPluginHelper
				.generatePackage(
						"gmaps",
						"3.20",
						"https://developers.google.com/maps/documentation/javascript/3.exp/reference",
						GenerateAll.class, true);
		// https://developers.google.com/maps/documentation/javascript/reference
		// => Release (3.19)
		GeneratorTernPluginHelper
				.generatePackage(
						"gmaps",
						"3.19",
						"https://developers.google.com/maps/documentation/javascript/reference",
						GenerateAll.class, true);
		// https://developers.google.com/maps/documentation/javascript/3.18/reference
		// => Frozen (3.18)
		GeneratorTernPluginHelper
				.generatePackage(
						"gmaps",
						"3.18",
						"https://developers.google.com/maps/documentation/javascript/3.18/reference",
						GenerateAll.class, true);
	}
}
