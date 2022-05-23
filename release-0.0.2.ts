/*
Syntax7 v0.0.1
Offical Micro:bit TypeScript built
*/

//% block="Syntax7" color=#a103fc icon="\uf121"
namespace Syntax7 {
    //% block="parse ECMAScript %code"
    export function ecma(code: string) {
        let ts = code
        let ki:string
        let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        abc += abc.toLowerCase()
        abc += "0123456789$_";
        let white = " "
        let format = "";
        let singlestr = false
        let doublestr = false
        let tickstr = false
        let multicmt = false
        let singlecmt = false
        let tickblock = false
        let tickbrack = 0
        let lastitem = ""
        let kw = ""
        ki = ""
        let keyw = [
            "var", "let", "const", "function", "class", "enum",
            "if", "else", "in", "new", "await", "async",
            "false", "true", "throw", "try", "catch",
            "for", "while", "debugger", "delete",
            "import", "export", "extends", "return", "break",
            "instanceof", "typeof", "this", "void",
            "public", "private", "super",
            "switch", "case", "default",
            "implements", "null", "undefined",
            "with", "do", "continue"
        ]
        function kwd(k: string, i: number) {
          if ((abc.indexOf(ts[i-1])<0)||(i<1)) {
            if((!kw)||(kw=="")||(kw.length==0)||(kw[0]===k[0])) {
              if(ts.slice(i,k.length)==k){
                return true
              }
            }
          }
          return false
        }
        for (let i = 0; i < code.length; i++) {
            if (multicmt) {
                format += util.escape(ts[i])
                if ((ts[i] == "/") && (ts[i - 1] == "*")) {
                    format += "</comment7>"
                    multicmt = false
                }
                kw = ""
                lastitem = ""
            } else if (doublestr) {
                format += util.escape(ts[i])
                if ((ts[i] == "\"") && (ts[i - 1] != "\\")) {
                    format += "</string7>"
                    doublestr = false
                }
                kw = ""
                lastitem = ""
            } else if (singlestr) {
                format += util.escape(ts[i])
                if ((ts[i] == "'") && (ts[i - 1] != "\\")) {
                    format += "</string7>"
                    singlestr = false
                }
                kw = ""
                lastitem = ""
            } else if (tickstr) {
                if ((ts[i] == "`") && (ts[i - 1] != "\\") && (!tickblock)) {
                    format += util.escape(ts[i])
                    format += "</string7>"
                    tickstr = false
                } else if ((ts[i] == "{") && (ts[i - 1] == "$") && (ts[i - 2] != "\\") && (!tickblock)) {
                    tickblock = true
                    format += "<insert7>"
                    tickbrack = 1
                    format += util.escape(ts[i])
                } else if ((ts[i] == "{") && tickblock) {
                    tickbrack++
                    format += util.escape(ts[i])
                } else if ((ts[i] == "}") && tickblock) {
                    tickbrack--
                    format += util.escape(ts[i])
                    if (tickbrack == 0) {
                        tickblock = false
                        format += "</insert7>"
                    }
                } else {
                    format += util.escape(ts[i])
                }
                kw = ""
                lastitem = ""
            } else if (singlecmt) {
                format += util.escape(ts[i])
                if (ts[i] == "\n") {
                    format += "</comment7>"
                    singlecmt = false
                }
                kw = ""
                lastitem = ""
            } else {
                if (abc.indexOf(ts[i]) < 0) {
                    lastitem = "";
                    kw = ""
                } else {
                    kw += ts[i]
                }
                if ((util.isNumber(ts[i]) || (ts[i] == "e")) && util.isNumber(kw)) {
                    format += "<integer7>" + ts[i] + "</integer7>";
                } else if ((ts[i] == "/") && (ts[i + 1] == "/")) {
                    format += "<comment7>"
                    format += util.escape(ts[i])
                    singlecmt = true
                } else if ((ts[i] == "/") && (ts[i + 1] == "*")) {
                    format += "<comment7>"
                    format += util.escape(ts[i])
                    multicmt = true
                } else if (ts[i] == '"') {
                    format += "<string7>"
                    doublestr = true
                    format += util.escape(ts[i])
                } else if (ts[i] == "'") {
                    format += "<string7>"
                    singlestr = true
                    format += util.escape(ts[i])
                } else if (ts[i] == "`") {
                    format += "<string7>"
                    tickstr = true
                    format += util.escape(ts[i])
                } else if (kwd('async', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "async"
                } else if (ki == "async") {
                    if (kw == "async") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('await', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "await"
                } else if (ki == "await") {
                    if (kw == "await") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('function', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "function"
                } else if (ki == "function") {
                    if (kw == "function") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('const', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "const"
                } else if (ki == "const") {
                    if (kw == "const") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('let', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "let"
                } else if (ki == "let") {
                    if (kw == "let") {
                        ki = ""
                        format += util.escape(ts[i])
                        format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('var', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "var"
                } else if (ki == "var") {
                    if (kw == "var") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('for', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "for"
                } else if (ki == "for") {
                    if (kw == "for") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('while', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "while"
                } else if (ki == "while") {
                    if (kw == "while") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('break', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "break"
                } else if (ki == "break") {
                    if (kw == "break") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('return', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "return"
                } else if (ki == "return") {
                    if (kw == "return") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('if', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "if"
                } else if (ki == "if") {
                    if (kw == "if") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('else', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "else"
                } else if (ki == "else") {
                    if (kw == "else") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('try', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "try"
                } else if (ki == "try") {
                    if (kw == "try") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('catch', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "catch"
                } else if (ki == "catch") {
                    if (kw == "catch") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('throw', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "throw"
                } else if (ki == "throw") {
                    if (kw == "throw") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('class', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "class"
                } else if (ki == "class") {
                    if (kw == "class") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else if (kwd('enum', i)) {
                    format += "<kw7>"; format += util.escape(ts[i])
                    ki = "enum"
                } else if (ki == "enum") {
                    if (kw == "enum") {
                        ki = ""
                        format += util.escape(ts[i]); format += "</kw7>"
                    } else {
                        format += util.escape(ts[i])
                    }
                } else {
                    format += util.escape(ts[i])
                }
            }
        }
        if (tickstr) {
            if (tickblock) {
                format += "</insert7>"
            }
            format += "</string7>"
        }
        if (doublestr || singlestr) {
            format += "</string7>"
        }
        if (multicmt || singlecmt) {
            format += "</comment7>"
        }
        if (ki != "") {
            format += "</kw7>"
        }
        return format
    }
    let util = {
        escape: function (text: string) {
            let chars: string | string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            chars += chars.toLowerCase()
            chars += "1234567890"
            chars += "~[]{}()!@#$%^*+_-=/\|,. ;:";
            chars = chars.split("")
            let result = "";
            for (let i = 0; i < text.length; i++) {
                if (text[i] == "\n") {
                    result += "<br/>"
                } else if (text[i] == " ") {
                    result += "&nbsp;"
                } else if (chars.indexOf(text[i]) > -1) {
                    result += text[i]
                } else {
                    result += "&#x" + util.upper(util.tohex(text.charCodeAt(i))) + ";";
                }
            }
            return result
        },
        isNumber: function (text: string) {
            let chars = "0123456789e";
            if (text[0] == "e") {
                return false
            }
            for (let i = 0; i < text.length; i++) {
                if (chars.indexOf(text[i]) < 0) {
                    return false
                }
            }
            return true
        },
        upper: function (text: string) {
            let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            let lowers = "abcdefghijklmnopqrstuvwxyz"
            let result = ""
            for (let i = 0; i < text.length; i++) {
                if (uppers.indexOf(text[i]) > -1) {
                    result += lowers[
                        uppers.indexOf(text[i])
                    ]
                } else {
                    result += text[i]
                }
            }
            return result
        },
        tohex: function (int: number) {
            let things = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
            let a = Math.floor(int / 4096)
            let b = Math.floor((int - (4096 * a)) / 256)
            let c = Math.floor((int - (256 * b)) / 16)
            let d = Math.floor((int - (16 * c)) / 1)
            return `${things[a]}${things[b]}${things[c]}${things[d]}`
        }
  }
}
