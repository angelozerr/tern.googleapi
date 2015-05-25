package tern.googleapi.handlers;

import java.io.IOException;
import java.io.OutputStream;
import java.io.Writer;

public abstract class AbstractGApiHandler implements IGApiHandler {

	private final OutputStream out;
	private final Writer writer;

	public AbstractGApiHandler(OutputStream out) {
		this.out = out;
		this.writer = null;
	}

	public AbstractGApiHandler(Writer writer) {
		this.out = null;
		this.writer = writer;
	}

	protected void write(String s) throws IOException {
		if (out != null) {
			out.write(s.getBytes());
		} else if (writer != null) {
			writer.write(s);
		}
	}

	protected Writer getWriter() {
		return writer;
	}
}
