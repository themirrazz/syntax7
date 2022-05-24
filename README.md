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

## What's New in v0.0.3

* **true, false, null, undefined** null and empty values and booleans are highlighted
* **switch it up** JavaScript now sees switch, case, and default as keywords
* **more class stuff** feel free to use extends, import, and export!
* **is javascript** instead of using `Syntax7.ecma`, use `Syntax7.javascript`!
* **Python is here** want to highlight Python code? We've got that covered, with strings, numbers, keywords, and booleans!
* **highlight,not low light** in the demo, the highlight color is a lighter blue, making it easier to see what you're copying


##  How to use custom highlighting
Instead of using font or span tags to apply styles, it uses a set of custom tags. This allows for custom styling, and more than just coloring.
For example, some coding editors make keywords bold.

`kw7` - A keyword.<br>
`string7` - A string.<br>
`integer7` - An integer, decimal, float, or number.<br>
`tick7` - Used for the backtick-type strings in ES6. Only used in v0.0.1
`insert7` - Used for content between the brackets in backtick-type strings in ES6 (eg `` `my string${0}` ``)


## Supported Platforms

* Chrome 99 and above
* Brave 1.0 and above
* Firefox 100 and above
* IE9 or higher



## Live Demo

For a live demo, see https://syntax7.awesomecrater.repl.co


