package main;

import java.io.IOException;

import org.xml.sax.SAXException;

public class GenerateAll {

	public static void main(String[] args) throws IOException, SAXException {
		// https://developers.google.com/maps/documentation/javascript/3.exp/reference => 3.exp (3.20)
		GeneratorTernPluginHelper.generatePackage("3.20", "https://developers.google.com/maps/documentation/javascript/3.exp/reference");
		// https://developers.google.com/maps/documentation/javascript/reference => Release (3.19)
		GeneratorTernPluginHelper.generatePackage("3.19", "https://developers.google.com/maps/documentation/javascript/reference");
		// https://developers.google.com/maps/documentation/javascript/3.18/reference => Frozen (3.18)
		GeneratorTernPluginHelper.generatePackage("3.18", "https://developers.google.com/maps/documentation/javascript/3.18/reference");		
	}
}
