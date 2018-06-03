const parser = require('./lib/parser')

const SCHEMA = Symbol('_schema_')

class HtmlSchemaParser {
  constructor (schema, opt) {
    this[SCHEMA] = schema
  }

  getHtml () {
    return parser.parseSchema(this[SCHEMA])
  }
}

if (window && !window.HtmlSchemaParser) {
  window.HtmlSchemaParser = HtmlSchemaParser
}
if (window && typeof window.define === 'function' && window.define.amd) {
  window.define('HtmlSchemaParser', function () {
    return HtmlSchemaParser
  })
} else if (module && module.exports) {
  module.exports = HtmlSchemaParser
}

module.exports = HtmlSchemaParser
