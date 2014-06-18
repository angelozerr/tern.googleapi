package tern.googleapi;

import org.xml.sax.InputSource;

import tern.googleapi.handlers.IGApiHandler;

public class GMapExtractor extends AbstractGApiExtractor {

	public GMapExtractor(IGApiHandler handler, InputSource in)
			throws GApiException {
		this(handler, in, null);
	}

	public GMapExtractor(IGApiHandler handler, InputSource in, String version)
			throws GApiException {
		super(handler, in, "gmaps", version != null ? version : "3");
	}

}
