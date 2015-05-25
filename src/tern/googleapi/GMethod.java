package tern.googleapi;

import java.util.ArrayList;
import java.util.List;

import tern.googleapi.utils.StringUtils;

public class GMethod {

	private String name;
	private final String description;
	private String returnValue;
	private final boolean constructor;
	private final List<GParameter> parameters;
	private final boolean staticMethod;
	private final String url;

	public GMethod(String signature, String description, String returnValue,
			boolean constructor, boolean staticMethod, GClass ownerClass) {
		this.description = description != null ? StringUtils
				.normalizeSpace(description) : null;
		this.constructor = constructor;
		this.staticMethod = staticMethod;
		this.parameters = new ArrayList<GParameter>();
		// signature = Map(mapDiv:Node, opts?:MapOptions)
		this.name = parseSignature(signature, parameters);
		this.url = ownerClass != null ? ownerClass.getUrl() : null;
		this.returnValue = getReturnValue(returnValue, constructor, ownerClass);
	}

	private String getReturnValue(String returnValue, boolean constructor,
			GClass ownerClass) {
		if (!constructor) {
			return returnValue;
		}
		return ownerClass != null ? ownerClass.getName() : returnValue;
	}

	private String parseSignature(String signature, List<GParameter> parameters) {
		signature = StringUtils.normalizeSpace(signature);
		int index = signature.indexOf("(");
		if (index == -1) {
			return signature;
		}
		String name = signature.substring(0, index);
		String parametersRegion = signature.substring(index + 1,
				signature.length() - 1);
		if (!StringUtils.isEmpty(parametersRegion)) {
			parseParameters(parametersRegion, parameters);
		}
		return name;
	}

	private void parseParameters(String parametersRegion,
			List<GParameter> parameters) {
		boolean optional = false;
		String paramName = "";
		String paramType = null;
		int bracket = 0;
		char[] chars = parametersRegion.toCharArray();
		for (int i = 0; i < chars.length; i++) {
			char c = chars[i];
			if (c != '\n') {
				if (paramType == null) {
					// param name is parsing
					if (c == ':') {
						paramType = "";
					} else if (c == '?') {
						optional = true;
					} else if (c != ' ') {
						paramName += c;
					}
				} else {
					// param type parsing
					if (c == ',' && bracket == 0) {
						parameters.add(new GParameter(paramName, paramType,
								optional));
						paramName = "";
						optional = false;
						paramType = null;
					} else {
						if (c != ' ') {
							paramType += c;
							if (c == '(') {
								bracket++;
							} else if (c == ')') {
								bracket--;
							}
						}
					}
				}
			}

		}
		if (!StringUtils.isEmpty(paramType)) {
			parameters.add(new GParameter(paramName, paramType, optional));
		}
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public String getReturnValue() {
		return returnValue;
	}

	public boolean hasReturnValue() {
		return !StringUtils.isEmpty(returnValue)
				&& !"None".equalsIgnoreCase(returnValue);
	}

	public List<GParameter> getParameters() {
		return parameters;
	}

	public boolean isConstructor() {
		return constructor;
	}

	public boolean isStaticMethod() {
		return staticMethod;
	}

	protected void updateTypes(GApi api) {
		if (hasReturnValue()) {
			// update return value
			returnValue = api.resolveType(returnValue);
		}
		for (GParameter parameter : parameters) {
			parameter.updateType(api);
		}
	}

	public String getUrl() {
		return url;
	}
}
