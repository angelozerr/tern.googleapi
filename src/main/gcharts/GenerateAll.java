package main.gcharts;

import java.io.IOException;

import main.GeneratorTernPluginHelper;

import org.xml.sax.SAXException;

public class GenerateAll {

	public static void main(String[] args) throws IOException, SAXException {
		// https://developers.google.com/chart/interactive/docs/reference
		GeneratorTernPluginHelper
				.generatePackage(
						"gcharts",
						"",
						"https://developers.google.com/chart/interactive/docs/reference",
						GenerateAll.class, false);
		
	}
}
