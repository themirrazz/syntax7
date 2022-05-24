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

* **some NEW keywords** in javascript, we've added the `new` keyword!
* **Micro:bit Update** we've updated all keywords to the micro:bit, and added Python!
* **More support** This now works all the way down to IE7! Styling may not work, due to IE's CSS.


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
* IE7 or higher
* Micro:bit via MakeCode Editor



## Live Demo

For a live demo, see https://syntax7.awesomecrater.repl.co


