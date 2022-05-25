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

## There's some more in v0.0.4

* **not not a not** in Python mode, we've added the "not" keyword.
* **Syntax7 in IE7** yes, Syntax7 works all the way down to IE5(tested)
* **More languages** we've added 2 new languages: HTML and INI.
* **The second keyword** theres a second keyword, which isn't always a keyword.
* **Demo in IE7???** In previous versions, the demo would only work in IE9 and newer. Now, it works down to IE7 (and possibly IE6)


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
