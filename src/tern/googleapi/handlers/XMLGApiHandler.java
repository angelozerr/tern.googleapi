package tern.googleapi.handlers;

import java.io.IOException;
import java.io.OutputStream;

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
		super.write(" xmlns=\"http://ns.openajax.org/api\" version=\"...\" apiType=\"javascript\" >");
	}

	@Override
	public void endApi() throws IOException {
		endElement("api");
	}

	@Override
	public void startClass(String name, String superclass) throws IOException {
		startElement("class");
		setAttribute("type", name);
		if (!StringUtils.isEmpty(superclass)) {
			setAttribute("superclass", superclass);
		}
		write(" >");
	}

	private void startElement(String name) throws IOException {
		write("\n");
		write("<");
		write(name);
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

	@Override
	public void endClass() throws IOException {
		endElement("class");
	}

}
