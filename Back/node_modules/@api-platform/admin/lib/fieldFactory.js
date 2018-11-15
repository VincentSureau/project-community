'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reactAdmin = require('react-admin');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getReferenceNameField = require('./getReferenceNameField');

var _getReferenceNameField2 = _interopRequireDefault(_getReferenceNameField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (field, options) {
  var props = (0, _extends3.default)({}, field.fieldProps);
  if (field.field) {
    return _react2.default.createElement(field.field, (0, _extends3.default)({
      key: field.name,
      options: options,
      source: field.name
    }, props));
  }

  if (null !== field.reference) {
    if (1 === field.maxCardinality) {
      return _react2.default.createElement(
        _reactAdmin.ReferenceField,
        (0, _extends3.default)({
          source: field.name,
          reference: field.reference.name,
          key: field.name
        }, props, {
          allowEmpty: true }),
        _react2.default.createElement(_reactAdmin.ChipField, { source: (0, _getReferenceNameField2.default)(field.reference) })
      );
    }

    var referenceNameField = (0, _getReferenceNameField2.default)(field.reference);
    return _react2.default.createElement(
      _reactAdmin.ReferenceArrayField,
      (0, _extends3.default)({
        source: field.name,
        reference: field.reference.name,
        key: field.name
      }, props),
      _react2.default.createElement(
        _reactAdmin.SingleFieldList,
        null,
        _react2.default.createElement(_reactAdmin.ChipField, { source: referenceNameField, key: referenceNameField })
      )
    );
  }

  switch (field.id) {
    case 'http://schema.org/email':
      return _react2.default.createElement(_reactAdmin.EmailField, (0, _extends3.default)({ key: field.name, source: field.name }, props));

    case 'http://schema.org/url':
      return _react2.default.createElement(_reactAdmin.UrlField, (0, _extends3.default)({ key: field.name, source: field.name }, props));

    default:
    // Do nothing
  }

  switch (field.range) {
    case 'http://www.w3.org/2001/XMLSchema#integer':
    case 'http://www.w3.org/2001/XMLSchema#float':
      return _react2.default.createElement(_reactAdmin.NumberField, (0, _extends3.default)({ key: field.name, source: field.name }, props));

    case 'http://www.w3.org/2001/XMLSchema#date':
    case 'http://www.w3.org/2001/XMLSchema#dateTime':
      return _react2.default.createElement(_reactAdmin.DateField, (0, _extends3.default)({ key: field.name, source: field.name }, props));

    case 'http://www.w3.org/2001/XMLSchema#boolean':
      return _react2.default.createElement(_reactAdmin.BooleanField, (0, _extends3.default)({ key: field.name, source: field.name }, props));

    default:
      return _react2.default.createElement(_reactAdmin.TextField, (0, _extends3.default)({ key: field.name, source: field.name }, props));
  }
};