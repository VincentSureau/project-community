'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Api = require('@api-platform/api-doc-parser/lib/Api');

var _Api2 = _interopRequireDefault(_Api);

var _Resource = require('@api-platform/api-doc-parser/lib/Resource');

var _Resource2 = _interopRequireDefault(_Resource);

var _reactAdmin = require('react-admin');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasIdentifier = function hasIdentifier(fields) {
  return undefined !== fields.find(function (_ref) {
    var id = _ref.id;
    return 'http://schema.org/identifier' === id;
  });
};

var resolveProps = function resolveProps(props) {
  var options = props.options;
  var defaultInputFactory = options.inputFactory,
      resource = options.resource;
  var customFields = resource.editFields,
      _resource$editProps = resource.editProps,
      editProps = _resource$editProps === undefined ? {} : _resource$editProps,
      defaultFields = resource.writableFields;
  var _editProps$options = editProps.options;
  _editProps$options = _editProps$options === undefined ? {} : _editProps$options;
  var customInputFactory = _editProps$options.inputFactory;


  return (0, _extends3.default)({}, props, editProps, {
    options: (0, _extends3.default)({}, options, {
      fields: customFields || defaultFields.filter(function (_ref2) {
        var deprecated = _ref2.deprecated;
        return !deprecated;
      }),
      inputFactory: customInputFactory || defaultInputFactory
    })
  });
};

var Edit = function Edit(props) {
  var _resolveProps = resolveProps(props),
      _resolveProps$options = _resolveProps.options,
      api = _resolveProps$options.api,
      fields = _resolveProps$options.fields,
      inputFactory = _resolveProps$options.inputFactory,
      resource = _resolveProps$options.resource,
      _resolveProps$addIdIn = _resolveProps.addIdInput,
      addIdInput = _resolveProps$addIdIn === undefined ? false === hasIdentifier(fields) : _resolveProps$addIdIn;

  return _react2.default.createElement(
    _reactAdmin.Edit,
    props,
    _react2.default.createElement(
      _reactAdmin.SimpleForm,
      null,
      addIdInput && _react2.default.createElement(_reactAdmin.DisabledInput, { source: 'id' }),
      fields.map(function (field) {
        return inputFactory(field, {
          api: api,
          resource: resource
        });
      })
    )
  );
};

Edit.propTypes = {
  addIdInput: _propTypes2.default.bool,
  options: _propTypes2.default.shape({
    api: _propTypes2.default.instanceOf(_Api2.default).isRequired,
    inputFactory: _propTypes2.default.func.isRequired,
    resource: _propTypes2.default.instanceOf(_Resource2.default).isRequired
  })
};

exports.default = Edit;