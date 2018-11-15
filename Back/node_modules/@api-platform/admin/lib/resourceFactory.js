'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reactAdmin = require('react-admin');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Create = require('./Create');

var _Create2 = _interopRequireDefault(_Create);

var _Edit = require('./Edit');

var _Edit2 = _interopRequireDefault(_Edit);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _Show = require('./Show');

var _Show2 = _interopRequireDefault(_Show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (resource, api, fieldFactory, inputFactory) {
  var _resource$create = resource.create,
      create = _resource$create === undefined ? _Create2.default : _resource$create,
      _resource$edit = resource.edit,
      edit = _resource$edit === undefined ? _Edit2.default : _resource$edit,
      _resource$list = resource.list,
      list = _resource$list === undefined ? _List2.default : _resource$list,
      name = resource.name,
      props = resource.props,
      _resource$show = resource.show,
      show = _resource$show === undefined ? _Show2.default : _resource$show;

  return _react2.default.createElement(_reactAdmin.Resource, (0, _extends3.default)({}, props, {
    create: create,
    edit: edit,
    key: name,
    list: list,
    name: name,
    options: {
      api: api,
      fieldFactory: fieldFactory,
      inputFactory: inputFactory,
      resource: resource
    },
    show: show
  }));
};