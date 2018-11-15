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

var resolveProps = function resolveProps(props) {
  var options = props.options;
  var defaultInputFactory = options.inputFactory,
      resource = options.resource;
  var customFields = resource.createFields,
      _resource$createProps = resource.createProps,
      createProps = _resource$createProps === undefined ? {} : _resource$createProps,
      defaultFields = resource.writableFields;
  var _createProps$options = createProps.options;
  _createProps$options = _createProps$options === undefined ? {} : _createProps$options;
  var customInputFactory = _createProps$options.inputFactory;


  return (0, _extends3.default)({}, props, createProps, {
    options: (0, _extends3.default)({}, options, {
      fields: customFields || defaultFields.filter(function (_ref) {
        var deprecated = _ref.deprecated;
        return !deprecated;
      }),
      inputFactory: customInputFactory || defaultInputFactory
    })
  });
};

var Create = function Create(props) {
  var _resolveProps = resolveProps(props),
      _resolveProps$options = _resolveProps.options,
      api = _resolveProps$options.api,
      fields = _resolveProps$options.fields,
      inputFactory = _resolveProps$options.inputFactory,
      resource = _resolveProps$options.resource;

  return _react2.default.createElement(
    _reactAdmin.Create,
    props,
    _react2.default.createElement(
      _reactAdmin.SimpleForm,
      null,
      fields.map(function (field) {
        return inputFactory(field, {
          api: api,
          resource: resource
        });
      })
    )
  );
};

Create.propTypes = {
  options: _propTypes2.default.shape({
    api: _propTypes2.default.instanceOf(_Api2.default).isRequired,
    inputFactory: _propTypes2.default.func.isRequired,
    resource: _propTypes2.default.instanceOf(_Resource2.default).isRequired
  })
};

exports.default = Create;