package tern.googleapi;

public class SimpleType implements IType {

	private String type;

	public SimpleType(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}

	@Override
	public void updateType(GApi api) {
		this.type = api.resolveType(type);
	}
}
