"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _Resource = require("./Resource");

var _Resource2 = _interopRequireDefault(_Resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @property {string} entrypoint  - The URL of the API's entrypoint
 */
var Api =

/**
 * @param {string}      entrypoint
 * @param {?ApiOptions} options
 */
function Api(entrypoint) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _classCallCheck3.default)(this, Api);

  this.entrypoint = entrypoint;

  (0, _keys2.default)(options).forEach(function (key) {
    (0, _defineProperty2.default)(_this, key, {
      readable: true,
      writable: true,
      enumerable: true,
      value: options[key]
    });
  });
};

exports.default = Api;