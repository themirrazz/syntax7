var Syntax7={
  javascript:function(code) {
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
    var keyw=""
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
        if(ts[i]=="\n") {
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
        if(ts[i]=="\n") {
          format+="</string7>"
          singlestr=false
        }
        kw=""
        lastitem=""
      } else if(tickstr) {
        if((ts[i]=="`")&&(ts[i-1]!="\\")&&(!tickblock)) {
          format+=Syntax7.util.escape(ts[i])
          format+="</string7>"
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
        if((Syntax7.util.isNumber(ts[i])||(ts[i]=="e"))&&Syntax7.util.isNumber(kw)) {
          format+="<integer7>"+ts[i]+"</integer7>";
        } else if((ts[i]=="/")&&(ts[i+1]=="/")) {
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
          format+="<string7>"
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
        } else  if(kwd('instanceof',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="instanceof"
        } else if(ki=="instanceof") {
          if(kw=="instanceof") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('typeof',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="typeof"
        } else if(ki=="typeof") {
          if(kw=="typeof") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('false',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="false"
        } else if(ki=="false") {
          if(kw=="false") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('true',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="true"
        } else if(ki=="true") {
          if(kw=="true") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('undefined',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="undefined"
        } else if(ki=="undefined") {
          if(kw=="undefined") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('null',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="null"
        } else if(ki=="null") {
          if(kw=="null") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('import',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="import"
        } else if(ki=="import") {
          if(kw=="import") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('export',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="export"
        } else if(ki=="export") {
          if(kw=="export") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('in',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="in"
        } else if(ki=="in") {
          if(kw=="in") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('extends',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="extends"
        } else if(ki=="extends") {
          if(kw=="extends") {
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
        } else  if(kwd('class',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="class"
        } else if(ki=="class") {
          if(kw=="class") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('enum',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="enum"
        } else if(ki=="enum") {
          if(kw=="enum") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('case',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="case"
        } else if(ki=="case") {
          if(kw=="case") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('switch',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="switch"
        } else if(ki=="switch") {
          if(kw=="switch") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('default',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="default"
        } else if(ki=="default") {
          if(kw=="default") {
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
      format+="</string7>"
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
  python:function(code) {
    var ts=code=String(code||"")||"";
    var abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    abc+=abc.toLowerCase()
    abc+="0123456789_";
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
    var keyw=""
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
      if(doublestr) {
        format+=Syntax7.util.escape(ts[i])
        if((ts[i]=="\"")&&(ts[i-1]!="\\")) {
          format+="</string7>"
          doublestr=false
        }
        if(ts[i]=="\n") {
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
        if(ts[i]=="\n") {
          format+="</string7>"
          singlestr=false
        }
        kw=""
        lastitem=""
      } else if(tickstr) {
        if((ts[i]=="'")&&(ts[i-3]!="\\")&&(!tickblock)&&(ts[i-1]=="'")&&(ts[i-2]=="'")) {
          format+=Syntax7.util.escape(ts[i])
          format+="</string7>"
          tickstr=false
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
        if((Syntax7.util.isNumber(ts[i])||(ts[i]=="e"))&&Syntax7.util.isNumber(kw)) {
          format+="<integer7>"+ts[i]+"</integer7>";
        } else if((ts[i]=="#")) {
          format+="<comment7>"
          format+=Syntax7.util.escape(ts[i])
          singlecmt=true
        } else if((ts[i]=="'")&&(ts[i+1]=="'")&&(ts[i+2]=="'")) {
          format+="<string7>'''"
          tickstr=true
          i+=2
        } else if(ts[i]=='"') {
          format+="<string7>"
          doublestr=true
          format+=Syntax7.util.escape(ts[i])
        } else if(ts[i]=="'") {
          format+="<string7>"
          singlestr=true
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
        } else  if(kwd('def',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="def"
        } else if(ki=="def") {
          if(kw=="def") {
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
        } else  if(kwd('in',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="in"
        } else if(ki=="in") {
          if(kw=="in") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        }
         else  if(kwd('pass',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="pass"
        } else if(ki=="pass") {
          if(kw=="pass") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        }else  if(kwd('while',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
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
        } else  if(kwd('import',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="import"
        } else if(ki=="import") {
          if(kw=="import") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('from',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="from"
        } else if(ki=="from") {
          if(kw=="from") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('as',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="as"
        } else if(ki=="as") {
          if(kw=="as") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('del',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="del"
        } else if(ki=="del") {
          if(kw=="del") {
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
        } else  if(kwd('elif',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="elif"
        } else if(ki=="elif") {
          if(kw=="elif") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('False',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="False"
        } else if(ki=="False") {
          if(kw=="False") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('True',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="True"
        } else if(ki=="True") {
          if(kw=="True") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('None',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="None"
        } else if(ki=="None") {
          if(kw=="None") {
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
        } else  if(kwd('except',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="except"
        } else if(ki=="except") {
          if(kw=="except") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('raise',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="raise"
        } else if(ki=="raise") {
          if(kw=="raise") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('class',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="class"
        } else if(ki=="class") {
          if(kw=="class") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('is',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="is"
        } else if(ki=="is") {
          if(kw=="is") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('is',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="not"
        } else if(ki=="not") {
          if(kw=="not") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('or',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="or"
        } else if(ki=="or") {
          if(kw=="or") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('and',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="and"
        } else if(ki=="and") {
          if(kw=="and") {
            ki=""
            format+=Syntax7.util.escape(ts[i]);format+="</kw7>"
          } else {
            format+=Syntax7.util.escape(ts[i])
          }
        } else  if(kwd('class',i)){format+="<kw7>";format+=Syntax7.util.escape(ts[i])
          var ki="class"
        } else if(ki=="class") {
          if(kw=="class") {
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
      format+="</string7>"
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
          result+="&nbsp;"
        } else if(chars.indexOf(text[i])>-1) {
          result+=text[i]
        } else {
          result += "&#x"+text.charCodeAt(i).toString(16).toUpperCase()+";";
        }
      }
      return result
    },
    isNumber:function(text) {
      var chars="0123456789e";
      if(text[0]=="e"){
        return false
      }
      for(var i=0;i<text.length;i++){
        if(chars.indexOf(text[i])<0){
          return false
        }
      }
      return true
    },
    from:function(raw,language) {
      switch (language) {
        case "js":
        case "javascript":
        case "ecma":
        case "ecmascript":
          return Syntax7.javascript(raw)
        case "python":
        case "py3":
        case "py":
          return Syntax7.python(raw)
        default:
          return Syntax7.util.none(raw)
      }
    },
    none:function(raw) {
      return Syntax7.util.escape(raw)
    }
  }
}
