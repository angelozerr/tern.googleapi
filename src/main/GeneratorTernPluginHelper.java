package main;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;

import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import tern.googleapi.GApi;
import tern.googleapi.GApiHelper;
import tern.googleapi.generator.PackageGenerator;
import tern.googleapi.generator.TernPluginGenerator;
import tern.googleapi.generator.TernPluginOptions;
import tern.googleapi.handlers.TernDefGApiHandler;

public class GeneratorTernPluginHelper {

	public static String generate(String version, String baseUrl)
			throws IOException, SAXException {
		InputSource in = new InputSource(
				GeneratorTernPluginHelper.class.getResourceAsStream("api"
						+ version + ".html"));

		StringWriter defs = new StringWriter();
		GApi api = GApiHelper.load(in, "gmaps", version, baseUrl);
		GApiHelper.visit(api, new TernDefGApiHandler(defs));

		TernPluginGenerator generator = new TernPluginGenerator();
		TernPluginOptions options = new TernPluginOptions("gmaps" + version,
				defs.toString());
		return generator.generate(options);
	}

	public static void generatePackage(String version, String baseUrl)
			throws IOException, SAXException {
		// Package folder
		File packageFolder = new File("plugin/tern-gmaps" + version);
		packageFolder.mkdirs();

		// Tern plugin
		String plugin = GeneratorTernPluginHelper.generate(version, baseUrl);
		File pluginFile = new File(packageFolder, "gmaps" + version + ".js");
		Writer writer = new FileWriter(pluginFile);
		try {
			writer.write(plugin);
		} finally {
			writer.flush();
			writer.close();
		}

		// package.json
		PackageGenerator generator = new PackageGenerator();
		TernPluginOptions options = new TernPluginOptions("gmaps" + version, "");
		String packageContent = generator.generate(options);
		File packageFile = new File(packageFolder, "package.json");
		writer = new FileWriter(packageFile);
		try {
			writer.write(packageContent);
		} finally {
			writer.flush();
			writer.close();
		}
	}

}
