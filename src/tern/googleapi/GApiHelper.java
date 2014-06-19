package tern.googleapi;

import java.io.IOException;
import java.util.List;

import org.cyberneko.html.parsers.SAXParser;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import tern.googleapi.handlers.IGApiHandler;

public class GApiHelper {

	public static GApi load(InputSource in, String name, String version)
			throws SAXException, IOException {
		SAXParser saxReader = new SAXParser();
		// set the feature like explained in documentation :
		// http://nekohtml.sourceforge.net/faq.html#fragments
		saxReader
				.setFeature(
						"http://cyberneko.org/html/features/balance-tags/document-fragment",
						true);
		GApiContentHandler handler = new GApiContentHandler(name, version);
		saxReader.setContentHandler(handler);
		saxReader.parse(in);

		return handler.getApi();
	}

	public static void visit(GApi api, IGApiHandler visitor) throws IOException {
		visitor.startApi(api.getName(), api.getVersion());
		// Loop for classes
		List<GClass> classes = api.getClasses();
		for (GClass clazz : classes) {
			clazz.updateTypes(api);
			visitor.startClass(clazz.getName(), clazz.getSuperclass());
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
