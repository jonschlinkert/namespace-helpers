/*!
 * namespace-helpers <https://github.com/jonschlinkert/namespace-helpers>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var namespace = require('./');

describe('namespace', function () {
  it('should namespace the keys of the given object:', function () {
    var helpers = namespace('utils', {
      foo: function(){},
      bar: function(){},
      baz: function(){}
    });

    helpers.should.eql({
      'utils.foo': function(){},
      'utils.bar': function(){},
      'utils.baz': function(){}
    });
  });

  it('should support a custom separator as the second arg:', function () {
    var helpers = namespace('utils', '/', {
      foo: function(){},
      bar: function(){},
      baz: function(){}
    });

    helpers.should.eql({
      'utils/foo': function(){},
      'utils/bar': function(){},
      'utils/baz': function(){}
    });
  });

  it('should support a custom separator as the third arg:', function () {
    var helpers = namespace('utils', {
      foo: function(){},
      bar: function(){},
      baz: function(){}
    }, '/');

    helpers.should.eql({
      'utils/foo': function(){},
      'utils/bar': function(){},
      'utils/baz': function(){}
    });
  });

  it('should ignore non-function values:', function () {
    var helpers = namespace('utils', {
      foo: function(){},
      bar: function(){},
      baz: function(){},
      qux: 'abc',
      fez: ['a', 'b', 'c'],
    }, '/');

    helpers.should.eql({
      'utils/foo': function(){},
      'utils/bar': function(){},
      'utils/baz': function(){}
    });
  });

  it('should throw an error when `name` is not defined:', function () {
    (function () {
      namespace();
    }).should.throw('expected name to be a string');
  });

  it('should throw an error when `helpers` is not an object:', function () {
    (function () {
      namespace('foo');
    }).should.throw('expected helpers to be an object');
  });
});
