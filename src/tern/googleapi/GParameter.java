package tern.googleapi;

public class GParameter {

	private final String name;
	private IType type;
	private final boolean optional;

	public GParameter(String name, String type, boolean optional) {
		this.name = name;
		this.type = getType(type);
		this.optional = optional;
	}

	private IType getType(String type) {
		if (type.startsWith("function(")) {
			int fnIndex = type.lastIndexOf(")");
			String returnFn = type.substring(fnIndex, type.length());
			int returnIndex = returnFn.indexOf(":");
			if (returnIndex == -1) {
				returnFn = null;
			} else {			
				type = type.substring(0, fnIndex + 1);
				returnFn = returnFn.substring(returnIndex + 1, returnFn.length());
			}
			return new FunctionType(type, returnFn);
		}
		return new SimpleType(type);
	}

	public String getName() {
		return name;
	}

	public IType getType() {
		return type;
	}

	public boolean isOptional() {
		return optional;
	}

	void updateType(GApi api) {
		type.updateType(api);
	}

}
