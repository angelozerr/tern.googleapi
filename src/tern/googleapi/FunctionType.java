package tern.googleapi;

public class FunctionType extends GMethod implements IType {

	public FunctionType(String signature, String returnFn) {
		super(signature, null, returnFn, false, true);
	}

	@Override
	public void updateType(GApi api) {
		super.updateTypes(api);
	}
}
