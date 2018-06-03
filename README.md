# http-schema-parser

> A HTML parser based on schema

## Usage

```sh
npm install --save http-schema-parser
```

```js
const HtmlSchemaParser = require('http-schema-parser')
const schema = [
  {
    tag: 'div',
    attribute: {
      style: 'background:#f0f0f0;'
    },
    content: [
      {
        tag: 'span',
        content: ['hello']
      },
      {
        tag: 'span',
        content: ['world']
      },
      {
        tag: 'ul',
        content: [
          {
            tag: 'li',
            content: ['item 001']
          },
          {
            tag: 'li',
            content: ['item 002']
          }
        ]
      }
    ],
  }
]

let scheamParser = new HtmlSchemaParser(schema);
let htmlStr = scheamParser.getHtml();

const $body = document.querySelector('body');
$body.innerHTML = htmlStr;
```
