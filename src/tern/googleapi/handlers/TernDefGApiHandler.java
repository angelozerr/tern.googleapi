package tern.googleapi.handlers;

import java.io.IOException;
import java.io.OutputStream;

import tern.googleapi.utils.StringUtils;

import com.eclipsesource.json.JsonObject;

//http://www.openajax.org/member/wiki/IDE_API_Sample_Google_Map
public class TernDefGApiHandler extends AbstractGApiHandler {

	private final JsonObject def;

	public TernDefGApiHandler(OutputStream out) {
		super(out);
		this.def = new JsonObject();
	}

	@Override
	public void startApi(String name, String version) throws IOException {
		def.set("!name", name);
	}

	@Override
	public void endApi() throws IOException {
		write(def.toString());
	}

	@Override
	public void startClass(String name, String superclass) throws IOException {
		JsonObject ternClass = getTernClass(name, def);
	}

	@Override
	public void endClass() throws IOException {
	}

	private JsonObject getTernClass(String name, JsonObject parent) {
		String[] classes = name.split("[.]");
		String className = null;
		for (int i = 0; i < classes.length; i++) {
			className = classes[i];
			if (parent.get(className) == null) {
				parent = parent.set(className, new JsonObject());
			} else {
				parent = (JsonObject) parent.get(className);
			}
		}
		return parent;
	}
}
