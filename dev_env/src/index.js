const SchemaParser = require('./../../src/index');

const schema = [
  {
    tag: 'div',
    attribute: {
      style: 'background:#f0f0f0;'
    },
    content: [
      'this is ',
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
        content: [{
          tag: 'li',
          content: ['item 001']
        },{
          tag: 'li',
          content: ['item 002']
        }, {
          tag: 'li',
          content: ['item 003']
        }]
      }
    ],
  }
]

let scheamParser = new SchemaParser(schema);
let htmlStr = scheamParser.getHtml();

const $body = document.querySelector('body');
$body.innerHTML = htmlStr;

console.log(htmlStr)
