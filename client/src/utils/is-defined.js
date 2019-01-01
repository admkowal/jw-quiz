export function isDefined(variable) {
  return typeof variable !== 'undefined' && variable !== null;
}

export function isUndefined(variable) {
  return !isDefined(variable);
}

export function isString(value) {
  return isDefined(value) && typeof value === 'string';
}

export function isStringDefined(value) {
  return isString(value) && value.length > 0;
}

export function isFunction(fn) {
  return typeof fn === 'function';
}