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
  var defaultFieldFactory = options.fieldFactory,
      resource = options.resource;
  var customFields = resource.showFields,
      defaultFields = resource.readableFields,
      _resource$showProps = resource.showProps,
      showProps = _resource$showProps === undefined ? {} : _resource$showProps;
  var _showProps$options = showProps.options;
  _showProps$options = _showProps$options === undefined ? {} : _showProps$options;
  var customFieldFactory = _showProps$options.fieldFactory;


  return (0, _extends3.default)({}, props, showProps, {
    options: (0, _extends3.default)({}, options, {
      fields: customFields || defaultFields.filter(function (_ref2) {
        var deprecated = _ref2.deprecated;
        return !deprecated;
      }),
      fieldFactory: customFieldFactory || defaultFieldFactory
    })
  });
};

var Show = function Show(props) {
  var _resolveProps = resolveProps(props),
      _resolveProps$options = _resolveProps.options,
      api = _resolveProps$options.api,
      fieldFactory = _resolveProps$options.fieldFactory,
      fields = _resolveProps$options.fields,
      resource = _resolveProps$options.resource,
      _resolveProps$addIdFi = _resolveProps.addIdField,
      addIdField = _resolveProps$addIdFi === undefined ? false === hasIdentifier(fields) : _resolveProps$addIdFi;

  return _react2.default.createElement(
    _reactAdmin.Show,
    props,
    _react2.default.createElement(
      _reactAdmin.SimpleShowLayout,
      null,
      addIdField && _react2.default.createElement(_reactAdmin.TextField, { source: 'id' }),
      fields.map(function (field) {
        return fieldFactory(field, {
          api: api,
          resource: resource
        });
      })
    )
  );
};

Show.propTypes = {
  addIdField: _propTypes2.default.bool,
  options: _propTypes2.default.shape({
    api: _propTypes2.default.instanceOf(_Api2.default).isRequired,
    fieldFactory: _propTypes2.default.func.isRequired,
    resource: _propTypes2.default.instanceOf(_Resource2.default).isRequired,
    showProps: _propTypes2.default.object
  })
};

exports.default = Show;