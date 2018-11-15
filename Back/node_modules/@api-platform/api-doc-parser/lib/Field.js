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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @property {string} name - The name of this field
 */
var Field =

/**
 * @param {string}        name
 * @param {?FieldOptions}  options
 */
function Field(name) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _classCallCheck3.default)(this, Field);

  this.name = name;

  (0, _keys2.default)(options).forEach(function (key) {
    (0, _defineProperty2.default)(_this, key, {
      readable: true,
      writable: true,
      enumerable: true,
      value: options[key]
    });
  });
};

exports.default = Field;