package tern.googleapi;

import java.util.ArrayList;
import java.util.List;

import tern.googleapi.utils.StringUtils;

public class GClass {

	private final String className;
	private final boolean objectLiteral;
	private String description;
	private final String url;
	private String superClass;
	private final String simpleName;
	private final List<GProperty> properties;
	private final List<GMethod> methods;
	private GMethod constructor;

	public GClass(String className, boolean objectLiteral, String baseUrl) {
		this.className = className;
		this.simpleName = getSimpleName(className);
		this.url = GApi.getUrl(baseUrl, simpleName);
		this.objectLiteral = objectLiteral;
		this.properties = new ArrayList<GProperty>();
		this.methods = new ArrayList<GMethod>();
	}

	private String getSimpleName(String className) {
		int index = className.lastIndexOf(".");
		if (index != -1) {
			return className.substring(index + 1, className.length());
		}
		return className;
	}

	public String getSimpleName() {
		return simpleName;
	}

	public String getName() {
		return className;
	}

	public String getSuperclass() {
		return superClass;
	}

	public void setConstructor(GMethod method) {
		this.constructor = method;
	}

	public void addMethod(GMethod method) {
		this.methods.add(method);
	}

	public GMethod getConstructor() {
		return constructor;
	}

	public List<GMethod> getMethods() {
		return methods;
	}

	public void addProperty(GProperty property) {
		properties.add(property);
	}

	public List<GProperty> getProperties() {
		return properties;
	}

	public void setSuperClass(String superClass) {
		this.superClass = superClass;
	}

	public void updateTypes(GApi api) {
		if (superClass != null) {
			superClass = api.resolveType(superClass);
		}
		if (constructor != null) {
			constructor.updateTypes(api);
		}
	}

	public boolean isObjectLiteral() {
		return objectLiteral;
	}

	public String getUrl() {
		return url;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description != null ? StringUtils
				.normalizeSpace(description) : null;
	}
}
