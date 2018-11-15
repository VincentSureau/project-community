"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocumentationUrlFromHeaders = exports.parseHydraDocumentation = exports.fetchJsonLd = undefined;

var _parseHydraDocumentation2 = require("./parseHydraDocumentation");

Object.defineProperty(exports, "getDocumentationUrlFromHeaders", {
  enumerable: true,
  get: function get() {
    return _parseHydraDocumentation2.getDocumentationUrlFromHeaders;
  }
});

var _fetchJsonLd2 = require("./fetchJsonLd");

var _fetchJsonLd3 = _interopRequireDefault(_fetchJsonLd2);

var _parseHydraDocumentation3 = _interopRequireDefault(_parseHydraDocumentation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.fetchJsonLd = _fetchJsonLd3.default;
exports.parseHydraDocumentation = _parseHydraDocumentation3.default;