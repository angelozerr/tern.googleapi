package tern.googleapi;

public class GProperty extends GParameter {

	private final String description;
	private final String url;
	private boolean isStatic;

	public GProperty(String name, String type, String description,
			GClass ownerClass) {
		super(name, type, false);
		this.description = description;
		this.url = ownerClass.getUrl();
		this.isStatic = ownerClass.isObjectLiteral();
	}

	public String getDescription() {
		return description;
	}

	public String getUrl() {
		return url;
	}

	public boolean isStatic() {
		return isStatic;
	}

}
