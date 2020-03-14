'use strict';

//initialize helper namespace
//need to revisit this. Could helper object have already been created elsewhere ??
const helper = {
  id: 0
};

helper.getNextId = function() {
  return ++id;
};

helper.getRandomNumber = function(min, max) {
  return Math.random() * (max - min) + min;
};

helper.prependStringIfMissing = function(str, pattern, padWithSpace) {
  if (typeof str == 'undefined' || str === null) {
    return pattern;
  }
  if (!str.includes(pattern)) {
    str = padWithSpace ? pattern.concat(' ').concat(str) : pattern.concat(str);
  }
  return str;
};

/**
 * Checks only for primitive types. No unpacking of objects or anything else like that going on here.
 */
helper.checkIfValueIsPresent = function(variable) {
  if (typeof variable === 'undefined' || variable === null) {
    return false;
  }
  if (typeof variable === 'string' && variable.trim().length === 0) {
    return false;
  }
  return true;
};

// export default helper;
