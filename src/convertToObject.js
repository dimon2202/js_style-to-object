'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keyValuePairs = sourceString
    .split(';')
    .map((style) => style.split(':').map((i) => i.trim()))
    .filter((x) => x.length === 2);

  return Object.fromEntries(keyValuePairs);
}

module.exports = convertToObject;
