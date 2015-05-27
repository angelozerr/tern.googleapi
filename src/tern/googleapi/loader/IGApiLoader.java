package tern.googleapi.loader;

import java.io.IOException;

import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import tern.googleapi.GApi;

public interface IGApiLoader {

	GApi load(InputSource in, String name, String version, String baseUrl)
			throws SAXException, IOException;
}
