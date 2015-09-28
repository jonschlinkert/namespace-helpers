/*!
 * namespace-helpers <https://github.com/jonschlinkert/namespace-helpers>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function namespace(name, helpers, sep) {
  if (typeof name !== 'string') {
    throw new TypeError('expected name to be a string');
  }

  if (typeof helpers === 'string') {
    var temp = sep;
    sep = helpers;
    helpers = temp;
    temp = null; // garbage collect
  }

  if (!helpers && typeof helpers !== 'object') {
    throw new TypeError('expected helpers to be an object');
  }

  var namespaced = {};
  for (var key in helpers) {
    if (helpers.hasOwnProperty(key)) {
      var helper = helpers[key];
      if (typeof helper === 'function') {
        namespaced[name + (sep || '.') + key] = helper;
      }
    }
  }
  return namespaced;
};
