package tern.googleapi.loader;

import java.io.IOException;

import org.cyberneko.html.parsers.DOMParser;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import tern.googleapi.GApi;
import tern.googleapi.utils.DOMUtils;

public abstract class AbstractDOMGapiLoader implements IGApiLoader {

	@Override
	public GApi load(InputSource in, String name, String version, String baseUrl)
			throws SAXException, IOException {

		GApi api = new GApi(name, version, baseUrl);
		DOMParser parser = new DOMParser();
		parser.parse(in);
		Document document = parser.getDocument();
		Element articleBody = getArticleBody(document);
		load(articleBody, api);
		return api;
	}

	private Element getArticleBody(Document document) {
		Element content = document.getElementById("gc-content");
		return getArticleBody(content);
	}

	protected Element getArticleBody(Element content) {
		NodeList nodes = content.getChildNodes();
		Node node = null;
		for (int i = 0; i < nodes.getLength(); i++) {
			node = nodes.item(i);
			Element elt = DOMUtils.getElement(node);
			if (elt != null) {
				if (isMatch(elt, "div", "itemprop", "articleBody")) {
					return elt;
				}
				Element body = getArticleBody(elt);
				if (body != null) {
					return body;
				}
			}
		}
		return null;
	}

	protected boolean isMatch(Element element, String name, String attrName,
			String attrValue) {
		return name.equalsIgnoreCase(element.getNodeName())
				&& attrValue.equals(element.getAttribute(attrName));
	}

	protected abstract void load(Element content, GApi api);
}
