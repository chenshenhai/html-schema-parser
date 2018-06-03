# html-schema-parser

## Document

> A HTML parser based on schema
> Reference source code [https://github.com/caolan/pithy](https://github.com/caolan/pithy)

### Usage

#### Node Usage

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

#### Browser Usage
```html
<script src="html-schema-parser.js"></script>
<script>
  // Code ...
  var HtmlSchemaParser = window.HtmlSchemaParser;
  var scheamParser = new HtmlSchemaParser(schema);
  var html = scheamParser.getHtml();

</script>
```

### Instructions



|schema prop|schema type|example|
|---|---|---|
|tag|String| `{"tag":"div"}` |
|attribute|Object|`{"attribute":{ "style":"background:#f0f0f0" }}`|
|content|Array|`{ "content": ['hello', 'world', {"tag":"span", conent:['001']}, {"tag":"span", conent:['002']}] }`|

## 中文说明


>
基于schema格式的HTML解析器
> 参考源码自 [https://github.com/caolan/pithy](https://github.com/caolan/pithy)

### 使用说明

#### Node 使用方式

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

#### 浏览器使用方式
```html
<script src="html-schema-parser.js"></script>
<script>
  // Code ...
  var HtmlSchemaParser = window.HtmlSchemaParser;
  var scheamParser = new HtmlSchemaParser(schema);
  var html = scheamParser.getHtml();

</script>
```

### 说明



|schema属性|schema类型|例子|
|---|---|---|
|tag|String| `{"tag":"div"}` |
|attribute|Object|`{"attribute":{ "style":"background:#f0f0f0" }}`|
|content|Array|`{ "content": ['hello', 'world', {"tag":"span", conent:['001']}, {"tag":"span", conent:['002']}] }`|




