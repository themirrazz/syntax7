# Syntax7
A simple, JavaScript library for HTML-based syntax highlighing.

## How to use

Currently, the only language you can use is ECMAScript (eg TypeScript or JavaScript).

It is very easy to generate syntax highlighting:
```js
Syntax7.ecma("var thing=0; // your code here")
```

It returns generated HTML, eg:
```html
<kw7>var</kw7>&nbsp;thing=0;&nbsp; <comment7>//&nbsp;your&nbsp;code&nbsp;here</comment7>
```

## Features:

### Auto HTML Escape
Escapes HTML (including spaces and line breaks) so you don't have too! You also don't have to feed it into a pre; you could use a paragraph, div, or even tr!

### Custom Highlighting
Instead of using font or span tags to apply styles, it uses a set of custom tags. This allows for custom styling, and more than just coloring.
For example, some coding editors make keywords bold.

`kw7` - A keyword.<br>
`string7` - A string.<br>
`integer7` - An integer, decimal, float, or number.<br>
`tick7` - Used for the backtick-type strings in ES6. Will use `string7` in the future.<br>
`insert7` - Used for content between the brackets in backtick-type strings in ES6 (eg `` `my string${0}` ``)
`comment7` - The color comments are displayed in.

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


