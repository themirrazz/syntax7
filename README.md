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

**Chrome** *partialy tested* - 99 and above
**Firefox** - Not tested
**Internet Explorer** - Not tested
**Netscape Navigator** - Not tested
**Opera** - Not tested
**Brave** - Not tested
**Safari** - Not tested
**Microsoft Edge** - Not tested

### Mobile Browsers
**Chrome (Android)** - Not tested
**Chrome (iOS)** - Not tested
**Safari for iOS** - Not tested
**Brave (Android)** - Not tested
**Brave (iOS)** - Not tested
**Opera Mini** - Not tested
**Opera Mobile** - Not tested
**Samsung Internet** - Not tested
**Android WebView** - Not tested

### Browsers for Smart TVs
**Firefox for Fire TV** - Not tested
**Samsung Internet** - Not tested
**Amazon Silk** - Not tested

### Browsers for Gaming Consoles
**Microsoft Edge (Xbox)** - Not tested
**Web Browser for Nintendo 3DS** - Not tested
**Nintendo Switch Captive Portal Browser** - Not tested



## Live Demo

For a live demo, see https://syntax7.awesomecrater.repl.co


