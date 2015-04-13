package tern.googleapi.handlers;

import java.io.IOException;

import tern.googleapi.GMethod;
import tern.googleapi.GProperty;

public interface IGApiHandler {

	void startApi(String name, String version) throws IOException;

	void endApi() throws IOException;

	void startClass(String name, String superclass, boolean objectLiteral,
			String description, String url) throws IOException;

	void handleProperty(GProperty property) throws IOException;

	void handleMethod(GMethod method) throws IOException;

	void endClass() throws IOException;

}
