package tern.googleapi.handlers;

import java.io.IOException;
import java.io.Writer;
import java.util.List;

import tern.googleapi.FunctionType;
import tern.googleapi.GApi;
import tern.googleapi.GMethod;
import tern.googleapi.GParameter;
import tern.googleapi.GProperty;
import tern.googleapi.IType;
import tern.googleapi.SimpleType;
import tern.googleapi.utils.StringUtils;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.WriterConfig;

//http://www.openajax.org/member/wiki/IDE_API_Sample_Google_Map
public class TernDefGApiHandler extends AbstractGApiHandler {

	private final JsonObject def;
	private final JsonObject overridedDef;
	private JsonObject ternClass;
	private JsonObject define;

	public TernDefGApiHandler(Writer writer) {
		this(writer, null);
	}

	public TernDefGApiHandler(Writer writer, JsonObject overridedDef) {
		super(writer);
		this.def = new JsonObject();
		this.overridedDef = overridedDef;
	}

	@Override
	public void startApi(String name, String version) throws IOException {
		def.set("!name", name + version);
		JsonObject define = null;
		if (overridedDef != null) {
			define = (JsonObject) overridedDef.get("!define");
		}
		if (define == null) {
			define = new JsonObject();
		}
		this.define = define;
		def.set("!define", define);
	}

	@Override
	public void endApi() throws IOException {
		// write(def.toString());
		def.writeTo(getWriter(), WriterConfig.PRETTY_PRINT);
	}

	@Override
	public void startClass(String name, GMethod constructor, String superclass,
			boolean objectLiteral, String description, String url, GApi api)
			throws IOException {
		this.ternClass = getTernClass(name, objectLiteral ? define : def);
		String type = getOverridedType(name);
		if (StringUtils.isEmpty(type) && constructor != null) {
			type = getType(constructor, api);
		}
		if (!StringUtils.isEmpty(type)) {
			ternClass.add("!type", type);
		}
		addDocAndUrl(ternClass, description, url);
		if (!StringUtils.isEmpty(superclass)) {
			JsonObject prototype = getTernPrototype(ternClass);
			prototype.set("!proto", superclass + ".prototype");
		}
	}

	private String getOverridedType(String name) {
		if (overridedDef == null) {
			return null;
		}
		JsonObject parent = overridedDef;
		String[] fields = name.split("[.]");
		for (int i = 0; i < fields.length && parent != null; i++) {
			parent = (JsonObject) parent.get(fields[i]);
		}
		if (parent != null) {
			return parent.getString("!type", null);
		}
		return null;
	}

	protected void addDocAndUrl(JsonObject ternDef, String doc, String url) {
		if (!StringUtils.isEmpty(doc)) {
			ternDef.set("!doc", doc);
		}
		if (!StringUtils.isEmpty(url)) {
			ternDef.set("!url", url);
		}
	}

	@Override
	public void handleProperty(GProperty property, GApi api) throws IOException {
		JsonObject jsonProperty = getTernClassOrPrototype(ternClass, property);
		jsonProperty.set("!type", getType(property.getType(), false, api));
		String doc = property.getDescription();
		String url = property.getUrl();
		addDocAndUrl(jsonProperty, doc, url);
	}

	@Override
	public void handleMethod(GMethod method, GApi api) {
		JsonObject ternItem = getTernClassOrPrototype(ternClass, method);
		String type = getType(method, api);
		if (!StringUtils.isEmpty(type)) {
			ternItem.set("!type", type);
		}
		String doc = method.getDescription();
		String url = method.getUrl();
		addDocAndUrl(ternItem, doc, url);
	}

