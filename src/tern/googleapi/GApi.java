package tern.googleapi;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import tern.googleapi.utils.StringUtils;

public class GApi {

	private final String name;
	private final String version;
	private final List<GClass> classes;
	private final Map<String, String> mappings;

	public GApi(String name, String version) {
		this.name = name;
		this.version = version;
		this.classes = new ArrayList<GClass>();
		this.mappings = new HashMap<String, String>();
	}

	public String getName() {
		return name;
	}

	public String getVersion() {
		return version;
	}

	public List<GClass> getClasses() {
		return classes;
	}

	public GClass addClass(String className) {
		GClass clazz = new GClass(className);
		classes.add(clazz);
		mappings.put(clazz.getSimpleName(), clazz.getName());
		return clazz;
	}

	public String resolveType(String type) {
		// get the first type if there is several type (separated with |)
		int index = type.indexOf("|");
		if (index != -1) {
			type = type.substring(0, index);
		}
		String resolvedType = mappings.get(type);
		if (!StringUtils.isEmpty(resolvedType)) {
			return resolvedType;
		}
		return type;
	}
}
