package main;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringWriter;
import java.io.Writer;

import main.gcharts.GenerateAll;

import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

import tern.googleapi.GApi;
import tern.googleapi.GApiHelper;
import tern.googleapi.generator.PackageGenerator;
import tern.googleapi.generator.TernPluginGenerator;
import tern.googleapi.generator.TernPluginOptions;
import tern.googleapi.handlers.TernDefGApiHandler;
import tern.googleapi.utils.StringUtils;

public class GeneratorTernPluginHelper {

	public static String generate(InputSource in, String type, String version,
			String baseUrl, Class clazz, JsonObject json) throws IOException,
			SAXException {

		StringWriter writer = new StringWriter();
		GApi api = GApiHelper.load(in, type, version, baseUrl);
		GApiHelper.visit(api, new TernDefGApiHandler(writer, json));

		TernPluginGenerator generator = new TernPluginGenerator();
		TernPluginOptions options = new TernPluginOptions(type + version,
				writer.toString());
		return generator.generate(options);
	}

	public static void generatePackage(String type, String fileVersion,
			String version, String baseUrl, String defaultJson, Class clazz)
			throws IOException, SAXException {
		// Package folder
		File packageFolder = new File("plugin/tern-" + type + version);
		packageFolder.mkdirs();

		// Tern plugin
		InputSource in = new InputSource(clazz.getResourceAsStream("api"
				+ fileVersion + ".html"));

		JsonObject json = null;
		if (!StringUtils.isEmpty(defaultJson)) {
			json = (JsonObject) JsonValue.readFrom(new InputStreamReader(clazz
					.getResourceAsStream("gcharts.json")));
		}

		String plugin = GeneratorTernPluginHelper.generate(in, type, version,
				baseUrl, clazz, json);
		File pluginFile = new File(packageFolder, type + version + ".js");
		Writer writer = new FileWriter(pluginFile);
		try {
			writer.write(plugin);
		} finally {
			writer.flush();
			writer.close();
		}

		// package.json
		PackageGenerator generator = new PackageGenerator();
		TernPluginOptions options = new TernPluginOptions(type + version, "");
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