	private String getType(GMethod method, GApi api) {
		StringBuilder type = new StringBuilder("fn(");
		List<GParameter> parameters = method.getParameters();
		for (int i = 0; i < parameters.size(); i++) {
			GParameter parameter = parameters.get(i);
			if (i > 0) {
				type.append(", ");
			}
			type.append(parameter.getName());
			if (parameter.isOptional()) {
				type.append("?");
			}
			type.append(": ");
			type.append(getType(parameter.getType(), false, api));

		}
		type.append(")");
		if (method.hasReturnValue()) {
			String returnValue = method.getReturnValue();
			type.append(" -> ");
			type.append(getType(returnValue, true, api));
		}
		return type.toString();
	}

	private String getType(IType type, boolean returnType, GApi api) {
		if (type instanceof SimpleType) {
			return getType(((SimpleType) type).getType(), returnType, api);
		}
		return getType((FunctionType) type, api);
	}

	private String getType(String returnValue, boolean returnType, GApi api) {
		boolean array = false, simpleType = true;
		if (returnValue.startsWith("Array<")) {
			returnValue = returnValue.substring("Array<".length(),
					returnValue.length() - 1);
			array = true;
		}
		if (returnValue.startsWith("MVCArray")) {
			returnValue = "MVCArray";
		}
		if ("string".equalsIgnoreCase(returnValue)) {
			returnValue = "string";
		} else if ("number".equalsIgnoreCase(returnValue)) {
			returnValue = "number";
		} else if ("boolean".equalsIgnoreCase(returnValue)) {
			returnValue = "bool";
		} else if ("Object".equalsIgnoreCase(returnValue)) {
			returnValue = "?";
		} else if ("*".equalsIgnoreCase(returnValue)) {
			returnValue = "?";
		} else if ("Array".equalsIgnoreCase(returnValue)) {
			returnValue = "?";
			array = true;
		} else if ("Function".equalsIgnoreCase(returnValue)) {
			returnValue = "fn()";
		} else {
			simpleType = false;
		}

		StringBuilder type = new StringBuilder("");
		if (array) {
			type.append("[");
		}
		if (!simpleType) {
			type.append("+");
			type.append(api.resolveType(returnValue));
		} else {
			type.append(returnValue);
		}
		if (array) {
			type.append("]");
		}
		return type.toString();
	}

	private JsonObject getTernClassOrPrototype(JsonObject ternClass,
			GProperty property) {
		JsonObject ternClassOrPrototype = ternClass;
		JsonObject jsonProperty = new JsonObject();
		if (!property.isStatic()) {
			JsonObject prototype = getTernPrototype(ternClass);
			ternClassOrPrototype = prototype;
		}
		ternClassOrPrototype.set(property.getName(), jsonProperty);
		return jsonProperty;
	}

	private JsonObject getTernClassOrPrototype(JsonObject ternClass,
			GMethod method) {
		// constructor
		if (method.isConstructor()) {
			return ternClass;
		}
		// static Method
		if (method.isStaticMethod()) {
			JsonObject staticMethod = new JsonObject();
			ternClass.set(method.getName(), staticMethod);
			return staticMethod;
		}
		JsonObject prototype = getTernPrototype(ternClass);
		JsonObject prototypeMethod = new JsonObject();
		prototype.set(method.getName(), prototypeMethod);
		return prototypeMethod;
	}

	protected JsonObject getTernPrototype(JsonObject ternClass) {
		JsonObject prototype = (JsonObject) ternClass.get("prototype");
		if (prototype == null) {
			prototype = new JsonObject();
			ternClass.set("prototype", prototype);
		}
		return prototype;
	}

	@Override
	public void endClass() throws IOException {
		this.ternClass = null;
	}

	private JsonObject getTernClass(String name, JsonObject parent) {
		String[] classes = name.split("[.]");
		String className = null;
		for (int i = 0; i < classes.length; i++) {
			className = classes[i];
			if (parent.get(className) == null) {
				JsonObject ternClass = new JsonObject();
				parent = parent.set(className, ternClass);
				parent = ternClass;
			} else {
				parent = (JsonObject) parent.get(className);
			}
		}
		return parent;
	}
}
