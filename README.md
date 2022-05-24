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

## What's New in v0.0.2

* **Numbers** - now supports syntax highlighting numbers
* **More keywords** - recognizes "class" and "enum" as keywords
* **Darker green** - uses a darker but more readable green in the Demo
* **Ticks are now strings** - uses the 'string7' element instead of 'tick7' for ECMAScript multi-line strings
* **Grey Comments** - the Demo now colors comments grey instead of red
* **Fullwidth editor** - the editor is no longer a seperate raw and colored editor, but is now combined!
* **MakeCode for uBit** - there is now an offical Micro:bit version (except micro:bit can't display HTML so...)


##  How to use custom highlighting
Instead of using font or span tags to apply styles, it uses a set of custom tags. This allows for custom styling, and more than just coloring.
For example, some coding editors make keywords bold.

`kw7` - A keyword.<br>
`string7` - A string.<br>
`integer7` - An integer, decimal, float, or number.<br>
`tick7` - Used for the backtick-type strings in ES6. Only used in v0.0.1
`insert7` - Used for content between the brackets in backtick-type strings in ES6 (eg `` `my string${0}` ``)


## Supported Platforms

### Desktop Browsers

**Chrome** *partialy tested* - 99 and above<br>
**Firefox** - Not tested<br>
**Internet Explorer** - Not tested<br>
**Netscape Navigator** - Not tested<br>
**Opera** - Not tested<br>
**Brave** - Not tested<br>
**Safari** - Not tested<br>
**Microsoft Edge** - Not tested<br>

### Mobile Browsers
**Chrome (Android)** - Not tested<br>
**Chrome (iOS)** - Not tested<br>
**Safari for iOS** - Not tested<br>
**Brave (Android)** - Not tested<br>
**Brave (iOS)** - Not tested<br>
**Opera Mini** - Not tested<br>
**Opera Mobile** - Not tested<br>
**Samsung Internet** - Not tested<br>
**Android WebView** - Not tested<br>

### Browsers for Smart TVs
**Firefox for Fire TV** - Not tested<br>
**Samsung Internet** - Not tested<br>
**Amazon Silk** - Not tested<br>

### Browsers for Gaming Consoles
**Microsoft Edge (Xbox)** - Not tested<br>
**Web Browser for Nintendo 3DS** - Not tested<br>
**Nintendo Switch Captive Portal Browser** - Not tested<br>



## Live Demo

For a live demo, see https://syntax7.awesomecrater.repl.co


