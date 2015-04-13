package tern.googleapi.generator;

public class PackageGenerator implements tern.googleapi.generator.IGenerator
 {
  protected static String nl;
  public static synchronized PackageGenerator create(String lineSeparator)
  {
    nl = lineSeparator;
    PackageGenerator result = new PackageGenerator();
    nl = null;
    return result;
  }

  public final String NL = nl == null ? (System.getProperties().getProperty("line.separator")) : nl;
  protected final String TEXT_1 = "{" + NL + "  \"name\": \"tern-";
  protected final String TEXT_2 = "\"," + NL + "  \"license\": \"MIT\"," + NL + "  \"version\": \"0.1.0\"," + NL + "  \"main\": \"";
  protected final String TEXT_3 = ".js\"," + NL + "  \"author\": \"Angelo ZERR <angelo.zerr@gmail.com>\"," + NL + "  \"description\": \"A Tern plugin adding Google Maps JavaScript API v3 support.\"," + NL + "  \"repository\": {" + NL + "    \"type\": \"git\"," + NL + "    \"url\": \"git://github.com/angelozerr/tern.googleapi.git\"" + NL + "  }," + NL + "  \"scripts\": {" + NL + "    \"test\": \"node ./test/all.js\"" + NL + "  },  " + NL + "  \"dependencies\": {" + NL + "    \"tern\": \">=0.10.0\"," + NL + "    \"acorn\": \">=1.0.0\"" + NL + "  }," + NL + "  \"devDependencies\": { " + NL + "    \"test\": \">=0.0.5\" " + NL + "  },  " + NL + "  \"keywords\": [" + NL + "    \"tern\"," + NL + "    \"Google Maps\"" + NL + "  ]" + NL + "}";

/* (non-javadoc)
    * @see IGenerator#generate(TernPluginOptions)
    */
public String generate(TernPluginOptions argument)
  {
    final StringBuffer stringBuffer = new StringBuffer();
     TernPluginOptions options = argument; 
    stringBuffer.append(TEXT_1);
    stringBuffer.append(options.getPluginName() );
    stringBuffer.append(TEXT_2);
    stringBuffer.append(options.getPluginName() );
    stringBuffer.append(TEXT_3);
    return stringBuffer.toString();
  }
}