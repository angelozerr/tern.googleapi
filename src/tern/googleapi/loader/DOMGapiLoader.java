package tern.googleapi.loader;

import java.util.ArrayList;
import java.util.List;

import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.w3c.dom.Text;

import tern.googleapi.GApi;
import tern.googleapi.GClass;
import tern.googleapi.GMethod;
import tern.googleapi.GProperty;
import tern.googleapi.utils.DOMUtils;
import tern.googleapi.utils.StringUtils;

public class DOMGapiLoader extends AbstractDOMGapiLoader {

	@Override
	protected void load(Element articleBody, GApi api) {
		NodeList nodes = articleBody.getElementsByTagName("H2");
		Element node = null;
		for (int i = 0; i < nodes.getLength(); i++) {
			node = (Element) nodes.item(i);
			parseClass(node, api);
		}
	}

	private void parseClass(Element h2, GApi api) {
		GClass clazz = createClass(h2, api);
		if (clazz != null) {
			Node nextSibling = h2.getNextSibling();
			while (nextSibling != null) {
				Element elt = DOMUtils.getElement(nextSibling);
				if (elt != null) {
					if ("table".equalsIgnoreCase(elt.getNodeName())) {
						List<Element> rows = DOMUtils
								.getFirstChildElementsByTagName(elt, "tr");
						if (rows.size() == 0) {
							rows = new ArrayList<Element>();
							Element thead = DOMUtils
									.getFirstChildElementByTagName(elt, "thead");
							if (thead != null) {
								rows.addAll(DOMUtils
										.getFirstChildElementsByTagName(thead,
												"tr"));

							}
							Element tbody = DOMUtils
									.getFirstChildElementByTagName(elt, "tbody");
							if (tbody != null) {
								rows.addAll(DOMUtils
										.getFirstChildElementsByTagName(tbody,
												"tr"));

							}
						}
						if (rows.size() > 0) {
							parseTable(rows, clazz);
						}
						parseTable(rows, clazz);
					} else if ("p".equalsIgnoreCase(elt.getNodeName())) {
						String s = DOMUtils.getTextNodeAsString(elt);
						if (s.startsWith("This class extends")) {
							Element code = DOMUtils
									.getFirstChildElementByTagName(elt, "code");
							Element a = DOMUtils.getFirstChildElementByTagName(
									code, "a");
							String superClass = DOMUtils.getTextNodeAsString(a);
							clazz.setSuperClass(superClass);
						}
						// check if p contains
						// <p>This class extends <code><a
						// href="#MVCObject">MVCObject</a></code>.</p>
						/*
						 * Node firstChild = elt.getFirstChild(); if (firstChild
						 * != null && firstChild.getNodeType() ==
						 * Node.TEXT_NODE) { if (DOMUtils .getTextContent((Text)
						 * firstChild) .toLowerCase() .contains(
						 * "This class extends".toLowerCase())) { Element a =
						 * (Element
						 * )firstChild.getNextSibling().getNextSibling(); String
						 * extendsClass = DOMUtils.getTextNodeAsString(a);
						 * 
						 * } }
						 */
					}
				}

				nextSibling = nextSibling.getNextSibling();
			}
		}
	}

