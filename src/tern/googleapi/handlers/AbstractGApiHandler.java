package tern.googleapi.handlers;

import java.io.IOException;
import java.io.OutputStream;

public abstract class AbstractGApiHandler implements IGApiHandler {

	private final OutputStream out;

	public AbstractGApiHandler(OutputStream out) {
		this.out = out;
	}

	protected void write(String s) throws IOException {
		if (out != null) {
			out.write(s.getBytes());
		}
	}

}
