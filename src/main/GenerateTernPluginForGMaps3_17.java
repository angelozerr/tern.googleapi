package main;

import tern.googleapi.generator.TernPluginGenerator;
import tern.googleapi.generator.TernPluginOptions;

public class GenerateTernPluginForGMaps3_17 {

	public static void main(String[] args) {
		TernPluginGenerator generator = new TernPluginGenerator();
		TernPluginOptions options = new TernPluginOptions("gmaps", "3.17");
		String def = generator.generate(options);
	}
}
