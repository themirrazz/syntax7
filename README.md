# Syntax7
A simple, JavaScript library for HTML-based syntax highlighing.

## How to use

Currently, the only language you can use is ECMAScript (eg TypeScript or JavaScript).

It is very easy to generate syntax highlighting:
```js
Syntax7.javascript("var thing=0; // your code here")
```

It returns generated HTML, eg:
```html
<kw7>var</kw7>&nbsp;thing=0;&nbsp; <comment7>//&nbsp;your&nbsp;code&nbsp;here</comment7>
```

## See What's Arrived in 0.0.5

### The Language Suite
You now have lots of options to choose from: JavaScript, Python, HTML, JSON, INI, or MarkDown.

Don't feel like writing code? There's a plain text version, too, at `Syntax7.util.none`
### Markown is here
Edit markdown with color-coded headers, bold/italic sections, and blocks of code.
### Kw8 in JSON
The JSON highlighting is literally a stripped-down version of JavaScript. But we changed some things:<br>
the `true` and `false` keywords render as `KW8` instead of `KW7` in JSON mode!
### Still Supporting
Syntax7 itself is still supported in IE5+, and the demo is still being supported in IE7+
### From
Using the `Syntax.util.from` command, it takes 2 arguments: the code to generate highlighting for, and the language.<br>
This allows certain languages to go by aliases.
Don't worry if you mispell. Mispellings redirect to the plain text version instead of throwing errors.

## Documentation

`Syntax7.javascript(code:string)` Colors JavaScript.

`Syntax7.python(ts:string)` Colors Python.

`Syntax7.html(ts:string)` Colors HTML5.

`Syntax7.md(ts:string)` Colors MarkDown.

`Syntax7.ini(ts:string)` Colors INI.

`Syntax7.json(code:string)` Colors JSON.

`Syntax7.util.from(raw:strimg,language?:string)` Colors code based on a language name or alias, resorting to plain text.

`Syntax7.util.none(code:string)` Plain text mode. Can be used as an alias for *Syntax7.util.escape*.

`Syntax7.util.escape(text:string)` Escape HTML. Used internaly.

`Syntax7.util.isNumber(text:string)` Returns true if the specified string is a number. Used internaly.

`Syntax7.util.tohex(num:number)` Converts a 4-digit decimal to a HEX number. Only exisits on the Micro:bit edition.


## Alias List

`javascript`

> `javascript,js,ecma,ecmascript`

`python`

> `python,py,py3`

`html`

> `html`

`ini`

> `ini`

`json`

> `json`

`md`

> `md`

##  How to use custom highlighting
We've switched to spans. This is for compatibility in IE8 and lower, which doesn't support custom tags. Instead of inline styling, however, we use class names. Just add a `.` (eg `.kw7` instead of `kw7`) and you'll be good to go! 

`kw7` - A keyword.<br>
`string7` - A string.<br>
`integer7` - An integer, decimal, float, or number.<br>
`tick7` - Used for the backtick-type strings in ES6. Only used in v0.0.1
`insert7` - Used for content between the brackets in backtick-type strings in ES6 (eg `` `my string${0}` ``)
`kw8` - a second keyword. This is built-in functions in Python, tag content in HTML, and most text in INI.


## Supported Platforms

* Chrome 15 and above
* IE5 and above
* Edge 12 and above
* Safari(Windows) 4 and above
* Firefox 3.6 and above
* Opera 11.5 and above
* Safar(Mac) 6 and above
* Samsung Internet 16 and above
* Brave 1.0 and above
* Yandex Browser 14 and above
* Border 1.10 and above



## Live Demo

For a live demo, see https://syntax7.awesomecrater.repl.co

Note: the live demo does NOT work in IE5 due to CSS issues (unless you remove the textareas).



### Results: Syntax7 v Codemirror v Monaco
|            | Supports IE | Find-and-replace | Standalone Highlighting | Customizable Style |
|------------|-------------|------------------|-------------------------|--------------------|
| Monaco     | No          | Yes              | No                      | Somewhat           |
| Codemirror | IE8+        | Needs Addon      | No                      | Yes                |
| Syntax7    | IE5.5+      | No               | Yes                     | Yes                |
