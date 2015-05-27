package tern.googleapi.handlers;

import java.io.IOException;

import tern.googleapi.GApi;
import tern.googleapi.GMethod;
import tern.googleapi.GProperty;

public interface IGApiHandler {

	void startApi(String name, String version) throws IOException;

	void endApi() throws IOException;

	void startClass(String name, GMethod constructor, String superclass,
			boolean objectLiteral, String description, String url, GApi api)
			throws IOException;

	void handleProperty(GProperty property, GApi api) throws IOException;

	void handleMethod(GMethod method, GApi api) throws IOException;

	void endClass() throws IOException;

}
