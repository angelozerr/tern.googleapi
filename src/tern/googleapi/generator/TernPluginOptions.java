package tern.googleapi.generator;

public class TernPluginOptions {

	private final String pluginName;
	private final String defs;

	public TernPluginOptions(String pluginName, String defs) {
		this.pluginName = pluginName;
		this.defs = defs;
	}

	public String getPluginName() {
		return pluginName;
	}

	public String getDefs() {
		return defs;
	}
}
