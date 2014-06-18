package tern.googleapi;

import org.cyberneko.html.parsers.DOMParser;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import tern.googleapi.handlers.IGApiHandler;
import tern.googleapi.utils.StringUtils;

public class AbstractGApiExtractor {

	private final IGApiHandler handler;
	private final String name;
	private final String version;

	public AbstractGApiExtractor(IGApiHandler handler, InputSource in,
			String name, String version) throws GApiException {
		this.handler = handler;
		this.name = name;
		this.version = version;
		parse(in);
	}

	private void parse(InputSource in) throws GApiException {
		try {
			DOMParser parser = new DOMParser();
			parser.parse(in);

			handler.startApi(name, version);

			NodeList pElements = parser.getDocument()
					.getElementsByTagName("h2");
			for (int i = 0; i < pElements.getLength(); i++) {
				Element p = (Element) pElements.item(i);
				String id = p.getAttribute("id");
				if (!StringUtils.isEmpty(id)) {
					// <h2
					// id="MapTypeControlOptions">google.maps.MapTypeControlOptions
					// object specification</h2>
					String className = p.getTextContent();
					if (className != null) {
						className = className.trim();
						int index = className.indexOf("\n");
						if (index != -1) {
							className = className.substring(0, index);
						}
						if (!StringUtils.isEmpty(className)) {
							String superclass = null;
							handler.startClass(className, superclass);

							handler.endClass();
						}
					}
				}
			}

			handler.endApi();

		} catch (Exception e) {
			throw new GApiException(e);
		}

		// parser.parse("https://developers.google.com/maps/documentation/javascript/reference");

	}

	public IGApiHandler getHandler() {
		return handler;
	}
}
