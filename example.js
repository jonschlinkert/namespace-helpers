var namespace = require('./');
var obj = {
  foo: function(str) {
    return 'foo' + str;
  },
  bar: function(str) {
    return 'bar' + str;
  },
  baz: function(str) {
    return 'baz' + str;
  }
};

var helpers = namespace('utils', obj);
console.log(helpers);
