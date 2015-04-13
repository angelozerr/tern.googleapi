package tern.googleapi.generator;

public class TernPluginGenerator implements tern.googleapi.generator.IGenerator
 {
  protected static String nl;
  public static synchronized TernPluginGenerator create(String lineSeparator)
  {
    nl = lineSeparator;
    TernPluginGenerator result = new TernPluginGenerator();
    nl = null;
    return result;
  }

  public final String NL = nl == null ? (System.getProperties().getProperty("line.separator")) : nl;
  protected final String TEXT_1 = "(function(mod) {" + NL + "  if (typeof exports == \"object\" && typeof module == \"object\") // CommonJS" + NL + "    return mod(require(\"tern/lib/infer\"), require(\"tern/lib/tern\"));" + NL + "  if (typeof define == \"function\" && define.amd) // AMD" + NL + "    return define([ \"tern/lib/infer\", \"tern/lib/tern\" ], mod);" + NL + "  mod(tern, tern);" + NL + "})(function(infer, tern) {" + NL + "  \"use strict\";" + NL + "" + NL + "  tern.registerPlugin(\"";
  protected final String TEXT_2 = "\", function(server, options) {" + NL + "" + NL + "    return {" + NL + "      defs : defs" + NL + "    };" + NL + "  });" + NL + "  " + NL + "  var defs = ";
  protected final String TEXT_3 = ";" + NL + "});";

/* (non-javadoc)
    * @see IGenerator#generate(TernPluginOptions)
    */
public String generate(TernPluginOptions argument)
  {
    final StringBuffer stringBuffer = new StringBuffer();
     TernPluginOptions options = argument; 
    stringBuffer.append(TEXT_1);
    stringBuffer.append( options.getPluginName() );
    stringBuffer.append(TEXT_2);
    stringBuffer.append( options.getDefs() );
    stringBuffer.append(TEXT_3);
    return stringBuffer.toString();
  }
}