const tags = require('./tags')
const { isJSON, isArray, isString } = require('./is-type')
const util = require('./util')

function parseContent (content) {
  let html = ''
  if (isArray(content) !== true) {
    return html
  }
  for (let i = 0; i < content.length; i++) {
    const item = content[i]
    if (isJSON(item) === true) {
      html += parseTag(item)
    } else if (isString(item)) {
      html += item
    }
  }
  return html
}

function parseAttribute (attribute) {
  let attrStr = ''
  if (isJSON(attribute) !== true) {
    return attrStr
  }
  let keyList = Object.keys(attribute)
  let attrList = []
  for (let i = 0; i < keyList.length; i++) {
    let keyName = keyList[i]
    let val = attribute[keyName]
    if (isString(val) === true) {
      attrList.push(`${keyName}="${util.escape(val)}"`)
    }
  }
  attrStr = attrList.join('  ')
  return attrStr
}

function parseTag (schema) {
  let html = ''
  if (isJSON(schema) !== true) {
    return html
  }
  let tag = schema.tag || 'div'
  const content = schema.content
  if (tags.legalTags.indexOf(tag) < 0) {
    tag = 'div'
  }
  const attrStr = parseAttribute(schema.attribute)
  if (tags.notClosingTags[tag] === true) {
    html = `<${tag} ${attrStr} />`
  } else {
    html = `<${tag} ${attrStr} >${parseContent(content)}</${tag}>`
  }
  return html
}

const parser = {

  parseSchema (schema) {
    let html = ''
    if (isJSON(schema)) {
      html = parseTag(schema)
    } else if (isArray(schema)) {
      html = parseContent(schema)
    }
    return html
  }

}

module.exports = parser
