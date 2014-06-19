package tern.googleapi;

import java.util.ArrayList;
import java.util.List;

public class GClass {

	private final String className;
	private String superClass;
	private final String simpleName;
	private final List<GMethod> methods;

	public GClass(String className) {
		this.className = className;
		this.simpleName = getSimpleName(className);
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

	public void addMethod(GMethod method) {
		methods.add(method);
	}

	public List<GMethod> getMethods() {
		return methods;
	}

	public void setSuperClass(String superClass) {
		this.superClass = superClass;
	}

	public void updateTypes(GApi api) {
		if (superClass != null) {
			superClass = api.resolveType(superClass);
		}
	}

}
