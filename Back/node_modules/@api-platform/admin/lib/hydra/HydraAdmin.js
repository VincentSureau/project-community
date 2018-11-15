'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _parseHydraDocumentation = require('@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation');

var _parseHydraDocumentation2 = _interopRequireDefault(_parseHydraDocumentation);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AdminBuilder = require('../AdminBuilder');

var _AdminBuilder2 = _interopRequireDefault(_AdminBuilder);

var _hydraClient = require('./hydraClient');

var _hydraClient2 = _interopRequireDefault(_hydraClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      api: null,
      customRoutes: [],
      hasError: false,
      loaded: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.apiDocumentationParser(this.props.entrypoint).then(function (_ref2) {
        var api = _ref2.api,
            _ref2$customRoutes = _ref2.customRoutes,
            customRoutes = _ref2$customRoutes === undefined ? [] : _ref2$customRoutes;
        return {
          api: api,
          customRoutes: customRoutes,
          hasError: false,
          loaded: true
        };
      }, function (data) {
        if (data instanceof Error) {
          console.error(data);

          return {
            hasError: true,
            loaded: true
          };
        }

        return {
          api: data.api,
          customRoutes: data.customRoutes,
          hasError: true,
          loaded: true
        };
      }).then(this.setState.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      if (false === this.state.loaded) {
        return 'function' === typeof this.props.loading ? _react2.default.createElement(this.props.loading, null) : _react2.default.createElement(
          'span',
          { className: 'loading' },
          this.props.loading
        );
      }

      if (true === this.state.hasError) {
        return 'function' === typeof this.props.error ? _react2.default.createElement(this.props.error, null) : _react2.default.createElement(
          'span',
          { className: 'error' },
          this.props.error
        );
      }

      return _react2.default.createElement(_AdminBuilder2.default, (0, _extends3.default)({}, this.props, {
        api: this.state.api,
        customRoutes: this.props.customRoutes.concat(this.state.customRoutes),
        dataProvider: this.props.dataProvider(this.state.api)
      }));
    }
  }]);
  return _class;
}(_react.Component);

_class.defaultProps = {
  apiDocumentationParser: _parseHydraDocumentation2.default,
  customRoutes: [],
  error: 'Unable to retrieve API documentation.',
  loading: 'Loading...',
  dataProvider: _hydraClient2.default
};
_class.propTypes = {
  apiDocumentationParser: _propTypes2.default.func,
  customRoutes: _propTypes2.default.array,
  entrypoint: _propTypes2.default.string.isRequired,
  error: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  loading: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  dataProvider: _propTypes2.default.func
};
exports.default = _class;