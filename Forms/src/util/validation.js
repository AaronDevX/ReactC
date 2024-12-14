export function emailIsValid(value) {
  return value.includes('@');
}

export function passwordIsValid(value) {
  return hasMinLength(value, 8)
}

export function hasMinLength(value, minLength) {
  return value.trim().length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}