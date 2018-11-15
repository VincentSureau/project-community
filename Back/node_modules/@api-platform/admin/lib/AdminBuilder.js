'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Api = require('@api-platform/api-doc-parser/lib/Api');

var _Api2 = _interopRequireDefault(_Api);

var _reactAdmin = require('react-admin');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fieldFactory = require('./fieldFactory');

var _fieldFactory2 = _interopRequireDefault(_fieldFactory);

var _inputFactory = require('./inputFactory');

var _inputFactory2 = _interopRequireDefault(_inputFactory);

var _resourceFactory = require('./resourceFactory');

var _resourceFactory2 = _interopRequireDefault(_resourceFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminBuilder = function AdminBuilder(props) {
  var api = props.api,
      fieldFactory = props.fieldFactory,
      inputFactory = props.inputFactory,
      resourceFactory = props.resourceFactory,
      _props$title = props.title,
      title = _props$title === undefined ? api.title : _props$title,
      _props$resources = props.resources,
      resources = _props$resources === undefined ? api.resources.filter(function (_ref) {
    var deprecated = _ref.deprecated;
    return !deprecated;
  }) : _props$resources;


  return _react2.default.createElement(
    _reactAdmin.Admin,
    (0, _extends3.default)({}, props, { title: title }),
    resources.map(function (resource) {
      return resourceFactory(resource, api, fieldFactory, inputFactory);
    })
  );
};

AdminBuilder.defaultProps = {
  fieldFactory: _fieldFactory2.default,
  inputFactory: _inputFactory2.default,
  resourceFactory: _resourceFactory2.default
};

AdminBuilder.propTypes = {
  api: _propTypes2.default.instanceOf(_Api2.default).isRequired,
  fieldFactory: _propTypes2.default.func,
  inputFactory: _propTypes2.default.func,
  resourceFactory: _propTypes2.default.func,
  dataProvider: _propTypes2.default.func.isRequired,
  resource: _propTypes2.default.array
};

exports.default = AdminBuilder;