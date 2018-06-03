function getPrototype( data ) {
  let dataType = Object.prototype.toString.call(data);
  dataType = dataType.replace(/\[/ig, '').replace(/\]/ig, '')
  let typeStrList = dataType.split(/\s/);
  let result;
  if( typeStrList && typeStrList[1] ) {
    result = typeStrList[1];
  }
  return result;
}

function isArray( data ) {
  return getPrototype( data ) === 'Array';
};

function isJSON( data ) {
  return getPrototype( data ) === 'Object';
};

function isFunction( data ) {
  return typeof data === 'function';
};

function isString( data ) {
  return getPrototype( data ) === 'String';
};

function isNumber( data ) {
  return getPrototype( data ) === 'Number';
};

function isUndefined( data ) {
  return getPrototype( data ) === 'Undefined';
};

function isNull( data ) {
  return getPrototype( data ) === 'Null';
}

export {
  isString,
  isNumber,
  isNull,
  isUndefined,
  isArray,
  isJSON,
  isFunction,
};