	private void parseTable(List<Element> rows, GClass clazz) {
		Element firstTr = rows.get(0);
		Element th = DOMUtils.getFirstChildElementByTagName(firstTr, "th");
		String tableType = DOMUtils.getTextNodeAsString(th);
		for (int i = 1; i < rows.size(); i++) {
			Element row = (Element) rows.get(i);
			List<Element> cells = DOMUtils.getFirstChildElementsByTagName(row,
					"td");
			if (cells.size() >= 2) {
				if ("Constructor".equalsIgnoreCase(tableType)) {
					String type = DOMUtils.getTextNodeAsString(cells.get(0));
					String description = DOMUtils.getTextNodeAsString(cells
							.get(1));
					GMethod method = new GMethod(type, description, null, true,
							false, clazz);
					clazz.setConstructor(method);
				} else if (("Methods".equalsIgnoreCase(tableType) || "Static Methods"
						.equalsIgnoreCase(tableType))) {
					boolean staticMethod = "Static Methods".equals(tableType);
					String signature = DOMUtils.getTextNodeAsString(cells
							.get(0));
					String returnValue = null;
					String description = null;
					if (cells.size() == 3) {
						returnValue = DOMUtils
								.getTextNodeAsString(cells.get(1));
						description = DOMUtils
								.getTextNodeAsString(cells.get(2));
					} else {
						String cell2 = DOMUtils.getTextNodeAsString(cells
								.get(1));
						if (cell2.startsWith("Return Value:")) {
							int startIndex = "Return Value:".length();
							int endIndex = cell2.indexOf("\n", startIndex);
							returnValue = normalize(cell2.substring(startIndex,
									endIndex));
							String d = cell2
									.substring(endIndex, cell2.length());
							description = d.length() > 1 ? StringUtils
									.normalizeSpace(d) : "";
						}
					}

					GMethod method = new GMethod(signature, description,
							returnValue, false, staticMethod, clazz);
					clazz.addMethod(method);
				} else if ("Properties".equalsIgnoreCase(tableType)) {
					String name = DOMUtils.getTextNodeAsString(cells.get(0));
					String type = null;
					String description = null;
					if (cells.size() == 3) {
						type = DOMUtils.getTextNodeAsString(cells.get(1));
						description = DOMUtils
								.getTextNodeAsString(cells.get(2));
					} else {
						String cell2 = DOMUtils.getTextNodeAsString(cells
								.get(1));
						if (cell2.startsWith("Type:")) {
							int startIndex = "Type:".length();
							int endIndex = cell2.indexOf("\n", startIndex);
							type = normalize(cell2.substring(startIndex,
									endIndex));
							String d = cell2
									.substring(endIndex, cell2.length());
							description = d.length() > 1 ? StringUtils
									.normalizeSpace(d) : "";
						}
					}

					GProperty property = new GProperty(name, type, description,
							clazz);
					clazz.addProperty(property);
				}
			}

		}
	}

	private GClass createClass(Element h2, GApi api) {
		String className = null;
		boolean objectLiteral = false;
		String description = null;
		Node enclosedNode = null;
		NodeList spans = h2.getElementsByTagName("SPAN");
		if (spans.getLength() > 0) {
			// <h2 id="MapOptions">
			// <span itemprop="path">google.maps</span>.
			// <span itemprop="name">MapOptions</span>object specification</h2>
			enclosedNode = h2;

		} else {
			// try
			// <h2 id="MapOptions">MapOptions object specification</h2>
			// <p><code><span itemprop="path">google.maps</span>.
			// <span itemprop="name">MapOptions</span></code>object
			// specification</p>
			Element p = DOMUtils.getNextSibling(h2);
			if (p != null) {
				spans = p.getElementsByTagName("SPAN");
				if (spans.getLength() > 0) {
					enclosedNode = p;
				}
			}
		}

		if (spans.getLength() >= 2) {
			// <span itemprop="path">google.maps</span>
			String path = DOMUtils.getTextNodeAsString(spans.item(0));
			// <span itemprop="name">MapOptions</span>
			String name = DOMUtils.getTextNodeAsString(spans.item(1));
			className = new StringBuilder(path).append(".").append(name)
					.toString();

			if (enclosedNode != null) {
				// try to get text node "object specification"
				// <h2 id="MapOptions">
				// <span itemprop="path">google.maps</span>.
				// <span itemprop="name">MapOptions</span>object
				// specification</h2>
				String s = DOMUtils.getLastTextContent(enclosedNode);
				if (!StringUtils.isEmpty(s)) {
					objectLiteral = s.contains("object specification");
				}

				Element p = DOMUtils.getNextSibling((Element) enclosedNode);
				if (p != null && "p".equalsIgnoreCase(p.getNodeName())) {
					description = DOMUtils.getTextNodeAsString(p);
				}
			}
		} else {
			// <h2><a name="DataView"
			// id="DataView"></a>google.visualization.DataView Class</h2>
			NodeList as = h2.getElementsByTagName("A");
			if (as.getLength() >= 1) {
				Element a = (Element) as.item(0);
				if (a.hasAttribute("id")) {
					className = DOMUtils.getLastTextContent(h2);
					if (!StringUtils.isEmpty(className)) {
						int index = className.indexOf(" ");
						if (index != -1) {
							className = className.substring(0, index);
						}
					}
				}
			}
		}
		if (!StringUtils.isEmpty(className)) {
			GClass clazz = api.addClass(className, objectLiteral);
			clazz.setDescription(description);
			return clazz;
		}
		return null;
	}

	private String normalize(String s) {
		StringBuilder result = new StringBuilder();
		char[] chars = s.toCharArray();
		char c;
		for (int i = 0; i < chars.length; i++) {
			c = chars[i];
			if (Character.isLetter(c) || c == '<' || c == '>') {
				result.append(c);
			} else {
				if (result.length() > 0) {
					break;
				}
			}
		}
		return result.toString();
	}

}
