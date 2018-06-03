import tags from './tags';
import { isJSON, isArray, isString } from './is-type';

function parseContent( content ) {
  let html = '';
  if( isArray(content) !== true ) {
    return html;
  }
  for( let i=0; i<content.length; i++ ) {
    const item = content[i];
    if ( isJSON(item) === true ) {
      html += parseTag(item);
    } else if ( isString(item) ) {
      html += item;
    }
  }
  return html;
}

function parseTag( schema ) {
  let html = '';
  if( isJSON(schema) !== true ) {
    return html;
  }
  let tag = schema.tag || 'div';
  const content = schema.content;
  if( tags.legalTags.indexOf(tag) < 0 ) {
    tag = 'div';
  }
  if( tags.notClosingTags[tag] === true ) {
    html = `<${tag}  />`
  } else {
    html = `<${tag}>${parseContent(content)}</${tag}>`;
  }
  return html;
}

const parser = {

  parseSchema( schema ) {
    let html = '';
    if ( isJSON(schema) ) {
      html = parseTag(schema);
    } else if ( isArray(schema) ) {
      html = parseContent(schema);
    }
    return html;
  },


};

export default parser;

