import { isDefined } from './is-defined';

export default function Optional(value) {
  const me = {
    or: orValue => isDefined(value) ? value : orValue,
    isPresent: () => isDefined(value),
    get: () => value,
    map: (fn = () => me) => me.isPresent() ? Optional(fn(value)) : me
  };
  return me;
}