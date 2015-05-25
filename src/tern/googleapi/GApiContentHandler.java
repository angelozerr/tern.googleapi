package tern.googleapi;

import java.util.ArrayList;
import java.util.List;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import tern.googleapi.utils.StringUtils;

public class GApiContentHandler extends DefaultHandler {

	private enum SuperClassState {
		NO_TRACK, TRACK_THIS_CLASS_EXTENDS, TRACK_SUPERCLASS
	}

	private final boolean checkH2IdForClass;
	private final GApi api;
	private GClass currentClass;
	private StringBuilder h2Content;
	private StringBuilder pClassDescription;
	private SuperClassState superClassState = SuperClassState.NO_TRACK;
	private StringBuilder superclass;
	private boolean classParsing;
	private StringBuilder h3Content;
	private boolean tableParsing;
	private String tableType;
	private StringBuilder tdContent;
	private List<String> cells;

	public GApiContentHandler(String name, String version, String baseUrl,
			boolean checkH2IdForClass) {
		this.api = new GApi(name, version, baseUrl);
		this.h2Content = null;
		this.classParsing = false;
		this.checkH2IdForClass = checkH2IdForClass;
	}

	@Override
	public void startElement(String uri, String localName, String name,
			Attributes attributes) throws SAXException {
		if ("h2".equalsIgnoreCase(localName)) {
			classParsing = false;
			tableParsing = false;
			tableType = null;
			String id = attributes.getValue("id");
			if (!checkH2IdForClass
					|| (checkH2IdForClass && !StringUtils.isEmpty(id))) {
				this.h2Content = new StringBuilder();
				this.classParsing = true;
			}
		} else if ("h3".equalsIgnoreCase(localName)) {
			tableParsing = false;
			tableType = null;
			if (classParsing) {
				this.h3Content = new StringBuilder();
				this.tableParsing = true;
			}

			if (superclass != null && currentClass != null) {
				currentClass.setSuperClass(superclass.toString());
			}
			superClassState = SuperClassState.NO_TRACK;
			this.superclass = null;

		} else if ("tr".equalsIgnoreCase(localName)) {
			if (tableParsing) {
				this.cells = new ArrayList<String>();
			}
		} else if ("td".equalsIgnoreCase(localName)) {
			if (tableParsing) {
				this.tdContent = new StringBuilder();
			}
		} else if ("p".equalsIgnoreCase(localName)) {
			if (currentClass != null && currentClass.getDescription() == null) {
				this.pClassDescription = new StringBuilder();
			}
		}
		super.startElement(uri, localName, name, attributes);
	}

	@Override
	public void endElement(String uri, String localName, String qName)
			throws SAXException {
		if ("h2".equalsIgnoreCase(localName)) {
			if (h2Content != null) {
				String className = StringUtils.normalizeSpace(h2Content
						.toString());
				int index = className.indexOf("\n");
				if (index != -1) {
					// ex : "google.maps.Map\nclass" for gmaps
					className = className.substring(0, index);
				}
				index = className.indexOf(" ");
				if (index != -1) {
					// ex : "DataTable Class" for gcharts
					className = className.substring(0, index);
				}
				if (!StringUtils.isEmpty(className)) {
					// <h2
					// id="MapTypeControlOptions">google.maps.MapTypeControlOptions
					// object specification</h2>
					boolean objectLiteral = h2Content.toString().indexOf(
							"object specification") != -1;
					currentClass = api.addClass(className, objectLiteral);
					superClassState = SuperClassState.TRACK_THIS_CLASS_EXTENDS;
				}
			}
			this.h2Content = null;
		} else if ("h3".equalsIgnoreCase(localName)) {
			tableType = h3Content != null ? h3Content.toString() : null;
			this.h3Content = null;
		} else if ("tr".equalsIgnoreCase(localName)) {
			if (cells != null) {
				if ("Constructor".equalsIgnoreCase(tableType)
						&& cells.size() == 2) {
					String type = cells.get(0);
					String description = cells.get(1);
					GMethod method = new GMethod(type, description, null, true,
							false, currentClass);
					currentClass.setConstructor(method);
				} else if ("Methods".equalsIgnoreCase(tableType)
						&& cells.size() == 3) {
					String signature = cells.get(0);
					String returnValue = cells.get(1);
					String description = cells.get(2);
					GMethod method = new GMethod(signature, description,
							returnValue, false, false, currentClass);
					currentClass.addMethod(method);
				} else if ("Static Methods".equalsIgnoreCase(tableType)
						&& cells.size() == 3) {
					String type = cells.get(0);
					String returnValue = cells.get(1);
					String description = cells.get(2);
					GMethod method = new GMethod(type, description,
							returnValue, false, true, currentClass);
					currentClass.addMethod(method);
				} else if ("Properties".equalsIgnoreCase(tableType)
						&& cells.size() == 3) {
					String name = cells.get(0);
					String type = cells.get(1);
					String description = cells.get(2);
					GProperty property = new GProperty(name, type, description,
							currentClass);
					currentClass.addProperty(property);
				}
			}
			this.cells = null;
		} else if ("td".equalsIgnoreCase(localName)) {
			if (tdContent != null && cells != null) {
				cells.add(tdContent.toString());
			}
			this.tdContent = null;
		} else if ("p".equalsIgnoreCase(localName)) {
			if (currentClass != null && currentClass.getDescription() == null) {
				currentClass
						.setDescription(pClassDescription != null ? pClassDescription
								.toString() : "");
				pClassDescription = null;
			}
		}
		super.endElement(uri, localName, qName);
	}

	@Override
	public void characters(char[] ch, int start, int length)
			throws SAXException {
		if (h2Content != null) {
			h2Content.append(ch, start, length);
		} else if (h3Content != null) {
			h3Content.append(ch, start, length);
		} else if (tdContent != null) {
			tdContent.append(ch, start, length);
		} else if (pClassDescription != null) {
			pClassDescription.append(ch, start, length);
		}
		switch (superClassState) {
		case TRACK_THIS_CLASS_EXTENDS:
			if (String.valueOf(ch, start, length)
					.contains("This class extends")) {
				superclass = new StringBuilder();
				superClassState = SuperClassState.TRACK_SUPERCLASS;
			}
			break;
		case TRACK_SUPERCLASS:
			if (superclass.length() == 0) {
				superclass.append(String.valueOf(ch, start, length));
			}
			break;
		default:
		}
		super.characters(ch, start, length);
	}

	public GApi getApi() {
		return api;
	}
}
