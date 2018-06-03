console.log('dev env')

const schema = [
  {
    tag: 'div',
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

let scheamParser = new HtmlSchemaParser(schema);
let htmlStr = scheamParser.getHtml();

const $body = document.querySelector('body');
$body.innerHTML = htmlStr;

console.log(htmlStr)
