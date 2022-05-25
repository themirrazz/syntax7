var Syntax7={
  javascript:function(code,f) {
    var code=String(code||"")||"";
    var ts=code
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
    function kwd(k, i) {
          if ((abc.indexOf(ts.slice(i-1,i))<0)||(i<1)) {
            if(abc.indexOf(ts.slice(k.length+i,k.length+i+1))>-1){
              return false
            }
            if(ts.slice(i,k.length+i)==k) {
              return true
            }
          }
          return false
        }
    for(var i=0;i<code.length;i++) {
      if(multicmt) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if((ts.slice(i,i+1)=="/")&&(ts.slice(i-1,i)=="*")&&(ts.slice(i,i+1)!=="")) {
          format+="</span>"
          multicmt=false
        }
        kw=""
        lastitem=""
      } else if(doublestr) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if((ts.slice(i,i+1)=="\"")&&(ts.slice(i-1,i)!="\\")&&(ts.slice(i,i+1)!=="")) {
          format+="</span>"
          doublestr=false
        }
        if(ts.slice(i,i+1)=="\n"&&(ts.slice(i,i+1)!=="")) {
          format+="</span>"
          doublestr=false
        }
        kw=""
        lastitem=""
      } else if(singlestr) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if((ts.slice(i,i+1)=="'")&&(ts.slice(i-1,i)!="\\")&&(ts.slice(i,i+1)!=="")) {
          format+="</span>"
          singlestr=false
        }
        if(ts.slice(i,i+1)=="\n") {
          format+="</span>"
          singlestr=false
        }
        kw=""
        lastitem=""
      } else if(tickstr) {
        if((ts.slice(i,i+1)=="`")&&(ts.slice(i-1,i)!="\\")&&(!tickblock)) {
          format+=Syntax7.util.escape(ts.slice(i,i+1))
          format+="</span>"
          tickstr=false
        }else if((ts.slice(i,i+1)=="{")&&(ts.slice(i-1,i)=="$")&&(ts.slice(i-2,i-1)!="\\")&&(!tickblock)) {
          tickblock=true
          format+="<span class='insert7'>"
          tickbrack=1
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        } else if((ts.slice(i,i+1)=="{")&&tickblock) {
          tickbrack++
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        } else if((ts.slice(i,i+1)=="}")&&tickblock) {
          tickbrack--
          format+=Syntax7.util.escape(ts.slice(i,i+1))
          if(tickbrack==0){
            tickblock=false
            format+="</span>"
          }
        } else {
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        }
        kw=""
        lastitem=""
      } else if(singlecmt) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if(ts.slice(i,i+1)=="\n") {
          format+="</span>"
          singlecmt=false
        }
        kw=""
        lastitem=""
      } else {
        if((abc.indexOf(ts.slice(i,i+1))<0)&&(ts.slice(i,i+1)!=="")) {
          lastitem="";
          kw=""
        } else {
          kw+=ts.slice(i,i+1)
          keyw+=""
        }
        if((Syntax7.util.isNumber(ts.slice(i,i+1))||(ts.slice(i,i+1)=="e"))&&Syntax7.util.isNumber(kw)&&(ts.slice(i,i+1)!=="")) {
          format+="<span class='integer7'>"+ts.slice(i,i+1)+"</span>";
        } else if((ts.slice(i,i+1)=="/")&&(ts.slice(i+1,i+2)=="/")&&(ts.slice(i,i+1)!=="")) {
          format+="<span class='comment7'>"
          format+=Syntax7.util.escape(ts.slice(i,i+1))
          singlecmt=true
        } else if((ts.slice(i,i+1)=="/")&&(ts.slice(i+1,i+2)=="*")&&(ts.slice(i+1,i+2)!="")) {
          format+="<span class='comment7'>"
          format+=Syntax7.util.escape(ts.slice(i,i+1))
          multicmt=true
        } else if((ts.slice(i,i+1)=='"')&&(ts.slice(i,i+1)!=="")) {
          format+="<span class='string7'>"
          doublestr=true
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        } else if((ts.slice(i,i+1)=="'")&&(ts.slice(i,i+1)!=="")) {
          format+="<span class='string7'>"
          singlestr=true
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        } else if((ts.slice(i,i+1)=="`")&&(ts.slice(i,i+1)!=="")) {
          format+="<span class='string7'>"
          tickstr=true
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        } else  if(kwd('async',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="async"
        } else if(ki=="async") {
          if(kw=="async") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('await',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="await"
        } else if(ki=="await") {
          if(kw=="await") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('instanceof',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="instanceof"
        } else if(ki=="instanceof") {
          if(kw=="instanceof") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('typeof',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="typeof"
        } else if(ki=="typeof") {
          if(kw=="typeof") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('false',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="false"
        } else if(ki=="false") {
          if(kw=="false") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('true',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="true"
        } else if(ki=="true") {
          if(kw=="true") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('continue',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="continue"
        } else if(ki=="continue") {
          if(kw=="continue") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('super',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="super"
        } else if(ki=="super") {
          if(kw=="super") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('do',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="do"
        } else if(ki=="do") {
          if(kw=="do") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('new',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="new"
        } else if(ki=="new") {
          if(kw=="new") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('undefined',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="undefined"
        } else if(ki=="undefined") {
          if(kw=="undefined") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('null',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="null"
        } else if(ki=="null") {
          if(kw=="null") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('import',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="import"
        } else if(ki=="import") {
          if(kw=="import") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('export',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="export"
        } else if(ki=="export") {
          if(kw=="export") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('in',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="in"
        } else if(ki=="in") {
          if(kw=="in") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('extends',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="extends"
        } else if(ki=="extends") {
          if(kw=="extends") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('function',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="function"
        } else if(ki=="function") {
          if(kw=="function") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('const',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="const"
        } else if(ki=="const") {
          if(kw=="const") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('let',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="let"
        } else if(ki=="let") {
          if(kw=="let") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1))
            format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('var',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="var"
        } else if(ki=="var") {
          if(kw=="var") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('for',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="for"
        } else if(ki=="for") {
          if(kw=="for") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('while',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="while"
        } else if(ki=="while") {
          if(kw=="while") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('break',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="break"
        } else if(ki=="break") {
          if(kw=="break") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('return',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="return"
        } else if(ki=="return") {
          if(kw=="return") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('if',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="if"
        } else if(ki=="if") {
          if(kw=="if") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('else',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="else"
        } else if(ki=="else") {
          if(kw=="else") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('try',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="try"
        } else if(ki=="try") {
          if(kw=="try") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('catch',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="catch"
        } else if(ki=="catch") {
          if(kw=="catch") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('throw',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="throw"
        } else if(ki=="throw") {
          if(kw=="throw") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('class',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="class"
        } else if(ki=="class") {
          if(kw=="class") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('enum',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="enum"
        } else if(ki=="enum") {
          if(kw=="enum") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('case',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="case"
        } else if(ki=="case") {
          if(kw=="case") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('switch',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="switch"
        } else if(ki=="switch") {
          if(kw=="switch") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('default',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="default"
        } else if(ki=="default") {
          if(kw=="default") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else {
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        }
      }
    }
    if(tickstr) {
      if(tickblock) {
        format+="</span>"
      }
      format+="</span>"
    }
    if(doublestr||singlestr) {
      format+="</span>"
    }
    if(multicmt||singlecmt){
      format+="</span>"
    }
    if(ki!="") {
      format+="</span>"
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
    ki=""
    var keyw=""
    function kwd(k, i) {
          if ((abc.indexOf(ts.slice(i-1,i))<0)||(i<1)) {
            if(abc.indexOf(ts.slice(k.length+i,k.length+i+1))>-1){
              return false
            }
            if(ts.slice(i,k.length+i)==k) {
              return true
            }
          }
          return false
        }
    for(var i=0;i<code.length;i++) {
      if(doublestr) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if((ts.slice(i,i+1)=="\"")&&(ts.slice(i-1,i)!="\\")) {
          format+="</span>"
          doublestr=false
        }
        if(ts.slice(i,i+1)=="\n") {
          format+="</span>"
          doublestr=false
        }
        kw=""
        lastitem=""
      } else if(singlestr) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if((ts.slice(i,i+1)=="'")&&(ts.slice(i-1,i)!="\\")) {
          format+="</span>"
          singlestr=false
        }
        if(ts.slice(i,i+1)=="\n") {
          format+="</span>"
          singlestr=false
        }
        kw=""
        lastitem=""
      } else if(tickstr) {
        if((ts.slice(i,i+1)=="'")&&(ts.slice(i-3,i-2)!="\\")&&(!tickblock)&&(ts.slice(i-1,i)=="'")&&(ts.slice(i-2,i-1)=="'")) {
          format+=Syntax7.util.escape(ts.slice(i,i+1))
          format+="</span>"
          tickstr=false
        } else {
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        }
        kw=""
        lastitem=""
      } else if(singlecmt) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if(ts.slice(i,i+1)=="\n") {
          format+="</span>"
          singlecmt=false
        }
        kw=""
        lastitem=""
      } else {
        if(abc.indexOf(ts.slice(i,i+1))<0) {
          lastitem="";
          kw=""
        } else {
          kw+=ts.slice(i,i+1)
          keyw+=""
        }
        if((Syntax7.util.isNumber(ts.slice(i,i+1))||(ts.slice(i,i+1)=="e"))&&Syntax7.util.isNumber(kw)) {
          format+="<span class='integer7'>"+ts.slice(i,i+1)+"</span>";
        } else if((ts.slice(i,i+1)=="#")) {
          format+="<span class='comment7'>"
          format+=Syntax7.util.escape(ts.slice(i,i+1))
          singlecmt=true
        } else if((ts.slice(i,i+1)=="'")&&(ts.slice(i+1,i+2)=="'")&&(ts.slice(i+2,i+3)=="'")) {
          format+="<span class='string7'>'''"
          tickstr=true
          i+=2
        } else if(ts.slice(i,i+1)=='"') {
          format+="<span class='string7'>"
          doublestr=true
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        } else if(ts.slice(i,i+1)=="'") {
          format+="<span class='string7'>"
          singlestr=true
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        } else  if(kwd('async',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="async"
        } else if(ki=="async") {
          if(kw=="async") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('await',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="await"
        } else if(ki=="await") {
          if(kw=="await") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('def',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="def"
        } else if(ki=="def") {
          if(kw=="def") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('not',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="not"
        } else if(ki=="not") {
          if(kw=="not") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('for',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="for"
        } else if(ki=="for") {
          if(kw=="for") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('in',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="in"
        } else if(ki=="in") {
          if(kw=="in") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        }
         else  if(kwd('pass',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="pass"
        } else if(ki=="pass") {
          if(kw=="pass") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        }else  if(kwd('while',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="while"
        } else if(ki=="while") {
          if(kw=="while") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        }else  if(kwd('print',i)){format+="<span class='kw8'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="print"
        } else if(ki=="print") {
          if(kw=="print") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        }else  if(kwd('input',i)){format+="<span class='kw8'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="while"
        } else if(ki=="while") {
          if(kw=="while") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        }else  if(kwd('eval',i)){format+="<span class='kw8'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="eval"
        } else if(ki=="eval") {
          if(kw=="eval") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('break',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="break"
        } else if(ki=="break") {
          if(kw=="break") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('return',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="return"
        } else if(ki=="return") {
          if(kw=="return") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('import',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="import"
        } else if(ki=="import") {
          if(kw=="import") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('from',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="from"
        } else if(ki=="from") {
          if(kw=="from") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('as',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="as"
        } else if(ki=="as") {
          if(kw=="as") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('del',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="del"
        } else if(ki=="del") {
          if(kw=="del") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('if',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="if"
        } else if(ki=="if") {
          if(kw=="if") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('else',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="else"
        } else if(ki=="else") {
          if(kw=="else") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('elif',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="elif"
        } else if(ki=="elif") {
          if(kw=="elif") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('False',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="False"
        } else if(ki=="False") {
          if(kw=="False") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('True',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="True"
        } else if(ki=="True") {
          if(kw=="True") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('None',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="None"
        } else if(ki=="None") {
          if(kw=="None") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('try',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="try"
        } else if(ki=="try") {
          if(kw=="try") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('except',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="except"
        } else if(ki=="except") {
          if(kw=="except") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('raise',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="raise"
        } else if(ki=="raise") {
          if(kw=="raise") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('class',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="class"
        } else if(ki=="class") {
          if(kw=="class") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('is',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="is"
        } else if(ki=="is") {
          if(kw=="is") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('is',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="not"
        } else if(ki=="not") {
          if(kw=="not") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('or',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="or"
        } else if(ki=="or") {
          if(kw=="or") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('and',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="and"
        } else if(ki=="and") {
          if(kw=="and") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else  if(kwd('class',i)){format+="<span class='kw7'>";format+=Syntax7.util.escape(ts.slice(i,i+1))
          ki="class"
        } else if(ki=="class") {
          if(kw=="class") {
            ki=""
            format+=Syntax7.util.escape(ts.slice(i,i+1));format+="</span>"
          } else {
            format+=Syntax7.util.escape(ts.slice(i,i+1))
          }
        } else {
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        }
      }
    }
    if(tickstr) {
      if(tickblock) {
        format+="</span>"
      }
      format+="</span>"
    }
    if(doublestr||singlestr) {
      format+="</span>"
    }
    if(multicmt||singlecmt){
      format+="</span>"
    }
    if(ki!="") {
      format+="</span>"
    }
    return format
  },
  html:function(ts) {
    if(ts === null) {
      return ""
    }
    if(ts === undefined) {
      return ""
    }
    var format="";
    var tag=false
    var cmt=false
    var strd=false
    var strs=false
    for(var i=0;i<ts.length;i++) {
      if(strd) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if(ts.slice(i,i+1)=='"') {
          format+="</span>"
          strd=false
        }
      } else if(strs) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if(ts.slice(i,i+1)=='\'') {
          format+="</span>"
          strs=false
        }
      } else if(cmt) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if(ts.slice(i,i+1)==">") {
          if(ts.slice(i-1,i)=="-") {
            if(ts.slice(i-2,i-1)=="-") {
              cmt=false
              format+="</span>"
            }
          }
        }
      } else if(tag) {
        if(ts.slice(i,i+1)==">") {
          tag=false
          format+="</span><span class='kw7'>&#x3E;</span>"
        } else {
          if(ts.slice(i,i+1)=="\"") {
            format+="<span class='string7'>"
            strd=true
          }
          if(ts.slice(i,i+1)=="'") {
            format+="<span class='string7'>"
            strs=true
          }
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        }
      } else {
        if((ts.slice(i,i+1)=="<")&&(ts.slice(i+1,i+2)=="!")&&(ts.slice(i+2,i+3)=="-")&&(ts.slice(i+3,i+4)=="-")) {
          cmt=true
          format+="<span class='comment7'>"
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        } else if(ts.slice(i,i+1)=="<") {
          format+="<span class='kw7'>&#x3C;</span><span class='kw8'>"
          tag=true
        } else {
          format+=Syntax7.util.escape(ts.slice(i,i+1))
        }
      }
    }
    if(tag) {
      format+="</span>"
    }
    if(cmt) {
      format+="</span>"
    }
    if(strd) {
      format+="</span>"
    }
    if(strs) {
      format+="</span>"
    }
    return format
  },
  ini:function(ts){
    var format="";
    var cmt=false
    var sq=false
    for(var i=0;i<ts.length;i++){
      if(cmt){
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if(ts.slice(i,i+1)=="\n") {
          format+="</span>"
          cmt=false
        }
      } else if(sq) {
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        if(ts.slice(i,i+1)=="]") {
          format+="</span>"
          sq=false
        }
      } else if(ts.slice(i,i+1)==";") {
        cmt=true
        format+="<span class='comment7'>"
        format+=Syntax7.util.escape(ts.slice(i,i+1))
      } else if(ts.slice(i,i+1)=="=") {
        format+="<span class='kw7'>=</span>"
      } else if(ts.slice(i,i+1)=="[") {
        sq=true
        format+="<span class='kw7'>"
        format+=Syntax7.util.escape(ts.slice(i,i+1))
      } else {
        format+="<span class='kw8'>"
        format+=Syntax7.util.escape(ts.slice(i,i+1))
        format+="</span>"
      }
    }
    return format
  },
  util: {
    escape:function(text) {
      var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      chars+=chars.toLowerCase()
      chars+="1234567890"
      chars+="~[]{}()!@#$%^*+_-=/\|,. ;:";
      var result="";
      for(var i=0;i<text.length;i++){
        if(text.slice(i,i+1)=="\n"){
          result+="<br/>"
        } else if(text.slice(i,i+1)==" ") {
          result+="&nbsp;"
        } else if(chars.indexOf(text.slice(i,i+1))>-1) {
          result+=text.slice(i,i+1)
        } else {
          result += "&#x"+text.charCodeAt(i).toString(16).toUpperCase()+";";
        }
      }
      return result
    },
    isNumber:function(text) {

      var chars="0123456789e";
      if(text.slice(0,1)=="e"){
        return false
      }
      for(var i=0;i<text.length;i++){
        if(chars.indexOf(text.slice(i,i+1))<0){
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
        case "html":
          return Syntax7.html(raw)
        case "ini":
          return Syntax7.ini(raw)
        default:
          return Syntax7.util.none(raw)
      }
    },
    none:function(raw) {
      return Syntax7.util.escape(raw)
    }
  }
}
