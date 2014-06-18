package tern.googleapi.handlers;

import java.io.IOException;

public interface IGApiHandler {

	void startApi(String name, String version) throws IOException;

	void endApi() throws IOException;

	void startClass(String name, String superclass) throws IOException;

	void endClass() throws IOException;
}
