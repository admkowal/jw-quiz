import { isDefined } from '../../../utils/is-defined';

export function required(value) {
  return isDefined(value) ? void 0 : 'Required';
}

export function mustBeNumber(value) {
  return isNaN(value) ? 'Must be a number' : void 0;
}

export function composeValidators(...validators) {
  return function(value) {
    return validators.reduce((error, validator) => {
      if (isDefined(error)) {
        return error;
      }
      return validator(value)
    }, void 0);
  };
}