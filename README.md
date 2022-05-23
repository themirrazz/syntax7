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

For a live demo, see https://syntax7.awesomecrater.repl.co
