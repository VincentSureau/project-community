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
  var props = (0, _extends3.default)({}, field.inputProps);

  if (field.input) {
    return _react2.default.createElement(field.input, (0, _extends3.default)({
      key: field.name,
      options: options,
      source: field.name
    }, props));
  }

  if (!props.validate && field.required) props.validate = [(0, _reactAdmin.required)()];

  if (null !== field.reference) {
    if (1 === field.maxCardinality) {
      return _react2.default.createElement(
        _reactAdmin.ReferenceInput,
        (0, _extends3.default)({
          key: field.name,
          label: field.name,
          reference: field.reference.name,
          source: field.name
        }, props, {
          allowEmpty: true }),
        _react2.default.createElement(_reactAdmin.SelectInput, { optionText: (0, _getReferenceNameField2.default)(field.reference) })
      );
    }

    return _react2.default.createElement(
      _reactAdmin.ReferenceArrayInput,
      (0, _extends3.default)({
        key: field.name,
        label: field.name,
        reference: field.reference.name,
        source: field.name
      }, props, {
        allowEmpty: true }),
      _react2.default.createElement(_reactAdmin.SelectArrayInput, { optionText: (0, _getReferenceNameField2.default)(field.reference) })
    );
  }

  if ('http://schema.org/identifier' === field.id) {
    var name = options.resource.name,
        _options$prefix = options.prefix,
        prefix = _options$prefix === undefined ? '/' + name + '/' : _options$prefix;


    props.format = function (value) {
      return 0 === value.indexOf(prefix) ? value.substr(prefix.length) : value;
    };

    props.parse = function (value) {
      return -1 !== value.indexOf(prefix) ? prefix + value : value;
    };
  }

  switch (field.range) {
    case 'http://www.w3.org/2001/XMLSchema#integer':
      return _react2.default.createElement(_reactAdmin.NumberInput, (0, _extends3.default)({ key: field.name, source: field.name }, props));

    case 'http://www.w3.org/2001/XMLSchema#decimal':
      return _react2.default.createElement(_reactAdmin.NumberInput, (0, _extends3.default)({
        key: field.name,
        source: field.name,
        step: '0.1'
      }, props));

    case 'http://www.w3.org/2001/XMLSchema#boolean':
      return _react2.default.createElement(_reactAdmin.BooleanInput, (0, _extends3.default)({ key: field.name, source: field.name }, props));

    case 'http://www.w3.org/2001/XMLSchema#date':
    case 'http://www.w3.org/2001/XMLSchema#dateTime':
      return _react2.default.createElement(_reactAdmin.DateInput, (0, _extends3.default)({ key: field.name, source: field.name }, props));

    default:
      return _react2.default.createElement(_reactAdmin.TextInput, (0, _extends3.default)({ key: field.name, source: field.name }, props));
  }
};