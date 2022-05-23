// JavaScript
var Syntax7={
  ecma:function(code) {
    var ts=code=String(code||"")||"";
    var abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    abc+=abc.toLowerCase()
    abc+="0123456789$_";
    var white=" "
    var format="";
    var singlestr=false
    var doublestr=false
    var tickstr=false
    var multicmt=false
    var singlecmt=false
    var tickblock=false
    var tickbrack=0
    var lastitem=""
    var kw=""
    var ki=""
    var keyw=[
      "var","let","const","function","class","enum",
      "if", "else","in","new","await", "async",
      "false","true","throw","try","catch",
      "for","while","debugger","delete",
      "import","export","extends","return","break",
      "instanceof","typeof","this","void",
      "public","private","super",
      "switch","case","default",
      "implements","null","undefined",
      "with","do","continue"
    ]
    function kwd(k,i) {
      if(
        (abc.indexOf(ts[i-1])<0)
        &&((kw=="")||(kw==k[0]))
        &&(ts.slice(i).indexOf(k)==0)
        &&(abc.indexOf(ts.slice(i)[k.length])<0)
      ) return true;
      else return false;
    }
    for(var i=0;i<code.length;i++) {
      if(multicmt) {
        format+=Syntax7.util.escape(ts[i])
        if((ts[i]=="/")&&(ts[i-1]=="*")) {
          format+="</comment7>"
          multicmt=false
        }
        kw=""
        lastitem=""
      } else if(doublestr) {
        format+=Syntax7.util.escape(ts[i])
        if((ts[i]=="\"")&&(ts[i-1]!="\\")) {
          format+="</string7>"
          doublestr=false
        }
        kw=""
        lastitem=""
      } else if(singlestr) {
        format+=Syntax7.util.escape(ts[i])
        if((ts[i]=="'")&&(ts[i-1]!="\\")) {
          format+="</string7>"
          singlestr=false
        }
        kw=""
        lastitem=""
      } else if(tickstr) {
        if((ts[i]=="`")&&(ts[i-1]!="\\")&&(!tickblock)) {
          format+=Syntax7.util.escape(ts[i])
          format+="</tick7>"
          tickstr=false
        }else if((ts[i]=="{")&&(ts[i-1]=="$")&&(ts[i-2]!="\\")&&(!tickblock)) {
          tickblock=true
          format+="<insert7>"
          tickbrack=1
          format+=Syntax7.util.escape(ts[i])
        } else if((ts[i]=="{")&&tickblock) {
          tickbrack++
          format+=Syntax7.util.escape(ts[i])
        } else if((ts[i]=="}")&&tickblock) {
          tickbrack--
          format+=Syntax7.util.escape(ts[i])
          if(tickbrack==0){
            tickblock=false
            format+="</insert7>"
          }
        } else {
          format+=Syntax7.util.escape(ts[i])
        }
        kw=""
        lastitem=""
      } else if(singlecmt) {
        format+=Syntax7.util.escape(ts[i])
        if(ts[i]=="\n") {
          format+="</comment7>"
          singlecmt=false
        }
        kw=""
        lastitem=""
      } else {
        if(abc.indexOf(ts[i])<0) {
          lastitem="";
          kw=""
        } else {
          kw+=ts[i]
          keyw+=""
        }
        if((ts[i]=="/")&&(ts[i+1]=="/")) {
          format+="<comment7>"
          format+=Syntax7.util.escape(ts[i])
          singlecmt=true
        } else if((ts[i]=="/")&&(ts[i+1]=="*")) {
          format+="<comment7>"
          format+=Syntax7.util.escape(ts[i])
          multicmt=true
        } else if(ts[i]=='"') {
          format+="<string7>"
          doublestr=true
          format+=Syntax7.util.escape(ts[i])
        } else if(ts[i]=="'") {
          format+="<string7>"
          singlestr=true
          format+=Syntax7.util.escape(ts[i])
        } else if(ts[i]=="`") {
          format+="<tick7>"
          tickstr=true
          format+=Syntax7.util.escape(ts[i])
        } else  if(kwd('async',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="async"
        } else if(ki=="async") {
          if(kw=="async") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('await',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="await"
        } else if(ki=="await") {
          if(kw=="await") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('function',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="function"
        } else if(ki=="function") {
          if(kw=="function") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('const',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="const"
        } else if(ki=="const") {
          if(kw=="const") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('let',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="let"
        } else if(ki=="let") {
          if(kw=="let") {
            ki=""
            format+=Syntax7.util.escape(ts[i])
            format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('var',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="var"
        } else if(ki=="var") {
          if(kw=="var") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('for',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="for"
        } else if(ki=="for") {
          if(kw=="for") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('while',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="while"
        } else if(ki=="while") {
          if(kw=="while") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('break',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="break"
        } else if(ki=="break") {
          if(kw=="break") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('return',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="return"
        } else if(ki=="return") {
          if(kw=="return") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('if',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="if"
        } else if(ki=="if") {
          if(kw=="if") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('else',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="else"
        } else if(ki=="else") {
          if(kw=="else") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('try',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="try"
        } else if(ki=="try") {
          if(kw=="try") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('catch',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="catch"
        } else if(ki=="catch") {
          if(kw=="catch") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('throw',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="throw"
        } else if(ki=="throw") {
          if(kw=="throw") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else {
          format+=Syntax7.util.escape(ts[i])
        }
      }
    }
    if(tickstr) {
      if(tickblock) {
        format+="</insert7>"
      }
      format+="</tick7>"
    }
    if(doublestr||singlestr) {
      format+="</string7>"
    }
    if(multicmt||singlecmt){
      format+="</comment7>"
    }
    if(ki!="") {
      format+="</kw7>"
    }
    return format
  },
  util: {
    escape:function(text) {
      var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      chars+=chars.toLowerCase()
      chars+="1234567890"
      chars+="~[]{}()!@#$%^*+_-=/\|,. ;:";
      chars=chars.split("")
      var result="";
      for(var i=0;i<text.length;i++){
        if(text[i]=="\n"){
          result+="<br/>"
        } else if(text[i]==" ") {
          result+="<space7>&nbsp;</space7>"
        } else if(chars.includes(text[i])) {
          result+=text[i]
        } else {
          result += "&#x"+text.charCodeAt(i).toString(16).toUpperCase()+";";
        }
      }
      return result
    }
  }
}
