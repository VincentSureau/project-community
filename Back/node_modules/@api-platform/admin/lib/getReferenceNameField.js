'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (reference) {
  var field = reference.fields.find(function (field) {
    return 'http://schema.org/name' === field.id;
  });

  return field ? field.name : 'id';
};