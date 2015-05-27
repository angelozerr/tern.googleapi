package tern.googleapi;

import java.io.IOException;
import java.util.List;

import org.cyberneko.html.parsers.SAXParser;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import tern.googleapi.handlers.IGApiHandler;
import tern.googleapi.loader.DOMGapiLoader;

public class GApiHelper {

	public static GApi load(InputSource in, String name, String version,
			String baseUrl) throws SAXException, IOException {

		return new DOMGapiLoader().load(in, name, version, baseUrl);
		/*
		 * SAXParser saxReader = new SAXParser(); // set the feature like
		 * explained in documentation : //
		 * http://nekohtml.sourceforge.net/faq.html#fragments saxReader
		 * .setFeature(
		 * "http://cyberneko.org/html/features/balance-tags/document-fragment",
		 * true); GApiContentHandler handler = new GApiContentHandler(name,
		 * version, baseUrl, checkH2IdForClass);
		 * saxReader.setContentHandler(handler); saxReader.parse(in);
		 * 
		 * return handler.getApi();
		 */
	}

	public static void visit(GApi api, IGApiHandler visitor) throws IOException {
		visitor.startApi(api.getName(), api.getVersion());
		// Loop for classes
		List<GClass> classes = api.getClasses();
		for (GClass clazz : classes) {
			clazz.updateTypes(api);
			visitor.startClass(clazz.isObjectLiteral() ? clazz.getSimpleName()
					: clazz.getName(), clazz.getConstructor(), clazz
					.getSuperclass(), clazz.isObjectLiteral(), clazz
					.getDescription(), clazz.getUrl());
			// Loop for methods
			List<GProperty> properties = clazz.getProperties();
			for (GProperty property : properties) {
				property.updateType(api);
				visitor.handleProperty(property);
			}
			// Loop for methods
			List<GMethod> methods = clazz.getMethods();
			for (GMethod method : methods) {
				method.updateTypes(api);
				visitor.handleMethod(method);
			}
			visitor.endClass();
		}
		visitor.endApi();
	}

}
