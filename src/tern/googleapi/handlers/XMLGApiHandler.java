package tern.googleapi.handlers;

import java.io.IOException;
import java.io.OutputStream;

import tern.googleapi.GApi;
import tern.googleapi.GMethod;
import tern.googleapi.GParameter;
import tern.googleapi.GProperty;
import tern.googleapi.utils.StringUtils;

//http://www.openajax.org/member/wiki/IDE_API_Sample_Google_Map
public class XMLGApiHandler extends AbstractGApiHandler {

	public XMLGApiHandler(OutputStream out) {
		super(out);
	}

	@Override
	public void startApi(String name, String version) throws IOException {
		super.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
		startElement("api");
		super.write(" xmlns=\"http://ns.openajax.org/api\" version=\""
				+ version + "\" apiType=\"javascript\" >");
	}

	@Override
	public void endApi() throws IOException {
		endElement("api");
	}

	@Override
	public void startClass(String name, GMethod constructor, String superclass,
			boolean objectLiteral, String description, String url, GApi api)
			throws IOException {
		startElement("class");
		setAttribute("type", name);
		if (!StringUtils.isEmpty(superclass)) {
			setAttribute("superclass", superclass);
		}
		write(" >");
	}

	private void startElement(String name) throws IOException {
		startElement(name, false);
	}

	private void startElement(String name, boolean close) throws IOException {
		write("\n");
		write("<");
		write(name);
		if (close) {
			write(">");
		}
	}

	private void endElement(String name) throws IOException {
		write("\n");
		write("</");
		write(name);
		write(">");
	}

	private void setAttribute(String name, String value) throws IOException {
		write(" ");
		write(name);
		write("=\"");
		write(value);
		write("\"");
	}

	private void setAttribute(String name, boolean value) throws IOException {
		setAttribute(name, Boolean.toString(value));
	}

	@Override
	public void endClass() throws IOException {
		endElement("class");
	}

	@Override
	public void handleProperty(GProperty property, GApi api) throws IOException {

	}

	@Override
	public void handleMethod(GMethod method, GApi api) throws IOException {
		if (method.isConstructor()) {
			startElement("constructors", true);
			startElement("constructor", true);
			if (!StringUtils.isEmpty(method.getDescription())) {
				startElement("description", true);
				write(method.getDescription());
				if (method.getParameters().size() > 0) {
					startElement("parameters", true);
					for (GParameter parameter : method.getParameters()) {
						startElement("parameter");
						setAttribute("name", parameter.getName());
						setAttribute("required", !parameter.isOptional());
						// setAttribute("type", parameter.getType());
						write(">");
						endElement("parameter");
					}
					endElement("parameters");
				}
				endElement("description");
			}
			endElement("constructor");
			endElement("constructors");
		}

	}
}
