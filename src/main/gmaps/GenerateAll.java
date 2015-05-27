package main.gmaps;

import java.io.IOException;

import main.GeneratorTernPluginHelper;

import org.xml.sax.SAXException;

public class GenerateAll {

	public static void main(String[] args) throws IOException, SAXException {
		// https://developers.google.com/maps/documentation/javascript/3.exp/reference
		// => 3.exp (3.21)
		GeneratorTernPluginHelper
				.generatePackage(
						"gmaps",
						"3.21",
						"3.exp",
						"https://developers.google.com/maps/documentation/javascript/3.exp/reference",
						"gmaps.json", GenerateAll.class);
		// https://developers.google.com/maps/documentation/javascript/reference
		// => Release (3.20)
		GeneratorTernPluginHelper
				.generatePackage(
						"gmaps",
						"3.20",
						"3.ref",
						"https://developers.google.com/maps/documentation/javascript/reference",
						"gmaps.json", GenerateAll.class);
		// https://developers.google.com/maps/documentation/javascript/3.19/reference
		// => Frozen (3.19)
		GeneratorTernPluginHelper
				.generatePackage(
						"gmaps",
						"3.19",
						"3.frozen",
						"https://developers.google.com/maps/documentation/javascript/3.19/reference",
						"gmaps.json", GenerateAll.class);
	}
}
